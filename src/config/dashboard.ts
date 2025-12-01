// @platform: shared
import { piggybankCartoon, receipt } from "@/assets";
import { ActionButtonConfig, StatCardConfig } from "@/types";

/**
 * Dashboard configuration constants
 * 
 * @description Defines the main action buttons and stat cards shown on dashboard.
 * Modify these arrays to customize dashboard functionality and appearance.
 */

/**
 * Primary action buttons for income/expense tracking
 * @constant
 * @description These appear as large interactive cards on the main dashboard.
 * Each button triggers a different financial transaction flow.
 * 
 * @example
 * // To add a new button type:
 * {
 *   id: 'save',
 *   label: 'Save',
 *   icon: savingsIcon,
 *   iconAlt: 'Savings',
 *   bgColor: 'bg-badge-green',
 *   textColor: 'text-foreground',
 *   badgeColor: 'bg-badge-blue',
 *   badgeRotation: 'rotate-6',
 *   type: 'income',
 * }
 */
export const ACTION_BUTTONS: ActionButtonConfig[] = [
  {
    id: 'earn',
    label: 'Earn',
    icon: piggybankCartoon,
    iconAlt: 'Piggy Bank',
    bgColor: 'bg-income',
    textColor: 'text-income-foreground',
    badgeColor: 'bg-badge-yellow',
    badgeRotation: 'rotate-6',
    type: 'income',
  },
  {
    id: 'spend',
    label: 'Spend',
    icon: receipt,
    iconAlt: 'Receipt',
    bgColor: 'bg-expense',
    textColor: 'text-expense-foreground',
    badgeColor: 'bg-badge-green',
    badgeRotation: 'rotate-6',
    type: 'expense',
  },
];

/**
 * Statistics card configuration
 * @constant
 * @description Displays monthly income/expense summaries next to action buttons.
 * Values are placeholders - connect to real data source in production.
 * Currency automatically uses APP_CONFIG.currency (HK$)
 */
export const STATS_CONFIG: Record<'income' | 'expense', StatCardConfig> = {
  income: { 
    label: 'This Month', 
    value: '+HK$0',
    type: 'income',
    accentColor: 'bg-income' 
  },
  expense: { 
    label: 'This Month', 
    value: '-HK$0',
    type: 'expense',
    accentColor: 'bg-expense' 
  },
};
