interface HeroProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const scrollToVehicles = () => {
    document.getElementById('fahrzeuge')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0F1523] to-[#0A0E1A]"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-dark/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-12 flex justify-center">
          <img
            src="/rynt.png"
            alt="RYNT NOW"
            className="h-40 md:h-56 lg:h-64 w-auto object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
          Premium Sportwagen mieten in Köln
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
          Erleben Sie die Faszination exklusiver Performance-Fahrzeuge. Mieten Sie den Mercedes-AMG CLA 45 S oder den Audi RS3 für unvergessliche Fahrten. Transparent. Unkompliziert. Direkt verfügbar.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={scrollToVehicles}
            className="px-12 py-4 text-lg font-light bg-gradient-to-r from-accent to-accent-dark text-white hover:shadow-xl hover:shadow-accent/30 transition-all rounded-full hover:-translate-y-1"
            type="button"
          >
            Fahrzeuge ansehen
          </button>
          <button
            onClick={() => onOpenModal()}
            className="px-12 py-4 text-lg font-light bg-transparent text-white border-2 border-accent/60 hover:bg-accent/10 hover:border-accent transition-all rounded-full"
            type="button"
          >
            Jetzt anfragen
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-accent mb-2">2</div>
            <div className="text-sm text-white/60">Performance-Fahrzeuge</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-light text-accent mb-2">24/7</div>
            <div className="text-sm text-white/60">Verfügbarkeit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-accent mb-2">100%</div>
            <div className="text-sm text-white/60">Transparent</div>
          </div>
        </div>
      </div>
    </section>
  );
}
