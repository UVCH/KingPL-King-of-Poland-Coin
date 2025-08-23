import Section from '@/components/Section';
export default function Partners() {
  return (
    <Section className="text-center">
      <h1 className="h-display text-3xl mb-4">Partnerzy</h1>
      <div className="flex justify-center gap-6 mb-6">
        <img src="/logos/bitbond.svg" alt="Bitbond" className="h-10" />
        <img src="/logos/coinbase.svg" alt="Coinbase" className="h-10" />
        <img src="/logos/base.svg" alt="Base" className="h-10" />
      </div>
      <p className="text-sm text-white/60">Logotypy oznaczają integracje, nie gwarantują rekomendacji.</p>
    </Section>
  );
}
