import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function VisitorCounter() {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const stored = localStorage.getItem('visitorCount');
    if (stored) {
      setCount(parseInt(stored) + 1);
      localStorage.setItem('visitorCount', parseInt(stored) + 1);
    } else {
      localStorage.setItem('visitorCount', 1248);
      setCount(1248);
    }
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(10px)',
      padding: '6px 14px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '0.7rem',
      color: 'white',
      zIndex: 99,
      border: '1px solid rgba(0,204,255,0.3)',
    }}>
      <Eye size={12} color="#00cfff" />
      <span>{count.toLocaleString()} views</span>
    </div>
  );
}