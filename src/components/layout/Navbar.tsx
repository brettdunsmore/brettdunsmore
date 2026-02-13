import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Presentations', href: '#presentations', id: 'presentations' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];
const SCROLL_SPY_SECTIONS = ['about', 'experience', 'presentations', 'contact'];
const Brand = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <a
    href="#top"
    aria-label="Brett Dunsmore - Home"
    className={cn(
      "text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md ring-offset-background px-1",
      className
    )}
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onClick) onClick();
    }}
  >
    Brett Dunsmore<span className="text-blue-600">.</span>
  </a>
);
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSpy(SCROLL_SPY_SECTIONS);
  const rafIdRef = useRef<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);
  const closeMenu = () => setOpen(false);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      closeMenu();
    }
  };
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Brand onClick={closeMenu} />
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 mr-4 border-r pr-8 border-border/50 h-6 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm px-1 ring-offset-background",
                  activeSection === link.id ? "text-blue-600 scale-105" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col p-6">
              <SheetHeader className="text-left border-b border-border/50 pb-6 mb-6">
                <SheetTitle>
                  <Brand onClick={closeMenu} />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4 flex-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "text-lg font-semibold transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm px-2",
                        activeSection === link.id ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="pt-8 border-t border-border/50 mt-auto pb-6">
                  <Button
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                    asChild
                    onClick={closeMenu}
                  >
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Get in Touch</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}