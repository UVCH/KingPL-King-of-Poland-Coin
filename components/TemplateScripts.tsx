'use client';
import Script from 'next/script';

export default function TemplateScripts({ scripts }: { scripts: string[] }) {
  return (
    <>
      {scripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
