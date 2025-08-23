import Link from 'next/link';
import { useDict } from './DictionaryProvider';
export default function Footer() {
  const { locale } = useDict();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="h-display text-lg">KingPL</div>
          <p className="text-sm text-white/70">Transparentny Skarbiec. Dyscyplina. Buyback 80% zysków.</p>
        </div>
        <div className="text-sm flex gap-6">
          <div className="flex flex-col gap-2">
            <Link href={`/${locale}/legal/terms`}>Terms</Link>
            <Link href={`/${locale}/legal/privacy`}>Privacy</Link>
            <Link href={`/${locale}/legal/risk`}>Risk</Link>
          </div>
        </div>
        <div className="text-sm text-white/70">© {new Date().getFullYear()} KingPL</div>
      </div>
    </footer>
  );
}
