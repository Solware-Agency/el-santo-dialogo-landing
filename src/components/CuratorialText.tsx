import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

export const CuratorialText = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <Card className="rounded-2xl shadow-elegant border-border/50 bg-card">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display text-primary mb-8 leading-tight">
                {content.curatorial.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {content.curatorial.body}
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};