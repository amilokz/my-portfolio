import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const sharePortfolio = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Komil Hassan - Full Stack Developer',
          text: 'Check out my awesome portfolio!',
          url: url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={sharePortfolio}
      style={{
        position: 'fixed',
        bottom: '90px',
        left: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
        border: 'none',
        borderRadius: '50px',
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.8rem',
        boxShadow: '0 0 15px rgba(0,204,255,0.5)',
      }}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? 'Copied!' : 'Share'}
    </button>
  );
}