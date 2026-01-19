import { useState, useEffect, FormEvent } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCategory?: string;
}

const RYNT_CONFIG = {
  whatsappNumberE164: '4917661263911',
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] p-4.5 overflow-y-auto"
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="max-w-3xl mx-auto my-[5vh] border border-white/10 bg-gradient-to-b from-[#0F1523] to-[#0A0E1A] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mietwagen Anfrage Formular"
      >
        <div className="px-6 py-5 border-b border-white/10 flex justify-between items-start gap-2.5">
          <div>
            <strong className="text-white text-xl block font-light cinematic-heading">Mietwagen anfragen</strong>
            <p className="text-sm text-white/70 mt-2 font-light">
              Wir erstellen automatisch eine WhatsApp-Nachricht und optional eine E-Mail – du musst nur noch senden.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/20 text-white/90 hover:bg-white/10 transition-all font-light"
            type="button"
            aria-label="Schließen"
          >
            Schließen
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 flex-wrap text-sm text-white/60 mb-5 font-light">
            <span>Schritt {currentStep}/3</span>
            <div className="flex gap-2" aria-hidden="true">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-1 rounded-full transition-all ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-accent to-accent-dark shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromDate" className="block text-sm text-white/80 mb-2 font-light">
                    Zeitraum: Von
                  </label>
                  <input
                    id="fromDate"
                    name="fromDate"
                    type="date"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all font-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="toDate" className="block text-sm text-white/80 mb-2 font-light">
                    Zeitraum: Bis
                  </label>
                  <input
                    id="toDate"
                    name="toDate"
                    type="date"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all font-light"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="category" className="block text-sm text-white/80 mb-2 font-light">
                    Wunschfahrzeug
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all font-light"
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
                  <label htmlFor="pickup" className="block text-sm text-white/80 mb-2 font-light">
                    Abholort (z. B. Köln Innenstadt, Deutz, Ehrenfeld)
                  </label>
                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Abholort in Köln & Umgebung"
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all placeholder:text-white/40 font-light"
                    required
                  />
                  <div className="text-xs text-white/50 mt-2 font-light">
                    Tipp: Wenn du flexibel bist, schreib „flexibel" – das erhöht die Chancen auf schnelle Verfügbarkeit.
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-2 font-light">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vor- und Nachname"
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all placeholder:text-white/40 font-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-white/80 mb-2 font-light">
                    Telefon (für Rückfragen / WhatsApp)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 …"
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all placeholder:text-white/40 font-light"
                    required
                  />
                  <div className="text-xs text-white/50 mt-2 font-light">
                    Wir nutzen deine Nummer nur zur Kontaktaufnahme zu deiner Anfrage.
                  </div>
                </div>
                <div className="border border-white/10 bg-white/5 rounded-2xl p-5">
                  <strong className="text-white block mb-2 font-light text-lg">Optional: Hinweis</strong>
                  <p className="text-sm text-white/60 mb-3 font-light">
                    Du kannst hier zusätzliche Infos ergänzen (z. B. „Automatik", „Kindersitz", „viel Gepäck").
                    <br />
                    Im nächsten Schritt erstellen wir eine fertige Nachricht.
                  </p>
                  <label htmlFor="note" className="block text-sm text-white/80 mb-2 font-light">
                    Zusatzinfo (optional)
                  </label>
                  <input
                    id="note"
                    name="note"
                    type="text"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="z. B. Automatik, Navi, Kindersitz…"
                    className="w-full px-4 py-3.5 rounded-full border border-white/20 bg-white/5 text-white outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.25)] transition-all placeholder:text-white/40 font-light"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl p-6">
                <strong className="text-white block mb-2 font-light text-lg cinematic-heading">Vorschau deiner Nachricht</strong>
                <p className="text-sm text-white/60 mb-4 font-light">
                  Diese Nachricht wird für WhatsApp & E-Mail übernommen:
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
                <pre className="whitespace-pre-wrap text-sm text-white/80 font-mono overflow-auto max-h-[300px] bg-black/20 p-4 rounded-xl border border-white/5">
                  {message}
                </pre>
                <div className="text-xs text-white/50 mt-3 font-light">
                  Hinweis: Senden öffnet WhatsApp (oder E-Mail) in deinem Gerät/Browser.
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="px-6 py-5 border-t border-white/10 flex justify-between items-center gap-3 flex-wrap">
          {currentStep < 3 ? (
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6 py-3 rounded-full font-light bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white/5"
                type="button"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-full font-light bg-gradient-to-r from-accent to-accent-dark text-black hover:-translate-y-0.5 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30"
                type="button"
              >
                Weiter
              </button>
            </div>
          ) : (
            <div className="flex gap-3 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-light bg-gradient-to-r from-accent to-accent-dark text-black hover:-translate-y-0.5 transition-all inline-block shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                WhatsApp senden
              </a>
              <a
                href={emailUrl}
                className="px-6 py-3 rounded-full font-light bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all inline-block"
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
