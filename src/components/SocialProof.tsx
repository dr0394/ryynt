import { Star } from 'lucide-react';

interface SocialProofProps {
  onOpenModal: (prefill?: string) => void;
}

const testimonials = [
  {
    text: '„Sehr unkomplizierte Abwicklung und faire Preise. Das Auto war sauber und in einwandfreiem Zustand. Gerne wieder!"',
    author: 'Markus K.',
    rating: 5,
    date: 'vor 2 Wochen',
  },
  {
    text: '„Schnelle Reaktion auf meine Anfrage und transparente Kostenaufstellung. Abholung war problemlos, Top Service!"',
    author: 'Sarah W.',
    rating: 5,
    date: 'vor 1 Monat',
  },
  {
    text: '„Perfekt für meinen Umzug. Der Transporter war genau richtig und der Preis absolut fair. Sehr empfehlenswert!"',
    author: 'Dennis R.',
    rating: 5,
    date: 'vor 3 Wochen',
  },
];

export default function SocialProof({ onOpenModal }: SocialProofProps) {
  return (
    <section className="py-20 px-5" aria-label="Social Proof">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2.5 px-3 py-2 border border-gray-200/12 bg-bg-surface/60 rounded-full text-gray-400 text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Kundenbewertungen
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-gray-200/90">
              Echte Bewertungen von echten Kunden – powered by Google
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-gray-900">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Basierend auf Google Bewertungen</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark grid place-items-center text-white font-bold text-lg shadow-md">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-semibold">{testimonial.author}</strong>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{testimonial.text}</p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenModal()}
            className="px-6 py-3 rounded-btn font-semibold bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
            type="button"
          >
            Jetzt unverbindlich anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
