import { Check, Zap, Shield, Clock, MapPin, Users } from 'lucide-react';

interface BenefitsProps {
  onOpenModal: (prefill?: string) => void;
}

const benefits = [
  {
    title: 'Transparente Preise',
    description: 'Klare Preislogik ohne versteckte Kosten. Du weißt vorher genau, was dich erwartet.',
    icon: Shield,
  },
  {
    title: 'Schnelle Abwicklung',
    description: 'Zeitnahe Rückmeldung und unkomplizierte Prozesse. Keine langen Wartezeiten.',
    icon: Zap,
  },
  {
    title: 'Flexible Laufzeiten',
    description: 'Von Stunden bis Monaten – wir passen uns deinem Bedarf an.',
    icon: Clock,
  },
  {
    title: 'Lokal in Köln',
    description: 'Kurze Wege, schnelle Abholung und persönlicher Service vor Ort.',
    icon: MapPin,
  },
  {
    title: 'Gepflegte Fahrzeuge',
    description: 'Saubere, gewartete Autos in einwandfreiem Zustand.',
    icon: Check,
  },
  {
    title: 'Persönlicher Service',
    description: 'Direkter Kontakt, individuelle Beratung und flexible Lösungen.',
    icon: Users,
  },
];

export default function Benefits({ onOpenModal }: BenefitsProps) {
  return (
    <section className="py-24 px-5 bg-white" aria-label="Vorteile">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm mb-6 font-medium">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Deine Vorteile
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Warum Kunden RYNT wählen
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Wir kombinieren den Service einer lokalen Autovermietung mit der Einfachheit moderner Online-Buchung.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, rgba(34,197,94,0.2), rgba(22,163,74,0.4)),
                    url("https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80")
                  `,
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <p className="text-gray-900 font-semibold text-lg mb-2">
                    Über 500 zufriedene Kunden
                  </p>
                  <p className="text-gray-600 text-sm">
                    Vertrauen uns seit Jahren bei ihrer Mobilität in Köln
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-8 text-center">
              <button
                onClick={() => onOpenModal()}
                className="px-8 py-4 text-base font-semibold bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:shadow-xl transition-all rounded-full shadow-lg"
                type="button"
              >
                Jetzt unverbindlich anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
