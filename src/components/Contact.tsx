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
            <p className="text-lg text-muted-foreground">
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