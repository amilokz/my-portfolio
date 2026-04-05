import { useEffect } from 'react';

export default function useKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Press 'H' - Go to Home
      if (e.key === 'h' || e.key === 'H') {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }
      // Press 'A' - Go to About
      if (e.key === 'a' || e.key === 'A') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
      // Press 'P' - Go to Projects
      if (e.key === 'p' || e.key === 'P') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
      // Press 'C' - Go to Contact
      if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      // Press '?' - Show help
      if (e.key === '?' || e.key === '/') {
        e.preventDefault();
        alert('⌨️ Keyboard Shortcuts:\n\nH - Home\nA - About\nP - Projects\nC - Contact\n? - Show this help');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
}