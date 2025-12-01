// @platform: shared
// Step tracking
export type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6;

// Step 2: Entity types
export type EntityType = 'limited' | 'sole_proprietor' | 'freelancer';

// Step 3: Industry categories
export type IndustryCategory = 
  | 'digital_creator'
  | 'ecommerce'
  | 'professional_services'
  | 'food_beverage'
  | 'retail'
  | 'education'
  | 'health_wellness'
  | 'other';

// Step 3: Industry selection with sub-categories
export interface IndustrySelection {
  category: IndustryCategory;
  subCategories: string[];
  customInput?: string;
}

// Step 4: Payment channels
export type BankType = 'hsbc' | 'hang_seng' | 'za_bank' | 'boc' | 'standard_chartered' | 'other';
export type PaymentPlatform = 'stripe' | 'paypal' | 'payme' | 'fps' | 'wechat_pay' | 'alipay' | 'other';

// Complete form data
export interface OnboardingFormData {
  // Step 1
  contactName: string;
  email: string;
  companyName: string;
  
  // Step 2
  entityType: EntityType | null;
  
  // Step 3 - Multi-select with sub-categories
  industries: IndustrySelection[];
  
  // Step 4
  banks: BankType[];
  paymentPlatforms: PaymentPlatform[];
  usesPersonalAccount: boolean;
  
  // Step 5
  hasOverseasClients: boolean;
  hasOffice: boolean;
  hasEmployees: boolean;
  hasInventory: boolean;
  
  // Step 6
  brCertificateUrl?: string;
}

// Navigation state
export interface OnboardingState {
  currentStep: OnboardingStep;
  formData: OnboardingFormData;
  isComplete: boolean;
}

// Initial form data
export const initialFormData: OnboardingFormData = {
  contactName: '',
  email: '',
  companyName: '',
  entityType: null,
  industries: [],
  banks: [],
  paymentPlatforms: [],
  usesPersonalAccount: false,
  hasOverseasClients: false,
  hasOffice: false,
  hasEmployees: false,
  hasInventory: false,
};
