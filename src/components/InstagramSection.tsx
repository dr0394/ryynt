import { Instagram, MapPin, Phone, Calendar } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="py-24 px-5 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-light text-white mb-6 text-center cinematic-heading">
          Folge uns auf Instagram
        </h2>
        <p className="text-white/70 text-center mb-12 text-lg">
          Entdecke exklusive Einblicke, aktuelle Angebote und die neuesten Fahrzeuge
        </p>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-75"></div>
              <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-6 rounded-3xl">
                <Instagram className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2">@rynt.de</h3>
              <p className="text-white/60 text-sm">Autovermietung Köln</p>
            </div>

            <a
              href="https://www.instagram.com/rynt.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 overflow-hidden rounded-full transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 transition-transform duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 text-white font-light text-lg">
                <Instagram className="w-6 h-6" strokeWidth={2} />
                <span>Jetzt folgen</span>
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-white/80">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light mb-1">Standort</h4>
                <p className="text-sm text-white/60">Kalker Hauptstraße 296</p>
                <p className="text-sm text-white/60">51103 Köln</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light mb-1">Telefon</h4>
                <a href="tel:022125943722" className="text-sm text-white/60 hover:text-white transition-colors">
                  0221 25943722
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light mb-1">Mindestalter</h4>
                <p className="text-sm text-white/60">Ab 18 Jahren</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
