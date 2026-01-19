const benefits = [
  {
    title: 'Köln & Umgebung',
    description: 'Lokaler Service, persönliche Betreuung, schnelle Verfügbarkeit',
  },
  {
    title: 'Transparente Preise',
    description: 'Keine versteckten Kosten, klare Konditionen, faire Angebote',
  },
  {
    title: 'Premium-Fahrzeuge',
    description: 'Exklusive Performance-Modelle, top gepflegt, regelmäßig gewartet',
  },
  {
    title: 'Persönlicher Service',
    description: 'Individuelle Beratung, flexible Abholung, direkter Kontakt',
  },
];

export default function WhyRyntNow() {
  return (
    <section className="py-24 px-5 bg-white" aria-label="Warum RYNT NOW">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
          Warum RYNT NOW?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
