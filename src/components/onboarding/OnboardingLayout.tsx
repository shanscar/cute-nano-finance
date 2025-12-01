import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ONBOARDING_MESSAGES } from '@/config/onboarding';
import { GRADIENTS, BORDERS, SHADOWS } from '@/config/theme';
import { HEADER_BUTTONS } from '@/config/app';

interface OnboardingLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  showNextButton?: boolean;
  nextButtonText?: string;
  onNext?: () => void;
  nextDisabled?: boolean;
}

export const OnboardingLayout = ({
  children,
  showBackButton = true,
  showNextButton = false,
  nextButtonText = ONBOARDING_MESSAGES.nextButton,
  onNext,
  nextDisabled = false,
}: OnboardingLayoutProps) => {
  const { currentStep, prevStep, progress, currentStepConfig } = useOnboarding();

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ background: GRADIENTS.main }}
    >
      {/* Header with back button and progress */}
      <header className={cn(
        "sticky top-0 z-10 backdrop-blur-sm px-8 py-5",
        BORDERS.standard,
        "border-b border-black"
      )}>
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {showBackButton && currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className={cn(
                  "p-2 rounded-xl transition-all duration-200",
                  BORDERS.thick,
                  "border-black",
                  HEADER_BUTTONS.menu.bgColor,
                  HEADER_BUTTONS.menu.rotation,
                  SHADOWS.standard,
                  "hover:scale-110",
                  `hover:${SHADOWS.hover}`,
                  "active:scale-95"
                )}
                aria-label={ONBOARDING_MESSAGES.backButton}
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
            ) : (
              <div className="w-11" /> // Spacer
            )}
            <div className="flex-1">
              <ProgressBar
                currentStep={currentStep}
                totalSteps={6}
                progress={progress}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        <div className="max-w-lg mx-auto">
          {/* Step title and subtitle */}
          {currentStepConfig && (
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                {currentStepConfig.title}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {currentStepConfig.subtitle}
              </p>
            </div>
          )}

          {/* Step content */}
          {children}
        </div>
      </main>

      {/* Footer with next button */}
      {showNextButton && (
        <footer className={cn(
          "sticky bottom-0 backdrop-blur-sm px-8 py-5",
          BORDERS.standard,
          "border-t border-black"
        )}>
          <div className="max-w-lg mx-auto">
            <button
              type="button"
              onClick={onNext}
              disabled={nextDisabled}
              className={cn(
                "w-full py-4 px-6 rounded-xl font-bold text-lg",
                BORDERS.standard,
                "border-black transition-all duration-200",
                "active:scale-[0.98]",
                nextDisabled
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : cn(
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                      SHADOWS.standard,
                      `hover:${SHADOWS.hover}`
                    )
              )}
            >
              {nextButtonText}
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};
