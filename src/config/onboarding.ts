import { OnboardingStep, EntityType, IndustryCategory, BankType, PaymentPlatform } from '@/types/onboarding';

// Step configuration
export interface StepConfig {
  step: OnboardingStep;
  title: string;
  subtitle: string;
  autoAdvance: boolean;
}

export const ONBOARDING_STEPS: StepConfig[] = [
  {
    step: 1,
    title: '歡迎！首先，請填寫你的基本聯絡資料。',
    subtitle: '我們只會在處理你的會計事務時使用。',
    autoAdvance: false,
  },
  {
    step: 2,
    title: '你的業務目前是用哪種方式營運？',
    subtitle: '這有助我們了解你的稅務需求。',
    autoAdvance: true,
  },
  {
    step: 3,
    title: '你的業務主要屬於哪個範疇？',
    subtitle: '這有助我們找出你所屬行業的專屬扣稅項目。',
    autoAdvance: true,
  },
  {
    step: 4,
    title: '你的生意通常會使用哪些渠道收付款？',
    subtitle: '只需點擊你使用的選項，無需輸入帳號。',
    autoAdvance: false,
  },
  {
    step: 5,
    title: '這些關鍵資料，有助我們為你規劃最佳稅務方案。',
    subtitle: '請根據實際情況回答以下問題。',
    autoAdvance: false,
  },
  {
    step: 6,
    title: '大功告成！你已成功 Onboard。',
    subtitle: '我們已收到所有基礎資料，你的專屬會計師將會於 24 小時內與你聯繫。',
    autoAdvance: false,
  },
];

// Entity type options for Step 2
export interface EntityTypeOption {
  value: EntityType;
  label: string;
  description: string;
  icon: string;
}

export const ENTITY_TYPE_OPTIONS: EntityTypeOption[] = [
  {
    value: 'limited',
    label: '有限公司 (Ltd)',
    description: '需要審計，獨立法律實體',
    icon: '🏢',
  },
  {
    value: 'sole_proprietor',
    label: '無限公司/獨資',
    description: '個人報稅，無需審計',
    icon: '🏪',
  },
  {
    value: 'freelancer',
    label: '純個人接案',
    description: 'Freelancer / Slasher',
    icon: '💼',
  },
];

// Industry options for Step 3
export interface IndustryOption {
  value: IndustryCategory;
  label: string;
  icon: string;
}

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  { value: 'digital_creator', label: '數碼創作', icon: '🎨' },
  { value: 'ecommerce', label: '電商零售', icon: '🛒' },
  { value: 'professional_services', label: '專業服務', icon: '💼' },
  { value: 'food_beverage', label: '餐飲食品', icon: '🍽️' },
  { value: 'retail', label: '實體零售', icon: '🏬' },
  { value: 'education', label: '教育培訓', icon: '📚' },
  { value: 'health_wellness', label: '健康美容', icon: '💆' },
  { value: 'other', label: '其他行業', icon: '📋' },
];

// Bank options for Step 4
export interface BankOption {
  value: BankType;
  label: string;
  shortLabel: string;
}

export const BANK_OPTIONS: BankOption[] = [
  { value: 'hsbc', label: '滙豐銀行', shortLabel: 'HSBC' },
  { value: 'hang_seng', label: '恒生銀行', shortLabel: '恒生' },
  { value: 'za_bank', label: 'ZA Bank', shortLabel: 'ZA' },
  { value: 'boc', label: '中國銀行', shortLabel: '中銀' },
  { value: 'standard_chartered', label: '渣打銀行', shortLabel: '渣打' },
  { value: 'other', label: '其他銀行', shortLabel: '其他' },
];

// Payment platform options for Step 4
export interface PaymentPlatformOption {
  value: PaymentPlatform;
  label: string;
}

export const PAYMENT_PLATFORM_OPTIONS: PaymentPlatformOption[] = [
  { value: 'stripe', label: 'Stripe' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'payme', label: 'PayMe' },
  { value: 'fps', label: '轉數快 FPS' },
  { value: 'wechat_pay', label: 'WeChat Pay' },
  { value: 'alipay', label: '支付寶' },
  { value: 'other', label: '其他' },
];

// Tax questions for Step 5
export interface TaxQuestion {
  id: keyof Pick<import('@/types/onboarding').OnboardingFormData, 'hasOverseasClients' | 'hasOffice' | 'hasEmployees' | 'hasInventory'>;
  question: string;
  icon: string;
  helperText?: string;
}

export const TAX_QUESTIONS: TaxQuestion[] = [
  {
    id: 'hasOverseasClients',
    question: '客戶是否主要在海外？',
    icon: '🌍',
    helperText: '可能符合離岸豁免條件',
  },
  {
    id: 'hasOffice',
    question: '有無租用辦公室？',
    icon: '🏠',
    helperText: '租金可作為扣稅項目',
  },
  {
    id: 'hasEmployees',
    question: '有無聘請員工或外判？',
    icon: '👥',
    helperText: '薪金支出可作為扣稅項目',
  },
  {
    id: 'hasInventory',
    question: '涉及存貨買賣嗎？',
    icon: '📦',
  },
];

// Messages
export const ONBOARDING_MESSAGES = {
  personalAccountWarning: '請放心，我們會專業地幫你公私分明。',
  completionMessage: '我們已收到所有基礎資料，你的專屬會計師將會於 24 小時內與你聯繫，討論你的具體服務方案。',
  uploadPrompt: '如果你手頭有 BR 證書或身份證明，現在可拍照上傳。',
  nextButton: '下一步',
  completeButton: '完成',
  backButton: '返回',
};
