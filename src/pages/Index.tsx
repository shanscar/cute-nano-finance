import { Menu, User } from "lucide-react";
import { ACTION_BUTTONS, STATS_CONFIG } from "@/config/dashboard";
import { HeaderIconButton } from "@/components/dashboard/HeaderIconButton";
import { TaglineBadge } from "@/components/dashboard/TaglineBadge";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { ActionRow } from "@/components/dashboard/ActionRow";

const Index = () => {
  const handleEarnClick = () => {
    console.log('Earn clicked');
    // TODO: Navigate to earn page or open modal
  };

  const handleSpendClick = () => {
    console.log('Spend clicked');
    // TODO: Navigate to spend page or open modal
  };

  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ 
        background: 'linear-gradient(135deg, hsl(48, 95%, 90%) 0%, hsl(48, 90%, 94%) 25%, hsl(210, 20%, 98%) 60%, hsl(210, 20%, 98%) 100%)' 
      }}
    >
      {/* Header with Profile and Menu */}
      <header className="flex items-center justify-between p-5 border-b-3 border-border">
        <HeaderIconButton 
          icon={Menu} 
          bgColor="bg-badge-yellow/50" 
          rotation="rotate-[-1deg]" 
        />
        <HeaderIconButton 
          icon={User} 
          bgColor="bg-badge-pink/50" 
          rotation="rotate-1" 
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* App Title */}
        <div className="mb-16 flex flex-col items-end">
          <TaglineBadge text="Track your finances with ease" />
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight w-full text-center">
            Money Flow
          </h1>
        </div>

        {/* Balance Display */}
        <BalanceCard balance="0.00" />

        {/* Bento Grid - Action Buttons & Stats */}
        <div className="w-full max-w-2xl grid grid-cols-12 gap-4 relative">
          <ActionRow
            buttonConfig={{ ...ACTION_BUTTONS[0], onClick: handleEarnClick }}
            statConfig={STATS_CONFIG.income}
            reversed={false}
          />
          
          <ActionRow
            buttonConfig={{ ...ACTION_BUTTONS[1], onClick: handleSpendClick }}
            statConfig={STATS_CONFIG.expense}
            reversed={true}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
