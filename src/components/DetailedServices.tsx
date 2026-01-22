import { Car, Users, Film, Route, Gift, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Fahrzeugvermietung',
    description: 'Mieten Sie erstklassige Fahrzeuge für jede Gelegenheit, von klassisch-elegant bis sportlich-dynamisch.',
  },
  {
    icon: Users,
    title: 'Chauffeurservice für Events und Hochzeiten',
    description: 'Erleben Sie besondere Momente mit unseren professionellen Fahrern, die Events und Hochzeiten unvergesslich machen.',
  },
  {
    icon: Film,
    title: 'Film- und Fotovermietungen',
    description: 'Nutzen Sie unsere Fahrzeuge für Film- und Fotoprojekte, von exklusiven Kulissen bis hin zu speziellen Anforderungen.',
  },
  {
    icon: Route,
    title: 'Erlebnis Touren mit Fahrzeugwechsel',
    description: 'Entdecken Sie einzigartige Fahrzeuge während geführter Touren, bei denen regelmäßiger Fahrzeugwechsel für Abwechslung sorgt.',
  },
  {
    icon: Gift,
    title: 'Gutscheine zum Verschenken',
    description: 'Verschenken Sie unvergessliche Fahrerlebnisse mit unseren Gutscheinen, die flexibel einlösbar sind.',
  },
  {
    icon: UserCheck,
    title: 'Langzeitmiete und Co-Pilot Fahrten',
    description: 'Genießen Sie langfristige Mobilitätsoptionen oder erleben Sie Fahrzeuge hautnah als Co-Pilot mit fachkundiger Führung.',
  },
];

export default function DetailedServices() {
  return (
    <section id="dienstleistungen" className="py-24 px-5 bg-gradient-to-br from-bg-surface via-bg to-bg-surface" aria-label="Dienstleistungen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-light border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Unser Angebot
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            Unsere Vielfältigen Dienstleistungen
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Entdecken Sie einzigartige Möglichkeiten mit RYNT NOW. Von klassischen Mietfahrzeugen bis zu exklusiven Erlebnis-Touren – wir passen uns Ihren individuellen Anforderungen an.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-dark/20 backdrop-blur-sm flex items-center justify-center border border-accent/30 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
