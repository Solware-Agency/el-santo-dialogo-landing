import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBadge } from "@/components/ui/icon-badge";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

export const VenueDates = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Información de la Exposición"
            subtitle="Ubicación y fechas de la muestra"
            className="mb-12"
          />
        </FadeIn>

        <div className="space-y-8">
          {/* Fechas - Primera línea horizontal */}
          <FadeIn delay={ANIMATION_DELAYS.STEP_1}>
            <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-6">
                  <IconBadge icon="Calendar" variant="accent" />
                  <div>
                    <h3 className="text-xl font-display text-primary mb-2 text-center">Fechas</h3>
                    <p className="text-muted-foreground text-center">
                      Apertura: {content.venueDates.opening} • Duración: {content.venueDates.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Ubicación - Segunda línea horizontal */}
          <FadeIn delay={ANIMATION_DELAYS.STEP_2}>
            <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Info de ubicación */}
                  <div className="flex items-center justify-center lg:justify-start gap-6">
                    <IconBadge icon="MapPin" />
                    <div>
                      <h3 className="text-xl font-display text-primary mb-2 text-center lg:text-left">Ubicación</h3>
                      <p className="text-muted-foreground text-center lg:text-left">{content.venueDates.location}</p>
                    </div>
                  </div>
                  
                  {/* Google Maps iframe */}
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7351689489891!2d-66.90540247388653!3d10.505338900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5ed2dadcab0f%3A0xc8e5e88c9bfa3c25!2sIglesia%20Nuestra%20Se%C3%B1ora%20de%20la%20Candelaria!5e0!3m2!1ses-419!2sve!4v1759250833957!5m2!1ses-419!2sve"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de la Iglesia Nuestra Señora de la Candelaria">
                    </iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};