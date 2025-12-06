import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Skills() {
  const skills = [
    { name: "PHP / Laravel", level: 90, category: "Backend" },
    { name: "React / JavaScript", level: 85, category: "Frontend" },
    { name: "HTML / CSS / Bootstrap / Tailwind", level: 95, category: "Frontend" },
    { name: "MySQL / API Integration", level: 80, category: "Database" },
    { name: "Git / GitHub", level: 85, category: "Tools" },
  ];

  return (
    <section id="skills" className="py-5 position-relative" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold text-white">Skills</h2>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-xs-12 col-md-6 col-lg-4" key={index}>
              {/* Magical Glass Card */}
              <div
                className="card h-100 p-3 shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 0 40px rgba(255,255,255,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  color: "white",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 0 60px rgba(255,255,255,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(255,255,255,0.2)";
                }}
              >
                <div className="text-center mb-3">
                  <span
                    className="badge rounded-pill mb-2"
                    style={{ backgroundColor: "#1e3a8a", fontSize: "0.9rem" }}
                  >
                    {skill.category}
                  </span>
                </div>

                <h5 className="text-center mb-3">{skill.name}</h5>

                <ProgressBar
                  now={skill.level}
                  label={`${skill.level}%`}
                  animated
                  striped
                  variant="success"
                  style={{ height: "1.2rem", borderRadius: "0.75rem" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
