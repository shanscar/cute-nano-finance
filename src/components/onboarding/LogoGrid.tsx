import { cn } from '@/lib/utils';

interface LogoGridOption {
  value: string;
  label: string;
  shortLabel?: string;
}

interface LogoGridProps {
  options: LogoGridOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  columns?: 2 | 3;
}

export const LogoGrid = ({
  options,
  selectedValues,
  onChange,
  columns = 3,
}: LogoGridProps) => {
  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={cn(
      "grid gap-3",
      columns === 2 ? "grid-cols-2" : "grid-cols-3"
    )}>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleValue(option.value)}
            className={cn(
              "p-4 rounded-xl border-3 transition-all duration-200",
              "flex flex-col items-center justify-center gap-1",
              "min-h-[70px] text-center",
              "hover:scale-[1.02] active:scale-[0.98]",
              isSelected
                ? "border-primary bg-primary/10"
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            <span className={cn(
              "font-semibold text-sm",
              isSelected ? "text-primary" : "text-foreground"
            )}>
              {option.shortLabel || option.label}
            </span>
            {isSelected && (
              <span className="text-primary text-xs">✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
};
