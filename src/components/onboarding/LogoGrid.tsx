// @platform: web
// Conversion: button → Pressable, span → Text
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface LogoGridOption {
  value: string;
  label: string;
  shortLabel?: string;
  logo?: string;
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
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());

  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const handleLogoError = (value: string) => {
    setFailedLogos(prev => new Set(prev).add(value));
  };

  return (
    <div className={cn(
      "grid gap-3",
      columns === 2 ? "grid-cols-2" : "grid-cols-3"
    )}>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        const showLogo = option.logo && !failedLogos.has(option.value);
        
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleValue(option.value)}
            className={cn(
              "relative p-4 rounded-xl border-3 transition-all duration-200",
              "flex flex-col items-center justify-center gap-2",
              "min-h-[80px] text-center",
              "hover:scale-[1.02] active:scale-[0.98]",
              isSelected
                ? "border-primary bg-primary/10"
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            {/* Selected checkmark */}
            {isSelected && (
              <span className="absolute top-2 right-2 text-primary text-sm font-bold">✓</span>
            )}
            
            {/* Logo or fallback */}
            {showLogo ? (
              <img 
                src={option.logo} 
                alt={option.label}
                className="w-8 h-8 object-contain"
                onError={() => handleLogoError(option.value)}
              />
            ) : (
              <span className="text-2xl">🏦</span>
            )}
            
            {/* Label */}
            <span className={cn(
              "font-medium text-xs",
              isSelected ? "text-primary" : "text-foreground"
            )}>
              {option.shortLabel || option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
