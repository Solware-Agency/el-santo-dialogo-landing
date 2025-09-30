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
                    <div className="w-full h-[300px] bg-muted/30 rounded-xl flex items-center justify-center">
                      {/* <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">🗺️</span>
                        </div>
                        <p className="text-muted-foreground mb-4">Ver ubicación en Google Maps</p>
                        <a
                          href="https://www.google.com/maps/place/Iglesia+Nuestra+Se%C3%B1ora+de+la+Candelaria/@10.505339,-66.905402,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a5ed2dadcab0f:0xc8e5e88c9bfa3c25!8m2!3d10.505339!4d-66.905402!16s%2Fg%2F11c5p8y8qy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-smooth"
                        >
                          <span>Abrir en Google Maps</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div> */}
                      <iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.5841627937125!2d-66.90505348595033!3d10.505472608531244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5ed2dadcab0f%3A0xc8e5e88c9bfa3c25!2sIglesia%20Nuestra%20Se%C3%B1ora%20de%20la%20Candelaria!5e1!3m2!1ses-419!2sve!4v1759257927867!5m2!1ses-419!2sve"
												width="600"
												height="450"
												style={{ border: 0 }}
												allowFullScreen
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"
											></iframe>
                    </div>
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