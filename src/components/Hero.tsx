import { Shield } from 'lucide-react';

interface HeroProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative py-20 px-5 overflow-hidden" aria-label="Hero">
      <div className="absolute top-8 left-8">
        <h3 className="text-xl font-light text-gray-400/70 tracking-wide">Entraw</h3>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center py-8">
        <h2 className="text-4xl font-light text-gray-400/60 tracking-wide">Car Rental Website</h2>
      </div>

      <div className="max-w-7xl mx-auto pt-32">
        <div className="relative rounded-[32px] overflow-hidden bg-black shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=2400&q=80")`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="relative z-10 px-12 py-24 min-h-[600px] flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 w-fit">
              <Shield className="w-4 h-4 text-gray-300" />
              <span className="text-sm text-gray-300">Ausgewählt von mehr als 250 Kunden</span>
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
                Premium Car Rental<br />in Los Angeles
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Experience unmatched comfort, style, and service — wherever the road takes you.
              </p>

              <button
                onClick={() => onOpenModal()}
                className="px-8 py-4 text-base font-medium bg-white text-black rounded-full hover:bg-gray-100 transition-all"
                type="button"
              >
                Choose Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
