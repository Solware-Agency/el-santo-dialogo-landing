import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBadge } from "@/components/ui/icon-badge";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";
import type { IconName } from "@/lib/icons";

export const LegacyBio = () => {
  return (
    <Section id="legado" background="muted">
        <FadeIn>
          <SectionHeader 
            title="La Forja de un Santo Venezolano"
            subtitle="Ciencia, Fe y Humanidad en perfecta armonía"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.bioSections.map((section, index) => {
            return (
              <FadeIn key={section.title} delay={index * ANIMATION_DELAYS.STEP_1}>
                <Card className={`h-full ${BREAKPOINT_CLASSES.CARD_ROUNDED} hover:shadow-elegant transition-smooth`}>
                  <CardHeader className="text-center pb-4">
                    <IconBadge icon={section.icon as IconName} className="mx-auto mb-4" />
                    <CardTitle className="text-lg font-display text-primary">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm text-muted-foreground px-1 ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                      {section.body}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
    </Section>
  );
};