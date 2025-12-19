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
  const hasExpandedContent = value && children;

  return (
    <div className="w-full">
      <div className={cn(
        "p-4 rounded-xl border-3 transition-all duration-200",
        "flex items-center gap-4",
        value ? "border-primary bg-primary/5" : "border-border bg-card",
        hasExpandedContent && "rounded-b-none border-b-0"
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
      
      {/* Expanded content area */}
      {hasExpandedContent && (
        <div className={cn(
          "border-3 border-t-0 border-primary rounded-b-xl",
          "bg-primary/5 p-4 pt-3",
          "animate-fade-in"
        )}>
          {helperText && (
            <p className="text-sm text-primary mb-4">
              💡 {helperText}
            </p>
          )}
          {children}
        </div>
      )}
      
      {/* Helper text without children */}
      {value && helperText && !children && (
        <p className="mt-2 ml-4 text-sm text-primary animate-fade-in">
          💡 {helperText}
        </p>
      )}
    </div>
  );
};
