import eyesIcon from "@/assets/eyes.svg";

interface BalanceCardProps {
  balance: string;
  currency?: string;
}

export const BalanceCard = ({ balance, currency = "$" }: BalanceCardProps) => {
  return (
    <div className="w-full max-w-sm mb-20">
      <div className="text-center p-8 rounded-3xl border-3 border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-3 h-full bg-badge-yellow"></div>
        <img 
          src={eyesIcon} 
          alt="Watching eyes" 
          className="absolute top-3 right-3 w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-3" 
        />
        <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Current Balance
        </p>
        <h2 className="text-6xl font-black tracking-tight">
          {currency}{balance}
        </h2>
      </div>
    </div>
  );
};
