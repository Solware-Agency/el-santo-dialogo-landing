import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  centered = true 
}: SectionHeaderProps) => {
  const alignClass = centered ? "text-center" : "";
  
  return (
    <div className={cn(alignClass, "mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed prose-justify">
          {subtitle}
        </p>
      )}
    </div>
  );
};