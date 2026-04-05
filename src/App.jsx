import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Background
import SolarSystem from "./components/SolarSystem";
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

// Advanced Features
import ChatBot from './components/ChatBot';
import CustomCursor from './components/CustomCursor';
import VisitorCounter from './components/VisitorCounter';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import ResumeViewer from './components/ResumeViewer';

// New Advanced Features
import VoiceAssistant from './components/VoiceAssistant';
import VisitorMap from './components/VisitorMap';
import AIRecommendations from './components/AIRecommendations';
import WeatherWidget from './components/WeatherWidget';
import ResumeScanner from './components/ResumeScanner';
import CodePlayground from './components/CodePlayground';
import TypingSpeed from './components/TypingSpeed';
import DownloadApp from './components/DownloadApp';

// Main Components
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Case Study Pages
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudy3";

// Additional Sections
import Services from "./components/Services";
import GitHubStats from "./components/GitHubStats";
import TestimonialSlider from "./components/TestimonialSlider";
import Clients from "./components/Clients";
import GitHubActivity from './components/GitHubActivity';

// Analytics & Utilities
import { Analytics } from '@vercel/analytics/react';
import ShareButton from './components/ShareButton';
import CookieConsent from './components/CookieConsent';
import FloatingButtons from './components/FloatingButtons';

// Styles
import './styles/global.css';
import './styles/solar-overrides.css';

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`solar-content ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
      
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <Hero />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-container">
        <div className="container">
          <About />
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section-container">
        <div className="container">
          <Skills />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-container">
        <div className="container">
          <Projects />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Services */}
      <Services />
      
      {/* GitHub Stats */}
      <GitHubStats />
      
      {/* GitHub Activity */}
      <GitHubActivity />
      
      {/* Clients */}
      <Clients />
      
      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="container">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showResumeScanner, setShowResumeScanner] = useState(false);
  const [showCodePlayground, setShowCodePlayground] = useState(false);
  const [showTypingSpeed, setShowTypingSpeed] = useState(false);

  // Initialize keyboard shortcuts
  useKeyboardShortcuts();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
      {/* Solar System Background */}
      <div className="solar-background-wrapper">
        <SolarSystem />
        <div className={`solar-overlay ${isMobile ? 'mobile-overlay' : 'desktop-overlay'}`} />
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        <Router>
          <Header />
          
          {/* Floating Buttons - Responsive */}
          <FloatingButtons />
          
          {/* Other Features */}
          <CustomCursor />
          <VisitorCounter />
          <ResumeViewer />
          <CookieConsent />
          <Analytics />
          <WeatherWidget />
          <VisitorMap />
          
          {/* Interactive Buttons Menu - Desktop Only */}
          {!isMobile && (
            <div style={{
              position: 'fixed',
              bottom: '220px',
              left: '20px',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <button
                onClick={() => setShowResumeScanner(true)}
                style={{
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 15px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  boxShadow: '0 0 10px rgba(0,204,255,0.3)',
                }}
              >
                📄 AI Resume Scanner
              </button>
              <button
                onClick={() => setShowCodePlayground(true)}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #00cfff)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 15px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  boxShadow: '0 0 10px rgba(139,92,246,0.3)',
                }}
              >
                💻 Code Playground
              </button>
              <button
                onClick={() => setShowTypingSpeed(true)}
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 15px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  boxShadow: '0 0 10px rgba(245,158,11,0.3)',
                }}
              >
                ⌨️ Typing Speed Test
              </button>
            </div>
          )}
          
          {/* Modals */}
          {showResumeScanner && <ResumeScanner onClose={() => setShowResumeScanner(false)} />}
          {showCodePlayground && <CodePlayground onClose={() => setShowCodePlayground(false)} />}
          {showTypingSpeed && <TypingSpeed onClose={() => setShowTypingSpeed(false)} />}
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/casestudy/1" element={<CaseStudy1 />} />
            <Route path="/casestudy/2" element={<CaseStudy2 />} />
            <Route path="/casestudy/3" element={<CaseStudy3 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

// Clean CSS - Galaxy Visible with Mobile Support
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

  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: transparent !important;
    padding: 100px 0 60px;
  }

  .section-container {
    background: transparent !important;
    padding: 80px 0;
    position: relative;
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
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }

  .desktop-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.35));
  }

  /* Spinner Animation */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .hero-section {
      padding: 80px 0 40px;
      min-height: 90vh;
    }
    
    .section-container {
      padding: 50px 0;
    }
    
    body {
      padding-bottom: 70px !important;
    }
    
    button, .btn {
      min-height: 44px;
      min-width: 44px;
    }
    
    /* Disable custom cursor on mobile */
    body {
      cursor: auto !important;
    }
    
    .custom-cursor {
      display: none !important;
    }
  }

  /* Tablet Responsive */
  @media (min-width: 769px) and (max-width: 1024px) {
    .section-container {
      padding: 70px 0;
    }
    
    button, .btn {
      min-height: 40px;
      min-width: 40px;
    }
  }

  /* Desktop */
  @media (min-width: 1025px) {
    .hero-section {
      padding: 100px 0 60px;
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #00cfff, #8b5cf6);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #00cfff, #8b5cf6);
  }

  /* Selection Color */
  ::selection {
    background: rgba(0, 204, 255, 0.3);
    color: white;
  }

  /* Smooth Loading */
  .solar-content {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);