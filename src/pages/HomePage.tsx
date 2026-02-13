import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Presentations } from '@/components/sections/Presentations';
export function HomePage() {
  useEffect(() => {
    document.title = "Brett Dunsmore | Helping Build a Better Internet";
  }, []);
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-600 selection:text-white flex flex-col transition-colors duration-300">
      {/* Skip to main content for keyboard accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold shadow-lg"
      >
        Skip to content
      </a>
      {/* Skip to top anchor for programmatic navigation */}
      <div id="top" className="sr-only" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <div className="space-y-0">
          <Experience />
          <Presentations />
        </div>
      </main>
      <Footer />
      {/* Global toast notifications */}
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}