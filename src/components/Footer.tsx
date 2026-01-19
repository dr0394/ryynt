import { Gem } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-black py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Gem className="w-6 h-6 text-gray-400" />
              <span className="text-white font-medium text-lg">Luxerra</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Premium car rental service in Los Angeles. Experience luxury, comfort, and style with our exclusive fleet.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p><strong className="text-gray-300">Address:</strong> Los Angeles, CA</p>
              <p><strong className="text-gray-300">Phone:</strong> <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 234 567 890</a></p>
              <p><strong className="text-gray-300">Email:</strong> <a href="mailto:info@luxerra.com" className="hover:text-white transition-colors">info@luxerra.com</a></p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#fahrzeuge" className="text-gray-400 hover:text-white transition-colors">Cars</a></li>
              <li><a href="#preise" className="text-gray-400 hover:text-white transition-colors">Rental Terms</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="text-gray-400 hover:text-white transition-colors">Imprint</a></li>
              <li><a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800/50">
          <div className="flex justify-between items-center gap-4 flex-wrap text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Luxerra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
