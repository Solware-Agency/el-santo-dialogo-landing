import { cn } from "@/lib/utils";
import { BREAKPOINT_CLASSES } from "@/constants";
import { getIcon, type IconName } from "@/lib/icons";

interface IconBadgeProps {
  icon: IconName;
  className?: string;
  variant?: "primary" | "accent";
}

export const IconBadge = ({ 
  icon, 
  className,
  variant = "primary" 
}: IconBadgeProps) => {
  const IconComponent = getIcon(icon);
  const variantClass = variant === "accent" 
    ? "bg-gradient-accent" 
    : "bg-gradient-primary";
  
  return (
    <div className={cn(BREAKPOINT_CLASSES.ICON_BADGE, variantClass, className)}>
      <IconComponent className="w-8 h-8 text-primary-foreground" />
    </div>
  );
};