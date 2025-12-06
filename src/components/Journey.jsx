import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

export default function Journey() {
  const timeline = [
    {
      year: "2022",
      title: "Started Web Development",
      desc: "Began learning HTML, CSS, JS and created my first small projects.",
      icon: <FaLaptopCode size={28} />,
    },
    {
      year: "2025",
      title: "Bachelor's in IT",
      desc: "Completed IT degree and strengthened my programming foundation.",
      icon: <FaGraduationCap size={28} />,
    },
    {
      year: "2025",
      title: "PHP & Laravel Developer",
      desc: "Built real-world projects, APIs, authentication systems & dashboards.",
      icon: <FaCertificate size={28} />,
    },
    {
      year: "2024",
      title: "TryHackMe & Cyber Learning",
      desc: "Gained cybersecurity skills, completed labs & earned badges.",
      icon: <FaRocket size={28} />,
    },
  ];

  return (
    <section id="journey" className="py-5 text-white position-relative">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5 display-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Journey 🚀
        </motion.h2>

        <div className="timeline position-relative mx-auto" style={{ maxWidth: "700px" }}>
          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "4px",
              height: "100%",
              background: "rgba(0, 200, 255, 0.5)",
              transform: "translateX(-50%)",
              boxShadow: "0 0 20px #00cfff",
            }}
          ></div>

          {/* Timeline Items */}
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item d-flex gap-4 mb-5 position-relative"
              style={{
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Icon */}
              <motion.div
                className="icon-box d-flex justify-content-center align-items-center"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(0, 200, 255, 0.2)",
                  border: "2px solid #00cfff",
                  boxShadow: "0 0 20px #00cfff",
                }}
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                className="p-4 flex-grow-1"
                style={{
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="fw-bold text-info">{item.year}</h5>
                <h4 className="fw-semibold">{item.title}</h4>
                <p className="text-light">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
