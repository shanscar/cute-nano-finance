import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../OnboardingLayout';
import { SuccessAnimation } from '../SuccessAnimation';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ONBOARDING_MESSAGES } from '@/config/onboarding';
import { cn } from '@/lib/utils';

export const Step6Completion = () => {
  const { completeOnboarding, resetOnboarding } = useOnboarding();
  const navigate = useNavigate();

  const handleComplete = () => {
    completeOnboarding();
    // Navigate to main app after completion
    navigate('/');
  };

  return (
    <OnboardingLayout
      showBackButton={false}
      showNextButton
      nextButtonText={ONBOARDING_MESSAGES.completeButton}
      onNext={handleComplete}
    >
      <div className="text-center">
        <SuccessAnimation message={ONBOARDING_MESSAGES.completionMessage} />

        {/* Optional upload zone */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            {ONBOARDING_MESSAGES.uploadPrompt}
          </p>
          <label
            className={cn(
              "block w-full p-6 rounded-xl border-3 border-dashed border-border",
              "bg-card hover:border-primary/50 hover:bg-accent/50",
              "transition-all duration-200 cursor-pointer"
            )}
          >
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => {
                // Handle file upload
                const file = e.target.files?.[0];
                if (file) {
                  console.log('File selected:', file.name);
                  // TODO: Implement file upload
                }
              }}
            />
            <div className="text-center">
              <span className="text-3xl">📄</span>
              <p className="mt-2 text-sm font-medium text-foreground">
                點擊上傳文件
              </p>
              <p className="text-xs text-muted-foreground">
                支援 JPG, PNG, PDF
              </p>
            </div>
          </label>
        </div>
      </div>
    </OnboardingLayout>
  );
};
