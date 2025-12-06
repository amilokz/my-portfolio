import React, { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform (Demo)",
    problem: "Client needed a fast, responsive store with admin panel.",
    solution: "Built with Laravel backend + React frontend, optimized queries, added caching.",
    tech: ["Laravel", "React", "MySQL", "Redis"],
    lessons: "Improved DB indexing and component reusability.",
    imgs: [],
  },
  {
    id: 2,
    title: "Local Marketplace",
    problem: "Small sellers needed an online presence.",
    solution: "Created multi-vendor features and payment integration.",
    tech: ["PHP", "Bootstrap", "Stripe"],
    lessons: "Payment flow and UX improvements.",
    imgs: [],
  },
];

export default function CaseStudy() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="casestudies" className="py-5 text-white" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">Project Case Studies</h2>

        <div className="row g-4">
          {caseStudies.map((c) => (
            <motion.div key={c.id} className="col-md-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div
                className="p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="fw-bold">{c.title}</h5>
                <p className="text-light mb-2"><strong>Problem:</strong> {c.problem}</p>
                <p className="text-light mb-3"><strong>Solution:</strong> {c.solution}</p>
                <div className="mb-3">
                  {c.tech.map((t, i) => <span key={i} className="me-2 badge bg-info text-dark">{t}</span>)}
                </div>

                <button className="btn btn-outline-light btn-sm" onClick={() => setOpenId(openId === c.id ? null : c.id)}>
                  {openId === c.id ? "Close Details" : "View Details"}
                </button>

                {openId === c.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mt-3">
                    <h6>What I learned</h6>
                    <p className="text-light">{c.lessons}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
