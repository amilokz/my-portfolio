import React from "react";
import { motion } from "framer-motion";

const achievements = [
  { title: "TryHackMe Certified", icon: "🛡️" },
  { title: "Laravel Certification", icon: "📜" },
  { title: "React Certification", icon: "⚛️" },
  { title: "College Degree", icon: "🎓" },
  { title: "PHP & JavaScript Awards", icon: "🏆" },
];

export default function Achievements() {
  return (
    <section className="py-20 text-center text-white">
      <div className="container">
        <h2 className="display-6 fw-bold mb-8">Achievements & Certifications</h2>
        <div className="row justify-content-center">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="col-6 col-md-4 col-lg-2 mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div
                className="p-4 rounded-3 shadow-lg"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(15px)",
                }}
              >
                <div className="fs-1 mb-3">{item.icon}</div>
                <p className="fw-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
