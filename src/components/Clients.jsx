import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Tech Solutions", logo: "🏢" },
  { name: "Creative Agency", logo: "🎨" },
  { name: "Startup Hub", logo: "🚀" },
  { name: "E-Commerce Plus", logo: "🛒" },
  { name: "Digital Mind", logo: "💡" },
];

export default function Clients() {
  return (
    <section style={{ padding: "60px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h3 style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", letterSpacing: "2px" }}>
            TRUSTED BY
          </h3>
        </motion.div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              style={{
                textAlign: "center",
                padding: "20px 30px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{client.logo}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>{client.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}