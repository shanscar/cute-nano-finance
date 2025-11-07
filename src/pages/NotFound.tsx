import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DashboardLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <DashboardLayout>
      <div className="w-full max-w-md">
        {/* Brutalist 404 Card */}
        <div className="relative rounded-3xl border-4 border-black bg-white 
                        shadow-[6px_6px_0px_rgba(0,0,0,1)] p-12 text-center
                        transition-all duration-300
                        hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
          
          {/* Yellow badge accent (top right) */}
          <div className="absolute -top-2 -right-2 bg-badge-yellow rounded-full 
                          w-16 h-16 border-4 border-black rotate-12 
                          flex items-center justify-center text-2xl">
            😵
          </div>
          
          {/* Large 404 text */}
          <h1 className="text-8xl md:text-9xl font-black mb-4 tracking-tight">
            404
          </h1>
          
          {/* Error message */}
          <p className="text-xl md:text-2xl font-bold mb-2">
            Oops! Page not found
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Brutalist return home button */}
          <Button 
            asChild 
            size="lg"
            className="border-4 border-black bg-income hover:bg-income/90
                       shadow-[3px_3px_0px_rgba(0,0,0,1)]
                       hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[-2px] hover:translate-y-[-2px]
                       transition-all duration-200 font-bold text-lg"
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5" strokeWidth={3} />
              Return Home
            </a>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotFound;
