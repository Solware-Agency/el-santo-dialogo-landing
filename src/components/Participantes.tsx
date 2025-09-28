import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { getIcon } from "@/lib/icons";
import { BREAKPOINT_CLASSES } from "@/constants";

// Function to extract last name for sorting
const getLastName = (fullName: string): string => {
  const parts = fullName.trim().split(' ');
  return parts.length > 1 ? parts[parts.length - 1] : fullName;
};

// Function to deduplicate and sort participants
const getUniqueParticipants = (): string[] => {
  const allParticipants: string[] = [];
  
  // Extract from team
  content.team.forEach(teamSection => {
    teamSection.people.forEach(person => {
      if (person && person !== "—") {
        allParticipants.push(person);
      }
    });
  });
  
  // Extract from agradecimientos if they exist
  if (content.agradecimientos.colaboradores) {
    content.agradecimientos.colaboradores.forEach(colaborador => {
      if (colaborador.name) {
        allParticipants.push(colaborador.name);
      }
    });
  }
  
  if (content.agradecimientos.voluntariado) {
    content.agradecimientos.voluntariado.forEach(voluntario => {
      if (voluntario.name) {
        allParticipants.push(voluntario.name);
      }
    });
  }
  
  // Deduplicate (case-insensitive, trimmed)
  const uniqueParticipants = Array.from(
    new Set(
      allParticipants
        .map(name => name.trim())
        .filter(name => name.length > 0)
        .map(name => name.toLowerCase())
    )
  ).map(lowerName => {
    // Find the original case version
    return allParticipants.find(original => 
      original.trim().toLowerCase() === lowerName
    ) || lowerName;
  });
  
  // Sort alphabetically by last name
  return uniqueParticipants.sort((a, b) => {
    const lastNameA = getLastName(a).toLowerCase();
    const lastNameB = getLastName(b).toLowerCase();
    return lastNameA.localeCompare(lastNameB, 'es', { sensitivity: 'base' });
  });
};

export const Participantes = () => {
  const participants = getUniqueParticipants();
  
  // Don't render if no participants
  if (participants.length === 0) {
    return null;
  }

  const UsersIcon = getIcon("Users");

  return (
    <Section id="participantes">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Participantes"
            subtitle="Listado general de quienes contribuyeron al proyecto"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <UsersIcon className="w-6 h-6 text-primary" />
                <span className="text-lg font-display text-primary">
                  {participants.length} participante{participants.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {participants.map((participant, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {participant}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
};