import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

export const Impact = () => {
  return (
    <Section background="muted">
        <FadeIn>
          <SectionHeader 
            title="Impacto de la Exposición"
            subtitle={content.impact.summary}
            className="mb-12"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {content.impact.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * ANIMATION_DELAYS.STEP_1}>
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-display text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
    </Section>
  );
};