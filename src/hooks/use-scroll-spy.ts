import { useState, useEffect, useRef } from 'react';
/**
 * A custom hook that utilizes the IntersectionObserver API to track
 * which section of the page is currently in the viewport with high precision.
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
    // A balanced rootMargin ensures we detect sections before they hit the very top
    // while the threshold ensures we have enough of the section visible to count it.
    const config = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.1, 0.5],
      ...options,
    };
    observer.current = new IntersectionObserver((entries) => {
      // Get all entries that are currently intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Find the entry that is most prominent in the defined root area
        // We prioritize the one closest to the top of the viewport
        const bestEntry = visibleEntries.reduce((prev, curr) => {
          return Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)
            ? curr
            : prev;
        });
        if (bestEntry.target.id !== activeId) {
          setActiveId(bestEntry.target.id);
        }
      }
    }, config);
    elements.forEach((el) => {
      observer.current?.observe(el);
    });
    // Special handling for the very top of the page
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveId(sectionIds[0] || null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options, activeId]);
  return activeId;
}