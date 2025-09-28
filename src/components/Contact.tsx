"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactLink } from "@/components/ui/contact-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getIcon, type IconName } from "@/lib/icons";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { useToast } from "@/hooks/use-toast";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS, CONTACT_CONFIG } from "@/constants";

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
    topic: "",
    website: "", // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Honeypot check
      if (formData.website) {
        toast({
          title: "Error",
          description: "Formulario inválido",
          variant: "destructive",
        });
        return;
      }

      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto con usted pronto.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
        topic: "",
        website: "",
      });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'issues' in error) {
        const zodError = error as { issues: Array<{ message?: string }> };
        const firstError = zodError.issues[0];
        toast({
          title: "Error en el formulario",
          description: firstError?.message || "Datos inválidos",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo enviar el mensaje. Intente nuevamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <Section id="contacto" background="muted">
        <FadeIn>
          <SectionHeader 
            title="Contacto y Visitas"
            subtitle="Póngase en contacto con nosotros para más información"
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <FadeIn delay={ANIMATION_DELAYS.STEP_1}>
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-display text-primary mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4">
                    <ContactLink
                      href={content.contact.whatsapp}
                      icon="Phone" // Using WhatsApp icon via custom SVG in ContactLink
                      title="WhatsApp"
                      description="Enviar mensaje"
                      variant="success"
                    />

                    <ContactLink
                      href={content.contact.phone}
                      icon="Phone"
                      title="Teléfono"
                      description="Llamar ahora"
                      variant="primary"
                    />

                    <ContactLink
                      href={content.contact.email}
                      icon="Mail"
                      title="Email"
                      description="Enviar mensaje"
                      variant="accent"
                    />
                  </div>

                  {/* Social Links */}
                  {content.contact.socials.some(social => social.url !== "#") && (
                    <div className="mt-8">
                      <h4 className="font-display text-primary mb-4">Síguenos</h4>
                      <div className="flex gap-3">
                        {content.contact.socials.map((social) => {
                          if (social.url === "#") return null;
                          
                          const IconComponent = getIcon(social.icon as IconName);
                          return (
                            <a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Seguir en ${social.name}`}
                              className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center hover:shadow-glow transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <IconComponent className="w-6 h-6 text-primary-foreground" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={ANIMATION_DELAYS.STEP_2}>
            <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
              <CardHeader>
                <CardTitle className="text-xl font-display text-primary">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange("website")}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">
                        Nombre *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange("name")}
                        required
                        className="rounded-xl border-border/50 focus:border-ring mt-2"
                        maxLength={CONTACT_CONFIG.FORM_MAX_LENGTHS.NAME}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                        required
                        className="rounded-xl border-border/50 focus:border-ring mt-2"
                        maxLength={CONTACT_CONFIG.FORM_MAX_LENGTHS.EMAIL}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization" className="text-primary font-medium">
                        Organización
                      </Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange("organization")}
                        className="rounded-xl border-border/50 focus:border-ring mt-2"
                        maxLength={CONTACT_CONFIG.FORM_MAX_LENGTHS.ORGANIZATION}
                      />
                    </div>
                    <div>
                      <Label htmlFor="topic" className="text-primary font-medium">
                        Tema
                      </Label>
                      <Input
                        id="topic"
                        value={formData.topic}
                        onChange={handleChange("topic")}
                        className="rounded-xl border-border/50 focus:border-ring mt-2"
                        maxLength={CONTACT_CONFIG.FORM_MAX_LENGTHS.TOPIC}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange("message")}
                      required
                      rows={5}
                      className="rounded-xl border-border/50 focus:border-ring mt-2 resize-none"
                      maxLength={CONTACT_CONFIG.FORM_MAX_LENGTHS.MESSAGE}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full ${BREAKPOINT_CLASSES.BUTTON_PRIMARY} py-3`}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
    </Section>
  );
};