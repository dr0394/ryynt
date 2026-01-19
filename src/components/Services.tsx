import { Clock, Calendar, Briefcase, TrendingUp } from 'lucide-react';

interface ServicesProps {
  onOpenModal: (prefill?: string) => void;
}

const services = [
  {
    title: 'Kurzzeitmiete',
    description: 'Stunden- oder tageweise. Perfect für spontane Fahrten oder kurzfristige Termine.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    features: ['Ab 1 Stunde', 'Flexible Abholung', 'City & Umgebung'],
  },
  {
    title: 'Tages- & Wochenendmiete',
    description: 'Für Tagesausflüge, Wochenendtrips oder mehrtägige Unternehmungen.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    features: ['Attraktive Tagespauschalen', 'Wochenendspecials', 'Freie Kilometerwahl'],
  },
  {
    title: 'Geschäftskunden',
    description: 'Maßgeschneiderte Lösungen für Unternehmen, Projekte und Firmenbedarf.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: ['Firmenkonditionen', 'Rechnungsservice', 'Fuhrparklösungen'],
  },
  {
    title: 'Langzeitmiete',
    description: 'Flexible Monatsmiete ohne Bindung. Ideal für längere Zeiträume.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    features: ['Ab 4 Wochen', 'Flexible Laufzeit', 'All-Inclusive-Pakete'],
  },
];

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section className="py-24 px-5 bg-gradient-to-b from-gray-50 to-white" aria-label="Leistungsübersicht">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm mb-4 font-medium">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Unsere Mietmodelle
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Flexibel mieten nach deinen Bedürfnissen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Stunde bis zum Monat – wir haben das passende Mietmodell für jeden Anlass
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('${service.image}')`,
                    }}
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-accent" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenModal()}
                    className="w-full px-6 py-3 rounded-xl font-semibold bg-gray-900 text-white hover:bg-accent transition-all shadow-md hover:shadow-lg"
                    type="button"
                  >
                    Jetzt anfragen
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
