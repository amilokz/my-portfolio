import React, { useEffect, useState, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { FaFolderOpen, FaBriefcase, FaCodeBranch, FaSmile } from "react-icons/fa";

const statsData = [
  {
    label: "Projects Completed",
    value: 20,
    suffix: "+",
    tag: "Portfolio",
    icon: <FaFolderOpen size={26} />,
    detail: "Delivered across React, PHP, Laravel & modern web stacks.",
  },
  {
    label: "Years Experience",
    value: 3,
    suffix: "+",
    tag: "Career",
    icon: <FaBriefcase size={26} />,
    detail: "Full-stack development across frontend and backend.",
  },
  {
    label: "GitHub Contributions",
    value: 2000,
    suffix: "+",
    tag: "Open Source",
    icon: <FaCodeBranch size={26} />,
    detail: "Commits, pull requests & personal projects shipped.",
  },
  {
    label: "Happy Clients",
    value: 30,
    suffix: "+",
    tag: "Support",
    icon: <FaSmile size={26} />,
    detail: "Satisfied clients with modern, reliable builds.",
  },
];

function useCountUp(target, active, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return count;
}

export default function Stats() {
  const { darkMode } = useContext(ThemeContext);
  const light = !darkMode;
  const backGradient = light
    ? "linear-gradient(135deg, #e9d5ff 0%, #c4b5fd 55%, #8b5cf6 100%)"
    : "linear-gradient(135deg, #2563eb 0%, #1e3a8a 45%, #0f172a 100%)";
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { margin: "-60px" });

  return (
    <section id="stats" className="py-5 text-white" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">Stats</h2>

        <div ref={statsRef} className="d-flex flex-wrap justify-content-center gap-4">
          {statsData.map((s, i) => (
            <motion.div
              key={i}
              className="stat-flip"
              style={{ width: 230, height: 190, perspective: "1000px", cursor: "pointer" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
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
                  <div style={{ color: light ? "#6d28d9" : "#00cfff", marginBottom: "0.25rem" }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 34, fontWeight: 700, color: light ? "#5b21b6" : "#00cfff" }}>
                    <StatCounter target={s.value} suffix={s.suffix} active={inView} />
                  </div>
                  <p className="mb-0 mt-1" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                    {s.label}
                  </p>
                  <small style={{ fontSize: "0.68rem", opacity: 0.55, marginTop: "0.35rem" }}>
                    Hover for details
                  </small>
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
                    border: light
                      ? "1px solid rgba(139, 92, 246, 0.4)"
                      : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "1.25rem",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    boxShadow: "0 10px 30px rgba(48, 25, 52, 0.4)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: light ? "#5b21b6" : "#e9d5ff",
                      fontWeight: 600,
                    }}
                  >
                    {s.tag}
                  </span>
                  <div style={{ margin: "0.5rem 0", color: light ? "#6d28d9" : "#ffffff" }}>
                    {s.icon}
                  </div>
                  <p
                    className="mb-0 text-center"
                    style={{ fontSize: "0.85rem", lineHeight: "1.5", color: light ? "#1f2937" : "#f3e8ff" }}
                  >
                    {s.detail}
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

function StatCounter({ target = 0, suffix = "", active = false }) {
  const count = useCountUp(target, active, 1000);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
