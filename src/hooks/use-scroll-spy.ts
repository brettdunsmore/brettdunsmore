import { useState, useEffect, useRef } from 'react';
/**
 * A custom hook that utilizes the IntersectionObserver API to track 
 * which section of the page is currently in the viewport.
 */
export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (observer.current) {
      observer.current.disconnect();
    }
    // Adjust rootMargin to trigger when section is more prominent
    const config = {
      rootMargin: '-30% 0px -60% 0px',
      threshold: [0, 0.1, 0.2],
      ...options,
    };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, config);
    elements.forEach((el) => {
      observer.current?.observe(el);
    });
    // Manual check on mount/refesh for initial state
    const currentY = window.scrollY;
    if (currentY === 0) {
      setActiveId('about');
    }
    return () => observer.current?.disconnect();
  }, [sectionIds, options]);
  return activeId;
}