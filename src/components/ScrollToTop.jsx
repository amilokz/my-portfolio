import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            zIndex: 1000,
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0,204,255,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} color="white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}