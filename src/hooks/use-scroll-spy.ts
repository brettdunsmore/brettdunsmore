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
      threshold: [0, 0.1, 0.2, 0.5],
      ...options,
    };
    observer.current = new IntersectionObserver((entries) => {
      // Find all intersecting entries
      const intersecting = entries.filter(entry => entry.isIntersecting);
      if (intersecting.length > 0) {
        // If multiple sections are intersecting, pick the one closest to the top
        // which has the smallest boundingClientRect.top (absolute value relative to viewport)
        const closest = intersecting.reduce((prev, curr) => {
          return Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) 
            ? curr 
            : prev;
        });
        setActiveId(closest.target.id);
      }
    }, config);
    elements.forEach((el) => {
      observer.current?.observe(el);
    });
    // Initial check for 'top' state
    const handleInitialState = () => {
      if (window.scrollY < 100) {
        setActiveId('about');
      }
    };
    handleInitialState();
    window.addEventListener('scroll', handleInitialState, { passive: true });
    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleInitialState);
    };
  }, [sectionIds, options]);
  return activeId;
}