import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold">KingPL</div>
          <p className="text-gray-600">Royal Capital. Real Assets. On-chain.</p>
        </div>
        <div className="flex gap-6">
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
        <div className="text-gray-600">© {new Date().getFullYear()} KingPL</div>
      </div>
    </footer>
  );
}

