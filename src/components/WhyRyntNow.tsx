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
    <section className="relative py-32 px-5 overflow-hidden" aria-label="Warum RYNT NOW">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 100%),
            url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80")
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-16 text-center">
          Warum RYNT NOW?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
