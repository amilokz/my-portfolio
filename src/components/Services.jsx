import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Globe, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    color: "#61DAFB"
  },
  {
    icon: <Database size={28} />,
    title: "Backend Development",
    description: "Scalable server-side applications, REST APIs, and database design.",
    color: "#8b5cf6"
  },
  {
    icon: <Layout size={28} />,
    title: "Frontend Development",
    description: "Responsive, interactive UIs with React, Tailwind CSS, and Bootstrap.",
    color: "#00cfff"
  },
  {
    icon: <Globe size={28} />,
    title: "Full Stack Solutions",
    description: "End-to-end application development from database to user interface.",
    color: "#10b981"
  },
  {
    icon: <Shield size={28} />,
    title: "API Integration",
    description: "Seamless integration with third-party APIs and external services.",
    color: "#f59e0b"
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimization",
    description: "Speed optimization and SEO best practices for web applications.",
    color: "#ef4444"
  }
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: "80px 24px",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #ffffff, #00cfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}>
            My Services
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
            Professional services I offer to help bring your ideas to life
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                background: "rgba(15, 25, 45, 0.6)",
                backdropFilter: "blur(16px)",
                borderRadius: "20px",
                border: `1px solid ${service.color}40`,
                padding: "24px",
                textAlign: "center",
              }}
            >
              <div style={{
                width: "60px",
                height: "60px",
                background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: service.color,
              }}>
                {service.icon}
              </div>
              <h3 style={{ color: "white", fontSize: "1.1rem", marginBottom: "10px" }}>{service.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", lineHeight: "1.5" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}