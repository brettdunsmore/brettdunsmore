import React from 'react';
import { Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import { profileData } from '@/data/resume';
export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer id="contact" className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">Brett Dunsmore</h3>
            <p className="text-sm text-muted-foreground font-medium">
              Senior Named Account Executive
            </p>
            <p className="text-xs text-muted-foreground/60 pt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`tel:+${profileData.contact.mobile}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors"
              aria-label="Call Brett Dunsmore"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Call</span>
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Email</span>
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-all"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}