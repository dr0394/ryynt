interface CTASectionProps {
  onOpenModal: (prefill?: string) => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-32 px-5 bg-black" aria-label="CTA">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
          Jetzt Wunschfahrzeug anfragen
        </h2>

        <button
          onClick={() => onOpenModal()}
          className="px-12 py-4 text-lg font-light bg-white text-black hover:bg-gray-100 transition-all"
          type="button"
        >
          Kontakt aufnehmen
        </button>
      </div>
    </section>
  );
}
