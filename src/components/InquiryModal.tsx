import { useState, useEffect, FormEvent } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCategory?: string;
}

const RYNT_CONFIG = {
  whatsappNumberE164: '49XXXXXXXXXX',
  email: 'info@rynt.de',
  serviceArea: 'Köln & Umgebung',
};

export default function InquiryModal({ isOpen, onClose, prefillCategory }: InquiryModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    category: prefillCategory || '',
    pickup: '',
    name: '',
    phone: '',
    note: '',
  });

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      if (prefillCategory) {
        setFormData((prev) => ({ ...prev, category: prefillCategory }));
      }
    }
  }, [isOpen, prefillCategory]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.fromDate || !formData.toDate || !formData.category || !formData.pickup) {
        return false;
      }
      if (formData.toDate < formData.fromDate) {
        alert('Bitte prüfe den Zeitraum: "Bis" darf nicht vor "Von" liegen.');
        return false;
      }
    } else if (step === 2) {
      if (!formData.name || !formData.phone) {
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const buildMessage = () => {
    let msg = `Hallo RYNT NOW Team,\n\n`;
    msg += `ich möchte einen Mietwagen anfragen.\n\n`;
    msg += `📍 Region: ${RYNT_CONFIG.serviceArea}\n`;
    msg += `🗓️ Zeitraum: ${formData.fromDate} bis ${formData.toDate}\n`;
    msg += `🚗 Wunschfahrzeug: ${formData.category}\n`;
    msg += `📌 Abholort: ${formData.pickup}\n\n`;
    msg += `👤 Name: ${formData.name}\n`;
    msg += `📞 Telefon: ${formData.phone}\n`;
    if (formData.note.trim()) {
      msg += `📝 Zusatzinfo: ${formData.note.trim()}\n`;
    }
    msg += `\nBitte sendet mir ein transparentes Angebot für den genannten Zeitraum.\n\nVielen Dank!`;
    return msg;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  const message = currentStep === 3 ? buildMessage() : '';
  const whatsappUrl = `https://wa.me/${RYNT_CONFIG.whatsappNumberE164}?text=${encodeURIComponent(message)}`;
  const emailUrl = `mailto:${RYNT_CONFIG.email}?subject=${encodeURIComponent(
    'Mietwagen-Anfrage – RYNT'
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 bg-black/65 z-[100] p-4.5 overflow-y-auto"
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="max-w-3xl mx-auto my-[5vh] border border-gray-200/14 bg-bg-surface/95 rounded-2xl shadow-card overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mietwagen Anfrage Formular"
      >
        <div className="px-4.5 py-4 border-b border-gray-200/10 flex justify-between items-start gap-2.5">
          <div>
            <strong className="text-gray-200/92 text-base block">Mietwagen anfragen</strong>
            <p className="text-sm text-gray-200/70 mt-1.5">
              Wir erstellen automatisch eine WhatsApp-Nachricht und optional eine E-Mail – du musst nur noch senden.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-2.5 text-sm rounded-full bg-gray-200/6 border border-gray-200/12 text-gray-200/85 hover:bg-gray-200/10 transition-colors"
            type="button"
            aria-label="Schließen"
          >
            Schließen
          </button>
        </div>

        <div className="p-4.5">
          <div className="flex items-center gap-2.5 flex-wrap text-xs text-gray-200/70 mb-3.5">
            <span>Schritt {currentStep}/3</span>
            <div className="flex gap-1.5" aria-hidden="true">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2.5 h-2.5 rounded-full border ${
                    step <= currentStep
                      ? 'bg-accent/45 border-accent/55'
                      : 'bg-gray-200/6 border-gray-200/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="fromDate" className="block text-xs text-gray-200/80 mb-1.5">
                    Zeitraum: Von
                  </label>
                  <input
                    id="fromDate"
                    name="fromDate"
                    type="date"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="toDate" className="block text-xs text-gray-200/80 mb-1.5">
                    Zeitraum: Bis
                  </label>
                  <input
                    id="toDate"
                    name="toDate"
                    type="date"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="category" className="block text-xs text-gray-200/80 mb-1.5">
                    Wunschfahrzeug
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all"
                    required
                  >
                    <option value="" disabled>
                      Bitte wählen…
                    </option>
                    <option>Mercedes-AMG CLA 45 S</option>
                    <option>Audi RS3</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="pickup" className="block text-xs text-gray-200/80 mb-1.5">
                    Abholort (z. B. Köln Innenstadt, Deutz, Ehrenfeld)
                  </label>
                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Abholort in Köln & Umgebung"
                    className="w-full px-3 py-3 rounded-btn border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all placeholder:text-gray-400"
                    required
                  />
                  <div className="text-xs text-gray-200/60 mt-1.5">
                    Tipp: Wenn du flexibel bist, schreib „flexibel" – das erhöht die Chancen auf schnelle Verfügbarkeit.
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-200/80 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vor- und Nachname"
                    className="w-full px-3 py-3 rounded-btn border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs text-gray-200/80 mb-1.5">
                    Telefon (für Rückfragen / WhatsApp)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 …"
                    className="w-full px-3 py-3 rounded-btn border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all placeholder:text-gray-400"
                    required
                  />
                  <div className="text-xs text-gray-200/60 mt-1.5">
                    Wir nutzen deine Nummer nur zur Kontaktaufnahme zu deiner Anfrage.
                  </div>
                </div>
                <div className="border border-gray-200/12 bg-bg/35 rounded-card p-4">
                  <strong className="text-gray-200/92 block mb-1.5">Optional: Hinweis</strong>
                  <p className="text-sm text-gray-400 mb-2.5">
                    Du kannst hier zusätzliche Infos ergänzen (z. B. „Automatik", „Kindersitz", „viel Gepäck").
                    <br />
                    Im nächsten Schritt erstellen wir eine fertige Nachricht.
                  </p>
                  <label htmlFor="note" className="block text-xs text-gray-200/80 mb-1.5">
                    Zusatzinfo (optional)
                  </label>
                  <input
                    id="note"
                    name="note"
                    type="text"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="z. B. Automatik, Navi, Kindersitz…"
                    className="w-full px-3 py-3 rounded-btn border border-gray-200/14 bg-bg/55 text-gray-200/92 outline-none focus:border-accent/35 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.28)] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="border border-gray-200/12 bg-bg-surface/68 rounded-card p-4">
                <strong className="text-gray-200/92 block mb-1.5">Vorschau deiner Nachricht</strong>
                <p className="text-sm text-gray-400 mb-3">
                  Diese Nachricht wird für WhatsApp & E-Mail übernommen:
                </p>
                <div className="h-px bg-gray-200/12 my-3"></div>
                <pre className="whitespace-pre-wrap text-sm text-gray-200/86 font-mono overflow-auto max-h-[300px]">
                  {message}
                </pre>
                <div className="text-xs text-gray-200/60 mt-3">
                  Hinweis: Senden öffnet WhatsApp (oder E-Mail) in deinem Gerät/Browser.
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="px-4.5 py-4 border-t border-gray-200/10 flex justify-between items-center gap-2.5 flex-wrap">
          {currentStep < 3 ? (
            <div className="flex gap-2.5 flex-wrap">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-4 py-2.5 rounded-full font-light bg-gray-200/6 border border-gray-200/14 text-gray-200/90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                type="button"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full font-light bg-white text-black hover:-translate-y-0.5 transition-all shadow-lg"
                type="button"
              >
                Weiter
              </button>
            </div>
          ) : (
            <div className="flex gap-2.5 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-light bg-white text-black hover:-translate-y-0.5 transition-all inline-block shadow-lg"
              >
                WhatsApp senden
              </a>
              <a
                href={emailUrl}
                className="px-4 py-2.5 rounded-full font-light bg-gray-200/6 border border-gray-200/14 text-gray-200/90 hover:-translate-y-0.5 transition-all inline-block"
              >
                E-Mail senden
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
