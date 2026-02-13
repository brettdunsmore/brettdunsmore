import React from 'react';
import { jsPDF } from 'jspdf';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/resume';
import { cn } from '@/lib/utils';
interface CVDownloadButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
}
export function CVDownloadButton({ className, variant = "outline" }: CVDownloadButtonProps) {
  const handleDownload = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = 20;
    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(profileData.name, margin, y);
    y += 8;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(profileData.title, margin, y);
    y += 10;
    // Contact Info
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text(`Email: ${profileData.contact.email} | Mobile: ${profileData.contact.mobile}`, margin, y);
    y += 4;
    doc.text(`LinkedIn: ${profileData.contact.linkedin}`, margin, y);
    y += 15;
    // Summary
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Professional Summary", margin, y);
    y += 6;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const summaryText = profileData.summaryParagraphs.join('\n\n');
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, margin, y);
    y += (splitSummary.length * 5) + 10;
    // Experience
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Professional History", margin, y);
    y += 8;
    profileData.experience.forEach((exp) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text(`${exp.company} (${exp.period})`, margin, y);
      y += 5;
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      if (exp.description) {
        doc.text(exp.description, margin, y);
        y += 5;
      }
      doc.setFont("helvetica", "normal");
      exp.responsibilities.forEach((resp) => {
        doc.text(`• ${resp}`, margin + 5, y);
        y += 5;
      });
      y += 5;
    });
    // Skills
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    y += 5;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Core Competencies", margin, y);
    y += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(profileData.skills.join(" | "), margin, y);
    doc.save(`${profileData.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };
  return (
    <Button 
      variant={variant} 
      onClick={handleDownload} 
      className={cn("gap-2 rounded-full", className)}
    >
      <FileDown className="w-4 h-4" />
      Download CV
    </Button>
  );
}