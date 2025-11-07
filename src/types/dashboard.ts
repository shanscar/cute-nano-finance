export interface ActionButtonConfig {
  id: string;
  label: string;
  icon: string;
  iconAlt: string;
  bgColor: string;
  textColor: string;
  badgeColor: string;
  badgeRotation: string;
  type: 'income' | 'expense';
  onClick?: () => void;
}

export interface StatCardConfig {
  label: string;
  value: string;
  type: 'income' | 'expense';
  accentColor: string;
}
