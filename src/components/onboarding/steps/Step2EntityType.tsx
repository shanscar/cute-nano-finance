// @platform: web
// Conversion: Full step → Native screen
import { useState, useEffect } from 'react';
import { OnboardingLayout } from '../OnboardingLayout';
import { OnboardingInput } from '../OnboardingInput';
import { SelectionCard } from '../SelectionCard';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ENTITY_TYPE_OPTIONS } from '@/config/onboarding';
import { EntityType } from '@/types/onboarding';

export const Step2EntityType = () => {
  const { formData, updateFormData, nextStep, isStep2Valid } = useOnboarding();
  const [errors, setErrors] = useState({
    companyName: '',
  });

  const handleSelect = (value: EntityType) => {
    updateFormData('entityType', value);
  };

  const handleNext = () => {
    const newErrors = {
      companyName: formData.companyName.trim() === '' ? '請輸入公司/業務名稱' : '',
    };
    
    setErrors(newErrors);
    
    if (isStep2Valid) {
      nextStep();
    }
  };

  // Clear errors when user types
  useEffect(() => {
    if (formData.companyName.trim() !== '' && errors.companyName) {
      setErrors((prev) => ({ ...prev, companyName: '' }));
    }
  }, [formData.companyName, errors.companyName]);

  return (
    <OnboardingLayout
      showNextButton
      onNext={handleNext}
      nextDisabled={!isStep2Valid}
    >
      <div className="space-y-6">
        <OnboardingInput
          label="公司/業務名稱"
          placeholder="請輸入你的公司或業務名稱"
          value={formData.companyName}
          onChange={(e) => updateFormData('companyName', e.target.value)}
          error={errors.companyName}
          required
          autoFocus
        />
        
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-foreground">
            公司類型<span className="text-destructive ml-1">*</span>
          </label>
          <div className="space-y-3">
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
        </div>
      </div>
    </OnboardingLayout>
  );
};
