import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 position-relative"
      style={{ background: "transparent", zIndex: 1 }}
    >
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="text-center fw-bold mb-5 display-6 text-info"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textShadow: "0 0 15px #00cfff, 0 0 30px #ffffff" }}
        >
          About Me
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* Magical Glassmorphic Card */}
            <motion.div
              className="card p-4 p-md-5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                background: "rgba(0, 0, 0, 0.35)",   // darker for contrast
                backdropFilter: "blur(25px)",       // stronger blur
                borderRadius: "1.8rem",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: "0 0 60px rgba(0, 204, 255, 0.3)", // glowing shadow
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                transform: "translateY(-10px)",
                boxShadow: "0 0 80px rgba(0, 204, 255, 0.5)",
              }}
            >
              <div className="row align-items-center">

                {/* Left Image */}
                <div className="col-md-5 mb-4 mb-md-0 text-center">
                  <motion.img
                    src="/ali2.jpeg" // your local image path
                    alt="Komil Hassan"
                    className="img-fluid rounded-4 shadow"
                    style={{
                      boxShadow: "0 0 40px rgba(0,204,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </div>

                {/* Right Content */}
                <div className="col-md-7 text-white">
                  <motion.p
                    className="fs-5 mb-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Hi! I am <strong>Komil Hassan</strong>, a passionate web developer
                    skilled in PHP, Laravel, React, and modern frontend technologies.
                    I enjoy creating responsive, clean, and functional web applications.
                  </motion.p>

                  <motion.p
                    className="fs-5 mb-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    I’ve built projects ranging from simple websites to full-stack
                    systems. My focus is always on writing clean code and delivering
                    smooth user experiences.
                  </motion.p>

                  <motion.p
                    className="fs-5"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    I consistently learn new tools and technologies to improve my craft
                    and stay updated with industry standards.
                  </motion.p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

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
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: 3 + Math.random() * 4,
              height: 3 + Math.random() * 4,
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
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
