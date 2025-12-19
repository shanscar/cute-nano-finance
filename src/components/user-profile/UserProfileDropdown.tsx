import { useNavigate } from 'react-router-dom';
import { ProfileIconButton } from './ProfileIconButton';
import { UserProfileDropdownProps, ProfileMenuItem } from './types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const UserProfileDropdown = ({
  menuItems,
  onItemClick,
  align = 'end',
  menuWidth = 'w-48',
  ...buttonProps
}: UserProfileDropdownProps) => {
  const navigate = useNavigate();

  const handleItemClick = (item: ProfileMenuItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      navigate(item.href);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <ProfileIconButton {...buttonProps} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className={cn(menuWidth, 'z-50')}>
        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={cn(
              item.variant === 'destructive' && 'text-destructive focus:text-destructive'
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
