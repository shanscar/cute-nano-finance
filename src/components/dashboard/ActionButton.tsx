import { Button } from "@/components/ui/button";
import buttonArrowSvg from "@/assets/button_arrow.svg";
import { ActionButtonConfig } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  config: ActionButtonConfig;
  showArrow?: boolean;
  className?: string;
}

export const ActionButton = ({ config, showArrow = true, className }: ActionButtonProps) => {
  return (
    <Button
      onClick={config.onClick}
      className={cn(
        "group w-[220px] md:w-[280px] h-32 text-lg font-bold rounded-3xl border-4 border-border",
        config.bgColor,
        `hover:${config.bgColor}`,
        config.textColor,
        "shadow-[0_4px_20px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.16),0_4px_12px_rgba(0,0,0,0.12)]",
        "hover:-translate-y-2 hover:scale-[1.02]",
        "transition-all duration-300 ease-out relative z-10",
        "dotted-pattern",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-4">
        <span 
          className={cn(
            "flex items-center justify-center w-24 h-24 rounded-xl border-4 border-black",
            config.badgeColor,
            config.badgeRotation,
            "shadow-[6px_6px_0px_rgba(0,0,0,0.4)]",
            "transition-all duration-300",
            "group-hover:scale-125 group-hover:-rotate-6",
            "animate-[subtle-bounce]"
          )}
        >
          <img 
            src={config.icon} 
            alt={config.iconAlt} 
            className={cn(
              "drop-shadow-2xl",
              config.id === 'earn' ? "h-24 w-24" : "h-20 w-20"
            )} 
          />
        </span>
        <span className="flex flex-col items-center gap-1">
          {showArrow && (
            <img 
              src={buttonArrowSvg} 
              alt="" 
              className="h-6 w-6 transition-all duration-300 group-hover:translate-x-1 self-end"
              aria-hidden="true"
            />
          )}
          <span className="text-xl font-black tracking-wide">{config.label}</span>
        </span>
      </span>
    </Button>
  );
};
