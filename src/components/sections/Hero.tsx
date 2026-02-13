import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
export function Hero() {
  return (
    <section id="about" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-8 text-xs font-semibold tracking-widest uppercase bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm Brett Dunsmore<span className="text-blue-600">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-8 max-w-3xl mx-auto leading-tight">
            {profileData.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
            {profileData.summary}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-blue-500/20" asChild>
              <a href="#experience">View Professional History</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
              <a href={`mailto:${profileData.contact.email}`}>Get in touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}