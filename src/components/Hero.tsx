import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import heroImage from "@/assets/jose-gregorio-hero.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-primary leading-tight">
                {content.hero.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {content.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("exposicion")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-4 text-lg font-medium transition-smooth shadow-elegant"
                >
                  {content.hero.ctas.primary}
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contacto")}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-8 py-4 text-lg font-medium transition-smooth"
                >
                  {content.hero.ctas.secondary}
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.6}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt="Dr. José Gregorio Hernández"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-2xl opacity-10 -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};