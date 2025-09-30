import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { getIcon } from "@/lib/icons";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

// De-duplicate team members at render time
const deduplicateTeamMembers = (teamData: typeof content.team): typeof content.team => {
  const assignedPeople = new Set<string>();
  
  return teamData.map(teamSection => {
    const availablePeople = teamSection.people.filter(person => {
      if (assignedPeople.has(person)) {
        return false; // Person already assigned to higher precedence role
      }
      assignedPeople.add(person);
      return true;
    });
    
    return {
      ...teamSection,
      people: availablePeople.length > 0 ? availablePeople : ["—"]
    };
  });
};

export const Team = () => {
  const deduplicatedTeam = deduplicateTeamMembers(content.team);
  const Code2Icon = getIcon("Code2");

  return (
    <Section id="equipo">
        <FadeIn>
          <SectionHeader 
            title="El Corazón del Proyecto"
            subtitle="Conozca a nuestro equipo de trabajo."
          />
        </FadeIn>

        {/* Roles del equipo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {deduplicatedTeam.map((teamSection, index) => (
            <FadeIn key={teamSection.role} delay={index * ANIMATION_DELAYS.ITEM_STAGGER}>
              <Card className={`h-full ${BREAKPOINT_CLASSES.CARD_ROUNDED}`}>
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
          
          {/* Reserved slot for future card: "Desarrollo web — Jesús Freites y Eugenio Andreone" */}
          <div 
            className="hidden lg:block h-full pointer-events-none" 
            aria-hidden="true"
          >
            <Card className={`h-full ${BREAKPOINT_CLASSES.CARD_ROUNDED} opacity-0`}>
              <CardHeader>
                <CardTitle className="text-lg font-display text-primary leading-tight">
                  {/* Placeholder content - not rendered */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {/* Placeholder content - not rendered */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Crédito de desarrollo web */}
        <FadeIn delay={0.4}>
          <Card className={`${BREAKPOINT_CLASSES.CARD_ROUNDED} max-w-2xl mx-auto`}>
            <CardContent className="p-8 text-center">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Code2Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-display text-primary">
                  Desarrollo y arquitectura web
                </h3>
              </div>
              <p className={`text-muted-foreground ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED} max-w-prose mx-auto`}>
                Sitio implementado con Next.js, React y Tailwind por el{" "}
                <a 
                  href="https://www.solware.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                >
                  equipo de Solware
                </a>
                . Desarrollo y arquitectura a cargo de Eugenio Andreone y Jesús Freites.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
    </Section>
  );
};