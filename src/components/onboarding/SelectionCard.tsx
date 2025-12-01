// @platform: web
// Conversion: button → Pressable, span/p → Text
import { cn } from '@/lib/utils';

interface SelectionCardProps {
  icon: string;
  label: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectionCard = ({
  icon,
  label,
  description,
  isSelected,
  onClick,
}: SelectionCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full p-5 rounded-xl border-3 transition-all duration-200",
        "flex items-center gap-4 text-left",
        "hover:scale-[1.02] active:scale-[0.98]",
        "min-h-[80px]",
        isSelected
          ? "border-primary bg-primary/10 shadow-md"
          : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
      )}
    >
      <span className="text-3xl">{icon}</span>
      <div className="flex-1">
        <p className={cn(
          "font-semibold text-base",
          isSelected ? "text-primary" : "text-foreground"
        )}>
          {label}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      {isSelected && (
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-sm">✓</span>
        </div>
      )}
    </button>
  );
};
