import { ChevronDown, ArrowRight } from 'lucide-react';

interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'Mercedes-AMG CLA 45 S',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80',
    speed: '270 km/h',
    acceleration: '4.0 sec',
    power: '421 PS',
    description: 'Kompakter Performance-Sportler mit AMG-Power',
  },
  {
    name: 'Audi RS3',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
    speed: '290 km/h',
    acceleration: '3.8 sec',
    power: '400 PS',
    description: 'Fünfzylinder-Klang trifft auf Allradantrieb',
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-32 px-5 bg-[#0A0E1A]" aria-label="Fahrzeuge">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-light border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Unsere Fahrzeuge
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Premium Performance
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Exklusive Sportlimousinen mit Performance und Style
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 transition-all hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="relative h-[350px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('${vehicle.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm text-white font-light border border-white/20">
                    {vehicle.speed}
                  </span>
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm text-white font-light border border-white/20">
                    {vehicle.acceleration}
                  </span>
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm text-white font-light border border-white/20">
                    {vehicle.power}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-3">{vehicle.name}</h3>
                <p className="text-white/60 text-sm mb-6 font-light">{vehicle.description}</p>
                <button
                  onClick={() => onOpenModal(vehicle.name)}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-light rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  type="button"
                >
                  Jetzt anfragen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
