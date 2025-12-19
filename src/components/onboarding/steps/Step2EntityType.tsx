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
    // 如果切換到自僱人士，清除公司名稱錯誤
    if (value === 'freelancer') {
      setErrors((prev) => ({ ...prev, companyName: '' }));
    }
  };

  // 條件式邏輯
  const showCompanyName = formData.entityType !== null;
  const isCompanyNameRequired = formData.entityType !== 'freelancer';
  const companyNameLabel = formData.entityType === 'freelancer' 
    ? '品牌/個人名稱' 
    : '公司名稱';

  const handleNext = () => {
    // 只有非自僱人士需要驗證公司名稱
    if (isCompanyNameRequired && formData.companyName.trim() === '') {
      setErrors({ companyName: '請輸入公司名稱' });
      return;
    }
    
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
        {/* 先選公司類型 */}
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

        {/* 條件式顯示公司名稱 */}
        {showCompanyName && (
          <OnboardingInput
            label={companyNameLabel}
            placeholder={isCompanyNameRequired 
              ? '請輸入你的公司名稱' 
              : '無公司名稱可以留空'}
            value={formData.companyName}
            onChange={(e) => updateFormData('companyName', e.target.value)}
            error={errors.companyName}
            required={isCompanyNameRequired}
            helperText={!isCompanyNameRequired ? '💡 無公司名稱可以留空' : undefined}
          />
        )}
      </div>
    </OnboardingLayout>
  );
};
