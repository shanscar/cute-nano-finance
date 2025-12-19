// @platform: adaptable
// Note: Pure logic hook, works cross-platform
import { useMemo } from 'react';
import { useOnboardingContext } from '@/contexts/OnboardingContext';
import { ONBOARDING_STEPS } from '@/config/onboarding';

export const useOnboarding = () => {
  const context = useOnboardingContext();
  
  const currentStepConfig = useMemo(() => {
    return ONBOARDING_STEPS.find((s) => s.step === context.currentStep);
  }, [context.currentStep]);

  const isStep1Valid = useMemo(() => {
    const { contactName, email } = context.formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return contactName.trim() !== '' && emailRegex.test(email);
  }, [context.formData]);

  const isStep2Valid = useMemo(() => {
    const { companyName, entityType } = context.formData;
    return companyName.trim() !== '' && entityType !== null;
  }, [context.formData]);

  const isStep3Valid = useMemo(() => {
    // At least one industry with sub-categories or custom input
    return context.formData.industries.some(
      (ind) => ind.subCategories.length > 0 || ind.customInput
    );
  }, [context.formData.industries]);

  const isStep4Valid = useMemo(() => {
    const { companyBanks, personalBanks, paymentPlatforms, usesPersonalAccount } = context.formData;
    // Must have at least one company bank or payment platform
    const hasCompanyChannel = companyBanks.length > 0 || paymentPlatforms.length > 0;
    // If uses personal account, must select at least one personal bank
    const personalValid = usesPersonalAccount ? personalBanks.length > 0 : true;
    return hasCompanyChannel && personalValid;
  }, [context.formData]);

  const canProceed = useMemo(() => {
    switch (context.currentStep) {
      case 1:
        return isStep1Valid;
      case 2:
        return isStep2Valid;
      case 3:
        return isStep3Valid;
      case 4:
        return isStep4Valid;
      case 5:
        return true; // All toggles have default values
      case 6:
        return true;
      default:
        return false;
    }
  }, [context.currentStep, context.formData, isStep1Valid, isStep2Valid, isStep4Valid]);

  const progress = useMemo(() => {
    return (context.currentStep / 6) * 100;
  }, [context.currentStep]);

  return {
    ...context,
    currentStepConfig,
    canProceed,
    progress,
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    isStep4Valid,
  };
};
