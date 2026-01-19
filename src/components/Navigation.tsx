interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="max-w-container mx-auto px-5">
        <div className="flex items-center justify-between py-4 gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="RYNT Start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark p-2 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-sm grid place-items-center text-white font-black text-xl">
                R
              </div>
            </div>
            <span className="text-gray-900 font-extrabold text-xl tracking-tight">RYNT</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            <a href="#fahrzeuge" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              Fahrzeuge
            </a>
            <a href="#preise" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              Preise
            </a>
            <a href="#ablauf" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              Ablauf
            </a>
            <a href="#ueber-uns" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              Über uns
            </a>
            <a href="#faq" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              FAQ
            </a>
            <a href="#kontakt" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg border border-transparent hover:bg-gray-50 hover:text-accent transition-all">
              Kontakt
            </a>
          </nav>

          <button
            onClick={() => onOpenModal()}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-b from-accent to-accent-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            type="button"
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </header>
  );
}
