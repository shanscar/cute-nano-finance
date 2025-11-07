import { ReactNode } from "react";
import { Menu, User } from "lucide-react";
import { HeaderIconButton } from "@/components/dashboard/HeaderIconButton";
import { GRADIENTS, BORDERS } from "@/constants/theme";
import { HEADER_BUTTONS } from "@/constants/app";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ background: GRADIENTS.main }}
    >
      {/* Header with Profile and Menu */}
      <header className={`flex items-center justify-between p-5 ${BORDERS.standard} border-border`}>
        <HeaderIconButton 
          icon={Menu} 
          bgColor={HEADER_BUTTONS.menu.bgColor}
          rotation={HEADER_BUTTONS.menu.rotation}
        />
        <HeaderIconButton 
          icon={User} 
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
