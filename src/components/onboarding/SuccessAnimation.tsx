// @platform: web
// Conversion: div → View, svg → react-native-svg or Lottie
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SuccessAnimationProps {
  message?: string;
}

export const SuccessAnimation = ({ message }: SuccessAnimationProps) => {
  const [showCheck, setShowCheck] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkTimer = setTimeout(() => setShowCheck(true), 200);
    const messageTimer = setTimeout(() => setShowMessage(true), 600);
    
    return () => {
      clearTimeout(checkTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className={cn(
          "w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center",
          "transition-all duration-500",
          showCheck ? "scale-100 opacity-100" : "scale-50 opacity-0"
        )}
      >
        <svg
          className={cn(
            "w-12 h-12 text-primary transition-all duration-300 delay-200",
            showCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      {message && (
        <p
          className={cn(
            "mt-6 text-lg font-medium text-foreground text-center max-w-xs transition-all duration-500",
            showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
};
