import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonSize = 'sm' | 'md' | 'lg';

const sizeConfig: Record<ButtonSize, { button: string; icon: string; strokeWidth: number }> = {
  sm: { button: 'h-10 w-10', icon: 'h-5 w-5', strokeWidth: 2.5 },
  md: { button: 'h-12 w-12', icon: 'h-6 w-6', strokeWidth: 3 },
  lg: { button: 'h-14 w-14', icon: 'h-8 w-8', strokeWidth: 3.5 },
};

interface HeaderIconButtonProps {
  icon: LucideIcon;
  bgColor: string;
  rotation: string;
  size?: ButtonSize;
  onClick?: () => void;
  ariaLabel?: string;
}

export const HeaderIconButton = ({ 
  icon: Icon, 
  bgColor, 
  rotation, 
  size = 'lg',
  onClick,
  ariaLabel,
}: HeaderIconButtonProps) => {
  const config = sizeConfig[size];
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "rounded-xl border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]",
        "hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:scale-110",
        "transition-all duration-200",
        config.button,
        bgColor,
        `hover:${bgColor}/70`,
        rotation,
        rotation.includes('-') ? 'hover:-rotate-3' : 'hover:rotate-3'
      )}
    >
      <Icon className={config.icon} strokeWidth={config.strokeWidth} />
    </Button>
  );
};
