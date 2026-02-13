import { useState, useEffect } from 'react';
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // Sync across instances (e.g., Mobile Drawer and Desktop Navbar)
    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail !== undefined && customEvent.detail !== isDark) {
        setIsDark(customEvent.detail);
      }
    };
    window.addEventListener('theme-change', handleThemeEvent);
    return () => window.removeEventListener('theme-change', handleThemeEvent);
  }, [isDark]);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    // Dispatch custom event for immediate synchronization across components
    window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }));
  };
  return { isDark, toggleTheme };
}