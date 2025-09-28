"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre debe tener menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "El email debe tener menos de 255 caracteres"),
  organization: z.string().trim().max(100, "La organización debe tener menos de 100 caracteres").optional(),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000, "El mensaje debe tener menos de 1000 caracteres"),
  topic: z.string().trim().max(50, "El tema debe tener menos de 50 caracteres").optional(),
  website: z.string().optional(), // Honeypot field
});

const socialIcons = {
  Instagram,
  Facebook,
  Youtube,
} as const;

export const Contact = () => {
  const [formData, setFormData] = useState({
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
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
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
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Contacto y Visitas
            </h2>
            <p className="text-lg text-muted-foreground prose-justify max-w-2xl mx-auto">
              Póngase en contacto con nosotros para más información
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <Card className="rounded-xl shadow-sm border-border/50 bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display text-primary mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href={content.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth group"
                      aria-label="Contactar por WhatsApp"
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-primary">WhatsApp</p>
                        <p className="text-muted-foreground">Enviar mensaje</p>
                      </div>
                    </a>

                    <a 
                      href={content.contact.phone}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth group"
                      aria-label="Llamar por teléfono"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Teléfono</p>
                        <p className="text-muted-foreground">Llamar ahora</p>
                      </div>
                    </a>

                    <a 
                      href={content.contact.email}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth group"
                      aria-label="Enviar email"
                    >
                      <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                        <Mail className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <p className="text-muted-foreground">Enviar mensaje</p>
                      </div>
                    </a>
                  </div>

                  {/* Social Links */}
                  {content.contact.socials.some(social => social.url !== "#") && (
                    <div className="mt-8">
                      <h4 className="font-display text-primary mb-4">Síguenos</h4>
                      <div className="flex gap-3">
                        {content.contact.socials.map((social) => {
                          if (social.url === "#") return null;
                          
                          const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
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
          <FadeIn delay={0.4}>
            <Card className="rounded-xl shadow-sm border-border/50 bg-card">
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
                        maxLength={100}
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
                        maxLength={255}
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
                        maxLength={100}
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
                        maxLength={50}
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
                      maxLength={1000}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-3 font-medium transition-smooth"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};