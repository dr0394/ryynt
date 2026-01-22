import { Heart, Target, Award } from 'lucide-react';

interface AboutProps {
  onOpenModal: (prefill?: string) => void;
}

export default function About({ onOpenModal }: AboutProps) {
  return (
    <section id="ueber-uns" className="relative py-24 px-5 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-accent-dark" aria-label="Über uns">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=2000&q=80")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm mb-6 font-medium border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Über RYNT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Premium Performance-Fahrzeuge mieten in Köln
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Entdecken Sie exklusive Sportwagen-Erlebnisse mit RYNT NOW. Wir bieten Ihnen Zugang zu zwei der begehrtesten Performance-Fahrzeuge: Mercedes-AMG CLA 45 S und Audi RS3. Jede Fahrt wird zu einem unvergesslichen Erlebnis.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Exklusive Performance</h3>
                  <p className="text-gray-300">
                    Erleben Sie über 400 PS in beiden Fahrzeugen. Pure Performance für unvergessliche Momente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Transparent & Fair</h3>
                  <p className="text-gray-300">
                    Keine versteckten Kosten. Klare Preise. Unkomplizierte Abwicklung von Anfang bis Ende.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Lokal in Köln</h3>
                  <p className="text-gray-300">
                    Schnelle Verfügbarkeit, persönlicher Service und kurze Wege direkt in Köln und Umgebung.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal()}
              className="px-8 py-4 rounded-xl font-semibold bg-accent text-gray-900 hover:bg-white transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
              type="button"
            >
              Jetzt unverbindlich anfragen
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"
                alt="RYNT Team und Fahrzeuge"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-accent mb-1">500+</div>
                    <div className="text-xs text-gray-700 font-medium">Zufriedene Kunden</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-accent mb-1">50+</div>
                    <div className="text-xs text-gray-700 font-medium">Fahrzeuge</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-accent mb-1">5.0</div>
                    <div className="text-xs text-gray-700 font-medium">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
