import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBadge } from "@/components/ui/icon-badge";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

export const VenueDates = () => {
  return (
    <Section className="max-w-4xl">
        <FadeIn>
          <SectionHeader 
            title="Información de la Exposición"
            subtitle="Ubicación y fechas de la muestra"
            className="mb-12"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={ANIMATION_DELAYS.STEP_1}>
            <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
              <CardContent className="p-8 text-center">
                <IconBadge icon="MapPin" className="mx-auto mb-4" />
                <h3 className="text-xl font-display text-primary mb-2">Ubicación</h3>
                <p className="text-muted-foreground">{content.venueDates.location}</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={ANIMATION_DELAYS.STEP_2}>
            <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
              <CardContent className="p-8 text-center">
                <IconBadge icon="Calendar" variant="accent" className="mx-auto mb-4" />
                <h3 className="text-xl font-display text-primary mb-2">Fechas</h3>
                <p className="text-muted-foreground">
                  Apertura: {content.venueDates.opening}
                  <br />
                  Duración: {content.venueDates.duration}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
    </Section>
  );
};