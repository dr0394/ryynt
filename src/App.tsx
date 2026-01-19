import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Vehicles from './components/Vehicles';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import WhyRyntNow from './components/WhyRyntNow';
import InstagramSection from './components/InstagramSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import InquiryModal from './components/InquiryModal';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import KontaktPage from './pages/Kontakt';

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

  if (currentPath === '/kontakt') {
    return <KontaktPage onOpenModal={handleOpenModal} />;
  }

  return (
    <div id="top" className="min-h-screen bg-black">
      <Navigation onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Benefits onOpenModal={handleOpenModal} />
        <Vehicles onOpenModal={handleOpenModal} />
        <ProblemSolution onOpenModal={handleOpenModal} />
        <WhyRyntNow />
        <SocialProof onOpenModal={handleOpenModal} />
        <InstagramSection />
        <CTASection onOpenModal={handleOpenModal} />
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
