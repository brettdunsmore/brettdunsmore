import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
export function Hero() {
  const [imageError, setImageError] = useState(false);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };
  const paragraphContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };
  const springVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
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
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full group-hover:bg-blue-600/30 transition-colors duration-500" />
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background shadow-2xl overflow-hidden bg-muted flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    loading="eager"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <User className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
            </motion.div>
          </div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          >
            Hi, I'm {profileData.name.split(' ')[0]}<span className="text-blue-600">.</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-foreground/90 mb-10 max-w-3xl mx-auto leading-tight text-balance">
            {profileData.title}
          </motion.h2>
          <motion.div
            variants={paragraphContainerVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto space-y-6 text-balance text-left md:text-center"
          >
            {profileData.summaryParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="leading-relaxed md:leading-8 text-balance"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 transition-all" asChild>
              <a href="#experience">View Professional History</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-blue-200 hover:bg-blue-50 dark:border-blue-900/50 dark:hover:bg-blue-900/20 transition-all" asChild>
              <a href={`mailto:${profileData.contact.email}`}>Get in touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}