import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
export function Presentations() {
  return (
    <section id="presentations" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
            <Youtube className="w-3.5 h-3.5" />
            Speaking & Keynotes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Presentations & Talks</h2>
          <div className="h-1.5 w-12 bg-red-600 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mt-4">
            Showcasing expertise through industry keynotes, technical deep-dives, and strategic discussions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {profileData.presentations.map((pres, idx) => (
              <motion.div
                key={pres.videoId}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex"
              >
                <Card className="flex flex-col w-full overflow-hidden border-border/40 hover:border-red-500/30 transition-all group shadow-sm hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={`https://i.ytimg.com/vi/${pres.videoId}/hqdefault.jpg`}
                      alt={pres.title}
                      loading="lazy"
                      decoding="async"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-8 h-8 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-bold text-white uppercase tracking-wider">
                      YouTube
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow space-y-2">
                    <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                      {pres.event}
                    </p>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                      {pres.title}
                    </h3>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="outline" size="lg" className="w-full gap-2 rounded-full border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20" asChild>
                      <a href={pres.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-5 h-5 text-red-600" />
                        Watch on YouTube
                        <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}