export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="max-w-container mx-auto px-5">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark p-2 shadow-md">
                <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-sm grid place-items-center text-white font-black text-xl">
                  R
                </div>
              </div>
              <span className="text-gray-900 font-extrabold text-xl tracking-tight">RYNT</span>
            </a>
            <a href="/" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
              Zur Startseite
            </a>
          </div>
        </div>
      </header>

      <main className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>RYNT Autovermietung</strong><br />
                [Firmenname / Inhabername]<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Telefon: <a href="tel:+49XXXXXXXXXX" className="text-accent hover:underline">+49 XXX XXX XXXX</a><br />
                E-Mail: <a href="mailto:info@rynt.de" className="text-accent hover:underline">info@rynt.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-700 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-700 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Haftung für Inhalte</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Haftung für Links</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Urheberrecht</h3>
              <p className="text-gray-700 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-b from-accent to-accent-dark text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200/20 bg-white py-8 px-5 mt-16">
        <div className="max-w-container mx-auto text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} RYNT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
