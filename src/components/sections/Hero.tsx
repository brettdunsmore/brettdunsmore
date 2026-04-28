import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
import { ContactForm } from '@/components/ContactForm';
import { CVDownloadButton } from '@/components/CVDownloadButton';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const springVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: 0.1
      }
    }
  };

  return (
    <section id="about" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 dark:opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center mb-10">
            <motion.div
              variants={springVariants}
              className="relative"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-muted flex items-center justify-center ring-2 ring-orange-500 ring-offset-4 ring-offset-background">
                {!imageError ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    loading="eager"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-14 h-14 text-muted-foreground" />
                )}
              </div>
            </motion.div>
          </div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl xs:text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 px-4 leading-[1.05]"
          >
            Hi, I'm {profileData.name.split(' ')[0]}<span className="text-orange-500">.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto leading-snug tracking-tight px-4"
          >
            AI, Cloud, Zero Trust. They're just tools.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl font-medium text-foreground mb-12 max-w-3xl mx-auto leading-snug tracking-tight px-4"
          >
            Outcomes are what count.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 transition-all" asChild>
              <a href="#working-on">View Pr
