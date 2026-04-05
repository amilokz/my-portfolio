import React, { useState } from 'react';
import { Smartphone, Download, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DownloadApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState(false);

  const downloadAPKDirect = () => {
    setDownloading(true);
    
    const link = document.createElement('a');
    link.href = '/apk/portfolio.apk';
    link.download = 'KomilPortfolio.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <>
      {/* Floating Button - Positioned on RIGHT side, below ChatBot */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '220px',  // Below ChatBot (which is at bottom: 100px)
          right: '30px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 18px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.75rem',
          fontWeight: '600',
          boxShadow: '0 0 20px rgba(0,204,255,0.5)',
        }}
      >
        <Smartphone size={16} />
        <Download size={12} />
        Get App
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              style={{
                maxWidth: '450px',
                width: '90%',
                background: 'rgba(10, 20, 35, 0.98)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(0, 204, 255, 0.3)',
                padding: '30px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} color="white" />
              </button>

              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 0 30px rgba(0,204,255,0.3)',
                }}>
                  <Smartphone size={35} color="white" />
                </div>
                <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '5px' }}>
                  Download App
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  Get the best experience on mobile
                </p>
              </div>

              {/* Download Status */}
              {downloaded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(16,185,129,0.2)',
                    border: '1px solid #10b981',
                    borderRadius: '12px',
                    padding: '10px',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}
                >
                  <Check size={18} color="#10b981" style={{ display: 'inline', marginRight: '8px' }} />
                  <span style={{ color: '#10b981', fontSize: '0.85rem' }}>Download started! Check your downloads folder.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(239,68,68,0.2)',
                    border: '1px solid #ef4444',
                    borderRadius: '12px',
                    padding: '10px',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>APK file not found. Please check back later.</span>
                </motion.div>
              )}

              {/* Features List */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#00cfff', fontSize: '0.9rem', marginBottom: '15px' }}>
                  App Features:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    '🎨 3D Solar System Background',
                    '🤖 AI ChatBot Assistant',
                    '🌙 Dark/Light Mode',
                    '📱 Fully Responsive Design',
                    '🚀 Fast Performance',
                    '📂 Project Showcase',
                    '📄 Resume Download',
                    '💬 Contact Form',
                    '🎤 Voice Commands',
                    '⌨️ Typing Speed Test',
                  ].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="#10b981" />
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Instructions */}
              <div style={{
                background: 'rgba(0,204,255,0.1)',
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '20px',
              }}>
                <p style={{ color: '#00cfff', fontSize: '0.7rem', textAlign: 'center' }}>
                  📌 For Android: Click Download APK below<br />
                  📌 For iOS: Add to Home Screen via Safari browser menu
                </p>
              </div>

              {/* Download Button */}
              <motion.button
                onClick={downloadAPKDirect}
                disabled={downloading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: downloading 
                    ? 'rgba(255,255,255,0.2)' 
                    : downloaded 
                      ? '#10b981' 
                      : 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontWeight: '600',
                  cursor: downloading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                }}
              >
                {downloading ? (
                  <>
                    <div className="spinner" style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid white',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Downloading...
                  </>
                ) : downloaded ? (
                  <>
                    <Check size={18} />
                    Download Started!
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    Download APK (Android)
                  </>
                )}
              </motion.button>

              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', textAlign: 'center', marginTop: '15px' }}>
                Version 1.0.0 • Size: ~15MB • Android 5.0+
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}