import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye } from 'lucide-react';

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          zIndex: 100,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
          borderRadius: '30px',
          border: '1px solid rgba(0,204,255,0.3)',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
        }}
      >
        <Eye size={14} color="#00cfff" />
        View Resume
      </button>

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
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={{
                width: '90%',
                height: '90%',
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="/my-portfolio/jobcv.pdf"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Resume"
              />
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                }}
              >
                <X size={20} color="white" />
              </button>
              <a
                href="/my-portfolio/jobcv.pdf"
                download="Komil_Hassan_CV.pdf"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Download size={16} />
                Download PDF
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}