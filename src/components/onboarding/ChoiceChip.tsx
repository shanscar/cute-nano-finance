// @platform: web
// Conversion: button → Pressable
import { cn } from '@/lib/utils';

interface ChoiceChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  variant?: 'default' | 'other';
}

export const ChoiceChip = ({ label, isSelected, onClick, variant = 'default' }: ChoiceChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        'border focus:outline-none focus:ring-2 focus:ring-primary/50',
        isSelected
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-background text-foreground border-border hover:border-primary/50 hover:bg-accent/50',
        variant === 'other' && !isSelected && 'border-dashed'
      )}
    >
      {variant === 'other' && !isSelected && '+ '}
      {label}
    </button>
  );
};
