// @platform: shared
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
    title: '你嘅資料，係慳稅嘅第一步',
    subtitle: '我會根據你填嘅內容，為你度身訂造最佳稅務方案。',
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
    subtitle: '可選擇多個，點擊查看細分類別。',
    autoAdvance: false,
  },
  {
    step: 4,
    title: '你平時用咩戶口處理公司收支？',
    subtitle: '公司戶口會自動對賬單；私人戶口需要人手確認。',
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
    title: '大功告成！',
    subtitle: '我哋會發送登入連結到你嘅電郵，記得查收 📬',
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
    description: '有商業登記，需審計，獨立法律實體',
    icon: '🏢',
  },
  {
    value: 'sole_proprietor',
    label: '無限公司/獨資',
    description: '有商業登記，個人報稅，無需審計',
    icon: '🏪',
  },
  {
    value: 'freelancer',
    label: '兼職/副業/自僱人士',
    description: '無商業登記，個人收入',
    icon: '💼',
  },
];

// Sub-category options
export interface SubCategoryOption {
  value: string;
  label: string;
}

export interface IndustryWithSubCategories {
  value: IndustryCategory;
  label: string;
  icon: string;
  subCategories: SubCategoryOption[];
}

export const INDUSTRY_WITH_SUBCATEGORIES: IndustryWithSubCategories[] = [
  {
    value: 'digital_creator',
    label: '數碼創作',
    icon: '🎨',
    subCategories: [
      { value: 'youtuber', label: 'YouTuber' },
      { value: 'instagram', label: 'Instagram KOL' },
      { value: 'tiktok', label: 'TikTok / 小紅書' },
      { value: 'podcast', label: 'Podcast 主持' },
      { value: 'blogger', label: '部落客/寫手' },
      { value: 'designer', label: '設計師' },
      { value: 'photographer', label: '攝影師' },
      { value: 'videographer', label: '影片製作' },
    ],
  },
  {
    value: 'ecommerce',
    label: '電商零售',
    icon: '🛒',
    subCategories: [
      { value: 'shopify', label: 'Shopify 店主' },
      { value: 'amazon', label: 'Amazon 賣家' },
      { value: 'ebay', label: 'eBay 賣家' },
      { value: 'carousell', label: 'Carousell 賣家' },
      { value: 'dropshipping', label: 'Dropshipping' },
      { value: 'handmade', label: '手作商品' },
    ],
  },
  {
    value: 'professional_services',
    label: '專業服務',
    icon: '💼',
    subCategories: [
      { value: 'consultant', label: '顧問' },
      { value: 'lawyer', label: '法律服務' },
      { value: 'accountant', label: '會計服務' },
      { value: 'marketing', label: '市場推廣' },
      { value: 'it_services', label: 'IT 服務' },
      { value: 'hr', label: '人力資源' },
    ],
  },
  {
    value: 'food_beverage',
    label: '餐飲食品',
    icon: '🍽️',
    subCategories: [
      { value: 'restaurant', label: '餐廳' },
      { value: 'cafe', label: '咖啡店' },
      { value: 'bakery', label: '烘焙/麵包店' },
      { value: 'catering', label: '到會服務' },
      { value: 'food_delivery', label: '外賣/配送' },
      { value: 'food_truck', label: '流動餐車' },
    ],
  },
  {
    value: 'retail',
    label: '實體零售',
    icon: '🏬',
    subCategories: [
      { value: 'fashion', label: '時裝服飾' },
      { value: 'electronics', label: '電子產品' },
      { value: 'home_goods', label: '家居用品' },
      { value: 'sports', label: '運動用品' },
      { value: 'pet', label: '寵物用品' },
    ],
  },
  {
    value: 'education',
    label: '教育培訓',
    icon: '📚',
    subCategories: [
      { value: 'tutoring', label: '補習/私教' },
      { value: 'language', label: '語言教學' },
      { value: 'music', label: '音樂教學' },
      { value: 'online_course', label: '線上課程' },
      { value: 'coaching', label: '教練/培訓' },
    ],
  },
  {
    value: 'health_wellness',
    label: '健康美容',
    icon: '💆',
    subCategories: [
      { value: 'gym', label: '健身房/教練' },
      { value: 'yoga', label: '瑜伽/冥想' },
      { value: 'beauty_salon', label: '美容院' },
      { value: 'spa', label: 'SPA/按摩' },
      { value: 'nutrition', label: '營養師' },
      { value: 'therapy', label: '治療師' },
    ],
  },
  {
    value: 'other',
    label: '其他行業',
    icon: '📋',
    subCategories: [], // Empty - uses custom input only
  },
];

// Legacy: Keep for backwards compatibility if needed
export interface IndustryOption {
  value: IndustryCategory;
  label: string;
  icon: string;
}

export const INDUSTRY_OPTIONS: IndustryOption[] = INDUSTRY_WITH_SUBCATEGORIES.map(({ value, label, icon }) => ({
  value,
  label,
  icon,
}));

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
  // 本地支付
  { value: 'octopus', label: '八達通' },
  { value: 'payme', label: 'PayMe' },
  { value: 'fps', label: '轉數快 FPS' },
  // 中國支付
  { value: 'wechat_pay', label: 'WeChat Pay' },
  { value: 'alipay', label: '支付寶' },
  // 跨境支付
  { value: 'stripe', label: 'Stripe' },
  { value: 'airwallex', label: 'Airwallex' },
  { value: 'wise', label: 'Wise' },
  { value: 'hitpay', label: 'HitPay' },
  // 其他
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

// Step 4 section labels
export const STEP4_SECTION_LABELS = {
  companyAccounts: {
    title: '公司戶口',
    subtitle: '會用銀行賬單自動對帳',
  },
  personalAccounts: {
    title: '私人戶口',
    subtitle: '需要人手確認每筆交易',
  },
  paymentPlatforms: {
    title: '收款平台',
    subtitle: '會自動同步交易記錄',
  },
};

// Messages
export const ONBOARDING_MESSAGES = {
  personalAccountWarning: '小貼士：私人戶口會預設為『手動確認』，確保買餸 🥦、交罰款 🚘 呢啲私人消費唔會誤當公司支出！',
  
  // Step 6 完成頁面
  completionMessage: '我哋會發送登入連結到你嘅電郵，記得查收 📬',
  
  // Email 提示
  emailReminderTitle: '📬 留意你嘅電郵',
  emailReminderDescription: '我哋會發送登入連結俾你設定密碼，之後就可以正式開始使用。',
  
  // 文件上傳區（可選）
  uploadOptionalTitle: '📂 順便上傳文件？',
  uploadOptionalDescription: '如果你手頭有 BR 證書或身份證明，可以依家上傳。',
  uploadOptionalHint: '之後喺「我的文件」都可以補交，唔使急。',
  
  nextButton: '下一步',
  completeButton: '完成',
  backButton: '返回',
  closeButton: '關閉',
};
