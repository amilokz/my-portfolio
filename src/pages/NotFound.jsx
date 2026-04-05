import React from 'react';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(5, 10, 25, 0.95)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', padding: '40px' }}
      >
        <AlertCircle size={80} color="#00cfff" />
        <h1 style={{ color: 'white', fontSize: '4rem', margin: '20px 0' }}>404</h1>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none',
          }}
        >
          <Home size={18} />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}