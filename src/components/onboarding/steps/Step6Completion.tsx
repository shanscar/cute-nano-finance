// @platform: web
// Conversion: Full step → Native screen
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../OnboardingLayout';
import { SuccessAnimation } from '../SuccessAnimation';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ONBOARDING_MESSAGES } from '@/config/onboarding';

export const Step6Completion = () => {
  const { completeOnboarding } = useOnboarding();
  const navigate = useNavigate();

  const handleComplete = () => {
    completeOnboarding();
    navigate('/');
  };

  return (
    <OnboardingLayout
      showBackButton={true}
      showNextButton
      nextButtonText={ONBOARDING_MESSAGES.completeButton}
      onNext={handleComplete}
      buttonVariant="success"
    >
      <div className="text-center">
        <SuccessAnimation message={ONBOARDING_MESSAGES.completionMessage} />

        {/* Upload Later Card */}
        <div className="mt-8 p-5 rounded-xl bg-muted/50 border border-border text-left">
          <p className="text-sm font-medium text-foreground mb-1">
            {ONBOARDING_MESSAGES.uploadLaterTitle}
          </p>
          <p className="text-sm text-muted-foreground">
            {ONBOARDING_MESSAGES.uploadLaterDescription}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {ONBOARDING_MESSAGES.uploadLaterHint}
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
};
