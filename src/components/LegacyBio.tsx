import { BookOpen, Stethoscope, Cross, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

const iconMap = {
  BookOpen,
  Stethoscope,
  Cross,
  User,
};

export const LegacyBio = () => {
  return (
    <section id="legado" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              La Forja de un Santo Venezolano
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ciencia, Fe y Humanidad en perfecta armonía
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.bioSections.map((section, index) => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap];
            return (
              <FadeIn key={section.title} delay={index * 0.2}>
                <Card className="h-full bg-card border-border/50 rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-display text-primary">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};