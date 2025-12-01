import { OnboardingLayout } from '../OnboardingLayout';
import { SelectionCard } from '../SelectionCard';
import { useOnboarding } from '@/hooks/use-onboarding';
import { INDUSTRY_OPTIONS } from '@/config/onboarding';
import { IndustryCategory } from '@/types/onboarding';

export const Step3Industry = () => {
  const { formData, updateFormData, nextStep } = useOnboarding();

  const handleSelect = (value: IndustryCategory) => {
    updateFormData('industry', value);
    // Auto-advance after selection
    setTimeout(() => nextStep(), 300);
  };

  return (
    <OnboardingLayout showNextButton={false}>
      <div className="grid grid-cols-2 gap-3">
        {INDUSTRY_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            icon={option.icon}
            label={option.label}
            isSelected={formData.industry === option.value}
            onClick={() => handleSelect(option.value)}
          />
        ))}
      </div>
    </OnboardingLayout>
  );
};
