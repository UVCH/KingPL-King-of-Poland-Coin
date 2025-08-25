'use client';
import { useEffect } from 'react';

/**
 * Ładuje skrypty z szablonu zachowując ich pierwotną kolejność.
 */
export default function TemplateScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    if (!scripts?.length) return;

    let isCancelled = false;

    (async () => {
      for (const src of scripts) {
        if (isCancelled) break;
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
      isCancelled = true;
    };
  }, [scripts]);

  return null;
}
