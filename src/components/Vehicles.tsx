import { Check } from 'lucide-react';

interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'Kleinwagen',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=70',
    features: ['Stadtfreundlich & sparsam', 'Einfach parken in Köln', 'Ideal für 1–2 Personen'],
  },
  {
    name: 'Kompaktklasse',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=70',
    features: ['Komfort für Stadt & Autobahn', 'Mehr Platz für Gepäck', 'Beliebt für Business & Alltag'],
  },
  {
    name: 'Kombi/SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=70',
    features: ['Viel Raum für Familie & Gepäck', 'Komfort auf längeren Strecken', 'Ideal für Ausflüge & Umzüge light'],
  },
  {
    name: 'Transporter',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=70',
    features: ['Für Umzug, Lieferung, Projekt', 'Praktisch & robust', 'Auf Anfrage je nach Bedarf'],
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-20 px-5" aria-label="Fahrzeuge">
      <div className="max-w-container mx-auto">
        <span className="inline-flex items-center gap-2.5 px-3 py-2 border border-gray-200/12 bg-bg-surface/60 rounded-full text-gray-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Fahrzeuge
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 mb-2">
          Wähle die passende Kategorie
        </h2>
        <p className="text-lg text-gray-200/90 mb-4.5">
          Kleinwagen bis Transporter – du sagst Zeitraum & Bedarf, wir schlagen passend vor.
        </p>

        <div className="overflow-x-auto pb-2.5 scrollbar-thin">
          <div className="flex gap-3.5 min-w-min">
            {vehicles.map((vehicle) => (
              <article key={vehicle.name} className="border border-gray-200/12 bg-bg-surface/68 rounded-card shadow-card-soft min-w-[280px] max-w-[320px] overflow-hidden">
                <div
                  className="h-[168px] bg-cover bg-center"
                  style={{
                    backgroundImage: `
                      linear-gradient(180deg, rgba(11,15,23,.10), rgba(11,15,23,.86)),
                      radial-gradient(500px 220px at 25% 25%, rgba(34,197,94,.14), transparent 60%),
                      url('${vehicle.image}')
                    `,
                  }}
                  aria-hidden="true"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3">{vehicle.name}</h3>
                  <div className="grid gap-2 mb-3.5">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-gray-200/90">
                        <div className="w-4 h-4 rounded-md bg-gray-200/8 border border-gray-200/12 grid place-items-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onOpenModal(vehicle.name)}
                    className="w-full px-3 py-2.5 text-sm font-semibold rounded-btn bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:-translate-y-0.5 transition-all"
                    type="button"
                  >
                    Anfragen
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-2.5">
          Hinweis: Bilder sind Platzhalter. Fahrzeugmodelle/Details erhältst du nach Anfrage.
        </p>
      </div>
    </section>
  );
}
