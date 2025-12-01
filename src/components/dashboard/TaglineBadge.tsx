// @platform: web
// Conversion: div → View, p → Text, img → Image
import { sparkle } from "@/assets";

interface TaglineBadgeProps {
  text: string;
}

export const TaglineBadge = ({ text }: TaglineBadgeProps) => {
  return (
    <div className="inline-block mb-4">
      <div 
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5AFDA5]/20 via-[#5AFDA5]/35 to-[#5AFDA5]/25 border-3 border-border relative"
        style={{ transform: 'rotate(-1deg)' }}
      >
        {/* Green decorative corner accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#5AFDA5] rounded-full border-2 border-border"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#5AFDA5] rounded-full border-2 border-border"></div>
        
        <img 
          src={sparkle} 
          alt="Sparkle"
          className="w-5 h-5" 
        />
        <p className="text-xs md:text-sm font-black tracking-wide font-heading uppercase whitespace-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
};
