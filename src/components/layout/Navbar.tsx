import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const rafIdRef = React.useRef<number>(0);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);
  React.useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          Brett Dunsmore<span className="text-blue-600">.</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 mr-4 border-r pr-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[49] bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide Panel */}
            <div
              className={cn(
                "fixed top-0 right-0 h-screen z-50 w-80 bg-background border-l shadow-2xl p-8 transform transition-all duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="text-xl font-bold tracking-tighter mb-12">
                Brett Dunsmore<span className="text-blue-600">.</span>
              </div>
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <a href="#contact" onClick={handleLinkClick}>
                    Get in Touch
                  </a>
                </Button>
              </nav>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}