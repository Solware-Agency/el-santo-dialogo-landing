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

        {/* Roles del equipo - incluye tarjeta de Desarrollo web */}
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
        </div>

    </Section>
  );
};