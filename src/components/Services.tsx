interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'Mercedes-AMG CLA 45 S',
    description: 'Der perfekte Mix aus Eleganz und Performance. 421 PS pure Emotion auf vier Rädern – für Fahrten, die bleiben.',
    price: 'ab 200,00 €',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Audi RS3',
    description: 'Kompakte Power mit ikonischem Sound. Performance, die im Alltag funktioniert und auf der Landstraße begeistert.',
    price: 'ab 200,00 €',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-24 px-5 bg-black" aria-label="Fahrzeuge">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
          Fahrzeuge & Preise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all rounded-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${vehicle.image}')`,
                  }}
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-3">{vehicle.name}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{vehicle.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl text-white font-light">{vehicle.price}</span>
                  <button
                    onClick={() => onOpenModal(vehicle.name)}
                    className="px-6 py-3 text-sm font-light bg-white text-black hover:bg-gray-100 transition-all rounded-full shadow-md hover:shadow-lg"
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
