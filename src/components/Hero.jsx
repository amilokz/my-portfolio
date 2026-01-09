import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  Download, 
  ArrowRight, 
  Sparkles, 
  ChevronDown
} from "lucide-react";

export default function Hero() {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [particleCount, setParticleCount] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth < 768 ? 40 : 80);
      setShowScrollHint(window.scrollY === 0);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => {
      setShowScrollHint(window.scrollY === 0);
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="hero"
      className="position-relative d-flex flex-column justify-content-center align-items-center text-center min-vh-100 overflow-hidden"
      style={{ 
        zIndex: 1,
        paddingTop: "80px", // Added padding for fixed navbar
        paddingBottom: "100px", // Extra space for scroll indicator
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100 top-0 start-0 gradient-background" style={{ zIndex: -1 }}>
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(0, 204, 255, 0.1) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            filter: "blur(60px)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
            filter: "blur(60px)"
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container position-relative content-container"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          maxWidth: "1200px",
          marginTop: "-30px", // Compensate for navbar height
        }}
      >
        {/* Animated Badge */}
        <motion.div
          className="d-inline-flex align-items-center px-4 py-2 mb-4 mb-md-5"
          variants={itemVariants}
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            border: "1px solid rgba(0, 204, 255, 0.3)",
            boxShadow: "0 0 30px rgba(0, 204, 255, 0.2)"
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(0, 204, 255, 0.3)"
          }}
        >
          <Sparkles size={16} className="me-2" style={{ color: "#00cfff" }} />
          <span className="text-white fw-medium" style={{ fontSize: "0.9rem" }}>
            Full Stack Developer & Creative Technologist
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="fw-bold mb-3 mb-md-4"
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #00cfff 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1.1",
            textShadow: "0 0 60px rgba(0, 204, 255, 0.3)"
          }}
        >
          Komil Hassan
          <motion.span
            className="d-block mt-2"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              background: "linear-gradient(135deg, #00cfff 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          >
            Building the Future with Code
          </motion.span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          className="mb-4 mb-md-5"
          variants={itemVariants}
          style={{
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p
            className="lead mb-0"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              color: "#cce7ff",
              textShadow: "0 0 20px rgba(0, 204, 255, 0.5)",
              fontWeight: "400",
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 1rem"
            }}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "React & Laravel Specialist",
                "UI/UX Enthusiast",
                "Problem Solver",
                "Digital Experience Creator"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
        </motion.div>

        {/* Introduction - Fixed text */}
        <motion.p
          className="mb-5 mb-md-5 intro-text"
          variants={itemVariants}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255, 255, 255, 0.9)",
            maxWidth: "700px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.8",
            padding: "0 1rem",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          I transform complex problems into{" "}
          <strong style={{ 
            color: "#00cfff",
            textShadow: "0 0 10px rgba(0, 204, 255, 0.5)"
          }}>elegant</strong>,{" "}
          <strong style={{ 
            color: "#00cfff",
            textShadow: "0 0 10px rgba(0, 204, 255, 0.5)"
          }}>performant</strong> web applications
          with cutting-edge technologies and{" "}
          <strong style={{ 
            color: "#00cfff",
            textShadow: "0 0 10px rgba(0, 204, 255, 0.5)"
          }}>user-centered design</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center mb-5 mb-md-5 hero-content-wrapper"
          variants={itemVariants}
        >
          {/* Portfolio Button */}
          <motion.a
            href="#projects"
            className="d-flex align-items-center justify-content-center px-4 px-md-5 py-3"
            style={{
              background: "rgba(0, 204, 255, 0.15)",
              color: "#ffffff",
              borderRadius: "15px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              border: "1px solid rgba(0, 204, 255, 0.4)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 40px rgba(0, 204, 255, 0.2)",
              minWidth: "180px",
              transition: "all 0.3s ease"
            }}
            whileHover={{
              scale: 1.05,
              background: "rgba(0, 204, 255, 0.25)",
              boxShadow: "0 0 60px rgba(0, 204, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowRight size={20} className="me-2" />
            View Portfolio
          </motion.a>

          {/* Download CV Button */}
          <motion.a
            href="/my-portfolio/jobcv.pdf"
            download="Komil_Hassan_CV.pdf"
            className="d-flex align-items-center justify-content-center px-4 px-md-5 py-3"
            style={{
              background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
              color: "#ffffff",
              borderRadius: "15px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 0 50px rgba(0, 204, 255, 0.4)",
              minWidth: "180px",
              position: "relative",
              overflow: "hidden"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 80px rgba(0, 204, 255, 0.6)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} className="me-2" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="d-flex gap-3 justify-content-center mb-5 mb-md-5"
          variants={itemVariants}
        >
          {[
            { 
              name: "GitHub", 
              icon: "bi-github", 
              color: "#333",
              link: "https://github.com/amilokz"
            },
            { 
              name: "LinkedIn", 
              icon: "bi-linkedin", 
              color: "#0077B5",
              link: "https://linkedin.com/in/amilokz"
            },
            { 
              name: "Twitter", 
              icon: "bi-twitter", 
              color: "#1DA1F2",
              link: "https://twitter.com/amilokz"
            },
            { 
              name: "Email", 
              icon: "bi-envelope", 
              color: "#EA4335",
              link: "mailto:amilokz1@gmail.com"
            }
          ].map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.link}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel={social.name === "Email" ? "" : "noopener noreferrer"}
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                background: `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.15)`,
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: `1px solid ${social.color}40`,
                color: "white",
                fontSize: "1.25rem",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              whileHover={{
                scale: 1.1,
                background: `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.25)`,
                boxShadow: `0 0 30px ${social.color}40`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`bi ${social.icon}`}></i>
            </motion.a>
          ))}
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mt-4"
          variants={itemVariants}
        >
          <p className="mb-3" style={{ 
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.9rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "0 1px 5px rgba(0, 0, 0, 0.5)"
          }}>
            Technologies I Work With
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {["React", "Laravel", "PHP", "JavaScript", "MySQL", "Three.js", "Tailwind", "Bootstrap"].map((tech, idx) => (
              <motion.span
                key={tech}
                className="px-3 py-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.85rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)"
                }}
                whileHover={{
                  scale: 1.05,
                  background: "rgba(0, 204, 255, 0.1)",
                  borderColor: "rgba(0, 204, 255, 0.3)"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Fixed positioning */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ 
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 100
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ 
                cursor: "pointer",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                setShowScrollHint(false);
              }}
            >
              <span className="text-white mb-2" style={{ 
                fontSize: "0.9rem",
                opacity: 0.9,
                background: 'rgba(0, 0, 0, 0.4)',
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                Explore More
              </span>
              <ChevronDown 
                size={24} 
                color="rgba(255,255,255,0.9)" 
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Particles */}
      <div 
        className="particles-container"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: -1
        }}
      >
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              background: "radial-gradient(circle, #00cfff, transparent)",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
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