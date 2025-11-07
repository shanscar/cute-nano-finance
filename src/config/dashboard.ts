import { piggybankCartoon, receipt } from "@/assets";
import { ActionButtonConfig, StatCardConfig } from "@/types";

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

export const STATS_CONFIG: Record<'income' | 'expense', StatCardConfig> = {
  income: { 
    label: 'This Month', 
    value: '+$0', 
    type: 'income',
    accentColor: 'bg-income' 
  },
  expense: { 
    label: 'This Month', 
    value: '-$0', 
    type: 'expense',
    accentColor: 'bg-expense' 
  },
};
