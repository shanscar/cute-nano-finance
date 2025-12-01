import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { HeaderIconButton } from "@/components/dashboard/HeaderIconButton";
import { GRADIENTS } from "@/config/theme";
import { HEADER_BUTTONS } from "@/config/app";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/onboarding');
  };

  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ background: GRADIENTS.main }}
    >
      {/* Header with Profile and Menu */}
      <header className={`flex items-center justify-between px-8 py-5 border-b-3 border-border`}>
        <HeaderIconButton 
          icon={Menu} 
          bgColor={HEADER_BUTTONS.menu.bgColor}
          rotation={HEADER_BUTTONS.menu.rotation}
        />
        <HeaderIconButton 
          icon={User} 
          bgColor={HEADER_BUTTONS.profile.bgColor}
          rotation={HEADER_BUTTONS.profile.rotation}
          onClick={handleUserClick}
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {children}
      </main>
    </div>
  );
};
