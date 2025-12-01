// @platform: web
// Conversion: Full step → Native screen
import { OnboardingLayout } from '../OnboardingLayout';
import { ToggleQuestion } from '../ToggleQuestion';
import { useOnboarding } from '@/hooks/use-onboarding';
import { TAX_QUESTIONS } from '@/config/onboarding';

export const Step5TaxQuestions = () => {
  const { formData, updateFormData, nextStep } = useOnboarding();

  return (
    <OnboardingLayout
      showNextButton
      onNext={nextStep}
    >
      <div className="space-y-4">
        {TAX_QUESTIONS.map((question) => (
          <ToggleQuestion
            key={question.id}
            question={question.question}
            icon={question.icon}
            value={formData[question.id]}
            onChange={(value) => updateFormData(question.id, value)}
            helperText={question.helperText}
          />
        ))}
      </div>
    </OnboardingLayout>
  );
};
