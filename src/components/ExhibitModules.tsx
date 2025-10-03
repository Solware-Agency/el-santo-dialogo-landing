import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

export const ExhibitModules = () => {
  return (
    <Section id="exposicion">
        <FadeIn>
          <SectionHeader 
            title="Un viaje por la exposición"
            subtitle="Descubre cada faceta de su vida a través de seis módulos inmersivos"
          />
        </FadeIn>

        <div className="space-y-12">
          {content.modules.map((module, index) => (
            <FadeIn key={module.title} delay={index * ANIMATION_DELAYS.STEP_1}>
              <Card className={`overflow-hidden rounded-2xl shadow-elegant border-border/50 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                <div className="lg:w-1/2">
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-display text-primary">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Módulo {index + 1}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display text-primary mb-4 leading-tight">
                    {module.title}
                  </h3>
                  <p className={`text-muted-foreground ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                    {module.body}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
    </Section>
  );
};