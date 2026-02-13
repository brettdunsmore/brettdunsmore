import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { profileData } from '@/data/resume';
export function SkillsAndEducation() {
  const hasEducation = profileData.education && profileData.education.length > 0;
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={hasEducation ? "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24" : "flex flex-col items-center text-center"}>
          {hasEducation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8">Education</h3>
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
            className={!hasEducation ? "max-w-2xl w-full" : ""}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: hasEducation ? 0.2 : 0 }}
          >
            <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
            <div className={!hasEducation ? "flex flex-wrap justify-center gap-3" : "flex flex-wrap gap-2"}>
              {profileData.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`px-6 py-2.5 text-sm font-semibold transition-all cursor-default border-border/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 ${!hasEducation ? 'text-base' : ''}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}