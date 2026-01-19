interface HeroProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=2400&q=80")`,
        }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
          Premium Autovermietung
        </h1>

        <button
          onClick={() => onOpenModal()}
          className="px-10 py-4 text-lg font-light bg-white text-black rounded-full hover:bg-gray-100 transition-all"
          type="button"
        >
          Fahrzeug wählen
        </button>
      </div>
    </section>
  );
}
