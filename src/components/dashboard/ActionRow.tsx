import connectorSvg from "@/assets/connector.svg";
import { ActionButton } from "./ActionButton";
import { StatCard } from "./StatCard";
import { ActionButtonConfig, StatCardConfig } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface ActionRowProps {
  buttonConfig: ActionButtonConfig;
  statConfig: StatCardConfig;
  reversed?: boolean;
}

export const ActionRow = ({ buttonConfig, statConfig, reversed = false }: ActionRowProps) => {
  return (
    <div className="col-span-12 flex items-center justify-center gap-3 md:gap-6">
      {reversed ? (
        <>
          <StatCard config={statConfig} />
          
          <img 
            src={connectorSvg} 
            alt="" 
            className={cn(
              "w-10 h-auto flex-shrink-0 -ml-8 -mr-6",
              "relative z-[100] pointer-events-none",
              "transform scale-x-[-1]",
              "drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
            )}
            aria-hidden="true"
          />
          
          <ActionButton config={buttonConfig} />
        </>
      ) : (
        <>
          <ActionButton config={buttonConfig} />
          
          <img 
            src={connectorSvg} 
            alt="" 
            className={cn(
              "w-10 h-auto flex-shrink-0 -ml-6 -mr-8",
              "relative z-[100] pointer-events-none",
              "drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
            )}
            aria-hidden="true"
          />
          
          <StatCard config={statConfig} />
        </>
      )}
    </div>
  );
};
