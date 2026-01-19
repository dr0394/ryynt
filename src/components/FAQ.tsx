import { useState } from 'react';

const faqs = [
  {
    question: 'Welche Dokumente brauche ich?',
    answer: 'In der Regel: gültiger Führerschein und Ausweis. Details je nach Fahrzeug/Zeitraum auf Anfrage.',
  },
  {
    question: 'Gibt es ein Mindestalter?',
    answer: 'Das hängt von Fahrzeugkategorie und Zeitraum ab. Bitte anfragen – du bekommst die konkrete Info direkt.',
  },
  {
    question: 'Wie funktioniert Kaution & Versicherung?',
    answer: 'Kaution/Versicherungsdetails geben wir transparent im Angebot an. Details auf Anfrage.',
  },
  {
    question: 'Welche Abholzeiten gibt es?',
    answer: 'Abholung/Übergabe nach Absprache. Öffnungszeiten sind aktuell Platzhalter – bitte anfragen.',
  },
  {
    question: 'Kann ich stornieren?',
    answer: 'Storno-Regeln sind abhängig von Zeitraum & Kategorie. Wir teilen dir die Bedingungen im Angebot mit (auf Anfrage).',
  },
  {
    question: 'Kann ich einen Transporter mieten?',
    answer: 'Ja – je nach Bedarf und Verfügbarkeit. Anfrage senden, wir melden uns mit Optionen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5" aria-label="FAQ">
      <div className="max-w-container mx-auto">
        <span className="inline-flex items-center gap-2.5 px-3 py-2 border border-gray-200/12 bg-bg-surface/60 rounded-full text-gray-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          FAQ
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 mb-2">
          Häufige Fragen
        </h2>
        <p className="text-lg text-gray-200/90 mb-4.5">
          Kurz erklärt – Details (z. B. Kaution/Versicherung/Storno) erhältst du transparent auf Anfrage.
        </p>

        <div className="grid gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200/12 bg-bg-surface/55 rounded-xl p-3.5 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="font-bold text-gray-200/92">{faq.question}</div>
              {openIndex === idx && (
                <p className="text-gray-200/74 mt-2.5">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
