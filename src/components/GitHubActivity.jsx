import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Star, GitFork, Code2 } from 'lucide-react';

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/amilokz/events')
      .then(res => res.json())
      .then(data => {
        setActivity(data.slice(0, 5));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case 'PushEvent': return <GitCommit size={16} color="#00cfff" />;
      case 'WatchEvent': return <Star size={16} color="#f59e0b" />;
      case 'ForkEvent': return <GitFork size={16} color="#8b5cf6" />;
      default: return <Code2 size={16} color="#00cfff" />;
    }
  };

  const getEventName = (type) => {
    switch(type) {
      case 'PushEvent': return 'Pushed code';
      case 'WatchEvent': return 'Starred';
      case 'ForkEvent': return 'Forked';
      default: return type.replace('Event', '');
    }
  };

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, #ffffff, #00cfff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
          }}
        >
          Latest GitHub Activity
        </motion.h2>
        
        {loading ? (
          <p style={{ textAlign: 'center', color: 'white' }}>Loading activity...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activity.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(15,25,45,0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  border: '1px solid rgba(0,204,255,0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  {getIcon(event.type)}
                  <span style={{ color: '#00cfff', fontSize: '0.75rem', fontWeight: '500' }}>
                    {getEventName(event.type)}
                  </span>
                  <span style={{ color: 'white', fontSize: '0.8rem' }}>
                    {event.repo.name}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginLeft: 'auto' }}>
                    {new Date(event.created_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}