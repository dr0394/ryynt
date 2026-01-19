interface HeroProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const scrollToVehicles = () => {
    document.getElementById('fahrzeuge')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=80")`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 royal-glow">
          RYNT ME NOW – deinen Mietwagen
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light cinematic-heading">
          Exklusive Performance-Fahrzeuge. Transparent. Flexibel. Direkt verfügbar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToVehicles}
            className="px-10 py-4 text-base font-light bg-white text-black hover:bg-gray-100 transition-all rounded-full shadow-lg hover:shadow-xl"
            type="button"
          >
            Fahrzeuge ansehen
          </button>
          <button
            onClick={() => onOpenModal()}
            className="px-10 py-4 text-base font-light bg-transparent text-white border border-white/60 hover:bg-white hover:text-black transition-all rounded-full backdrop-blur-sm"
            type="button"
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
