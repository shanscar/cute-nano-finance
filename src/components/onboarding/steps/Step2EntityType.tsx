// @platform: web
// Conversion: Full step → Native screen
import { OnboardingLayout } from '../OnboardingLayout';
import { SelectionCard } from '../SelectionCard';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ENTITY_TYPE_OPTIONS } from '@/config/onboarding';
import { EntityType } from '@/types/onboarding';

export const Step2EntityType = () => {
  const { formData, updateFormData, nextStep } = useOnboarding();

  const handleSelect = (value: EntityType) => {
    updateFormData('entityType', value);
    // Auto-advance after selection
    setTimeout(() => nextStep(), 300);
  };

  return (
    <OnboardingLayout showNextButton={false}>
      <div className="space-y-4">
        {ENTITY_TYPE_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            icon={option.icon}
            label={option.label}
            description={option.description}
            isSelected={formData.entityType === option.value}
            onClick={() => handleSelect(option.value)}
          />
        ))}
      </div>
    </OnboardingLayout>
  );
};
