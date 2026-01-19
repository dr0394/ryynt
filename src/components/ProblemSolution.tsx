interface ProblemSolutionProps {
  onOpenModal: (prefill?: string) => void;
}

export default function ProblemSolution({ onOpenModal }: ProblemSolutionProps) {
  return (
    <section className="relative py-32 px-5 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(11,15,23,0.92) 0%, rgba(11,15,23,0.85) 50%, rgba(34,197,94,0.15) 100%),
            url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80")
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Warum RYNT?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Einfach mieten. Transparent bezahlen.
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Keine versteckten Kosten. Keine endlosen Telefonate. Nur du und dein perfekter Mietwagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all border border-white/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Das Problem</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Unklare Preise, versteckte Zusatzkosten, endlose Warteschleifen am Telefon.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Intransparente Konditionen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Versteckte Extras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Lange Wartezeiten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-dark/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all border border-accent/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Die Lösung</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                RYNT macht es einfach: Anfragen, Preis sehen, buchen. Fertig.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Transparente Preise vorab</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Schnelle Online-Anfrage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Unkomplizierte Abwicklung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onOpenModal()}
            className="px-8 py-4 text-base font-semibold bg-white text-black hover:bg-gray-100 transition-all rounded-full shadow-lg hover:shadow-xl"
            type="button"
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
