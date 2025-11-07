import { ACTION_BUTTONS, STATS_CONFIG } from "@/config/dashboard";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TaglineBadge } from "@/components/dashboard/TaglineBadge";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { ActionRow } from "@/components/dashboard/ActionRow";
import { useBalance } from "@/hooks/use-balance";
import { APP_CONFIG } from "@/config/app";

const Index = () => {
  const { balance } = useBalance('0.00');

  const handleEarnClick = () => {
    console.log('Earn clicked');
    // TODO: Navigate to earn page or open modal
  };

  const handleSpendClick = () => {
    console.log('Spend clicked');
    // TODO: Navigate to spend page or open modal
  };

  return (
    <DashboardLayout>
      {/* App Title */}
      <div className="mb-16 flex flex-col items-end">
        <TaglineBadge text={APP_CONFIG.tagline} />
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight w-full text-center">
          {APP_CONFIG.name}
        </h1>
      </div>

      {/* Balance Display */}
      <BalanceCard balance={balance} currency={APP_CONFIG.currency} />

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
    </DashboardLayout>
  );
};

export default Index;
