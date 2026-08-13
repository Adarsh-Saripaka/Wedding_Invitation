import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position. Useful for parallax effects,
 * sticky navigation, and scroll-based animations.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDirection(currentScroll > prevScroll ? 'down' : 'up');
      setPrevScroll(currentScroll);
      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return { scrollPosition, scrollDirection };
}
