import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { profileData } from '@/data/resume';
export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
                <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-blue-600/20 transition-all overflow-hidden bg-card">
                  <CardHeader className="pb-6 bg-muted/20 border-b border-border/40">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {exp.company}
                        </CardTitle>
                        {exp.description && (
                          <p className="text-sm font-medium text-muted-foreground italic">
                            {exp.description}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex text-xs font-bold tracking-tight text-blue-700 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-900/50">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8 space-y-8">
                    <div className="space-y-2">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground leading-snug max-w-2xl text-balance">
                        {exp.role}
                      </h4>
                    </div>
                    {exp.responsibilities.length > 0 && (
                      <div className="space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                          Career Progression & Key Roles
                        </p>
                        <ul className="grid gap-4 border-l-2 border-muted/50 pl-5 ml-1">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="relative flex items-center gap-3 text-sm">
                              <div className="absolute -left-[1.625rem] h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500 border-2 border-card" />
                              <span className="text-muted-foreground font-medium leading-relaxed">
                                {resp}
                              </span>
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
      </div>
    </section>
  );
}