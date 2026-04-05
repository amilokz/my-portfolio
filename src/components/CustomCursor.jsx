import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', updateMouse);
    
    const hoverElements = document.querySelectorAll('a, button, .card, .nav-link, .btn');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', updateMouse);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        position: 'fixed',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: '2px solid #00cfff',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 10px rgba(0,204,255,0.5)',
      }}
    />
  );
}