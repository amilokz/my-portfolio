import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

export default function Testimonials() {
  const { darkMode } = useContext(ThemeContext);
  const light = !darkMode;
  const reviews = [
    {
      name: "Sir kashif",
      role: "Teacher",
      message:
        "Komil is a hardworking student with strong problem-solving skills. His dedication to learning is impressive.",
    },
    {
      name: "Team Leader rehmat",
      role: "Project Lead",
      message:
        "Komil creates clean and effective solutions. He understands project needs quickly and works professionally.",
    },
    {
      name: "M Amad",
      role: "Web Developer",
      message:
        "I’ve seen Komil’s growth. His frontend and backend skills have improved greatly. Always motivated!",
    },
  ];

  return (
    <section className="py-5 text-white" id="testimonials">
      <h2 className="text-center fw-bold mb-5 display-5">Testimonials</h2>

      <div className="container">
        <div className="row g-4">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="p-4 rounded-4"
                style={{
                  background: light ? "rgba(236,231,254,0.95)" : "rgba(255,255,255,0.08)",
                  border: light ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  color: light ? "#1f2937" : "#ffffff",
                }}
              >
                <p className="fst-italic">“{r.message}”</p>
                <h5 className="mt-3 fw-bold">{r.name}</h5>
                <span className="testimonial-role">{r.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
