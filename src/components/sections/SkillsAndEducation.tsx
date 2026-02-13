import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { profileData } from '@/data/resume';
export function SkillsAndEducation() {
  const hasEducation = profileData.education && profileData.education.length > 0;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={hasEducation ? "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24" : "flex flex-col items-center text-center"}>
          {hasEducation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-10">Education</h3>
              <div className="space-y-8">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-600" />
                    <p className="text-sm font-medium text-blue-600 mb-1">{edu.period}</p>
                    <h4 className="text-lg font-bold">{edu.institution}</h4>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          <motion.div
            className={!hasEducation ? "max-w-3xl w-full" : ""}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-bold mb-10">Core Expertise</h3>
            <div className={cn(
              "flex flex-wrap gap-3",
              !hasEducation && "justify-center gap-4"
            )}>
              {profileData.skills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "px-6 py-2.5 text-sm font-semibold transition-all cursor-default border-border/50",
                      "hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105",
                      !hasEducation && "text-base px-8 py-3"
                    )}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}