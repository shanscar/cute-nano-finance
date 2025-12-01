import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { OnboardingStep, OnboardingFormData, OnboardingState, initialFormData } from '@/types/onboarding';

interface OnboardingContextType extends OnboardingState {
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: OnboardingStep) => void;
  updateFormData: <K extends keyof OnboardingFormData>(field: K, value: OnboardingFormData[K]) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const STORAGE_KEY = 'onboarding_progress';

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [formData, setFormData] = useState<OnboardingFormData>(initialFormData);
  const [isComplete, setIsComplete] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { currentStep: savedStep, formData: savedData, isComplete: savedComplete } = JSON.parse(saved);
        setCurrentStep(savedStep);
        setFormData(savedData);
        setIsComplete(savedComplete);
      } catch (e) {
        console.error('Failed to load onboarding progress:', e);
      }
    }
  }, []);

  // Save progress on changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentStep, formData, isComplete }));
  }, [currentStep, formData, isComplete]);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev < 6 ? ((prev + 1) as OnboardingStep) : prev));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as OnboardingStep) : prev));
  }, []);

  const goToStep = useCallback((step: OnboardingStep) => {
    setCurrentStep(step);
  }, []);

  const updateFormData = useCallback(<K extends keyof OnboardingFormData>(
    field: K,
    value: OnboardingFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setIsComplete(true);
    // Here you would typically send data to backend
    console.log('Onboarding completed:', formData);
    
    // Reset state so next time user opens onboarding they start fresh
    setCurrentStep(1);
    setFormData(initialFormData);
    localStorage.removeItem(STORAGE_KEY);
  }, [formData]);

  const resetOnboarding = useCallback(() => {
    setCurrentStep(1);
    setFormData(initialFormData);
    setIsComplete(false);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        formData,
        isComplete,
        nextStep,
        prevStep,
        goToStep,
        updateFormData,
        completeOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboardingContext must be used within OnboardingProvider');
  }
  return context;
};
