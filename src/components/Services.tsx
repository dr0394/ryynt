import VehicleSlideshow from './VehicleSlideshow';

interface VehiclesProps {
  onOpenModal: (prefill?: string) => void;
}

const vehicles = [
  {
    name: 'Mercedes-AMG CLA 45 S',
    description: 'Der perfekte Mix aus Eleganz und Performance. 421 PS pure Emotion auf vier Rädern – für Fahrten, die bleiben.',
    price: 'ab 200,00 €',
    images: [
      'https://i.imgur.com/vVvbpuG.jpeg',
      'https://i.imgur.com/6auduzD.jpeg',
      'https://i.imgur.com/phE82Ap.jpeg',
      'https://i.imgur.com/4sf7EM9.jpeg',
      'https://i.imgur.com/wUrgwbD.jpeg',
      'https://i.imgur.com/rVcwIxa.jpeg',
    ],
  },
  {
    name: 'Audi RS3',
    description: 'Kompakte Power mit ikonischem Sound. Performance, die im Alltag funktioniert und auf der Landstraße begeistert.',
    price: 'ab 200,00 €',
    images: [
      'https://i.imgur.com/4bpXFkd.jpeg',
      'https://i.imgur.com/syA4FfS.jpeg',
      'https://i.imgur.com/PTC7oDU.jpeg',
      'https://i.imgur.com/m3aF1ft.jpeg',
      'https://i.imgur.com/KDUaWht.jpeg',
    ],
  },
];

export default function Vehicles({ onOpenModal }: VehiclesProps) {
  return (
    <section id="fahrzeuge" className="py-24 px-5 bg-black" aria-label="Fahrzeuge">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light text-white mb-16 text-center cinematic-heading">
          Fahrzeuge & Preise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all rounded-2xl shadow-2xl hover:shadow-3xl"
            >
              <div className="relative h-96 overflow-hidden">
                <VehicleSlideshow images={vehicle.images} name={vehicle.name} />
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
