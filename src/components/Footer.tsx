export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="/">
              <img
                src="https://alkaio.com/media/1975258146365236.png"
                alt="RYNT NOW"
                className="h-16 w-auto object-contain mb-4 mx-auto md:mx-0"
              />
            </a>
            <p className="text-gray-600 text-sm">Köln & Umgebung</p>
            <p className="text-gray-600 text-sm mt-2">
              <a href="https://wa.me/4917661263911" className="hover:text-black transition-colors">
                WhatsApp: +49 176 61263911
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <a href="/#fahrzeuge" className="text-gray-600 hover:text-black transition-colors">Fahrzeuge & Preise</a>
            <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt & Über uns</a>
            <a href="/impressum" className="text-gray-600 hover:text-black transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-600 hover:text-black transition-colors">Datenschutz</a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} RYNT NOW. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
