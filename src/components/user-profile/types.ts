import { LucideIcon } from 'lucide-react';

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon?: string;           // emoji or icon string
  href?: string;           // navigation path
  onClick?: () => void;    // custom click handler
  variant?: 'default' | 'destructive';
}

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ProfileIconButtonProps {
  bgColor?: string;
  rotation?: string;
  size?: ButtonSize;
  rounded?: 'xl' | 'full';
  avatarUrl?: string;      // support avatar image
  icon?: LucideIcon;       // custom icon
  onClick?: () => void;
  ariaLabel?: string;
}

export interface UserProfileDropdownProps extends Omit<ProfileIconButtonProps, 'onClick'> {
  menuItems: ProfileMenuItem[];
  onItemClick?: (item: ProfileMenuItem) => void;
  align?: 'start' | 'center' | 'end';
  menuWidth?: string;
}
