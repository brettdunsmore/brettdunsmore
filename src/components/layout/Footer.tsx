import React from 'react';
import { Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import { profileData } from '@/data/resume';
import { ContactForm } from '@/components/ContactForm';
import { CVDownloadButton } from '@/components/CVDownloadButton';
export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer id="contact" className="border-t bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">Brett Dunsmore</h3>
            <p className="text-xs text-muted-foreground/60 pt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`tel:${profileData.contact.mobile}`}
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
            <ContactForm 
              trigger={
                <button
                  className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors"
                  aria-label="Send Inquiry"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:inline">Inquiry</span>
                </button>
              }
            />
            <CVDownloadButton 
              variant="ghost" 
              className="h-auto p-0 text-muted-foreground hover:text-blue-600 font-medium" 
            />
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