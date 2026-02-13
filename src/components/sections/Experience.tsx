import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { profileData } from '@/data/resume';
interface CompanyLogoProps {
  src: string;
  alt: string;
  isPriority?: boolean;
}
const CompanyLogo = ({ src, alt, isPriority = false }: CompanyLogoProps) => {
  const [error, setError] = useState(false);
  return (
    <div className="shrink-0 w-12 h-12 min-w-[48px] min-h-[48px] rounded-full border border-border/50 bg-white dark:bg-slate-100 flex items-center justify-center overflow-hidden p-2 shadow-sm group-hover:border-blue-500/30 transition-all duration-300">
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={isPriority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setError(true)}
          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out will-change-transform"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-muted/20 text-muted-foreground group-hover:text-blue-600 transition-colors">
          <Building2 className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Professional History</h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
          </div>
          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={`exp-${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Card className="group border border-border/50 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all duration-300 overflow-hidden bg-card">
                  <CardHeader className="p-4 sm:p-6 bg-muted/20 border-b border-border/40">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="mt-1">
                          <CompanyLogo
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            isPriority={index === 0}
                          />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground leading-tight break-words hyphens-auto">
                            {exp.company}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="shrink-0 self-start sm:self-center">
                        <span className="inline-flex text-[10px] sm:text-xs font-bold tracking-tight text-blue-700 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-900/50 whitespace-nowrap justify-center shadow-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-8 space-y-10">
                    {exp.description && (
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                          Strategic Focus & Scope
                        </p>
                        <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed italic border-l-4 border-blue-600/20 pl-4 py-1">
                          {exp.description}
                        </p>
                      </div>
                    )}
                    {exp.responsibilities.length > 0 && (
                      <div className="space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                          Career Progression & Key Roles
                        </p>
                        <div className="relative ml-2">
                          {/* Refined Vertical timeline line terminating at the center of the last dot */}
                          <div 
                            className="absolute left-0 top-1.5 w-[1.5px] bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-blue-500/5 rounded-full" 
                            style={{ height: `calc(100% - ${exp.responsibilities.length > 1 ? '1.5rem' : '1.5rem'})` }}
                          />
                          <ul className="relative grid gap-6">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={`resp-${exp.company}-${i}`} className="relative pl-8 flex items-start text-xs sm:text-sm group/item">
                                {/* Enhanced Dot indicator */}
                                <div className="absolute left-0 top-[0.6rem] -translate-x-1/2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600 border-2 border-background shadow-[0_0_10px_rgba(37,99,235,0.2)] z-10 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-blue-500 group-hover/item:shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
                                <span className="text-muted-foreground font-semibold leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                                  {resp}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
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