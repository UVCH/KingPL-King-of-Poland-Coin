'use client';
import { useDict } from './DictionaryProvider';
export default function CTAButton() {
  const { dict } = useDict();
  const href = process.env.NEXT_PUBLIC_DEX_URL || '#';
  return (
    <a
      href={href}
      target={href.startsWith('#') ? '_self' : '_blank'}
      className="rounded-2xl px-4 py-2 bg-king-gold text-king-black font-medium shadow-soft hover:opacity-90"
    >
      {dict.cta}
    </a>
  );
}
