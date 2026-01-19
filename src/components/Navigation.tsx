import { Car } from 'lucide-react';

interface NavigationProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <a href="#top" className="flex items-center gap-2" aria-label="Start">
            <Car className="w-6 h-6 text-white" />
            <span className="text-white font-light text-xl tracking-wider">LUXERRA</span>
          </a>

          <button
            onClick={() => onOpenModal()}
            className="px-8 py-2.5 text-sm font-light bg-white text-black rounded-full hover:bg-gray-100 transition-all"
            type="button"
          >
            Kontakt
          </button>
        </div>
      </div>
    </header>
  );
}
