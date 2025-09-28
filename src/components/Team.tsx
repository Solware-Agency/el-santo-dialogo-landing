import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

export const Team = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              El Corazón del Proyecto
            </h2>
            <p className="text-lg text-muted-foreground">
              Conozca a nuestro equipo
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.team.map((teamSection, index) => (
            <FadeIn key={teamSection.role} delay={index * 0.1}>
              <Card className="h-full rounded-xl shadow-sm border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-display text-primary leading-tight">
                    {teamSection.role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {teamSection.people.map((person, personIndex) => (
                      <p 
                        key={personIndex}
                        className="text-muted-foreground text-sm"
                      >
                        {person}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};