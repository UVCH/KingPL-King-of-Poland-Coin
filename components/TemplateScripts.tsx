'use client';
import { useEffect } from 'react';

/**
 * Ładuje skrypty z szablonu zachowując ich pierwotną kolejność.
 */
export default function TemplateScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    if (!scripts?.length) return;

    let cancelled = false;

    (async () => {
      for (const src of scripts) {
        if (cancelled) break;
        await new Promise<void>((resolve) => {
          const s = document.createElement('script');
          s.src = src;
          s.async = false; // zachowaj kolejność
          s.onload = s.onerror = () => resolve();
          document.body.appendChild(s);
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [scripts]);

  return null;
}
