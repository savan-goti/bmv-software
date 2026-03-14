import { useEffect } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="app-container">
      <Topbar />
      <Navbar />
      <Hero />
      <Ticker />
      <div className="reveal">
        <Services />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <WhyChooseUs />
      </div>
      <div className="reveal">
        <TechStack />
      </div>
      <div className="reveal">
        <Process />
      </div>
      <div className="reveal">
        <Portfolio />
      </div>
      <div className="reveal">
        <Pricing />
      </div>
      <div className="reveal">
        <Reviews />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <CTABanner />
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
