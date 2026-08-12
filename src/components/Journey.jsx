import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

export default function Journey() {
  const { darkMode } = useContext(ThemeContext);
  const light = !darkMode;

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  const timeline = [
    {
      year: "2022",
      title: "Started Web Development",
      desc: "Began learning HTML, CSS, JS and created my first small projects.",
      icon: <FaLaptopCode size={36} />,
    },
    {
      year: "2025",
      title: "Bachelor's in IT",
      desc: "Completed IT degree and strengthened my programming foundation.",
      icon: <FaGraduationCap size={36} />,
    },
    {
      year: "2025",
      title: "PHP & Laravel Developer",
      desc: "Built real-world projects, APIs, authentication systems & dashboards.",
      icon: <FaCertificate size={36} />,
    },
    {
      year: "2024",
      title: "TryHackMe & Cyber Learning",
      desc: "Gained cybersecurity skills, completed labs & earned badges.",
      icon: <FaRocket size={36} />,
    },
  ];

  const lineColor = light ? "rgba(139,92,246,0.6)" : "rgba(0,200,255,0.5)";
  const lineGlow = light ? "0 0 20px rgba(139,92,246,0.6)" : "0 0 20px #00cfff";
  const iconBg = light ? "#ffffff" : "rgba(0,200,255,0.2)";
  const iconBorder = light ? "#7c3aed" : "#00cfff";
  const iconColor = light ? "#6d28d9" : "#00cfff";
  const yearColor = light ? "#7c3aed" : "#00cfff";
  const cardBg = light ? "rgba(236,231,254,0.95)" : "rgba(255,255,255,0.05)";
  const cardBorder = light ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(255,255,255,0.1)";

  return (
    <section id="journey" className="text-white position-relative">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5 display-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey 🚀
        </motion.h2>

        <div ref={timelineRef} className="timeline position-relative mx-auto" style={{ maxWidth: "820px" }}>
          {/* Scroll-driven Vertical Line */}
          <motion.div
            className="timeline-line"
            style={{
              background: lineColor,
              boxShadow: lineGlow,
              transformOrigin: "top",
            }}
            animate={{
              scaleY: scrollYProgress,
            }}
            transition={{ duration: 0 }}
          />

          {/* Timeline Items */}
          {timeline.map((item, i) => {
            const start = i / timeline.length;
            const end = (i + 0.85) / timeline.length;
            const itemProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

            return (
              <motion.div
                key={i}
                className="timeline-item position-relative"
                animate={{
                  opacity: itemProgress,
                  x: itemProgress > 0 ? 0 : (i % 2 === 0 ? -60 : 60),
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Icon on the line */}
                <motion.div
                  className="icon-box d-flex justify-content-center align-items-center"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: iconBg,
                    border: `2px solid ${iconBorder}`,
                    boxShadow: `0 0 18px ${iconBorder}`,
                    color: iconColor,
                  }}
                  animate={{
                    scale: itemProgress,
                    rotate: itemProgress * 360 - 90,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  {item.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`timeline-card p-4 ${i % 2 === 0 ? "timeline-card--left" : "timeline-card--right"}`}
                  style={{
                    borderRadius: "12px",
                    background: cardBg,
                    border: cardBorder,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: light ? "#1f2937" : "#ffffff",
                  }}
                  whileHover={{ y: -4 }}
                >
                  <h5 className="fw-bold" style={{ color: yearColor }}>{item.year}</h5>
                  <h4 className="fw-semibold">{item.title}</h4>
                  <p className="mb-0">{item.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}