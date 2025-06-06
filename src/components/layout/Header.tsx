
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Shield, Menu, LogOut } from "lucide-react";

interface HeaderProps {
  showAuthButtons?: boolean;
  title?: string;
  icon?: React.ReactNode;
}

const Header = ({ 
  showAuthButtons = true, 
  title = "AuthApp",
  icon = <Shield className="w-4 h-4 text-primary" />
}: HeaderProps) => {
  // Mock user data - always exists
  const user = {
    id: "1",
    email: "user@example.com",
    name: "John Doe"
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  const NavItems = () => (
    <>
      <span className="text-sm text-muted-foreground">
        Welcome, {user.name}
      </span>
      <Button
        onClick={handleLogout}
        variant="outline"
        size="sm"
        className="flex items-center space-x-2"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </Button>
    </>
  );

  return (
    <header className="border-b bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <span className="text-xl font-bold">{title}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavItems />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center">
                    {icon}
                  </div>
                  <span className="font-semibold">{title}</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="pb-2 border-b">
                    <p className="text-sm text-muted-foreground">
                      Welcome, {user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
