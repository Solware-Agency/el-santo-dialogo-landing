import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { getIcon } from "@/lib/icons";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

export const Agradecimientos = () => {
  const { instituciones, colaboradores, voluntariado } = content.agradecimientos;
  
  // Check if any acknowledgments exist
  const hasInstituciones = instituciones && instituciones.length > 0;
  const hasColaboradores = colaboradores && colaboradores.length > 0;
  const hasVoluntariado = voluntariado && voluntariado.length > 0;
  
  // Don't render if no acknowledgments exist
  if (!hasInstituciones && !hasColaboradores && !hasVoluntariado) {
    return null;
  }

  const HandHeartIcon = getIcon("HandHeart");

  return (
    <Section id="agradecimientos" background="muted">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Agradecimientos"
            subtitle="Nuestro reconocimiento a quienes han brindado apoyo humano, técnico y espiritual para hacer posible esta muestra."
          />
        </FadeIn>

        <div className="space-y-8">
          {/* Instituciones */}
          {hasInstituciones && (
            <FadeIn delay={ANIMATION_DELAYS.STEP_1}>
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <HandHeartIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-display text-primary">
                      Instituciones
                    </h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {instituciones.map((institucion, index) => (
                      <div key={index} className="text-center">
                        {institucion.logo && (
                          <div className="mb-3">
                            <img
                              src={institucion.logo}
                              alt={`Logo de ${institucion.name}`}
                              className="h-16 mx-auto object-contain"
                            />
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground font-medium">
                          {institucion.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}

          {/* Colaboradores */}
          {hasColaboradores && (
            <FadeIn delay={ANIMATION_DELAYS.STEP_2}>
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <HandHeartIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-display text-primary">
                      Colaboradores
                    </h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {colaboradores.map((colaborador, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {colaborador.name}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}

          {/* Voluntariado */}
          {hasVoluntariado && (
            <FadeIn delay={ANIMATION_DELAYS.STEP_3}>
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <HandHeartIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-display text-primary">
                      Voluntariado
                    </h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {voluntariado.map((voluntario, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {voluntario.name}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </div>
    </Section>
  );
};