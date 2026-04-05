import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot';
import DarkModeToggle from './DarkModeToggle';
import VisitorCounter from './VisitorCounter';
import ScrollToTop from './ScrollToTop';
import ShareButton from './ShareButton';
import DownloadApp from './DownloadApp';
import VoiceAssistant from './VoiceAssistant';
import AIRecommendations from './AIRecommendations';

export default function FloatingButtons() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile: Bottom Navigation Bar
  if (isMobile) {
    return (
      <>
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(10, 20, 35, 0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,204,255,0.3)',
          zIndex: 1000,
          padding: '8px 12px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <ChatBot />
          <AIRecommendations />
          <VoiceAssistant />
          <ShareButton />
          <DownloadApp />
          <DarkModeToggle />
        </div>
        <ScrollToTop />
        <VisitorCounter />
      </>
    );
  }

  // Tablet: Left and Right columns
  if (isTablet) {
    return (
      <>
        <div style={{
          position: 'fixed',
          left: '15px',
          bottom: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <ScrollToTop />
          <ShareButton />
          <DownloadApp />
        </div>
        
        <div style={{
          position: 'fixed',
          right: '15px',
          bottom: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'flex-end',
        }}>
          <DarkModeToggle />
          <ChatBot />
          <VoiceAssistant />
          <AIRecommendations />
        </div>
        
        <VisitorCounter />
      </>
    );
  }

  // Desktop: Original layout
  return (
    <>
      <div style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}>
        <ScrollToTop />
        <ShareButton />
        <DownloadApp />
      </div>
      
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'flex-end',
      }}>
        <DarkModeToggle />
        <ChatBot />
        <VoiceAssistant />
        <AIRecommendations />
      </div>
      
      <VisitorCounter />
    </>
  );
}