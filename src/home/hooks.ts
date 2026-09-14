import { useEffect, useState } from 'react';

/** Injects a Google Fonts stylesheet for the lifetime of the page that uses it. */
export function useGoogleFonts(href: string) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [href]);
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(text);
    window.setTimeout(() => setCopied(null), 1400);
  };
  return { copied, copy };
}
