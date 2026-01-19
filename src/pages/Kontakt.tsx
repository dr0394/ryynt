import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface KontaktPageProps {
  onOpenModal: (prefill?: string) => void;
}

export default function KontaktPage({ onOpenModal }: KontaktPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    period: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation onOpenModal={onOpenModal} />

      <main className="pt-32 pb-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
                Über uns
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                RYNT NOW steht für unkomplizierte Autovermietung von exklusiven Performance-Fahrzeugen in Köln & Umgebung.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Unser Fokus liegt auf Fahrspaß, Transparenz und persönlichem Service. Wir bieten dir die Möglichkeit, Premium-Fahrzeuge zu fairen Konditionen zu erleben – ohne Kompromisse.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Kontakt
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-light">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-light">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-white/80 mb-2 text-sm font-light">
                    Wunschfahrzeug
                  </label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors rounded-xl"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Mercedes-AMG CLA 45 S">Mercedes-AMG CLA 45 S</option>
                    <option value="Audi RS3">Audi RS3</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="period" className="block text-white/80 mb-2 text-sm font-light">
                    Mietzeitraum
                  </label>
                  <input
                    type="text"
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    placeholder="z.B. 20.01. - 22.01.2026"
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-colors rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-light">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors resize-none rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-light bg-white text-black hover:bg-gray-100 transition-all rounded-full shadow-lg hover:shadow-xl"
                >
                  Anfrage senden
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2">WhatsApp-Kontakt:</p>
                <a
                  href="https://wa.me/+4917661263911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  +49 XXX XXX XXX
                </a>

                <p className="text-white/60 text-sm mt-4 mb-2">Standort:</p>
                <p className="text-white">Köln & Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
