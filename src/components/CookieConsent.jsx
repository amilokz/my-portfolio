import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '400px',
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '15px',
            zIndex: 10000,
            textAlign: 'center',
            border: '1px solid rgba(0,204,255,0.3)',
          }}
        >
          <p style={{ color: 'white', fontSize: '0.8rem', marginBottom: '10px' }}>
            🍪 This website uses cookies for better experience.
          </p>
          <button
            onClick={acceptCookies}
            style={{
              background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}