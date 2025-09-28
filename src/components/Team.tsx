import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { getIcon } from "@/lib/icons";
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

// Function to extract last name for sorting
const getLastName = (fullName: string): string => {
  const parts = fullName.trim().split(' ');
  return parts.length > 1 ? parts[parts.length - 1] : fullName;
};

// Function to get unique participants from all sources
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

export const Team = () => {
  const deduplicatedTeam = deduplicateTeamMembers(content.team);
  const participants = getUniqueParticipants();
  const UsersIcon = getIcon("Users");
  const Code2Icon = getIcon("Code2");

  return (
    <Section id="equipo-y-participantes">
        <FadeIn>
          <SectionHeader 
            title="El Corazón del Proyecto"
            subtitle="Conozca a nuestro equipo y a quienes contribuyeron a esta iniciativa."
          />
        </FadeIn>

        {/* Bloque A - Roles (tarjetas) */}
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

        {/* Bloque B - Lista global de personas */}
        {participants.length > 0 && (
          <FadeIn delay={0.4}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <UsersIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-display text-primary">
                    Participantes
                  </h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Listado general de quienes contribuyeron al proyecto
                </p>
                <p className="text-sm text-muted-foreground/70">
                  {participants.length} participante{participants.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <Card className={BREAKPOINT_CLASSES.CARD_ROUNDED}>
                <CardContent className="p-8">
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {participants.map((participant, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {participant}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        )}

        {/* Bloque C - Crédito de desarrollo web */}
        <FadeIn delay={0.6}>
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