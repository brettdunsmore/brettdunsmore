import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { LinkedInActivity } from '@/components/sections/LinkedInActivity';
import { Presentations } from '@/components/sections/Presentations';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <div id="top" className="sr-only" aria-hidden="true" />
      <Navbar />
      <main className="flex-grow pb-12">
        <Hero />
        <Experience />
        <LinkedInActivity />
        <Presentations />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}