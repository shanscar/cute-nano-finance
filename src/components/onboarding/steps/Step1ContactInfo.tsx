// @platform: web
// Conversion: Full step → Native screen
import { useState, useEffect } from 'react';
import { OnboardingLayout } from '../OnboardingLayout';
import { OnboardingInput } from '../OnboardingInput';
import { useOnboarding } from '@/hooks/use-onboarding';

export const Step1ContactInfo = () => {
  const { formData, updateFormData, nextStep, isStep1Valid } = useOnboarding();
  const [errors, setErrors] = useState({
    contactName: '',
    email: '',
    companyName: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    const newErrors = {
      contactName: formData.contactName.trim() === '' ? '請輸入聯絡人名稱' : '',
      email: !validateEmail(formData.email) ? '請輸入有效的電郵地址' : '',
      companyName: formData.companyName.trim() === '' ? '請輸入公司/業務名稱' : '',
    };
    
    setErrors(newErrors);
    
    if (isStep1Valid) {
      nextStep();
    }
  };

  // Clear errors when user types
  useEffect(() => {
    if (formData.contactName.trim() !== '' && errors.contactName) {
      setErrors((prev) => ({ ...prev, contactName: '' }));
    }
  }, [formData.contactName, errors.contactName]);

  useEffect(() => {
    if (validateEmail(formData.email) && errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  }, [formData.email, errors.email]);

  useEffect(() => {
    if (formData.companyName.trim() !== '' && errors.companyName) {
      setErrors((prev) => ({ ...prev, companyName: '' }));
    }
  }, [formData.companyName, errors.companyName]);

  return (
    <OnboardingLayout
      showBackButton={false}
      showNextButton
      onNext={handleNext}
      nextDisabled={!isStep1Valid}
    >
      <div className="space-y-5">
        <OnboardingInput
          label="聯絡人名稱"
          placeholder="請輸入你的姓名"
          value={formData.contactName}
          onChange={(e) => updateFormData('contactName', e.target.value)}
          error={errors.contactName}
          required
          autoFocus
        />
        <OnboardingInput
          label="電郵地址"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          error={errors.email}
          required
        />
        <OnboardingInput
          label="WhatsApp 電話（選填）"
          type="tel"
          placeholder="9XXX XXXX"
          value={formData.whatsappPhone}
          onChange={(e) => updateFormData('whatsappPhone', e.target.value)}
          prefix="+852"
          helperText="💬 方便我哋 WhatsApp 聯絡你，更快回應問題"
        />
        <OnboardingInput
          label="公司/業務名稱"
          placeholder="請輸入你的公司或業務名稱"
          value={formData.companyName}
          onChange={(e) => updateFormData('companyName', e.target.value)}
          error={errors.companyName}
          required
        />
      </div>
    </OnboardingLayout>
  );
};
