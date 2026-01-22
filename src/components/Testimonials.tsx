import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maximilian S.',
    text: 'Der Mercedes-AMG CLA 45 S war ein absolutes Highlight! Die Buchung war unkompliziert, die Übergabe professionell und das Fahrzeug in perfektem Zustand. Die 421 PS haben mein Wochenende unvergesslich gemacht. Absolut empfehlenswert!',
    rating: 5,
  },
  {
    name: 'Lisa M.',
    text: 'Tolle Erfahrung mit RYNT NOW! Der Audi RS3 ist ein Traum – der Sound ist unglaublich und die Performance beeindruckend. Alles lief sehr transparent ab, keine versteckten Kosten. Werde definitiv wieder buchen!',
    rating: 5,
  },
  {
    name: 'Thomas K.',
    text: 'Perfekter Service von Anfang bis Ende. Das Team war sehr hilfsbereit und flexibel bei der Abholung. Der AMG hat alle Erwartungen übertroffen. Für jeden Sportwagen-Fan ein absolutes Muss!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-5 bg-gradient-to-br from-bg via-bg-surface to-bg" aria-label="Kundenstimmen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-light border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            Unsere Kundenstimmen
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Erfahren Sie, was unsere Kunden über ihre Erlebnisse mit RYNT NOW sagen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              <p className="text-white/80 leading-relaxed mb-6 font-light">
                {testimonial.text}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-accent font-light">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
