export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <img
              src="https://alkaio.com/media/1975258146365236.jpeg"
              alt="RYNT NOW"
              className="h-16 w-auto object-contain mb-4 mx-auto md:mx-0 mix-blend-lighten"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
            <p className="text-white/60 text-sm">Köln & Umgebung</p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <a href="/#fahrzeuge" className="text-white/60 hover:text-white transition-colors">Fahrzeuge & Preise</a>
            <a href="/kontakt" className="text-white/60 hover:text-white transition-colors">Kontakt & Über uns</a>
            <a href="/impressum" className="text-white/60 hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-white/60 hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} RYNT NOW. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
