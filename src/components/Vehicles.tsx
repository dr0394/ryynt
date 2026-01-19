import { ChevronDown, ArrowRight } from 'lucide-react';

interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'Porsche 911 GT3 RS',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    speed: '320 km/h',
    acceleration: '3.2 sec',
    power: '520 hp',
    price: '$1,100',
  },
  {
    name: 'Mercedes-AMG GT',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80',
    speed: '318 km/h',
    acceleration: '3.5 sec',
    power: '577 hp',
    price: '$800',
  },
  {
    name: 'BMW M4 Competition',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80',
    speed: '330 km/h',
    acceleration: '3.4 sec',
    power: '562 hp',
    price: '$950',
  },
  {
    name: 'Audi RS6 Avant',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
    speed: '314 km/h',
    acceleration: '3.6 sec',
    power: '603 hp',
    price: '$1,200',
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-20 px-5 bg-black" aria-label="Fahrzeuge">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-light text-white text-center mb-16">
          Cars
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {['Brand', 'Car Type', 'Transmission', 'Most Relevant'].map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900/60 border border-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-800/60 transition-colors"
              type="button"
            >
              {filter}
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {vehicles.map((vehicle) => (
            <article key={vehicle.name} className="group bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all">
              <div className="relative h-[400px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${vehicle.image}')`,
                  }}
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-sm text-white">
                    {vehicle.speed}
                  </span>
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-sm text-white">
                    {vehicle.acceleration}
                  </span>
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-sm text-white">
                    {vehicle.power}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-medium text-white">{vehicle.name}</h3>
                  <button className="text-gray-400 hover:text-white transition-colors group/arrow">
                    <span className="text-sm mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 inline group-hover/arrow:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-gray-400 text-sm">from {vehicle.price}/day</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
