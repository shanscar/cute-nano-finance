import { Button } from "@/components/ui/button";
import { Menu, User, TrendingDown, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Profile and Menu */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-accent transition-all"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-accent transition-all"
        >
          <User className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* App Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Money Flow</h1>
          <p className="text-muted-foreground text-sm">Track your finances with ease</p>
        </div>

        {/* Balance Display (Optional) */}
        <div className="w-full max-w-sm mb-16 text-center">
          <p className="text-sm text-muted-foreground mb-2">Current Balance</p>
          <h2 className="text-5xl font-bold tracking-tight">$0.00</h2>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-4">
          {/* Add Income Button */}
          <Button
            className="w-full h-24 text-lg font-semibold rounded-3xl border-2 border-border bg-income text-income-foreground hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            <TrendingUp className="mr-3 h-6 w-6" />
            Add Income
          </Button>

          {/* Add Expense Button */}
          <Button
            className="w-full h-24 text-lg font-semibold rounded-3xl border-2 border-border bg-expense text-expense-foreground hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            <TrendingDown className="mr-3 h-6 w-6" />
            Add Expense
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-12">
          <div className="text-center p-4 rounded-2xl border border-border bg-card">
            <p className="text-xs text-muted-foreground mb-1">This Month</p>
            <p className="text-xl font-semibold text-income">+$0</p>
          </div>
          <div className="text-center p-4 rounded-2xl border border-border bg-card">
            <p className="text-xs text-muted-foreground mb-1">This Month</p>
            <p className="text-xl font-semibold text-expense">-$0</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
