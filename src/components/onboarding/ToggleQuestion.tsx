// @platform: web
// Conversion: button → Pressable, span/p → Text
import { cn } from '@/lib/utils';

interface ToggleQuestionProps {
  question: string;
  icon: string;
  value: boolean;
  onChange: (value: boolean) => void;
  helperText?: string;
  children?: React.ReactNode;
}

export const ToggleQuestion = ({
  question,
  icon,
  value,
  onChange,
  helperText,
  children,
}: ToggleQuestionProps) => {
  const hasChildren = !!children;

  return (
    <div className="w-full">
      {/* Unified container for seamless border */}
      <div className={cn(
        "rounded-xl border-3 overflow-hidden transition-all duration-300 ease-out",
        value ? "border-primary" : "border-border"
      )}>
        {/* Toggle header */}
        <div className={cn(
          "p-4 flex items-center gap-4 transition-colors duration-300",
          value ? "bg-primary/5" : "bg-card"
        )}>
          <span className="text-2xl">{icon}</span>
          <p className="flex-1 font-medium text-foreground">{question}</p>
          <button
            type="button"
            onClick={() => onChange(!value)}
            className={cn(
              "relative w-16 h-8 rounded-full transition-all duration-200 border-2",
              "flex items-center",
              value
                ? "bg-primary border-primary"
                : "bg-muted border-border"
            )}
          >
            <span
              className={cn(
                "absolute w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200",
                value ? "translate-x-9" : "translate-x-1"
              )}
            />
            <span className={cn(
              "absolute text-xs font-semibold",
              value ? "left-2 text-primary-foreground" : "right-2 text-muted-foreground"
            )}>
              {value ? "是" : "否"}
            </span>
          </button>
        </div>
        
        {/* Expandable content with CSS Grid height animation */}
        {hasChildren && (
          <div className={cn(
            "grid transition-all duration-300 ease-out",
            value 
              ? "grid-rows-[1fr] opacity-100" 
              : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="overflow-hidden">
              <div className={cn(
                "bg-primary/5 p-4 pt-3 transition-all duration-300",
                value && "border-t border-primary/20"
              )}>
                {helperText && (
                  <p className="text-sm text-primary mb-4">
                    💡 {helperText}
                  </p>
                )}
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Helper text without children - outside container */}
      {value && helperText && !hasChildren && (
        <p className="mt-2 ml-4 text-sm text-primary animate-fade-in">
          💡 {helperText}
        </p>
      )}
    </div>
  );
};
