import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import TreasuryTable from '@/components/TreasuryTable';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import treasury from '@/content/treasury/treasury.json';

export default async function Home({ params }: { params: { locale: string } }) {
  const posts = getAllPosts(params.locale).slice(0, 2);
  return (
    <>
      <Section className="text-center space-y-4">
        <h1 className="text-4xl h-display">KingPL</h1>
        <p>Transparentny Skarbiec. Dyscyplina inwestycyjna.</p>
        <CTAButton />
      </Section>
      <Section className="grid md:grid-cols-3 gap-6">
        <Card title="Skarbiec">Publiczny wgląd w aktywa.</Card>
        <Card title="Buyback">80% zysków wraca na rynek.</Card>
        <Card title="Społeczność">Decentralizacja i odpowiedzialność.</Card>
      </Section>
      <Section>
        <h2 className="h-display text-2xl mb-4">Tokenomia</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <Card title="Minted">{treasury.supply.minted.toLocaleString()}</Card>
          <Card title="Circulating">{treasury.supply.circulating.toLocaleString()}</Card>
          <Card title="Locked">{treasury.supply.locked.toLocaleString()}</Card>
          <Card title="Burned">{treasury.supply.burned.toLocaleString()}</Card>
        </div>
      </Section>
      <Section>
        <h2 className="h-display text-2xl mb-4">Skarbiec</h2>
        <TreasuryTable data={treasury.holdings} />
      </Section>
      <Section className="text-center">
        <h2 className="h-display text-2xl mb-4">Partnerzy</h2>
        <div className="flex justify-center gap-6">
          <img src="/logos/bitbond.svg" alt="Bitbond" className="h-10" />
          <img src="/logos/coinbase.svg" alt="Coinbase" className="h-10" />
          <img src="/logos/base.svg" alt="Base" className="h-10" />
        </div>
      </Section>
      <Section>
        <h2 className="h-display text-2xl mb-4">King's Word</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p as any} />
          ))}
        </div>
      </Section>
    </>
  );
}
