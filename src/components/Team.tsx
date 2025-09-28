import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from "@/constants";

// Role precedence (highest to lowest priority)
const ROLE_PRECEDENCE = [
  "Producción General",
  "Textos", 
  "Museografía y Diseño",
  "Comunicaciones",
  "Community Management",
  "Planificación de Contenido"
];

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

  return (
    <Section>
        <FadeIn>
          <SectionHeader 
            title="El Corazón del Proyecto"
            subtitle="Conozca a nuestro equipo"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
    </Section>
  );
};