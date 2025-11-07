import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderIconButtonProps {
  icon: LucideIcon;
  bgColor: string;
  rotation: string;
  onClick?: () => void;
}

export const HeaderIconButton = ({ icon: Icon, bgColor, rotation, onClick }: HeaderIconButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        "h-14 w-14 rounded-xl border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]",
        "hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:scale-110",
        "transition-all duration-200",
        bgColor,
        `hover:${bgColor}/70`,
        rotation,
        rotation.includes('-') ? 'hover:-rotate-3' : 'hover:rotate-3'
      )}
    >
      <Icon className="h-8 w-8" strokeWidth={3.5} />
    </Button>
  );
};
