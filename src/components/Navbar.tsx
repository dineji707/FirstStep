import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg gradient-hero">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
              FirstStep
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Dashboard
            </Link>
            <Link to="/practice" className="text-foreground hover:text-primary transition-colors font-medium">
              Practice
            </Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors font-medium">
              Community
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </Link>
          <Link to="/mentor" className="text-foreground hover:text-primary transition-colors font-medium">
            AI Mentor
          </Link>
          <Link to="/languages" className="text-foreground hover:text-primary transition-colors font-medium">
            Languages
          </Link>
          <Link to="/events" className="text-foreground hover:text-primary transition-colors font-medium">
            Events
          </Link>
          <Link to="/projects" className="text-foreground hover:text-primary transition-colors font-medium">
            Projects
          </Link>
            <Link to="/dashboard">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Dashboard
              </Link>
              <Link to="/practice" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Practice
              </Link>
              <Link to="/community" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Community
              </Link>
              <Link to="/resources" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Resources
              </Link>
              <Link to="/mentor" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                AI Mentor
              </Link>
              <Link to="/languages" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Languages
              </Link>
              <Link to="/events" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Events
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Projects
              </Link>
              <Link to="/dashboard">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
