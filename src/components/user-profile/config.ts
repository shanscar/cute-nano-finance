import { ProfileMenuItem, ButtonSize } from './types';

export const DEFAULT_PROFILE_STYLE = {
  bgColor: 'bg-badge-pink/50',
  rotation: 'rotate-1',
  size: 'lg' as ButtonSize,
  rounded: 'full' as const,
};

export const DEFAULT_MENU_ITEMS: ProfileMenuItem[] = [
  { id: 'profile', label: '我的資料', icon: '👤', href: '/profile' },
  { id: 'settings', label: '設定', icon: '⚙️', href: '/settings' },
  { id: 'logout', label: '登出', icon: '🚪', variant: 'destructive' },
];

export const SIZE_CONFIG = {
  sm: { button: 'h-10 w-10', icon: 'h-5 w-5', strokeWidth: 2.5, avatar: 'h-8 w-8' },
  md: { button: 'h-12 w-12', icon: 'h-6 w-6', strokeWidth: 3, avatar: 'h-10 w-10' },
  lg: { button: 'h-14 w-14', icon: 'h-8 w-8', strokeWidth: 3.5, avatar: 'h-12 w-12' },
} as const;
