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
    <div id="top" className="min-h-screen bg-[#0A0E1A]">
      <Navigation onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Vehicles onOpenModal={handleOpenModal} />
        <ProblemSolution />
        <Services onOpenModal={handleOpenModal} />
        <Pricing onOpenModal={handleOpenModal} />
        <Benefits />
        <SocialProof onOpenModal={handleOpenModal} />
        <ProcessSteps />
        <About onOpenModal={handleOpenModal} />
        <FAQ />
        <Contact onOpenModal={handleOpenModal} />
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
