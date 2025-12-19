import { forwardRef } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProfileIconButtonProps } from './types';
import { DEFAULT_PROFILE_STYLE, SIZE_CONFIG } from './config';

export const ProfileIconButton = forwardRef<HTMLButtonElement, ProfileIconButtonProps>(({
  bgColor = DEFAULT_PROFILE_STYLE.bgColor,
  rotation = DEFAULT_PROFILE_STYLE.rotation,
  size = DEFAULT_PROFILE_STYLE.size,
  rounded = DEFAULT_PROFILE_STYLE.rounded,
  avatarUrl,
  icon: Icon = User,
  onClick,
  ariaLabel = 'User profile',
}, ref) => {
  const config = SIZE_CONFIG[size];

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        rounded === 'full' ? 'rounded-full' : 'rounded-xl',
        'border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]',
        'hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:scale-110',
        'transition-all duration-200 overflow-hidden',
        config.button,
        bgColor,
        `hover:${bgColor}/70`,
        rotation,
        rotation.includes('-') ? 'hover:-rotate-3' : 'hover:rotate-3'
      )}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="User avatar"
          className={cn('object-cover rounded-full', config.avatar)}
        />
      ) : (
        <Icon className={config.icon} strokeWidth={config.strokeWidth} />
      )}
    </Button>
  );
});

ProfileIconButton.displayName = 'ProfileIconButton';
