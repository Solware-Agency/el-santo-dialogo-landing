import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

export const Impact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Impacto de la Exposición
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {content.impact.summary}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {content.impact.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.2}>
              <Card className="rounded-xl shadow-sm border-border/50 bg-card">
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
      </div>
    </section>
  );
};