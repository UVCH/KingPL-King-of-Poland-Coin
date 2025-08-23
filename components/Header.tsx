'use client';
import Link from 'next/link';
import CTAButton from './CTAButton';
import LanguageSwitcher from './LanguageSwitcher';
import WalletConnectButton from './WalletConnectButton';
import { useDict } from './DictionaryProvider';

export default function Header() {
  const { dict } = useDict();
  const nav = [
    { href: '', label: dict.nav.start },
    { href: 'o-projekcie', label: dict.nav.project },
    { href: 'skarbiec', label: dict.nav.treasury },
    { href: 'kings-word', label: dict.nav.blog },
    { href: 'events', label: dict.nav.events },
    { href: 'partnerzy', label: dict.nav.partners },
    { href: 'kontakt', label: dict.nav.contact },
  ];
  const { locale } = useDict();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-king-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="h-display text-xl">KingPL</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={`/${locale}/${n.href}`} className="hover:text-king-gold">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <WalletConnectButton />
          <CTAButton />
        </div>
      </div>
    </header>
  );
}
