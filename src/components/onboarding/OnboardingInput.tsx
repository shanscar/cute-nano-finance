// @platform: web
// Conversion: input → TextInput, label → Text
import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface OnboardingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const OnboardingInput = forwardRef<HTMLInputElement, OnboardingInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-semibold text-foreground mb-2">
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border-3 transition-all duration-200",
            "bg-card text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            error
              ? "border-destructive"
              : "border-border hover:border-primary/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

OnboardingInput.displayName = 'OnboardingInput';
