export default function Footer() {
  return (
    <footer className="border-t border-gray-200/20 bg-white py-12 px-5">
      <div className="max-w-container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark p-2 shadow-md">
                <div className="w-full h-full rounded bg-white/20 backdrop-blur-sm grid place-items-center text-white font-black text-lg">
                  R
                </div>
              </div>
              <span className="text-gray-900 font-extrabold text-lg">RYNT</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-sm">
              Autovermietung in Köln & Umgebung – schnell anfragen, transparent mieten. Dein zuverlässiger Partner für flexible Mobilität.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong className="text-gray-900">Adresse:</strong> [Ihre Adresse hier]</p>
              <p><strong className="text-gray-900">Telefon:</strong> <a href="tel:+49XXXXXXXXXX" className="hover:text-accent transition-colors">+49 XXX XXX XXXX</a></p>
              <p><strong className="text-gray-900">E-Mail:</strong> <a href="mailto:info@rynt.de" className="hover:text-accent transition-colors">info@rynt.de</a></p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#fahrzeuge" className="text-gray-600 hover:text-accent transition-colors">Fahrzeuge</a></li>
              <li><a href="#preise" className="text-gray-600 hover:text-accent transition-colors">Preise</a></li>
              <li><a href="#ablauf" className="text-gray-600 hover:text-accent transition-colors">Ablauf</a></li>
              <li><a href="#ueber-uns" className="text-gray-600 hover:text-accent transition-colors">Über uns</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="text-gray-600 hover:text-accent transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-gray-600 hover:text-accent transition-colors">Datenschutz</a></li>
              <li><a href="#kontakt" className="text-gray-600 hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center gap-4 flex-wrap text-sm text-gray-500">
            <p>© {new Date().getFullYear()} RYNT. Alle Rechte vorbehalten.</p>
            <p className="text-xs">
              Made with ❤️ in Köln
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
