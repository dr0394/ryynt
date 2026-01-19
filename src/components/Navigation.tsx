interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <img
              src="https://alkaio.com/media/1975258146365236.jpeg"
              alt="RYNT NOW"
              className="h-20 w-auto object-contain mix-blend-lighten"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
          </a>

          <nav className="flex items-center gap-8">
            <a href="/#fahrzeuge" className="text-white/80 hover:text-white transition-colors text-sm font-light">
              Fahrzeuge & Preise
            </a>
            <a href="/kontakt" className="text-white/80 hover:text-white transition-colors text-sm font-light">
              Kontakt & Über uns
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
