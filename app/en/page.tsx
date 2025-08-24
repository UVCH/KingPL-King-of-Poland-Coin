export default function HomeEN() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-yellow-50 via-yellow-100/50 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-6xl font-semibold">KingPL — Royal capital for the crypto era</h1>
          <p className="mt-4 text-lg text-gray-700">Royal Capital. Real Assets. On-chain.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          {['Majesty','Transparency','Effectiveness'].map(t => (
            <div key={t} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-gray-700">Section placeholder.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

