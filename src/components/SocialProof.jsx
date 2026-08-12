import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function SocialProof() {
  const { darkMode } = useContext(ThemeContext);
  const light = !darkMode;

  const cardStyle = {
    background: light ? "rgba(236,231,254,0.95)" : "rgba(255,255,255,0.06)",
    border: light ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: light ? "#1f2937" : "#ffffff",
    minWidth: 200,
    flex: "1 1 200px",
  };

  const iconColor = light ? "#6d28d9" : "#ffffff";
  const statColor = light ? "#5b21b6" : "#60a5fa";
  const accentColor = light ? "#7c3aed" : "#60a5fa";

  const linkStyle = {
    color: accentColor,
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
  };

  return (
    <section id="socialproof" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">Social Proof</h2>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <motion.div
            className="social-proof-card p-4 rounded-4 text-center"
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <FaGithub className="gh-icon" size={34} color={iconColor} />
            <h5 className="mt-3 mb-0 fw-bold" style={{ color: statColor }}>1.2k</h5>
            <p className="mb-1">GitHub Stars</p>
            <a href="https://github.com/amilokz" target="_blank" rel="noreferrer" style={linkStyle}>
              View Repo <FaArrowRight size={11} />
            </a>
          </motion.div>

          <motion.div
            className="social-proof-card p-4 rounded-4 text-center"
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <FaLinkedin className="li-icon" size={34} color={iconColor} />
            <h5 className="mt-3 mb-0 fw-bold" style={{ color: statColor }}>900+</h5>
            <p className="mb-1">LinkedIn Followers</p>
            <a href="https://www.linkedin.com/in/komil-hassan-a97b66282" target="_blank" rel="noreferrer" style={linkStyle}>
              View Profile <FaArrowRight size={11} />
            </a>
          </motion.div>

          <motion.a
            href="https://wa.me/923238559822"
            target="_blank"
            rel="noreferrer"
            className="social-proof-card p-4 rounded-4 text-center text-decoration-none"
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaWhatsapp className="wa-icon" size={34} color={iconColor} />
            <h5 className="mt-3 mb-0 fw-bold" style={{ color: statColor }}>Say Hi</h5>
            <p className="mb-1">WhatsApp</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

