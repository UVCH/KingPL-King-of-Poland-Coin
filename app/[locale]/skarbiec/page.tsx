import Section from '@/components/Section';
import TreasuryTable from '@/components/TreasuryTable';
import treasury from '@/content/treasury/treasury.json';
import { formatNumber } from '@/lib/utils';

export default function TreasuryPage() {
  return (
    <Section>
      <h1 className="h-display text-3xl mb-4">Skarbiec</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8 text-center">
        <div>Minted<br />{formatNumber(treasury.supply.minted)}</div>
        <div>Circulating<br />{formatNumber(treasury.supply.circulating)}</div>
        <div>Locked<br />{formatNumber(treasury.supply.locked)}</div>
        <div>Burned<br />{formatNumber(treasury.supply.burned)}</div>
      </div>
      <TreasuryTable data={treasury.holdings as any} />
    </Section>
  );
}
