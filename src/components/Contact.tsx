interface ContactProps {
  onOpenModal: (prefill?: string) => void;
}

export default function Contact({ onOpenModal }: ContactProps) {
  return (
    <section id="kontakt" className="py-32 px-5 bg-gray-50" aria-label="Kontakt">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
          Kontakt
        </h2>

        <div className="space-y-4 mb-12 text-gray-600">
          <p>
            <a href="tel:+49XXXXXXXXXX" className="hover:text-gray-900 transition-colors">
              +49 XX XXX XXX
            </a>
          </p>
          <p>
            <a href="mailto:info@rynt.de" className="hover:text-gray-900 transition-colors">
              info@rynt.de
            </a>
          </p>
        </div>

        <button
          onClick={() => onOpenModal()}
          className="px-10 py-4 text-lg font-light bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all"
          type="button"
        >
          Anfrage senden
        </button>
      </div>
    </section>
  );
}
