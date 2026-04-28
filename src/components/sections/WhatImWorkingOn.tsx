import React from 'react';
import { motion, Variants } from 'framer-motion';
import { profileData } from '@/data/resume';

export function WhatImWorkingOn() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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

  return (
    <section
      id="working-on"
      aria-labelledby="working-on-heading"
      className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium uppercase tracking-wider text-orange-500"
        >
          What I'm working on
        </motion.p>

        <motion.h2
          id="working-on-heading"
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight"
        >
          {profileData.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          {profileData.whatImWorkingOnParagraphs.map((paragraph, index) => (
            <motion.p key={index} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
