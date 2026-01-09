import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Background - MUST be first
import SolarSystem from "./components/SolarSystem";

// Main components
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import SocialProof from "./components/SocialProof";
import Blog from "./components/Blog";
import FunFacts from "./components/FunFacts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

// Case Study Pages
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudy3";

// Import responsive CSS
import './styles/global.css';
import './styles/solar-overrides.css';

// Responsive HomePage Component
function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`solar-content ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
      {/* Hero Section - Responsive */}
      <section id="hero" className="hero-responsive hero-with-solar-background">
        <div className={`container ${isMobile ? 'px-3' : ''}`}>
          <div className={`${isMobile ? 'text-center py-5' : 'py-10'}`}>
            <Hero />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <About />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Skills />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Projects />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Stats />
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Achievements />
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section id="journey" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Journey />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Testimonials />
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section id="socialproof" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <SocialProof />
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Blog />
          </div>
        </div>
      </section>
      
      {/* Fun Facts Section */}
      <section id="funfacts" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <FunFacts />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={`section-with-solar ${isMobile ? 'py-8' : 'py-20'}`}>
        <div className={`container ${isMobile ? 'px-4' : ''}`}>
          <div className="responsive-card">
            <Contact />
          </div>
        </div>
      </section>
      
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
      {/* Solar System Background - Fixed position */}
      <div className="solar-background-wrapper">
        <SolarSystem />
        
        {/* Responsive overlay for better text readability */}
        <div className={`solar-overlay ${isMobile ? 'mobile-overlay' : 'desktop-overlay'}`}></div>
      </div>
      
      {/* MAIN CONTENT AREA */}
      <div className="main-content-wrapper">
        <Router>
          {/* Header with responsive nav */}
          <Header />
          
          {/* Dark mode toggle - positioned based on screen */}
          <div className={`dark-mode-wrapper ${isMobile ? 'mobile-toggle' : 'desktop-toggle'}`}>
            <DarkModeToggle />
          </div>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/casestudy/1" element={<CaseStudy1 />} />
            <Route path="/casestudy/2" element={<CaseStudy2 />} />
            <Route path="/casestudy/3" element={<CaseStudy3 />} />
            
            {/* Fallback for GitHub Pages */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

// Responsive inline styles for immediate effect
const responsiveStyles = `
  .app-wrapper {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .solar-background-wrapper {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: -100 !important;
    pointer-events: none !important;
  }

  .main-content-wrapper {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .hero-with-solar-background {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: transparent !important;
    position: relative;
  }

  .hero-with-solar-background h1,
  .hero-with-solar-background p,
  .hero-with-solar-background a {
    color: white !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8) !important;
  }

  .section-with-solar {
    background: transparent !important;
    position: relative;
  }

  .responsive-card {
    background: rgba(255, 255, 255, 0.92) !important;
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease;
  }

  .dark .responsive-card {
    background: rgba(15, 23, 42, 0.92) !important;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .solar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -99;
    pointer-events: none;
  }

  .mobile-overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.55)
    );
  }

  .desktop-overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    );
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .hero-responsive {
      min-height: 90vh !important;
      padding-top: 60px !important;
    }
    
    .hero-responsive h1 {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }
    
    .hero-responsive p {
      font-size: 1.1rem !important;
    }
    
    .responsive-card {
      padding: 1.5rem !important;
      margin: 0.5rem 0 !important;
      backdrop-filter: blur(5px) !important;
    }
    
    .dark-mode-wrapper.mobile-toggle {
      bottom: 80px !important;
      right: 20px !important;
    }
  }

  /* Tablet styles */
  @media (min-width: 769px) and (max-width: 1024px) {
    .hero-responsive h1 {
      font-size: 2.5rem !important;
    }
    
    .responsive-card {
      padding: 2rem !important;
    }
    
    .dark-mode-wrapper.desktop-toggle {
      bottom: 40px !important;
      right: 40px !important;
    }
  }

  /* Large desktop */
  @media (min-width: 1025px) {
    .dark-mode-wrapper.desktop-toggle {
      bottom: 30px !important;
      right: 30px !important;
    }
  }
`;

// Inject responsive styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);