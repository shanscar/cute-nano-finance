// @platform: web
// Conversion: div → View, span → Text
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export const ProgressBar = ({ currentStep, totalSteps, progress }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden border-2 border-border">
        <div
          className={cn(
            "h-full bg-primary transition-all duration-500 ease-out rounded-full"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
