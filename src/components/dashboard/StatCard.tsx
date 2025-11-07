import { StatCardConfig } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  config: StatCardConfig;
  className?: string;
}

export const StatCard = ({ config, className }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "w-[170px] md:w-[180px] h-24 text-center px-4 py-4 md:px-5 md:py-5",
        "rounded-2xl border-4 border-border bg-card",
        "shadow-[2px_2px_0_rgba(0,0,0,0.3)]",
        "transition-all duration-300 relative z-0 overflow-hidden",
        className
      )}
    >
      <div className={cn("absolute top-0 left-0 w-1 h-full", config.accentColor)} />
      <p className="text-[10px] md:text-xs font-bold text-foreground/70 mb-1.5 md:mb-2 uppercase tracking-wide">
        {config.label}
      </p>
      <p className="text-2xl font-black text-foreground pb-1">
        {config.value}
      </p>
    </div>
  );
};
