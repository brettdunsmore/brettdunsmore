import React from 'react';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import cvFile from '@/assets/BD_CV_2026.pdf';

interface CVDownloadButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  label?: string;
}

const DOWNLOAD_FILENAME = 'Brett_Dunsmore_CV_2026.pdf';

export function CVDownloadButton({
  className,
  variant = 'outline',
  label = 'Download CV',
}: CVDownloadButtonProps) {
  return (
    <Button asChild variant={variant} className={cn('gap-2 rounded-full font-semibold', className)}>
      <a href={cvFile} download={DOWNLOAD_FILENAME} aria-label="Download Brett Dunsmore CV PDF">
        <FileDown className="w-4 h-4" aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
