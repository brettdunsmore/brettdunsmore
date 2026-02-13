import { useState, useEffect, useRef } from 'react';
/**
 * A custom hook that utilizes the IntersectionObserver API to track
 * which section of the page is currently in the viewport with high precision.
 */
export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (observer.current) {
      observer.current.disconnect();
    }
    const config = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.1, 0.5],
      ...options,
    };
    observer.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const bestEntry = visibleEntries.reduce((prev, curr) => {
          return Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)
            ? curr
            : prev;
        });
        const newId = bestEntry.target.id;
        if (newId !== activeIdRef.current) {
          activeIdRef.current = newId;
          setActiveId(newId);
        }
      }
    }, config);
    elements.forEach((el) => {
      observer.current?.observe(el);
    });
    const handleScroll = () => {
      if (window.scrollY < 50) {
        if (activeIdRef.current !== sectionIds[0]) {
          activeIdRef.current = sectionIds[0] || null;
          setActiveId(sectionIds[0] || null);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options]); // activeId removed to prevent re-attachment loops
  return activeId;
}