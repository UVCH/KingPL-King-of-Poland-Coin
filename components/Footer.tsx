import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cloud">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="h-display text-lg">KingPL</div>
          <p className="text-sm text-graphite/80">Royal Capital. Real Assets. On-chain.</p>
        </div>
        <div className="text-sm flex gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/pl/legal/terms">Terms</Link>
            <Link href="/pl/legal/privacy">Privacy</Link>
            <Link href="/pl/legal/risk">Risk</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/pl/partnerzy">Partnerzy</Link>
            <Link href="/pl/events">Events</Link>
          </div>
        </div>
        <div className="text-sm text-graphite/70">© {new Date().getFullYear()} KingPL</div>
      </div>
    </footer>
  );
}
