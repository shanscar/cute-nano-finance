// @platform: web
// Conversion: Full step → Native screen
import { OnboardingLayout } from '../OnboardingLayout';
import { LogoGrid } from '../LogoGrid';
import { ToggleQuestion } from '../ToggleQuestion';
import { useOnboarding } from '@/hooks/use-onboarding';
import { BANK_OPTIONS, PAYMENT_PLATFORM_OPTIONS, ONBOARDING_MESSAGES, STEP4_SECTION_LABELS } from '@/config/onboarding';
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
        {/* Personal account toggle with embedded LogoGrid */}
        <ToggleQuestion
          question="你是否會用私人戶口處理公司支出或收入？"
          icon="💳"
          value={formData.usesPersonalAccount}
          onChange={(value) => updateFormData('usesPersonalAccount', value)}
          helperText={ONBOARDING_MESSAGES.personalAccountWarning}
        >
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              {STEP4_SECTION_LABELS.personalAccounts.title}
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              {STEP4_SECTION_LABELS.personalAccounts.subtitle}
            </p>
            <LogoGrid
              options={BANK_OPTIONS}
              selectedValues={formData.personalBanks}
              onChange={(values) => updateFormData('personalBanks', values as BankType[])}
              columns={3}
            />
          </div>
        </ToggleQuestion>

        {/* Company accounts section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {STEP4_SECTION_LABELS.companyAccounts.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {STEP4_SECTION_LABELS.companyAccounts.subtitle}
          </p>
          <LogoGrid
            options={BANK_OPTIONS}
            selectedValues={formData.companyBanks}
            onChange={(values) => updateFormData('companyBanks', values as BankType[])}
            columns={3}
          />
        </div>

        {/* Payment platforms section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {STEP4_SECTION_LABELS.paymentPlatforms.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {STEP4_SECTION_LABELS.paymentPlatforms.subtitle}
          </p>
          <LogoGrid
            options={PAYMENT_PLATFORM_OPTIONS}
            selectedValues={formData.paymentPlatforms}
            onChange={(values) => updateFormData('paymentPlatforms', values as PaymentPlatform[])}
            columns={3}
          />
        </div>
      </div>
    </OnboardingLayout>
  );
};
