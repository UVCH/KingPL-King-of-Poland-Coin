export default function HomePL() {
  return (
    <div>
      <section className="u-uriel-dawn py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="h-display text-4xl md:text-6xl">KingPL — Królewski kapitał w erze krypto</h1>
          <p className="mt-4 text-lg text-graphite">Światło kapitału. Siła Królestwa.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          {['Majestat','Przejrzystość','Skuteczność'].map(t => (
            <div key={t} className="bg-white border border-cloud rounded-royal p-6 shadow-sm">
              <h3 className="h-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-graphite">Placeholder treści filaru.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
