import Section from '@/components/Section';
export default function Whitepaper() {
  return (
    <Section>
      <h1 className="h-display text-3xl mb-4">Whitepaper</h1>
      <p>Pobierz aktualny dokument.</p>
      <a className="underline" href="/whitepaper/whitepaper-v0.9.pdf">whitepaper-v0.9.pdf</a>
    </Section>
  );
}
