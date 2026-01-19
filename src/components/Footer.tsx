export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">
          <div className="text-center md:text-left">
            <p className="text-white font-light text-lg mb-2">RYNT NOW – deinen Mietwagen</p>
            <p>Köln & Umgebung</p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <a href="/#fahrzeuge" className="hover:text-white transition-colors">Fahrzeuge & Preise</a>
            <a href="/kontakt" className="hover:text-white transition-colors">Kontakt & Über uns</a>
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} RYNT NOW. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
