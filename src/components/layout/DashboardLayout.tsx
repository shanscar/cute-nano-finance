// @platform: web
// Conversion: Full layout → SafeAreaView + react-navigation
import { ReactNode } from "react";
import { Menu } from "lucide-react";
import { HeaderIconButton } from "@/components/dashboard/HeaderIconButton";
import { UserProfileDropdown, ProfileMenuItem } from "@/components/user-profile";
import { GRADIENTS } from "@/config/theme";
import { HEADER_BUTTONS } from "@/config/app";

interface DashboardLayoutProps {
  children: ReactNode;
}

const profileMenuItems: ProfileMenuItem[] = [
  { id: 'profile', label: '我的資料', icon: '👤', href: '/onboarding' },
  { id: 'documents', label: '我的文件', icon: '📂', href: '/documents' },
];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ background: GRADIENTS.main }}
    >
      {/* Header with Profile and Menu */}
      <header className="flex items-center justify-between px-8 py-5 border-b-3 border-border">
        <HeaderIconButton 
          icon={Menu} 
          bgColor={HEADER_BUTTONS.menu.bgColor}
          rotation={HEADER_BUTTONS.menu.rotation}
        />
        
        <UserProfileDropdown
          menuItems={profileMenuItems}
          bgColor={HEADER_BUTTONS.profile.bgColor}
          rotation={HEADER_BUTTONS.profile.rotation}
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {children}
      </main>
    </div>
  );
};
