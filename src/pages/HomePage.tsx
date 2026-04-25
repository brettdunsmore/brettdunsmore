import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Presentations } from '@/components/sections/Presentations';
const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
    <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
  </div>
);
export function HomePage() {
  useEffect(() => {
    document.title = "Brett Dunsmore — Senior Account Executive, Cloudflare";
  }, []);
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-500 selection:text-white flex flex-col transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold shadow-lg">
        Skip to content
      </a>
      <div id="top" className="sr-only" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Presentations />
      </main>
      <Footer />
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}
