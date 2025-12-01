// @platform: web
// Conversion: Full layout → SafeAreaView + react-navigation
import { ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ONBOARDING_MESSAGES } from '@/config/onboarding';
import { GRADIENTS, SHADOWS } from '@/config/theme';
import { HEADER_BUTTONS } from '@/config/app';
import { HeaderIconButton } from '@/components/dashboard/HeaderIconButton';

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
  const navigate = useNavigate();

  const handleClose = () => navigate('/');

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ background: GRADIENTS.main }}
    >
      {/* Header with back button and progress */}
      <header className="sticky top-0 z-10 backdrop-blur-sm px-8 py-5 border-b-3 border-black">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {showBackButton ? (
              <HeaderIconButton
                icon={ArrowLeft}
                bgColor={HEADER_BUTTONS.back.bgColor}
                rotation={HEADER_BUTTONS.back.rotation}
                size="md"
                onClick={currentStep === 1 ? handleClose : prevStep}
                ariaLabel={ONBOARDING_MESSAGES.backButton}
              />
            ) : (
              <div className="w-12" />
            )}
            <div className="flex-1">
              <ProgressBar
                currentStep={currentStep}
                totalSteps={6}
                progress={progress}
              />
            </div>
            <HeaderIconButton
              icon={X}
              bgColor={HEADER_BUTTONS.close.bgColor}
              rotation={HEADER_BUTTONS.close.rotation}
              size="md"
              onClick={handleClose}
              ariaLabel={ONBOARDING_MESSAGES.closeButton}
            />
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
        <footer className="sticky bottom-0 backdrop-blur-sm px-8 py-5 border-t-3 border-black">
          <div className="max-w-lg mx-auto">
            <button
              type="button"
              onClick={onNext}
              disabled={nextDisabled}
              className={cn(
                "w-full py-4 px-6 rounded-xl font-bold text-lg",
                "border-3 border-black transition-all duration-200",
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
