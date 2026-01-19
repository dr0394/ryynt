interface ContactProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Contact({ onOpenModal }: ContactProps) {
  return (
    <section id="kontakt" className="py-20 px-5" aria-label="Kontakt">
      <div className="max-w-container mx-auto">
        <span className="inline-flex items-center gap-2.5 px-3 py-2 border border-gray-200/12 bg-bg-surface/60 rounded-full text-gray-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Kontakt
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 mb-2">
          Schnell anfragen – wir melden uns zeitnah
        </h2>
        <p className="text-lg text-gray-200/90 mb-4.5">
          WhatsApp ist meist am schnellsten. Alternativ per E-Mail.
        </p>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4.5 items-stretch">
          <div className="border border-gray-200/12 bg-bg-surface/68 rounded-card p-5.5 shadow-card-soft">
            <h3 className="text-lg font-bold mb-3.5">Kontaktbox</h3>
            <div className="h-px bg-gray-200/12 my-3.5"></div>

            <p className="mb-2.5">
              <strong className="text-gray-200/92 block mb-1">Telefon / WhatsApp:</strong>
              <a href="tel:+49XXXXXXXXXX" className="underline underline-offset-2">
                +49 XX XXX XXX (Platzhalter)
              </a>
              <br />
              <a
                href="https://wa.me/49XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                WhatsApp öffnen (Platzhalter)
              </a>
            </p>

            <p className="mb-2.5">
              <strong className="text-gray-200/92 block mb-1">E-Mail:</strong>
              <a href="mailto:info@rynt.de" className="underline underline-offset-2">
                info@rynt.de (Platzhalter)
              </a>
            </p>

            <div className="h-px bg-gray-200/12 my-3.5"></div>

            <p className="mb-2.5">
              <strong className="text-gray-200/92 block mb-1">Adresse:</strong>
              Köln (genaue Adresse als Platzhalter)
            </p>

            <p className="mb-2.5">
              <strong className="text-gray-200/92 block mb-1">Öffnungszeiten:</strong>
              Mo–Fr 09:00–18:00 (Platzhalter) · Sa 10:00–14:00 (Platzhalter)
            </p>

            <div className="h-px bg-gray-200/12 my-3.5"></div>

            <button
              onClick={() => onOpenModal()}
              className="w-full px-4 py-3 rounded-btn font-semibold bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:-translate-y-0.5 transition-all"
              type="button"
            >
              Jetzt Anfrage starten
            </button>
            <p className="text-xs text-gray-400 mt-2.5">
              Formular erstellt automatisch WhatsApp-Nachricht + E-Mail.
            </p>
          </div>

          <div className="border border-gray-200/12 bg-bg-surface/68 rounded-card overflow-hidden shadow-card-soft">
            <iframe
              className="w-full h-full min-h-[320px]"
              title="Google Maps – Köln (Platzhalter)"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=K%C3%B6ln&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
