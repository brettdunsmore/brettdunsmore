import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { SkillsAndEducation } from '@/components/sections/SkillsAndEducation';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <SkillsAndEducation />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}