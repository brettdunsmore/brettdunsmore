import { useState, useEffect, useRef } from 'react';
export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id));
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
      ...options,
    });
    elements.forEach((el) => {
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, [sectionIds, options]);
  return activeId;
}