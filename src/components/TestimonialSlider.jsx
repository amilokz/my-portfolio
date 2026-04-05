import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Raza",
    role: "Project Manager",
    text: "Komil delivered exceptional work on our Laravel project. His code quality and communication were outstanding.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "CEO",
    text: "Working with Komil was a pleasure. He understood our requirements perfectly and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Tech Lead",
    text: "Komil's React skills are top-notch. He built a complex dashboard that our clients love.",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ padding: "80px 24px", position: "relative" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #ffffff, #00cfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "40px",
          }}>
            What People Say
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(15, 25, 45, 0.6)",
                backdropFilter: "blur(16px)",
                borderRadius: "24px",
                border: "1px solid rgba(0, 204, 255, 0.25)",
                padding: "40px",
              }}
            >
              <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "20px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < testimonials[current].rating ? "#f59e0b" : "none"} color="#f59e0b" />
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px", fontStyle: "italic" }}>
                "{testimonials[current].text}"
              </p>
              <h4 style={{ color: "#00cfff", marginBottom: "5px" }}>{testimonials[current].name}</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "30px" }}>
            <button onClick={prev} style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(0,204,255,0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <ChevronLeft size={20} color="#00cfff" />
            </button>
            <button onClick={next} style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(0,204,255,0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <ChevronRight size={20} color="#00cfff" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}