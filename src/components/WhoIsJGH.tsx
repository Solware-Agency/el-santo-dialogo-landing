import { Section } from "@/components/ui/section";
import { FadeIn } from "./FadeIn";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";
import heroImage from "@/assets/jose-gregorio.jpg";
import { colorizeJoseGregorio } from "@/lib/text-utils";

export const WhoIsJGH = () => {
  return (
    <Section id="quien-es-jgh" background="muted">
      <div className="max-w-6xl mx-auto">
        <section aria-labelledby="quien-es-jgh-title">
          <div className={`${BREAKPOINT_CLASSES.CARD_ROUNDED} bg-card overflow-hidden`}>
            <div className="grid md:grid-cols-2 justify-center items-center">
              {/* Image Column */}
              <FadeIn className="py-12 md:py-16 px-6 md:px-10">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={heroImage}
                      alt="Retrato del Dr. José Gregorio Hernández en su ministerio médico"
                      className="w-full h-full max-h-[600px] object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Content Column */}
              <div className="py-12 md:py-16 px-6 md:px-10">
                <FadeIn delay={ANIMATION_DELAYS.STEP_1}>
                  <h2 
                    id="quien-es-jgh-title"
                    className="text-3xl md:text-4xl font-display text-wine mb-8 leading-tight"
                  >
                    ¿Quién es <span className="font-bold">José Gregorio Hernández</span>?
                  </h2>
                </FadeIn>

                <div className="space-y-6">
                  <FadeIn delay={ANIMATION_DELAYS.STEP_2}>
                    <p className={`text-muted-foreground max-w-prose ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                      <span className="font-bold text-wine">José Gregorio Hernández Cisneros</span> nació en Isnotú, Estado Trujillo (Venezuela), el 26 de octubre de 1864. Médico, científico y hombre de profunda fe, es conocido popularmente como el "Médico de los Pobres" por su dedicación a los más necesitados y su vida de servicio.
                    </p>
                  </FadeIn>

                  <FadeIn delay={ANIMATION_DELAYS.STEP_3}>
                    <p className={`text-muted-foreground max-w-prose ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                      Pionero de la medicina científica en Venezuela, introdujo la bacteriología y el uso del microscopio, creó el Instituto de Medicina Experimental en Caracas y fue catedrático de la Universidad Central de Venezuela, formando generaciones de médicos con rigor, ética y sentido cristiano.
                    </p>
                  </FadeIn>

                  <FadeIn delay={ANIMATION_DELAYS.STEP_3 + 0.1}>
                    <p className={`text-muted-foreground max-w-prose ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                      Falleció trágicamente en Caracas el 29 de junio de 1919. Su testimonio de caridad y su integración ejemplar entre ciencia y fe cimentaron una devoción popular que se extendió por todo el país y más allá de sus fronteras.
                    </p>
                  </FadeIn>

                  <FadeIn delay={ANIMATION_DELAYS.STEP_3 + 0.2}>
                    <p className={`text-muted-foreground max-w-prose ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
                      La Iglesia reconoció sus virtudes heroicas en 1986, fue beatificado en 2021 y su canonización fue autorizada en 2025. Hoy sus restos reposan en la Iglesia de Nuestra Señora de La Candelaria (Caracas), lugar de peregrinación y oración para miles de fieles.
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
};