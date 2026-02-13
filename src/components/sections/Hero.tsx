import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  return (
    <section id="about" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center mb-10">
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                loading="lazy"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm {profileData.name.split(' ')[0]}<span className="text-blue-600">.</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-foreground/90 mb-10 max-w-3xl mx-auto leading-tight text-balance">
            {profileData.title}
          </motion.h2>
          <motion.div 
            variants={itemVariants} 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto space-y-6 text-balance text-left md:text-center"
          >
            {profileData.summaryParagraphs.map((paragraph, index) => (
              <motion.p 
                key={index} 
                variants={itemVariants}
                className="leading-relaxed md:leading-8"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-blue-500/20" asChild>
              <a href="#experience">View Professional History</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
              <a href={`mailto:${profileData.contact.email}`}>Get in touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}