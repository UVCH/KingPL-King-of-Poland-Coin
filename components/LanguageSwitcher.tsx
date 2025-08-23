'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] || 'pl';
  const rest = segments.slice(1).join('/');
  const other = locale === 'pl' ? 'en' : 'pl';
  const href = '/' + [other, rest].filter(Boolean).join('/');
  return (
    <Link href={href} className="text-sm hover:text-king-gold">
      {other.toUpperCase()}
    </Link>
  );
}
