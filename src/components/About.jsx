import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aliImage from "../assets/ali2-fixed.jpeg";
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Zap,
  Download,
  Sparkles,
  Award,
  Rocket
} from "lucide-react";

export default function About() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  const technologies = [
    { name: "React", icon: <Code size={20} />, color: "#61DAFB" },
    { name: "Laravel", icon: <Cpu size={20} />, color: "#FF2D20" },
    { name: "PHP", icon: <Globe size={20} />, color: "#777BB4" },
    { name: "JavaScript", icon: <Zap size={20} />, color: "#F7DF1E" },
    { name: "MySQL", icon: <Database size={20} />, color: "#4479A1" },
    { name: "Three.js", icon: <Layers size={20} />, color: "#8B5CF6" },
  ];

  const achievements = [
    { title: "5+ Projects", desc: "Successfully delivered", icon: <Rocket size={16} /> },
    { title: "Full Stack", desc: "End-to-end development", icon: <Layers size={16} /> },
    { title: "Modern Tech", desc: "Latest frameworks & tools", icon: <Sparkles size={16} /> },
  ];

  return (
    <section
      id="about"
      className="py-5 position-relative"
      style={{ 
        background: "transparent", 
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        {/* Section Header with Glitch Effect */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ 
            color: "#ffffff",
            textShadow: `
              0 0 20px rgba(0, 204, 255, 0.8),
              0 0 40px rgba(0, 204, 255, 0.4),
              0 0 60px rgba(0, 204, 255, 0.2)
            `,
            background: "linear-gradient(135deg, #00cfff 0%, #8b5cf6 50%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            position: "relative",
            display: "inline-block"
          }}>
            <Sparkles className="me-3" style={{ display: "inline-block" }} />
            About Me
            <Sparkles className="ms-3" style={{ display: "inline-block" }} />
          </h2>
          
          <p className="lead mb-0" style={{ 
            color: "rgba(255,255,255,0.8)",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Crafting digital experiences with code & creativity
          </p>
        </motion.div>

        {/* Main Glass Card */}
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <motion.div
              className="card p-4 p-md-5"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(30px)",
                borderRadius: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  inset 0 2px 0 0 rgba(255,255,255,0.1),
                  0 30px 60px rgba(0, 0, 0, 0.4),
                  0 0 80px rgba(0, 204, 255, 0.2)
                `,
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Animated Background Glow */}
              <div style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: `
                  radial-gradient(circle at 30% 30%, rgba(0, 204, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
                `,
                zIndex: -1,
                pointerEvents: "none",
                animation: "rotate 20s linear infinite"
              }} />

              <style>{`
                @keyframes rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>

              <div className="row align-items-center g-4 g-md-5">
                {/* Left Image Section */}
                <div className="col-md-5 text-center">
                  <motion.div
                    className="position-relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        boxShadow: `
                          0 20px 40px rgba(0,0,0,0.3),
                          0 0 60px rgba(0, 204, 255, 0.3),
                          inset 0 1px 0 rgba(255,255,255,0.2)
                        `,
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      <img
                        src={aliImage}
                        alt="Komil Hassan"
                        className="img-fluid rounded-3"
                        style={{
                          filter: "brightness(1.05) contrast(1.1)",
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden"
                        }}
                      />
                      
                      {/* Image Glow Effect */}
                      <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        background: "linear-gradient(135deg, rgba(0,204,255,0.1) 0%, transparent 50%)",
                        pointerEvents: "none"
                      }} />
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="position-absolute"
                      style={{
                        top: "-10px",
                        right: "-10px",
                        background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        zIndex: 2
                      }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        ease: "easeInOut" 
                      }}
                    >
                      <Award size={14} className="me-2" />
                      Developer
                    </motion.div>
                  </motion.div>

                  {/* Tech Stack Tags */}
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h6 className="mb-3" style={{ 
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "500"
                    }}>
                      Tech Stack
                    </h6>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          className="d-flex align-items-center px-3 py-2"
                          style={{
                            background: `rgba(${parseInt(tech.color.slice(1,3), 16)}, ${parseInt(tech.color.slice(3,5), 16)}, ${parseInt(tech.color.slice(5,7), 16)}, 0.15)`,
                            backdropFilter: "blur(10px)",
                            borderRadius: "12px",
                            border: `1px solid ${tech.color}40`,
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            background: `rgba(${parseInt(tech.color.slice(1,3), 16)}, ${parseInt(tech.color.slice(3,5), 16)}, ${parseInt(tech.color.slice(5,7), 16)}, 0.25)`,
                            boxShadow: `0 0 20px ${tech.color}40`
                          }}
                          onMouseEnter={() => setHoveredTech(index)}
                          onMouseLeave={() => setHoveredTech(null)}
                          animate={hoveredTech === index ? { 
                            y: -5,
                            transition: { type: "spring", stiffness: 400 }
                          } : {}}
                        >
                          <span className="me-2" style={{ color: tech.color }}>
                            {tech.icon}
                          </span>
                          <span style={{ 
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "0.85rem",
                            fontWeight: "500"
                          }}>
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Content Section */}
                <div className="col-md-7">
                  {/* Content Tabs */}
                  <div className="mb-4">
                    <div className="d-flex border-bottom" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                      {["about", "experience", "approach"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          style={{
                            padding: "12px 24px",
                            background: "transparent",
                            border: "none",
                            color: activeTab === tab ? "#00cfff" : "rgba(255,255,255,0.6)",
                            fontWeight: "600",
                            position: "relative",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            transition: "all 0.3s ease"
                          }}
                        >
                          {tab}
                          {activeTab === tab && (
                            <motion.div
                              layoutId="underline"
                              style={{
                                position: "absolute",
                                bottom: "-1px",
                                left: "0",
                                right: "0",
                                height: "3px",
                                background: "linear-gradient(90deg, #00cfff, #8b5cf6)",
                                borderRadius: "3px 3px 0 0"
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === "about" && (
                        <div className="text-white">
                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.9)"
                          }}>
                            <strong className="text-info">Hi! I'm Komil Hassan</strong>, a passionate full-stack developer 
                            specializing in modern web technologies. With expertise in both frontend and backend 
                            development, I create seamless digital experiences that combine functionality with aesthetics.
                          </p>

                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            My journey in web development has equipped me with a versatile skill set, allowing me 
                            to build everything from dynamic SPAs to robust server-side applications. I believe 
                            in writing clean, maintainable code and staying updated with industry best practices.
                          </p>

                          <p className="fs-5" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            When I'm not coding, I'm exploring new technologies, contributing to open-source 
                            projects, or creating interactive visual experiences like this solar system!
                          </p>
                        </div>
                      )}

                      {activeTab === "experience" && (
                        <div className="text-white">
                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.9)"
                          }}>
                            <strong>Full Stack Development:</strong> Building end-to-end web applications with 
                            React/Next.js on the frontend and Laravel/Node.js on the backend.
                          </p>
                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            <strong>API Development:</strong> Creating RESTful APIs and integrating third-party 
                            services for seamless data flow between applications.
                          </p>
                          <p className="fs-5" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            <strong>Database Design:</strong> Structuring efficient MySQL/PostgreSQL databases 
                            with proper indexing and optimization techniques.
                          </p>
                        </div>
                      )}

                      {activeTab === "approach" && (
                        <div className="text-white">
                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.9)"
                          }}>
                            <strong>User-Centric Design:</strong> Every project begins with understanding the 
                            end-user's needs and crafting solutions that provide exceptional experiences.
                          </p>
                          <p className="fs-5 mb-4" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            <strong>Performance Focus:</strong> Optimizing load times, reducing bundle sizes, 
                            and implementing efficient algorithms for smooth performance.
                          </p>
                          <p className="fs-5" style={{ 
                            lineHeight: "1.8",
                            color: "rgba(255,255,255,0.85)"
                          }}>
                            <strong>Continuous Learning:</strong> Staying updated with the latest frameworks, 
                            tools, and best practices to deliver cutting-edge solutions.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Achievements Bar */}
                  <motion.div 
                    className="mt-4 pt-4 border-top"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="row g-3">
                      {achievements.map((achievement, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="d-flex align-items-center p-3" style={{
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)"
                          }}>
                            <div className="me-3" style={{ color: "#00cfff" }}>
                              {achievement.icon}
                            </div>
                            <div>
                              <h6 className="mb-0" style={{ 
                                color: "rgba(255,255,255,0.95)",
                                fontSize: "1.1rem"
                              }}>
                                {achievement.title}
                              </h6>
                              <small style={{ 
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "0.8rem"
                              }}>
                                {achievement.desc}
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="mt-4 pt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="d-flex gap-3">
                   <motion.a
    href="/my-portfolio/jobcv.pdf"
  download="Komil_Hassan_CV.pdf"
  className="d-flex align-items-center justify-content-center px-4 py-3"
  style={{
    background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
    color: "white",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
    flex: 1,
    border: "none",
    boxShadow: "0 10px 30px rgba(0, 204, 255, 0.3)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden"
  }}
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 15px 40px rgba(0, 204, 255, 0.5)"
  }}
  whileTap={{ scale: 0.98 }}
  onClick={(e) => {
    // Add click handler for better compatibility
    console.log("Downloading CV...");
    
    // For mobile browsers that block automatic downloads
    if (/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent)) {
      e.preventDefault();
      window.open('/jobcv.pdf', '_blank');
      return;
    }
    
    // For desktop, let the download attribute work naturally
    // Optionally add visual feedback
    const originalHTML = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = '<span style="color: #00ff88">✓ Downloading...</span>';
    e.currentTarget.style.background = 'linear-gradient(135deg, #00ff88, #00cfff)';
    
    setTimeout(() => {
      e.currentTarget.innerHTML = originalHTML;
      e.currentTarget.style.background = 'linear-gradient(135deg, #00cfff, #8b5cf6)';
    }, 1000);
  }}
  title="Click to download Komil Hassan's CV (PDF)"
>
  {/* Shine effect on hover */}
  <div style={{
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.5s ease"
  }} />
  
  <Download size={18} className="me-2" />
  Download CV
</motion.a>

                      <motion.a
                        href="#contact"
                        className="d-flex align-items-center justify-content-center px-4 py-3"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "white",
                          borderRadius: "12px",
                          textDecoration: "none",
                          fontWeight: "600",
                          flex: 1,
                          border: "1px solid rgba(255,255,255,0.2)",
                          backdropFilter: "blur(10px)"
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          background: "rgba(255,255,255,0.15)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get In Touch
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: -1
      }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "radial-gradient(circle, #00cfff, transparent)",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}