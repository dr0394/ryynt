import { Send, FileCheck, Car, RotateCcw } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Anfrage senden',
    description: 'Zeitraum, Kategorie, Abholort – in unter 60 Sekunden.',
    icon: Send,
  },
  {
    number: 2,
    title: 'Angebot/Bestätigung',
    description: 'Du bekommst transparente Infos – passend zu Zeitraum & Verfügbarkeit.',
    icon: FileCheck,
  },
  {
    number: 3,
    title: 'Abholung/Übergabe',
    description: 'Einfach abholen, Übergabe klären, losfahren.',
    icon: Car,
  },
  {
    number: 4,
    title: 'Rückgabe',
    description: 'Planbar zurückgeben – Details nach Absprache.',
    icon: RotateCcw,
  },
];

export default function ProcessSteps() {
  return (
    <section id="ablauf" className="relative py-24 px-5 bg-white overflow-hidden" aria-label="Ablauf">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm mb-6 font-medium">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Ablauf
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            In 4 Schritten zum Mietwagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schnell, klar, ohne unnötige Hürden – vom ersten Kontakt bis zur Rückgabe.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <Icon className="w-9 h-9 text-accent" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-black text-sm flex items-center justify-center shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-1 h-12 bg-gradient-to-b from-accent to-accent-dark opacity-30"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
