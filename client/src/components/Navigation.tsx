import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-heading font-bold text-ring">JFiveMods</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("featured")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
              data-testid="link-featured"
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
              data-testid="link-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button variant="default" size="sm" data-testid="button-get-started">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("featured")}
              className="block w-full text-left px-3 py-2 text-sm font-medium hover-elevate rounded-md"
              data-testid="link-mobile-featured"
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-3 py-2 text-sm font-medium hover-elevate rounded-md"
              data-testid="link-mobile-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-sm font-medium hover-elevate rounded-md"
              data-testid="link-mobile-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-sm font-medium hover-elevate rounded-md"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button variant="default" size="sm" className="w-full" data-testid="button-mobile-get-started">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
