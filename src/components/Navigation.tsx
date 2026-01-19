import { Instagram, MessageCircle, Phone, Gem } from 'lucide-react';

interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5 gap-8">
          <a href="#top" className="flex items-center gap-2" aria-label="Luxerra Start">
            <Gem className="w-6 h-6 text-gray-300" />
            <span className="text-white font-medium text-lg tracking-wide">Luxerra</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            <a href="#fahrzeuge" className="text-sm text-gray-300 font-normal hover:text-white transition-colors">
              Cars
            </a>
            <a href="#preise" className="text-sm text-gray-300 font-normal hover:text-white transition-colors">
              Rental Terms
            </a>
            <a href="#kontakt" className="text-sm text-gray-300 font-normal hover:text-white transition-colors">
              News
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => onOpenModal()}
              className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-100 transition-all ml-2"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
