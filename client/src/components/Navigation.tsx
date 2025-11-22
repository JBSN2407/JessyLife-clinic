import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#how-we-help", label: "How We Help" },
    { href: "#why-jessylife", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 group"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">JL</span>
            </div>
            <span className={`font-heading font-bold text-xl transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`} data-testid="text-brand-name">
              JessyLife
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-sans font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="default"
              className="font-semibold"
              data-testid="button-book-now-nav"
            >
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left font-sans font-medium text-foreground hover:text-primary transition-colors py-2"
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="default"
              className="w-full font-semibold"
              data-testid="button-book-now-mobile"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
