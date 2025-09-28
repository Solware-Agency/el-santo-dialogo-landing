import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES } from "@/constants";

export const CuratorialText = () => {
  return (
    <Section background="muted">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <Card className={`rounded-2xl shadow-elegant ${BREAKPOINT_CLASSES.CARD_ROUNDED}`}>
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display text-primary mb-8 leading-tight">
                {content.curatorial.heading}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                {content.curatorial.body}
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
};