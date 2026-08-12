import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const achievements = [
  {
    title: "TryHackMe Certified",
    icon: "🛡️",
    detail: "Hands-on cybersecurity skills validated through TryHackMe rooms and challenges.",
  },
  {
    title: "Laravel Certification",
    icon: "📜",
    detail: "Certified Laravel developer with strong command of MVC, Eloquent, and REST APIs.",
  },
  {
    title: "React Certification",
    icon: "⚛️",
    detail: "Professional React development covering hooks, state management, and performance.",
  },
  {
    title: "College Degree",
    icon: "🎓",
    detail: "Computer science background giving a strong foundation in software engineering.",
  },
  {
    title: "PHP & JavaScript Awards",
    icon: "🏆",
    detail: "Recognized for excellence in PHP and JavaScript development projects.",
  },
];

export default function Achievements() {
  const { darkMode } = useContext(ThemeContext);
  const light = !darkMode;
  const backGradient = light
    ? "linear-gradient(135deg, #e9d5ff 0%, #c4b5fd 55%, #8b5cf6 100%)"
    : "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 50%, #0f172a 100%)";

  return (
    <section className="text-center text-white">
      <div className="container">
        <h2 className="display-6 fw-bold mb-5">Achievements &amp; Certifications</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="stat-flip"
              style={{ width: 210, height: 190, perspective: "1000px", cursor: "pointer" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div
                className="stat-flip-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)",
                }}
              >
                {/* Front */}
                <div
                  className="stat-flip-front stat-flip-face"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    background: light ? "rgba(236,231,254,0.95)" : "rgba(15,23,42,0.7)",
                    border: light ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "1.25rem",
                    color: light ? "#1f2937" : "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <div className="mb-3" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {item.icon}
                  </div>
                  <p className="fw-bold mb-1" style={{ fontSize: "0.95rem", lineHeight: "1.35", padding: "0 0.5rem" }}>
                    {item.title}
                  </p>
                </div>

                {/* Back */}
                <div
                  className="stat-flip-back stat-flip-face"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: backGradient,
                    border: light ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "1.25rem",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.1rem",
                    boxShadow: "0 10px 30px rgba(48, 25, 52, 0.4)",
                  }}
                >
                  <span style={{ position: "absolute", top: "12px", right: "12px", fontSize: "1.4rem", lineHeight: 1 }}>
                    🏅
                  </span>
                  <div style={{ fontSize: "1.5rem", lineHeight: 1, marginBottom: "0.5rem", color: light ? "#5b21b6" : "#e9d5ff" }}>
                    {item.icon}
                  </div>
                  <p
                    className="mb-0 text-center fw-semibold"
                    style={{ fontSize: "0.95rem", marginBottom: "0.4rem", color: light ? "#1f2937" : "#f3e8ff" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="mb-0 text-center"
                    style={{ fontSize: "0.8rem", lineHeight: "1.45", color: light ? "#1f2937" : "#f3e8ff" }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
