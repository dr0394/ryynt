interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <img
              src="https://alkaio.com/media/1975258146365236.png"
              alt="RYNT NOW"
              className="h-20 w-auto object-contain"
            />
          </a>

          <nav className="flex items-center gap-8">
            <a href="/#fahrzeuge" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
              Fahrzeuge & Preise
            </a>
            <a href="/kontakt" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
              Kontakt & Über uns
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
