// @platform: web
// Conversion: button → Pressable, span → Text
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  icon: string;
  label: string;
  selectedCount: number;
  onClick: () => void;
}

export const IndustryCard = ({ icon, label, selectedCount, onClick }: IndustryCardProps) => {
  const hasSelection = selectedCount > 0;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl',
        'border-2 transition-all duration-200 min-h-[100px]',
        'focus:outline-none focus:ring-2 focus:ring-primary/50',
        hasSelection
          ? 'bg-primary/10 border-primary text-foreground'
          : 'bg-card border-border hover:border-primary/50 hover:bg-accent/30'
      )}
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-sm font-medium text-center leading-tight">{label}</span>
      
      {hasSelection && (
        <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-medium">
          {selectedCount}
        </span>
      )}
    </button>
  );
};
