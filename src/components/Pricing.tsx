import { Check, Star, Zap } from 'lucide-react';

interface PricingProps {
  onOpenModal: (prefill?: string) => void;
}

const pricingTiers = [
  {
    name: 'Kleinwagen',
    price: '39',
    features: ['Ideal für Köln City', 'Transparente Konditionen', 'Schnelle Bestätigung'],
    highlighted: false,
  },
  {
    name: 'Kompaktklasse',
    price: '49',
    features: ['Mehr Komfort & Platz', 'Für Alltag & Business', 'Preis nach Zeitraum', 'Beliebte Wahl'],
    highlighted: true,
    badge: 'Beliebt',
  },
  {
    name: 'Kombi/SUV/Transporter',
    price: '69',
    features: ['Viel Raum für Familie & Gepäck', 'Flexibel einsetzbar', 'Ideal für Umzüge'],
    note: 'Hinweis: Kaution/Versicherung/Details auf Anfrage – du erhältst alles transparent vorab.',
    highlighted: false,
  },
];

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preise" className="relative py-24 px-5 overflow-hidden" aria-label="Preise">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?auto=format&fit=crop&w=2000&q=80")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-medium border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Preise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Klar & planbar – Beispiele zur Orientierung
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Du bekommst den <strong className="text-white">konkreten Preis nach Zeitraum & Fahrzeug</strong> – transparent vor Buchung.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative ${
                tier.highlighted ? 'lg:-mt-8 lg:mb-0' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-bold rounded-full shadow-xl">
                    <Star className="w-4 h-4 fill-white" />
                    {tier.badge}
                  </div>
                </div>
              )}

              <div
                className={`relative rounded-2xl overflow-hidden ${
                  tier.highlighted
                    ? 'bg-white shadow-2xl border-2 border-accent'
                    : 'bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200'
                } transition-all hover:scale-105 hover:shadow-2xl`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-accent-dark to-accent"></div>
                )}

                <div className={`p-8 ${tier.highlighted ? 'pt-10' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      tier.highlighted ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-end justify-center gap-2 mb-2">
                      <span className={`text-5xl font-black ${
                        tier.highlighted ? 'text-accent' : 'text-gray-900'
                      }`}>
                        {tier.price}
                      </span>
                      <span className="text-2xl font-bold text-gray-600 mb-2">€</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      pro Tag<span className="text-xs">*</span>
                    </p>
                  </div>

                  <div className="h-px bg-gray-200 my-6"></div>

                  <div className="space-y-4 mb-8 min-h-[160px]">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                          tier.highlighted ? 'bg-accent' : 'bg-gray-200'
                        } flex items-center justify-center mt-0.5`}>
                          <Check className={`w-3 h-3 ${
                            tier.highlighted ? 'text-white' : 'text-gray-600'
                          }`} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {tier.note && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-4">
                        {tier.note}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenModal(tier.name)}
                    className={`w-full px-6 py-4 text-base font-semibold rounded-xl transition-all ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                        : 'bg-gray-900 text-white hover:bg-gray-800 hover:-translate-y-1'
                    }`}
                    type="button"
                  >
                    {tier.highlighted ? (
                      <span className="flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Jetzt anfragen
                      </span>
                    ) : (
                      'Preis anfragen'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12 max-w-3xl mx-auto">
          <span className="text-xs">*</span>Platzhalterpreise (Beispiel). Preislogik: Tagessatz × Zeitraum ± Optionen. Konkreter Preis nach Zeitraum & Fahrzeug – Details auf Anfrage.
        </p>
      </div>
    </section>
  );
}
