interface ServicesProps {
  onOpenModal: (prefill?: string) => void;
}

const services = [
  {
    title: 'Tagesmiete',
    description: 'Flexibel für kurze Zeiträume',
  },
  {
    title: 'Langzeitmiete',
    description: 'Für längere Projekte',
  },
  {
    title: 'Business',
    description: 'Firmenlösungen',
  },
];

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section className="py-32 px-5 bg-white" aria-label="Leistungen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
          Unsere Leistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group text-center"
            >
              <h3 className="text-2xl font-light text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button
                onClick={() => onOpenModal()}
                className="text-sm text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors"
                type="button"
              >
                Anfragen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
