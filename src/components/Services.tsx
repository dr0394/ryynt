import VehicleSlideshow from './VehicleSlideshow';

interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'AC Cobra',
    description: 'Ikonischer Klassiker mit 360 PS. Cabrio-Feeling pur mit 5-Gang Handschaltung.',
    price: 'ab 299,00 € / 8 Std.',
    specs: { seats: '2 Sitze', transmission: 'H Schaltung 5 Gang', type: 'Cabrio', power: '360 PS' },
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'Mercedes Benz SLS AMG Roadster',
    description: 'Supersportwagen mit Flügeltüren. 571 PS für ultimative Performance.',
    price: 'AUF ANFRAGE',
    specs: { seats: '2 Sitze', transmission: 'Automatik', type: 'Cabrio', power: '571 PS' },
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'Smart Crossblade',
    description: 'Extravagantes Cabrio-Erlebnis. Kompakt, offen und individuell.',
    price: 'ab 159,00 € / 8 Std.',
    specs: { seats: '2 Sitze', transmission: 'Automatik', type: 'Cabrio', power: '71 PS' },
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'Fiat 500R',
    description: 'Klassischer italienischer Charme. 594ccm purer Retro-Style.',
    price: 'ab 159,00 € / 8 Std.',
    specs: { seats: '4 Sitze', transmission: 'Handschalter', type: 'Cabrio', power: '594ccm' },
    images: ['https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'VW Käfer Cabrio',
    description: 'Kultig und zeitlos. Der Klassiker für besondere Anlässe.',
    price: 'ab 199,00 € / 8 Std.',
    specs: { seats: '4 Sitze', transmission: 'Handschalter', type: 'Cabrio', power: '50 PS' },
    images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'Mercedes Benz SL500',
    description: 'Luxus-Roadster mit 305 PS. Eleganz trifft auf Performance.',
    price: 'ab 199,00 € / 8 Std.',
    specs: { seats: '2 Sitze', transmission: 'Automatik', type: 'Cabrio', power: '305 PS' },
    images: ['https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1400&q=80'],
  },
  {
    name: 'Ford Mustang Cabrio',
    description: 'American Muscle Car. 200 PS für das authentische USA-Feeling.',
    price: 'ab 219,00 € / 8 Std.',
    specs: { seats: '4 Sitze', transmission: 'Automatik', type: 'Cabrio', power: '200 PS' },
    images: ['https://images.unsplash.com/photo-1584345604476-8ec5f5463f79?auto=format&fit=crop&w=1400&q=80'],
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-24 px-5 bg-black" aria-label="Fahrzeuge">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light text-white mb-16 text-center cinematic-heading">
          Unsere Fahrzeuge
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all rounded-2xl shadow-2xl hover:shadow-3xl"
            >
              <div className="relative h-64 overflow-hidden">
                <VehicleSlideshow images={vehicle.images} name={vehicle.name} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-3">{vehicle.name}</h3>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-white/60">
                  <div>{vehicle.specs.seats}</div>
                  <div>{vehicle.specs.transmission}</div>
                  <div>{vehicle.specs.type}</div>
                  <div>{vehicle.specs.power}</div>
                </div>

                <p className="text-white/70 mb-4 text-sm leading-relaxed">{vehicle.description}</p>

                <div className="flex flex-col gap-3">
                  <span className="text-lg text-accent font-light">{vehicle.price}</span>
                  <button
                    onClick={() => onOpenModal(vehicle.name)}
                    className="w-full px-6 py-2.5 text-sm font-light bg-gradient-to-r from-accent to-accent-dark text-white hover:shadow-lg hover:shadow-accent/30 transition-all rounded-full"
                    type="button"
                  >
                    Jetzt anfragen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
