import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { profileData } from '@/data/resume';
interface CompanyLogoProps {
  src: string;
  alt: string;
}
const CompanyLogo = ({ src, alt }: CompanyLogoProps) => {
  const [error, setError] = useState(false);
  return (
    <div className="shrink-0 w-12 h-12 min-h-[48px] rounded-full border border-border/50 bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden p-1.5 shadow-sm group-hover:border-blue-500/30 transition-all duration-300">
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 will-change-transform"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-muted/20 text-muted-foreground group-hover:text-blue-600 transition-colors">
          <Building2 className="w-6 h-6" />
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Card className="group border border-border/50 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all duration-300 overflow-hidden bg-card">
                  <CardHeader className="pb-6 bg-muted/20 border-b border-border/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-5">
                        <CompanyLogo
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                        />
                        <div className="space-y-1">
                          <CardTitle className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex text-xs font-bold tracking-tight text-blue-700 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-900/50 whitespace-nowrap min-w-[140px] justify-center shadow-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8 pb-10 space-y-8">
                    {exp.description && (
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                          Strategic Focus & Scope
                        </p>
                        <p className="text-base text-foreground/90 font-medium leading-relaxed italic border-l-4 border-blue-600/20 pl-4 py-1">
                          {exp.description}
                        </p>
                      </div>
                    )}
                    {exp.responsibilities.length > 0 && (
                      <div className="space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                          Career Progression & Key Roles
                        </p>
                        <div className="relative ml-1.5">
                          <div className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-blue-500/10 rounded-full" />
                          <ul className="relative grid gap-5">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={`resp-${exp.company}-${i}`} className="relative pl-8 flex items-start text-sm group/item">
                                <div className="absolute left-0 top-[0.55rem] -translate-x-[45%] h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600 border-2 border-background shadow-sm z-10 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-blue-500" />
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