import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
interface PostThumbnailProps {
  src: string;
  alt: string;
}
const PostThumbnail = ({ src, alt }: PostThumbnailProps) => {
  const [error, setError] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden bg-muted flex items-center justify-center">
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <Linkedin className="w-12 h-12 text-muted-foreground/30" />
      )}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
    </div>
  );
};
export function LinkedInActivity() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="linkedin-activity" className="py-24 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Linkedin className="w-3.5 h-3.5" />
              Thought Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Activity</h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-md">
            Insights on cybersecurity, edge computing, and digital transformation shared with the global professional community.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {profileData.linkedinPosts.map((post, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-border/40 hover:shadow-xl hover:border-blue-600/20 transition-all duration-300 group">
                <PostThumbnail src={post.imageUrl} alt={post.title} />
                <CardHeader className="space-y-2 pt-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.snippet}
                  </p>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button variant="ghost" className="w-full justify-between group/btn text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read full post
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <Button size="lg" className="rounded-full px-8 gap-2 bg-[#0077B5] hover:bg-[#006396] shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95" asChild>
            <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}