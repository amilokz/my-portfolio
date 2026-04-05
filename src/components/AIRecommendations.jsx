import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Code2, Layout, Database, Wrench, Star, TrendingUp } from 'lucide-react';

const recommendations = {
  frontend: {
    icon: <Layout size={18} />,
    color: "#61DAFB",
    projects: [
      { name: 'Echo World', description: 'React + Tailwind animated UI', rating: 4.8 },
      { name: 'School Landing Page', description: 'Modern educational website', rating: 4.6 }
    ]
  },
  backend: {
    icon: <Database size={18} />,
    color: "#FF2D20",
    projects: [
      { name: 'SERP Portal', description: 'Employee record management', rating: 4.9 },
      { name: 'Local E-Market', description: 'Complete marketplace system', rating: 4.7 }
    ]
  },
  fullstack: {
    icon: <Code2 size={18} />,
    color: "#8B5CF6",
    projects: [
      { name: 'Full Stack React App', description: 'MERN authentication app', rating: 4.9 },
      { name: 'Smart Service Booking', description: 'Online booking system', rating: 4.8 }
    ]
  },
  tools: {
    icon: <Wrench size={18} />,
    color: "#F59E0B",
    projects: [
      { name: 'FlexiPDF', description: 'PDF manipulation tool', rating: 4.7 },
      { name: 'Mini Apps', description: 'Collection of utilities', rating: 4.6 }
    ]
  }
};

export default function AIRecommendations() {
  const [category, setCategory] = useState('frontend');
  const [show, setShow] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      setShow(false);
    }
  };

  return (
    <>
      {/* Floating Button - LEFT SIDE */}
      <motion.button
        onClick={() => setShow(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '150px',
          left: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 18px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.75rem',
          fontWeight: '600',
          boxShadow: '0 0 20px rgba(0,204,255,0.4)',
        }}
      >
        <Sparkles size={14} />
        AI Picks
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {show && (
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
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setShow(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              style={{
                maxWidth: '500px',
                width: '90%',
                maxHeight: '85vh',
                overflow: 'auto',
                background: 'rgba(10, 20, 35, 0.98)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(0, 204, 255, 0.3)',
                padding: '30px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShow(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <X size={18} color="white" />
              </button>

              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 0 30px rgba(0,204,255,0.3)',
                }}>
                  <Sparkles size={28} color="white" />
                </div>
                <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '5px' }}>
                  AI Recommendations
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                  Personalized project suggestions based on your interests
                </p>
              </div>

              {/* Category Tabs */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '25px',
                background: 'rgba(255,255,255,0.05)',
                padding: '8px',
                borderRadius: '16px',
              }}>
                {Object.entries(recommendations).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setCategory(key)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px',
                      background: category === key ? value.color : 'transparent',
                      border: category === key ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: category === key ? 'white' : 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {value.icon}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>

              {/* Projects List */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '15px',
                }}>
                  <TrendingUp size={16} color="#f59e0b" />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                    Top picks for you
                  </span>
                </div>
                
                {recommendations[category].projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={scrollToProjects}
                    style={{
                      padding: '15px',
                      marginBottom: '12px',
                      background: hoveredProject === index 
                        ? `linear-gradient(135deg, ${recommendations[category].color}20, transparent)`
                        : 'rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      border: hoveredProject === index 
                        ? `1px solid ${recommendations[category].color}40`
                        : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ color: 'white', fontSize: '0.9rem', margin: 0 }}>
                        {project.name}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={12} color="#f59e0b" fill="#f59e0b" />
                        <span style={{ color: '#f59e0b', fontSize: '0.7rem' }}>{project.rating}</span>
                      </div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', margin: 0 }}>
                      {project.description}
                    </p>
                    <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ color: recommendations[category].color, fontSize: '0.65rem' }}>
                        {category.charAt(0).toUpperCase() + category.slice(1)} Project
                      </span>
                      <ArrowRight size={12} color={recommendations[category].color} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                textAlign: 'center',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                marginTop: '10px',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem' }}>
                  🤖 AI-powered recommendations • Updated daily
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}