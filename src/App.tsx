import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ProblemSolution from './components/ProblemSolution';
import Hero from './components/Hero';
import Services from './components/Services';
import Vehicles from './components/Vehicles';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import ProcessSteps from './components/ProcessSteps';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import InquiryModal from './components/InquiryModal';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillCategory, setPrefillCategory] = useState<string | undefined>();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      history.pushState = originalPushState;
    };
  }, []);

  const handleOpenModal = (category?: string) => {
    setPrefillCategory(category);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPrefillCategory(undefined);
  };

  if (currentPath === '/impressum') {
    return <Impressum />;
  }

  if (currentPath === '/datenschutz') {
    return <Datenschutz />;
  }

  return (
    <div id="top" className="min-h-screen">
      <Navigation onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <ProblemSolution />
        <Services onOpenModal={handleOpenModal} />
        <Vehicles onOpenModal={handleOpenModal} />
        <Pricing onOpenModal={handleOpenModal} />
        <Benefits />
        <SocialProof onOpenModal={handleOpenModal} />
        <ProcessSteps />
        <About onOpenModal={handleOpenModal} />
        <FAQ />
        <Contact onOpenModal={handleOpenModal} />

        <section className="py-20 px-5" aria-label="Abschluss CTA">
          <div className="max-w-container mx-auto">
            <div className="border border-accent/25 bg-bg-surface/68 rounded-card p-5.5 shadow-card-soft">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-accent/12 border border-accent/25 text-gray-200/95 text-xs mb-2.5">
                    RYNT NOW – Köln & Umgebung
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2.5">
                    Bereit? Sag uns Zeitraum & Kategorie – wir schicken dir den Preis.
                  </h2>
                  <p className="text-lg text-gray-200/90">
                    Unverbindlich anfragen. Transparentes Angebot. Schnelle Abholung nach Absprache.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-wrap">
                  <button
                    onClick={() => handleOpenModal()}
                    className="px-4 py-3 rounded-btn font-semibold bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:-translate-y-0.5 transition-all"
                    type="button"
                  >
                    Jetzt Mietwagen anfragen
                  </button>
                  <a
                    href="#fahrzeuge"
                    className="px-4 py-2.5 rounded-btn font-semibold bg-gray-200/6 border border-gray-200/14 text-gray-200/90 hover:-translate-y-0.5 transition-all inline-block"
                  >
                    Fahrzeuge ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        prefillCategory={prefillCategory}
      />
    </div>
  );
}

export default App;
