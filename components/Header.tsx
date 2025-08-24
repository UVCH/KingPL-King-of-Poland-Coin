'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/o-projekcie', pl: 'O Projekcie', en: 'About' },
  { href: '/o-projekcie/tokenomia', pl: 'Tokenomia', en: 'Tokenomics' },
  { href: '/o-projekcie/roadmap', pl: 'Roadmap', en: 'Roadmap' },
  { href: '/skarbiec', pl: 'Skarbiec', en: 'Treasury' },
  { href: '/kings-word', pl: "King's Word", en: "King's Word" },
  { href: '/events', pl: 'Wydarzenia', en: 'Events' },
  { href: '/partnerzy', pl: 'Partnerzy', en: 'Partners' },
  { href: '/kontakt', pl: 'Kontakt', en: 'Contact' }
];

function localeFromPath(path: string) { return path.startsWith('/en') ? 'en' : 'pl'; }
function swapLocale(path: string) { return path.startsWith('/en') ? path.replace('/en', '/pl') : path.replace('/pl', '/en'); }

export default function Header() {
  const pathname = usePathname() || '/pl';
  const locale = localeFromPath(pathname);
  const base = locale === 'en' ? '/en' : '/pl';

  return (
    <header className="border-b border-gray-200 bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href={base} className="font-semibold text-lg">KingPL</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(n => (
            <Link key={n.href} href={`${base}${n.href}`} className="hover:underline">
              {locale === 'en' ? n.en : n.pl}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={swapLocale(pathname)} className="text-sm underline">{locale === 'en' ? 'PL' : 'EN'}</Link>
          <a href={process.env.NEXT_PUBLIC_DEX_URL || '#'} target="_blank" className="px-3 py-1.5 border rounded">
            Kup KingPL
          </a>
        </div>
      </div>
    </header>
  );
}

