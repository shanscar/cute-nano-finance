// @platform: web
// Conversion: Full layout → SafeAreaView + react-navigation
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { HeaderIconButton } from "@/components/dashboard/HeaderIconButton";
import { GRADIENTS } from "@/config/theme";
import { HEADER_BUTTONS } from "@/config/app";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();

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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <HeaderIconButton 
                icon={User} 
                bgColor={HEADER_BUTTONS.profile.bgColor}
                rotation={HEADER_BUTTONS.profile.rotation}
                rounded="full"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => navigate('/onboarding')}>
              👤 我的資料
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/documents')}>
              📂 我的文件
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {children}
      </main>
    </div>
  );
};
