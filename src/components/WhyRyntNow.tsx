const benefits = [
  {
    title: 'Performance pur',
    description: 'Über 400 PS in beiden Fahrzeugen für maximalen Fahrspaß und unvergessliche Erlebnisse',
  },
  {
    title: 'Transparente Preise',
    description: 'Faire Konditionen ohne versteckte Kosten – Sie wissen immer genau, was Sie bezahlen',
  },
  {
    title: 'Unkompliziert',
    description: 'Schnelle Buchung, flexible Abholung und persönlicher Service direkt in Köln',
  },
  {
    title: 'Top gepflegt',
    description: 'Beide Fahrzeuge werden regelmäßig gewartet und sind immer in einwandfreiem Zustand',
  },
];

export default function WhyRyntNow() {
  return (
    <section className="py-24 px-5 bg-white" aria-label="Warum RYNT NOW">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm mb-6 font-medium">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Ihre Vorteile
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-wide">
            Warum RYNT NOW?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bei RYNT NOW legen wir Wert auf Performance-Fahrzeuge und transparenten Service. Entdecken Sie, warum wir die perfekte Wahl für Ihre nächste Fahrt sind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
