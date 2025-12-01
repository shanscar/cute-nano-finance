import { OnboardingLayout } from '../OnboardingLayout';
import { LogoGrid } from '../LogoGrid';
import { ToggleQuestion } from '../ToggleQuestion';
import { useOnboarding } from '@/hooks/use-onboarding';
import { BANK_OPTIONS, PAYMENT_PLATFORM_OPTIONS, ONBOARDING_MESSAGES } from '@/config/onboarding';
import { BankType, PaymentPlatform } from '@/types/onboarding';

export const Step4PaymentChannels = () => {
  const { formData, updateFormData, nextStep, isStep4Valid } = useOnboarding();

  return (
    <OnboardingLayout
      showNextButton
      onNext={nextStep}
      nextDisabled={!isStep4Valid}
    >
      <div className="space-y-8">
        {/* Banks section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            銀行帳戶
          </h3>
          <LogoGrid
            options={BANK_OPTIONS}
            selectedValues={formData.banks}
            onChange={(values) => updateFormData('banks', values as BankType[])}
            columns={3}
          />
        </div>

        {/* Payment platforms section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            支付平台
          </h3>
          <LogoGrid
            options={PAYMENT_PLATFORM_OPTIONS}
            selectedValues={formData.paymentPlatforms}
            onChange={(values) => updateFormData('paymentPlatforms', values as PaymentPlatform[])}
            columns={3}
          />
        </div>

        {/* Personal account toggle */}
        <div>
          <ToggleQuestion
            question="你是否會用私人戶口處理公司支出或收入？"
            icon="💳"
            value={formData.usesPersonalAccount}
            onChange={(value) => updateFormData('usesPersonalAccount', value)}
            helperText={ONBOARDING_MESSAGES.personalAccountWarning}
          />
        </div>
      </div>
    </OnboardingLayout>
  );
};
