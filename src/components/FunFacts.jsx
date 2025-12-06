import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaCode, FaMoon, FaPuzzlePiece } from "react-icons/fa";

const facts = [
  { icon: <FaCode size={28} />, label: "Code lover", value: 1 }, // label only
  { icon: <FaPuzzlePiece size={28} />, label: "Debugging master", value: 1 },
  { icon: <FaCoffee size={28} />, label: "Cups of Coffee", value: 300 },
  { icon: <FaMoon size={28} />, label: "Night Owl Dev", value: 1 },
];

export default function FunFacts() {
  return (
    <section id="funfacts" className="py-5 text-white" style={{ background: "transparent" }}>
      <h2 className="text-center fw-bold mb-5 display-5">Fun Facts & Hobbies</h2>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-4 text-center"
              style={{
                width: 220,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="mb-3" style={{ color: "#00cfff" }}>{f.icon}</div>
              <h3 className="fw-bold">{f.value > 1 ? f.value : ""}</h3>
              <p className="mb-0">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
