interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-5">
          <a href="/" className="text-white font-light text-2xl tracking-wider">
            RYNT NOW
          </a>

          <nav className="flex items-center gap-8">
            <a href="/#fahrzeuge" className="text-white/80 hover:text-white transition-colors text-sm">
              Fahrzeuge & Preise
            </a>
            <a href="/kontakt" className="text-white/80 hover:text-white transition-colors text-sm">
              Kontakt & Über uns
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
