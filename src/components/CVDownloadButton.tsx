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
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxTextWidth = pageWidth - (margin * 2);
    let y = 20;
    const checkPageOverflow = (neededHeight: number) => {
      if (y + neededHeight > 275) {
        doc.addPage();
        y = 20;
        return true;
      }
      return false;
    };
    // Header Section
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(profileData.name, margin, y);
    y += 10;
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text(profileData.title, margin, y);
    y += 10;
    // Contact Information Bar
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105); // slate-600
    const contactLine = `Email: ${profileData.contact.email}  |  Mobile: ${profileData.contact.mobile}  |  LinkedIn: ${profileData.contact.linkedin.replace('https://www.', '')}`;
    doc.text(contactLine, margin, y);
    y += 6;
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
    // Professional Summary Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text("Professional Summary", margin, y);
    y += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85); // slate-700
    profileData.summaryParagraphs.forEach((para) => {
      const splitPara = doc.splitTextToSize(para, maxTextWidth);
      checkPageOverflow(splitPara.length * 5 + 5);
      doc.text(splitPara, margin, y);
      y += (splitPara.length * 5) + 6;
    });
    y += 4;
    // Professional History Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text("Professional History", margin, y);
    y += 10;
    profileData.experience.forEach((exp) => {
      checkPageOverflow(30);
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text(exp.company, margin, y);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105); // slate-600
      const periodWidth = doc.getTextWidth(exp.period);
      doc.text(exp.period, pageWidth - margin - periodWidth, y);
      y += 6;
      if (exp.description) {
        doc.setFont("helvetica", "italic");
        doc.setTextColor(51, 65, 85);
        const splitDesc = doc.splitTextToSize(exp.description, maxTextWidth);
        checkPageOverflow(splitDesc.length * 5);
        doc.text(splitDesc, margin, y);
        y += (splitDesc.length * 5) + 4;
      }
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      exp.responsibilities.forEach((resp) => {
        const splitResp = doc.splitTextToSize(`• ${resp}`, maxTextWidth - 5);
        checkPageOverflow(splitResp.length * 5);
        doc.text(splitResp, margin + 5, y);
        y += (splitResp.length * 5);
      });
      y += 10;
    });
    // Core Competencies Section
    checkPageOverflow(25);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text("Core Competencies", margin, y);
    y += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    const skillsText = profileData.skills.join("  |  ");
    const splitSkills = doc.splitTextToSize(skillsText, maxTextWidth);
    doc.text(splitSkills, margin, y);
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