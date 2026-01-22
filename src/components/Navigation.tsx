interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <a href="/" className="flex items-center">
            <img
              src="https://i.imgur.com/wXIKvhn.jpeg"
              alt="RYNT NOW"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="flex items-center gap-10">
            <a href="/#fahrzeuge" className="text-white hover:text-accent transition-colors text-base font-light tracking-wide">
              Fahrzeuge & Preise
            </a>
            <a href="/kontakt" className="text-white hover:text-accent transition-colors text-base font-light tracking-wide">
              Kontakt & Über uns
            </a>
            <button
              onClick={() => onOpenModal()}
              className="px-8 py-3 rounded-full font-light bg-gradient-to-r from-accent to-accent-dark text-black hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Anfragen
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
