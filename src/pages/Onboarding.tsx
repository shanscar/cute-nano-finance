import { OnboardingProvider } from '@/contexts/OnboardingContext';
import { useOnboarding } from '@/hooks/use-onboarding';
import {
  Step1ContactInfo,
  Step2EntityType,
  Step3Industry,
  Step4PaymentChannels,
  Step5TaxQuestions,
  Step6Completion,
} from '@/components/onboarding';

const OnboardingSteps = () => {
  const { currentStep } = useOnboarding();

  switch (currentStep) {
    case 1:
      return <Step1ContactInfo />;
    case 2:
      return <Step2EntityType />;
    case 3:
      return <Step3Industry />;
    case 4:
      return <Step4PaymentChannels />;
    case 5:
      return <Step5TaxQuestions />;
    case 6:
      return <Step6Completion />;
    default:
      return <Step1ContactInfo />;
  }
};

const Onboarding = () => {
  return (
    <OnboardingProvider>
      <OnboardingSteps />
    </OnboardingProvider>
  );
};

export default Onboarding;
