'use client';
import { useEffect } from 'react';

// Ładowanie skryptów w kolejności tak jak w oryginalnym szablonie.
export default function TemplateScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    if (!scripts?.length) return;

    let cancelled = false;

    const loadSequentially = async () => {
      for (const src of scripts) {
        if (cancelled) break;
        await new Promise<void>((resolve) => {
          const s = document.createElement('script');
          s.src = src;
          s.async = false; // zachowaj kolejność
          s.onload = () => resolve();
          s.onerror = () => resolve(); // pomiń błędy w trybie prerender
          document.body.appendChild(s);
        });
      }
    };

    loadSequentially();
    return () => {
      cancelled = true;
    };
  }, [scripts]);

  return null;
}
