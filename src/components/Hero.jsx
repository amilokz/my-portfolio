import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="position-relative d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
      style={{ zIndex: 1, color: "#ffffff" }}
    >
      {/* Main Heading */}
      <motion.h1
        className="fw-bold mb-3"
        style={{
          fontSize: "3rem",
          textShadow: "0 0 15px #00cfff, 0 0 30px #00cfff, 0 0 45px #ffffff",
        }}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          Hi, I'm Komil Hassan
        </motion.span>
      </motion.h1>

      {/* Subheading with typing effect */}
      <motion.p
        className="lead mb-4"
        style={{
          fontSize: "1.5rem",
          color: "#cce7ff",
          textShadow: "0 0 8px #00cfff, 0 0 15px #00cfff",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typewriter
          words={[
            "Web Developer",
            "PHP | Laravel | React",
            "Creating Modern Web Experiences",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.p>

      {/* Introduction sentence */}
      <motion.p
        className="text-white mb-4 fs-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I build <strong>responsive</strong> and <strong>interactive web applications</strong> that shine.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="d-flex gap-3 justify-content-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {/* View My Work */}
        <motion.a
          href="#projects"
          style={{
            color: "#ffffff",
            background: "rgba(0,204,255,0.2)",
            border: "1px solid rgba(0,204,255,0.5)",
            borderRadius: "12px",
            padding: "12px 30px",
            fontSize: "1.1rem",
            boxShadow: "0 0 20px rgba(0,204,255,0.5)",
            backdropFilter: "blur(5px)",
            transition: "0.3s ease",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(0,204,255,0.7)",
          }}
        >
          View My Work
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href="/My Resume.pdf"  // <-- Put your real PDF here
          download
          style={{
            color: "#ffffff",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "12px",
            padding: "12px 30px",
            fontSize: "1.1rem",
            boxShadow: "0 0 15px rgba(255,255,255,0.3)",
            backdropFilter: "blur(5px)",
            transition: "0.3s ease",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(255,255,255,0.5)",
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="d-flex gap-3 justify-content-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {["github", "linkedin", "twitter"].map((icon, idx) => (
          <a
            key={idx}
            href={`https://${icon}.com/komilhassan`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
            style={{ transition: "0.3s", textShadow: "0 0 8px #00cfff" }}
          >
            <i className={`bi bi-${icon}`}></i>
          </a>
        ))}
      </motion.div>

      {/* Floating Magical Particles */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              borderRadius: "50%",
              backgroundColor: "#00cfff",
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: ["0%", "100%"],
              x: [`${Math.random() * 5}%`, `${-Math.random() * 5}%`],
              opacity: [0.6, 0.1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 6,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
