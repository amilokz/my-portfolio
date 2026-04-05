import React, { useState, useEffect } from "react";
import { ProgressBar, Badge } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

export default function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [typingSkillIndex, setTypingSkillIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing effect when hovering over a skill card
  useEffect(() => {
    if (hoveredCard !== null && typingSkillIndex !== hoveredCard) {
      setTypingSkillIndex(hoveredCard);
      const skill = skills[hoveredCard];
      let i = 0;
      setTypingText("");
      const interval = setInterval(() => {
        if (i <= skill.description.length) {
          setTypingText(skill.description.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [hoveredCard]);

  const skills = [
    { 
      name: "PHP / Laravel", 
      level: 90, 
      category: "Backend",
      icon: "⚙️",
      color: "#4F46E5",
      description: "REST APIs, MVC, Eloquent ORM, Blade Templates",
      certificate: "Laravel Certified Developer",
      certified: true
    },
    { 
      name: "React / JavaScript", 
      level: 85, 
      category: "Frontend",
      icon: "⚛️",
      color: "#61DAFB",
      description: "Hooks, Context API, State Management, React Router",
      certificate: "React Certified Developer",
      certified: true
    },
    { 
      name: "HTML / CSS / Bootstrap / Tailwind", 
      level: 95, 
      category: "Frontend",
      icon: "🎨",
      color: "#06B6D4",
      description: "Responsive Design, CSS Grid, Flexbox, UI/UX",
      certificate: "Frontend Development Certification",
      certified: true
    },
    { 
      name: "MySQL / API Integration", 
      level: 80, 
      category: "Database",
      icon: "🗄️",
      color: "#F59E0B",
      description: "Database Design, Query Optimization, REST APIs",
      certificate: "Database Design Certificate",
      certified: false
    },
    { 
      name: "Git / GitHub", 
      level: 85, 
      category: "Tools",
      icon: "📊",
      color: "#F97316",
      description: "Version Control, CI/CD, Team Collaboration",
      certificate: "Git & GitHub Certification",
      certified: true
    },
    { 
      name: "Three.js / WebGL", 
      level: 75, 
      category: "3D",
      icon: "🌌",
      color: "#8B5CF6",
      description: "3D Graphics, Animations, Interactive Visuals",
      certificate: "Three.js Advanced",
      certified: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <>
      <section 
        id="skills" 
        className="py-5 position-relative"
        style={{ 
          background: "transparent",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3" style={{ 
              color: "#ffffff",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              background: "linear-gradient(90deg, #4F46E5, #06B6D4, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Technical Skills
            </h2>
            <p className="lead mb-0" style={{ 
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Expertise across full-stack development with focus on clean code and modern practices
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="row g-4 justify-content-center"
          >
            {skills.map((skill, index) => (
              <motion.div 
                className={`${isMobile ? "col-12" : "col-md-6 col-lg-4"}`} 
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setTypingSkillIndex(null);
                  setTypingText("");
                }}
              >
                {/* Enhanced Glass Card */}
                <div
                  className="card h-100 p-4"
                  style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "1.5rem",
                    border: `1px solid ${hoveredCard === index ? skill.color + "80" : "rgba(255,255,255,0.15)"}`,
                    boxShadow: `
                      inset 0 1px 0 0 rgba(255,255,255,0.1),
                      0 20px 40px rgba(0,0,0,0.3),
                      ${hoveredCard === index ? `0 0 30px ${skill.color}40` : "none"}
                    `,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: "white",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  onClick={() => skill.certified && setSelectedSkill(skill)}
                >
                  {/* Animated Background Glow */}
                  <div 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                      opacity: hoveredCard === index ? 1 : 0.5,
                      transition: "opacity 0.3s ease"
                    }}
                  />

                  {/* Card Header */}
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: `${skill.color}20`,
                        border: `1px solid ${skill.color}40`,
                        fontSize: "1.5rem"
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-semibold">{skill.name}</h5>
                        <Badge 
                          pill 
                          style={{ 
                            background: skill.color,
                            fontSize: "0.75rem",
                            padding: "0.35rem 0.75rem"
                          }}
                        >
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Typing Effect Description */}
                  <div className="mb-3" style={{ 
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    minHeight: "60px"
                  }}>
                    {hoveredCard === index && typingText ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {typingText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          style={{
                            display: "inline-block",
                            width: "2px",
                            height: "1em",
                            background: skill.color,
                            marginLeft: "2px",
                            verticalAlign: "middle"
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {skill.description}
                      </motion.div>
                    )}
                  </div>

                  {/* Certificate Badge */}
                  {skill.certified && (
                    <div className="mb-2">
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        background: "rgba(0,204,255,0.15)",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        color: "#00cfff"
                      }}>
                        <Award size={12} />
                        {skill.certificate}
                      </span>
                    </div>
                  )}

                  {/* Progress Section */}
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ 
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "0.9rem",
                        fontWeight: "500"
                      }}>
                        Proficiency
                      </span>
                      <motion.span 
                        style={{ 
                          color: skill.color,
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          textShadow: `0 0 10px ${skill.color}80`
                        }}
                        animate={hoveredCard === index ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    {/* Custom Progress Bar */}
                    <div style={{
                      height: "10px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "5px",
                      overflow: "hidden",
                      position: "relative"
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5,
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 100
                        }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                          borderRadius: "5px",
                          position: "relative",
                          boxShadow: `0 0 15px ${skill.color}80`
                        }}
                      >
                        {/* Progress bar shine effect */}
                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "50%",
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          borderRadius: "5px"
                        }} />
                      </motion.div>
                    </div>

                    {/* Progress Levels */}
                    <div className="d-flex justify-content-between mt-2" style={{ fontSize: "0.75rem" }}>
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map((level, i) => (
                        <span 
                          key={i}
                          style={{ 
                            color: skill.level >= (i + 1) * 25 ? skill.color : "rgba(255,255,255,0.3)",
                            fontWeight: skill.level >= (i + 1) * 25 ? "600" : "400"
                          }}
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Click to view certificate hint */}
                  {skill.certified && (
                    <div style={{
                      marginTop: "12px",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      paddingTop: "10px"
                    }}>
                      Click to view certificate →
                    </div>
                  )}

                  {/* Hover Glow Effect */}
                  {hoveredCard === index && (
                    <div style={{
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: `radial-gradient(circle, ${skill.color}10 0%, transparent 70%)`,
                      zIndex: -1,
                      pointerEvents: "none"
                    }} />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Legend/Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-5 pt-4 text-center"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            <div className="row g-3">
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#4F46E5",
                    marginRight: "8px"
                  }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                    Advanced (85%+)
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#06B6D4",
                    marginRight: "8px"
                  }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                    Intermediate (70-84%)
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#F59E0B",
                    marginRight: "8px"
                  }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                    Learning (Below 70%)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(10px)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                maxWidth: "450px",
                width: "100%",
                background: "rgba(15, 25, 45, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(0, 204, 255, 0.3)",
                padding: "30px",
                textAlign: "center",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={18} color="white" />
              </button>

              <div style={{
                width: "70px",
                height: "70px",
                background: `linear-gradient(135deg, ${selectedSkill.color}, ${selectedSkill.color}80)`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "2rem",
              }}>
                {selectedSkill.icon}
              </div>

              <h3 style={{ color: "#00cfff", marginBottom: "10px" }}>{selectedSkill.name}</h3>
              <p style={{ color: "white", fontSize: "0.9rem", marginBottom: "15px" }}>
                {selectedSkill.description}
              </p>

              <div style={{
                background: "rgba(0,204,255,0.1)",
                borderRadius: "12px",
                padding: "15px",
                marginTop: "20px",
              }}>
                <Award size={24} color="#00cfff" style={{ marginBottom: "8px" }} />
                <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "5px" }}>Certificate</h4>
                <p style={{ color: "#00cfff", fontSize: "0.85rem", margin: 0 }}>{selectedSkill.certificate}</p>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  marginTop: "20px",
                  padding: "10px 30px",
                  background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}