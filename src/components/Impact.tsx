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
    </Section>
  );
};