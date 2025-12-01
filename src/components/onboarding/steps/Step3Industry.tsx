import { useState } from 'react';
import { OnboardingLayout } from '../OnboardingLayout';
import { IndustryCard } from '../IndustryCard';
import { SubCategorySheet } from '../SubCategorySheet';
import { useOnboarding } from '@/hooks/use-onboarding';
import { INDUSTRY_WITH_SUBCATEGORIES, IndustryWithSubCategories } from '@/config/onboarding';
import { IndustryCategory, IndustrySelection } from '@/types/onboarding';

export const Step3Industry = () => {
  const { formData, updateFormData, canProceed, nextStep } = useOnboarding();
  const [activeIndustry, setActiveIndustry] = useState<IndustryWithSubCategories | null>(null);

  const getSelectionForCategory = (category: IndustryCategory): IndustrySelection | undefined => {
    return formData.industries.find((s) => s.category === category);
  };

  const getSelectedCount = (category: IndustryCategory): number => {
    const selection = getSelectionForCategory(category);
    if (!selection) return 0;
    return selection.subCategories.length + (selection.customInput ? 1 : 0);
  };

  const handleCardClick = (industry: IndustryWithSubCategories) => {
    setActiveIndustry(industry);
  };

  const handleSheetConfirm = (selection: IndustrySelection | null) => {
    if (!activeIndustry) return;

    const currentIndustries = formData.industries.filter(
      (s) => s.category !== activeIndustry.value
    );

    if (selection) {
      updateFormData('industries', [...currentIndustries, selection]);
    } else {
      updateFormData('industries', currentIndustries);
    }
  };

  return (
    <OnboardingLayout showNextButton={true} nextDisabled={!canProceed} onNext={nextStep}>
      <div className="grid grid-cols-2 gap-3">
        {INDUSTRY_WITH_SUBCATEGORIES.map((industry) => (
          <IndustryCard
            key={industry.value}
            icon={industry.icon}
            label={industry.label}
            selectedCount={getSelectedCount(industry.value)}
            onClick={() => handleCardClick(industry)}
          />
        ))}
      </div>

      <SubCategorySheet
        industry={activeIndustry}
        open={activeIndustry !== null}
        onOpenChange={(open) => !open && setActiveIndustry(null)}
        currentSelection={activeIndustry ? getSelectionForCategory(activeIndustry.value) : undefined}
        onConfirm={handleSheetConfirm}
      />
    </OnboardingLayout>
  );
};
