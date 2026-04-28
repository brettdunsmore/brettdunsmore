import React from 'react';
import { motion, Variants } from 'framer-motion';
import { profileData } from '@/data/resume';

export function WhatImWorkingOn() {
  // Show all paragraphs except the closing two-beat statement,
  // which renders in the Hero.
  const paragraphs = profileData.summaryParagraphs.slice(0, -2);

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

  // Split the opening sentence into setup and punchline.
  // First paragraph format: "[Setup]: [punchline]"
  const opener = paragraphs[0] ?? '';
  const splitIndex = opener.indexOf(':');
  const setup = splitIndex >= 0 ? opener.slice(0, splitIndex + 1).trim() : opener;
  const punchline = splitIndex >= 0 ? opener.slice(splitIndex + 1).trim() : '';

  return (
    <section
      id="working-on"
      aria-labelledby="working-on-heading"
      className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 pb-32 md:pb-40 scroll-mt-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="mb-6 text-sm font-medium uppercase tracking-wider text-orange-500"
        >
          What I'm working on
        </motion.p>

        <motion.h2
          id="working-on-heading"
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight mb-4"
        >
          {setup}
        </motion.h2>

        {punchline && (
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium italic tracking-tight text-orange-500 leading-tight mb-10"
          >
            {punchline}
          </motion.p>
        )}

        <motion.div
          variants={containerVariants}
          className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          {paragraphs.slice(1).map((paragraph, index) => (
            <motion.p key={index} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
