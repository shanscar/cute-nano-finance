import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import eyesIcon from "@/assets/eyes.svg";
import sparkleIcon from "@/assets/sparkle.svg";
import underlineIcon from "@/assets/underline.svg";
import connectorSvg from "@/assets/connector.svg";
import piggybankCartoon from "@/assets/piggybank-cartoon.svg";
import receiptSvg from "@/assets/receipt.svg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, hsl(48, 95%, 90%) 0%, hsl(48, 90%, 94%) 25%, hsl(210, 20%, 98%) 60%, hsl(210, 20%, 98%) 100%)' }}>
      {/* Header with Profile and Menu */}
      <header className="flex items-center justify-between p-5 border-b-3 border-border">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-2xl border-3 border-border bg-badge-yellow/50 hover:bg-badge-yellow/70 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="rounded-2xl border-3 border-border bg-badge-pink/50 hover:bg-badge-pink/70 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          <User className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* App Title */}
        <div className="mb-16 flex flex-col items-end">
          {/* Tagline Badge - NOW ON TOP */}
          <div className="inline-block mb-4">
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5AFDA5]/20 via-[#5AFDA5]/35 to-[#5AFDA5]/25 border-3 border-border relative"
              style={{ transform: 'rotate(-1deg)' }}
            >
              {/* Green decorative corner accent */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#5AFDA5] rounded-full border-2 border-border"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#5AFDA5] rounded-full border-2 border-border"></div>
              
              <img 
                src={sparkleIcon} 
                alt="Sparkle" 
                className="w-5 h-5" 
              />
              <p className="text-xs md:text-sm font-black tracking-wide font-heading uppercase whitespace-nowrap">
                Track your finances with ease
              </p>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight w-full text-center">
            Money Flow
          </h1>
        </div>

        {/* Balance Display */}
        <div className="w-full max-w-sm mb-20">
          <div className="text-center p-8 rounded-3xl border-3 border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-badge-yellow"></div>
            <img 
              src={eyesIcon} 
              alt="Watching eyes" 
              className="absolute top-3 right-3 w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-3" 
            />
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Current Balance</p>
            <h2 className="text-6xl font-black tracking-tight">$0.00</h2>
          </div>
        </div>

        {/* Bento Grid - Action Buttons & Stats */}
        <div className="w-full max-w-2xl grid grid-cols-12 gap-4 relative">
          {/* Top Row: Earn Button → Connector → Income Stat */}
          <div className="col-span-12 flex items-center justify-center gap-3 md:gap-6">
            <Button
              className="group w-[220px] md:w-[280px] h-32 text-lg font-bold rounded-3xl border-4 border-border bg-income hover:bg-income text-income-foreground shadow-[0_4px_20px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.16),0_4px_12px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out relative z-10 dotted-pattern"
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="flex items-center justify-center w-24 h-24 rounded-xl border-4 border-black bg-badge-yellow rotate-6 shadow-[6px_6px_0px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 animate-[subtle-bounce]">
                  <img src={piggybankCartoon} alt="Piggy Bank" className="h-24 w-24 drop-shadow-2xl" />
                </span>
                <span className="text-xl font-black tracking-wide">Earn</span>
              </span>
            </Button>

            {/* Connector SVG */}
            <img 
              src={connectorSvg} 
              alt="" 
              className="w-10 h-auto flex-shrink-0 -ml-6 -mr-8 relative z-[100] pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
              aria-hidden="true"
            />

            {/* Income Stat */}
            <div 
              className="w-[170px] md:w-[180px] h-24 text-center px-4 py-4 md:px-5 md:py-5 rounded-2xl border-4 border-border bg-card shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative z-0 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-income"></div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/70 mb-1.5 md:mb-2 uppercase tracking-wide">This Month</p>
              <p className="text-2xl font-black text-foreground pb-1">+$0</p>
            </div>
          </div>

          {/* Bottom Row: Expense Stat → Connector → Spend Button */}
          <div className="col-span-12 flex items-center justify-center gap-3 md:gap-6">
            {/* Expense Stat */}
            <div 
              className="w-[170px] md:w-[180px] h-24 text-center px-4 py-4 md:px-5 md:py-5 rounded-2xl border-4 border-border bg-card shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative z-0 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-expense"></div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/70 mb-1.5 md:mb-2 uppercase tracking-wide">This Month</p>
              <p className="text-2xl font-black text-foreground pb-1">-$0</p>
            </div>

            {/* Connector SVG (flipped horizontally) */}
            <img 
              src={connectorSvg} 
              alt="" 
              className="w-10 h-auto flex-shrink-0 -ml-8 -mr-6 relative z-[100] pointer-events-none transform scale-x-[-1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
              aria-hidden="true"
            />

            <Button
              className="group w-[220px] md:w-[280px] h-32 text-lg font-bold rounded-3xl border-4 border-border bg-expense hover:bg-expense text-expense-foreground shadow-[0_4px_20px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.16),0_4px_12px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out relative z-10 dotted-pattern"
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="flex items-center justify-center w-24 h-24 rounded-xl border-4 border-black bg-orange-400 rotate-6 shadow-[6px_6px_0px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 animate-[subtle-bounce]">
                  <img src={receiptSvg} alt="Receipt" className="h-20 w-20 drop-shadow-2xl" />
                </span>
                <span className="text-xl font-black tracking-wide">Spend</span>
              </span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
