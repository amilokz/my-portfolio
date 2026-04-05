import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Get visitor's country (simulated)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const visitor = {
          country: data.country_name,
          city: data.city,
          flag: data.country_code,
          time: new Date().toLocaleTimeString()
        };
        
        const saved = localStorage.getItem('visitors');
        const visitorsList = saved ? JSON.parse(saved) : [];
        visitorsList.unshift(visitor);
        localStorage.setItem('visitors', JSON.stringify(visitorsList.slice(0, 10)));
        setVisitors(visitorsList.slice(0, 10));
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '100px', zIndex: 1000 }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
          border: 'none',
          borderRadius: '30px',
          padding: '8px 15px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.7rem',
        }}
      >
        <MapPin size={14} /> {visitors.length} Visitors
      </button>
      
      {show && (
        <div style={{
          position: 'absolute',
          bottom: '50px',
          right: '0',
          width: '250px',
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '15px',
          border: '1px solid rgba(0,204,255,0.3)',
        }}>
          <h4 style={{ color: '#00cfff', fontSize: '0.8rem', marginBottom: '10px' }}>
            Recent Visitors
          </h4>
          {visitors.map((v, i) => (
            <div key={i} style={{ fontSize: '0.7rem', color: 'white', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {v.city}, {v.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}