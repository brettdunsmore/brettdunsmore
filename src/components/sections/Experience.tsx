import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { profileData } from '@/data/resume';
export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Professional History</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>
        <div className="space-y-12">
          {profileData.experience.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <CardHeader className="pb-4 bg-muted/20">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl font-bold">{exp.company}</CardTitle>
                      {exp.description && (
                        <p className="text-sm font-medium text-muted-foreground italic">
                          {exp.description}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-bold tracking-tight text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1.5 rounded-full w-fit whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground leading-tight">
                      {exp.role}
                    </h4>
                  </div>
                  {exp.responsibilities.length > 0 && (
                    <div className="space-y-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Career Progression</p>
                      <ul className="grid gap-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm">
                            <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                            <span className="text-muted-foreground font-medium">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}