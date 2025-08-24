export default function HomeEN() {
  return (
    <div>
      <section className="u-uriel-dawn py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="h-display text-4xl md:text-6xl">KingPL — Royal capital for the crypto era</h1>
          <p className="mt-4 text-lg text-graphite">Royal Capital. Real Assets. On-chain.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          {['Majesty','Transparency','Effectiveness'].map(t => (
            <div key={t} className="bg-white border border-cloud rounded-royal p-6 shadow-sm">
              <h3 className="h-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-graphite">Section placeholder.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
