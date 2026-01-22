import { Check, Star, Zap } from 'lucide-react';

interface PricingProps {
  onOpenModal: (prefill?: string) => void;
}

const pricingTiers = [
  {
    name: 'Mercedes-AMG CLA 45 S',
    priceLabel: 'Auf Anfrage',
    features: ['421 PS Leistung', '4MATIC+ Allrad', 'AMG Performance', 'Premium Ausstattung'],
    highlighted: true,
    badge: 'Premium',
  },
  {
    name: 'Audi RS3',
    priceLabel: 'Auf Anfrage',
    features: ['400 PS 5-Zylinder', 'Quattro Allrad', 'RS Performance', 'Sport-Interieur'],
    highlighted: true,
    badge: 'Performance',
  },
];

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preise" className="relative py-32 px-5 overflow-hidden" aria-label="Preise">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1523] via-[#0A0E1A] to-[#0F1523]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-dark/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-light border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Fahrzeuge & Preise
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Transparente Konditionen
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Individuelle Preise basierend auf Zeitraum und Fahrzeugwahl
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-light rounded-full shadow-xl">
                  <Star className="w-4 h-4 fill-white" />
                  {tier.badge}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-accent/20 transition-all hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent"></div>

                <div className="p-10 pt-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-white mb-6">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-light text-accent">
                        {tier.priceLabel}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 font-light">
                      Individuell nach Zeitraum
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

                  <div className="space-y-4 mb-10">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 border border-accent/40">
                          <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                        </div>
                        <span className="text-white/80 leading-relaxed font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenModal(tier.name)}
                    className="w-full px-8 py-4 text-base font-light rounded-full bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                    type="button"
                  >
                    <Zap className="w-4 h-4" />
                    Jetzt anfragen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mt-16 max-w-3xl mx-auto font-light">
          Die Preise richten sich nach Mietdauer, Saison und Verfügbarkeit. Sende uns eine Anfrage für ein individuelles Angebot.
        </p>
      </div>
    </section>
  );
}
