import { Button } from "@/components/ui/button";
import { Menu, User, TrendingDown, TrendingUp } from "lucide-react";

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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 leading-tight">
            Money Flow
          </h1>
          <p className="text-muted-foreground text-base font-medium">Track your finances with ease</p>
        </div>

        {/* Balance Display */}
        <div className="w-full max-w-sm mb-20">
          <div className="text-center p-8 rounded-3xl border-3 border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-badge-yellow"></div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Current Balance</p>
            <h2 className="text-6xl font-black tracking-tight">$0.00</h2>
          </div>
        </div>

        {/* Bento Grid - Action Buttons & Stats */}
        <div className="w-full max-w-2xl grid grid-cols-12 gap-4 relative">
          {/* Add Income Button - Large, Top Left */}
          <Button
            className="col-span-7 h-32 text-lg font-bold rounded-3xl border-4 border-border bg-income text-income-foreground shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 relative z-10 dotted-pattern"
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <span className="relative z-10 flex items-center">
              <TrendingUp className="mr-3 h-7 w-7" />
              Add Income
            </span>
          </Button>

          {/* Income Stat - Top Right, Overlapping */}
          <div 
            className="col-span-5 h-24 text-center p-5 rounded-2xl border-2 border-border/40 bg-income/40 shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative z-20"
            style={{ transform: 'translate(-12px, 20px)' }}
          >
            <p className="text-xs font-bold text-foreground/70 mb-2 uppercase tracking-wide">This Month</p>
            <p className="text-2xl font-black text-foreground">+$0</p>
          </div>

          {/* Expense Stat - Bottom Left, Overlapping */}
          <div 
            className="col-span-5 h-24 text-center p-5 rounded-2xl border-2 border-border/40 bg-expense/40 shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative z-20"
            style={{ transform: 'translate(12px, -8px) rotate(1deg)' }}
          >
            <p className="text-xs font-bold text-foreground/70 mb-2 uppercase tracking-wide">This Month</p>
            <p className="text-2xl font-black text-foreground">-$0</p>
          </div>

          {/* Add Expense Button - Large, Bottom Right */}
          <Button
            className="col-span-7 h-32 text-lg font-bold rounded-3xl border-4 border-border bg-expense text-expense-foreground shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 relative z-10 dotted-pattern"
            style={{ transform: 'translate(-8px, -12px)' }}
          >
            <span className="relative z-10 flex items-center">
              <TrendingDown className="mr-3 h-7 w-7" />
              Add Expense
            </span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
