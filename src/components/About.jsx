import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  User, 
  Download, 
  Briefcase, 
  Heart, 
  Clock, 
  MapPin, 
  Calendar,
  Award,
  Code2,
  Coffee,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Trophy,
  GraduationCap,
  Rocket,
  Zap,
  Star,
  GitBranch,
  Target
} from "lucide-react";

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);

  // Stats Data
  const stats = [
    { value: "20+", label: "Projects Completed", icon: <Briefcase size={22} />, color: "#00cfff", delay: 0 },
    { value: "3+", label: "Years Experience", icon: <Clock size={22} />, color: "#8b5cf6", delay: 0.1 },
    { value: "100%", label: "Client Satisfaction", icon: <Heart size={22} />, color: "#f59e0b", delay: 0.2 },
  ];

  // Journey Timeline
  const timeline = [
    { year: "2022", title: "Started Web Development", description: "Began learning HTML, CSS, JS", icon: <Code2 size={18} />, color: "#61DAFB" },
    { year: "2023", title: "First Professional Projects", description: "Delivered real-world applications", icon: <Rocket size={18} />, color: "#00cfff" },
    { year: "2024", title: "Full Stack Expert", description: "Mastered React, Laravel, Three.js", icon: <Target size={18} />, color: "#8b5cf6" },
    { year: "2025", title: "Continuous Growth", description: "Building amazing digital experiences", icon: <TrendingUp size={18} />, color: "#10b981" },
  ];

  // Achievements
  const achievements = [
    { title: "React Certification", icon: <Code2 size={20} />, color: "#61DAFB" },
    { title: "Laravel Certification", icon: <GitBranch size={20} />, color: "#FF2D20" },
    { title: "PHP & JavaScript Awards", icon: <Trophy size={20} />, color: "#f59e0b" },
    { title: "College Degree", icon: <GraduationCap size={20} />, color: "#00cfff" },
  ];

  // Fun Facts
  const funFacts = [
    { icon: <Code2 size={20} />, label: "Code Lover", value: "∞" },
    { icon: <Coffee size={20} />, label: "Coffee/Week", value: "20+" },
    { icon: <Zap size={20} />, label: "All Nighters", value: "50+" },
    { icon: <Star size={20} />, label: "GitHub Stars", value: "100+" },
  ];

  // Qualities
  const qualities = [
    { title: "Clean Code", desc: "Maintainable & scalable", icon: <CheckCircle size={18} /> },
    { title: "Fast Delivery", desc: "On-time completion", icon: <Clock size={18} /> },
    { title: "Creative Design", desc: "Modern & unique", icon: <Coffee size={18} /> },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(0,204,255,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "-10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: "inline-block", marginBottom: "20px" }}
          >
            <div style={{
              background: "linear-gradient(135deg, rgba(0,204,255,0.15), rgba(139,92,246,0.15))",
              padding: "8px 20px",
              borderRadius: "50px",
              border: "1px solid rgba(0,204,255,0.3)",
            }}>
              <span style={{ color: "#00cfff", fontSize: "0.85rem", fontWeight: "500", letterSpacing: "1px" }}>
                WHO AM I
              </span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #ffffff, #00cfff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
            }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Get to know the developer behind the code
          </motion.p>
        </motion.div>

        {/* Main Grid - 2 Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          
          {/* LEFT COLUMN: Profile + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 25, 45, 0.6)",
              backdropFilter: "blur(16px)",
              borderRadius: "28px",
              border: "1px solid rgba(0, 204, 255, 0.25)",
              padding: "32px",
            }}
          >
            {/* Avatar */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                style={{
                  width: "120px",
                  height: "120px",
                  background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 0 40px rgba(0,204,255,0.4)",
                  position: "relative",
                }}
              >
                <User size={52} color="white" />
                <div style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  background: "#10b981",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "3px solid #0a0a1a",
                }} />
              </motion.div>
              <h3 style={{ color: "white", fontSize: "1.6rem", marginBottom: "6px" }}>Komil Hassan</h3>
              <p style={{ color: "#00cfff", fontSize: "0.9rem", marginBottom: "20px" }}>Full Stack Developer</p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "24px", flexWrap: "wrap" }}>
                {[
                  { icon: <MapPin size={14} />, text: "Pakistan" },
                  { icon: <Calendar size={14} />, text: "Available" },
                  { icon: <Award size={14} />, text: "3+ Years" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.05)", padding: "6px 12px", borderRadius: "20px" }}>
                    <span style={{ color: "#00cfff" }}>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div style={{ marginBottom: "24px" }}>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.7", marginBottom: "16px", fontSize: "0.9rem" }}>
                I'm a passionate <span style={{ color: "#00cfff", fontWeight: "500" }}>Full Stack Developer</span> with a mission to create 
                exceptional digital experiences that make a difference.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7", fontSize: "0.9rem" }}>
                My journey in web development is driven by curiosity and the desire to solve 
                complex problems through elegant code. I believe in writing clean, maintainable 
                solutions that stand the test of time.
              </p>
            </div>

            {/* Qualities */}
            <div style={{ marginBottom: "28px" }}>
              <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Star size={18} color="#00cfff" />
                What I Bring
              </h4>
              {qualities.map((q, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                  <div style={{ color: "#00cfff" }}>{q.icon}</div>
                  <div>
                    <div style={{ color: "white", fontSize: "0.85rem", fontWeight: "500" }}>{q.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>{q.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <motion.a
              href="/my-portfolio/jobcv.pdf"
              download="Komil_Hassan_CV.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "14px",
                background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                color: "white",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <Download size={18} />
              Download Resume
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* RIGHT COLUMN: Stats + Timeline + Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 25, 45, 0.6)",
              backdropFilter: "blur(16px)",
              borderRadius: "28px",
              border: "1px solid rgba(0, 204, 255, 0.25)",
              padding: "32px",
            }}
          >
            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", marginBottom: "32px" }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  animate={hoveredStat === i ? { y: -5, scale: 1.02 } : {}}
                  style={{
                    textAlign: "center",
                    padding: "16px 12px",
                    background: `linear-gradient(135deg, ${stat.color}15, transparent)`,
                    borderRadius: "16px",
                    border: `1px solid ${stat.color}30`,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ color: stat.color, marginBottom: "10px" }}>{stat.icon}</div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: stat.delay }}
                    viewport={{ once: true }}
                    style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Journey Timeline */}
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingUp size={18} color="#00cfff" />
                My Journey
              </h4>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTimeline(i)}
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "16px",
                    padding: "12px",
                    background: activeTimeline === i ? "rgba(0,204,255,0.1)" : "rgba(255,255,255,0.03)",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    border: activeTimeline === i ? "1px solid rgba(0,204,255,0.3)" : "1px solid transparent",
                  }}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: "#00cfff", fontSize: "0.65rem", marginBottom: "2px" }}>{item.year}</div>
                    <div style={{ color: "white", fontSize: "0.85rem", fontWeight: "500", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Trophy size={18} color="#f59e0b" />
                Achievements
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                {achievements.map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                    borderRadius: "12px",
                    border: `1px solid ${item.color}20`,
                  }}>
                    <div style={{ color: item.color }}>{item.icon}</div>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div>
              <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Zap size={18} color="#f59e0b" />
                Fun Facts
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {funFacts.map((fact, i) => (
                  <div key={i} style={{
                    textAlign: "center",
                    padding: "12px 8px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "12px",
                  }}>
                    <div style={{ color: "#00cfff", marginBottom: "6px" }}>{fact.icon}</div>
                    <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}>{fact.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem" }}>{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}