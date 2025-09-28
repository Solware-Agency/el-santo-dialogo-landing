import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";

export const VenueDates = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Información de la Exposición
            </h2>
            <p className="text-lg text-muted-foreground">
              Ubicación y fechas de la muestra
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.2}>
            <Card className="rounded-xl shadow-sm border-border/50 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Ubicación</h3>
                <p className="text-muted-foreground">{content.venueDates.location}</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="rounded-xl shadow-sm border-border/50 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <Calendar className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Fechas</h3>
                <p className="text-muted-foreground">
                  Apertura: {content.venueDates.opening}
                  <br />
                  Duración: {content.venueDates.duration}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};