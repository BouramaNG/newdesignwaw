import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ESIMSection from './components/eSIMSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConnectivitePage from './pages/ConnectivitePage';
import CloudPage from './pages/CloudPage';
import AboutPage from './pages/AboutPage';
import ESimPage from './pages/ESimPage';
import ContactPage from './pages/ContactPage';
import PlanDetailsPage from './pages/PlanDetailsPage';

export type PageType = 'home' | 'connectivite' | 'cloud' | 'travel' | 'about' | 'contact' | 'plan-details';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const navigateToPage = (page: PageType, planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'connectivite':
        return <ConnectivitePage onNavigate={setCurrentPage} />;
      case 'cloud':
        return <CloudPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'travel':
        return <ESimPage onNavigate={setCurrentPage} onNavigateWithPlan={navigateToPage} />;
      case 'plan-details':
        return <PlanDetailsPage onNavigate={setCurrentPage} planId={selectedPlanId} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <ESIMSection onNavigateWithPlan={navigateToPage} />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
