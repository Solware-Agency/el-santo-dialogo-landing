import { cn } from "@/lib/utils";
import { BREAKPOINT_CLASSES } from "@/constants";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted";
  id?: string;
}

export const Section = ({ 
  children, 
  className, 
  background = "default",
  id 
}: SectionProps) => {
  const bgClass = background === "muted" ? "bg-muted/30" : "bg-background";
  
  return (
    <section 
      id={id}
      className={cn(BREAKPOINT_CLASSES.SECTION_PADDING, bgClass, className)}
    >
      <div className={BREAKPOINT_CLASSES.CONTAINER}>
        {children}
      </div>
    </section>
  );
};