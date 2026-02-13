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
    const applyTypographyStyle = (size: number, weight: "bold" | "normal" | "italic", color: [number, number, number]) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", weight);
      doc.setTextColor(color[0], color[1], color[2]);
    };
    const checkPageOverflow = (neededHeight: number) => {
      if (y + neededHeight > 270) {
        doc.addPage();
        y = 20;
        return true;
      }
      return false;
    };
    const colorSlate900: [number, number, number] = [15, 23, 42];
    const colorSlate700: [number, number, number] = [51, 65, 85];
    const colorSlate600: [number, number, number] = [71, 85, 105];
    const colorBlue600: [number, number, number] = [37, 99, 235];
    // Header
    applyTypographyStyle(24, "bold", colorSlate900);
    doc.text(profileData.name, margin, y);
    y += 10;
    applyTypographyStyle(13, "bold", colorBlue600);
    doc.text(profileData.title, margin, y);
    y += 10;
    applyTypographyStyle(9, "normal", colorSlate600);
    const contactLine = `Email: ${profileData.contact.email}  |  LinkedIn: ${profileData.contact.linkedin.replace('https://www.', '')}`;
    doc.text(contactLine, margin, y);
    y += 6;
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
    // Summary
    if (profileData.summaryParagraphs.length > 0) {
      applyTypographyStyle(14, "bold", colorSlate900);
      doc.text("Professional Summary", margin, y);
      y += 8;
      profileData.summaryParagraphs.forEach((para) => {
        applyTypographyStyle(10, "normal", colorSlate700);
        const splitPara = doc.splitTextToSize(para, maxTextWidth);
        const textHeight = splitPara.length * 5;
        checkPageOverflow(textHeight + 10);
        doc.text(splitPara, margin, y);
        y += textHeight + 6;
      });
      y += 4;
    }
    // Experience
    if (profileData.experience.length > 0) {
      checkPageOverflow(15);
      applyTypographyStyle(14, "bold", colorSlate900);
      doc.text("Professional History", margin, y);
      y += 10;
      profileData.experience.forEach((exp) => {
        checkPageOverflow(25);
        applyTypographyStyle(11, "bold", colorSlate900);
        doc.text(exp.company, margin, y);
        applyTypographyStyle(10, "normal", colorSlate600);
        const periodWidth = doc.getTextWidth(exp.period);
        doc.text(exp.period, pageWidth - margin - periodWidth, y);
        y += 7;
        if (exp.description) {
          applyTypographyStyle(10, "italic", colorSlate700);
          const splitDesc = doc.splitTextToSize(exp.description, maxTextWidth);
          const descHeight = splitDesc.length * 5;
          checkPageOverflow(descHeight + 5);
          doc.text(splitDesc, margin, y);
          y += descHeight + 4;
        }
        exp.responsibilities.forEach((resp) => {
          applyTypographyStyle(10, "normal", colorSlate700);
          const splitResp = doc.splitTextToSize(`• ${resp}`, maxTextWidth - 5);
          const respHeight = splitResp.length * 5;
          checkPageOverflow(respHeight + 2);
          doc.text(splitResp, margin + 5, y);
          y += respHeight + 1;
        });
        y += 8;
      });
    }
    // Skills
    if (profileData.skills && profileData.skills.length > 0) {
      checkPageOverflow(25);
      applyTypographyStyle(14, "bold", colorSlate900);
      doc.text("Core Competencies", margin, y);
      y += 10;
      applyTypographyStyle(10, "normal", colorSlate700);
      const skillsText = profileData.skills.join("  |  ");
      const splitSkills = doc.splitTextToSize(skillsText, maxTextWidth);
      doc.text(splitSkills, margin, y);
      y += (splitSkills.length * 5) + 10;
    }
    doc.save(`${profileData.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };
  return (
    <Button
      variant={variant}
      onClick={handleDownload}
      className={cn("gap-2 rounded-full font-semibold", className)}
    >
      <FileDown className="w-4 h-4" />
      Download CV
    </Button>
  );
}