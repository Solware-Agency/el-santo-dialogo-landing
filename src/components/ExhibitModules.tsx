import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

export const ExhibitModules = () => {
  return (
    <section id="exposicion" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Un Viaje por la Exposición
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre cada faceta de su vida a través de seis módulos inmersivos
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {content.modules.map((module, index) => (
            <FadeIn key={module.title} delay={index * 0.2}>
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
                  <p className="text-muted-foreground leading-relaxed">
                    {module.body}
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