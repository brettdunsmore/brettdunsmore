import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
interface VideoThumbnailProps {
  videoId: string;
  title: string;
}
const VideoThumbnail = ({ videoId, title }: VideoThumbnailProps) => {
  const [imgSrc, setImgSrc] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  const [error, setError] = useState(false);
  const handleImageError = () => {
    if (imgSrc.includes('maxresdefault')) {
      setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
    } else if (imgSrc.includes('hqdefault')) {
      setImgSrc(`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`);
    } else {
      setError(true);
    }
  };
  return (
    <div className="relative aspect-video overflow-hidden bg-muted flex items-center justify-center">
      {!error ? (
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      ) : (
        <Youtube className="w-12 h-12 text-muted-foreground/30" />
      )}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none">
        <motion.div
          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Play className="w-8 h-8 fill-current translate-x-0.5" />
        </motion.div>
      </div>
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-bold text-white uppercase tracking-wider">
        YouTube
      </div>
    </div>
  );
};
export function Presentations() {
  return (
    <section id="presentations" className="py-24 bg-background scroll-mt-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.presentations.map((pres, idx) => (
            <motion.div
              key={pres.videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex"
            >
              <Card className="flex flex-col w-full overflow-hidden border-border/40 hover:border-red-500/30 transition-all group shadow-sm hover:shadow-xl bg-card">
                <VideoThumbnail videoId={pres.videoId} title={pres.title} />
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                      {pres.event}
                    </p>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                      {pres.title}
                    </h3>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 pb-6 mt-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full gap-2 rounded-full border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group-hover:bg-red-50" 
                    asChild
                  >
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
    </section>
  );
}