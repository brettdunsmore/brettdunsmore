import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
export function Hero() {
  return (
    <section id="about" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                loading="lazy"
                className="relative w-20 h-20 md:w-[120px] md:h-[120px] rounded-full object-cover border-4 border-background shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              Available for new opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm {profileData.name.split(' ')[0]}<span className="text-blue-600">.</span>
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