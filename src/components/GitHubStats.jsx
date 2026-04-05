import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Users, Code2, GitFork } from 'lucide-react';

export default function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/amilokz')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('GitHub API error:', err);
        setLoading(false);
      });
  }, []);

  const statItems = [
    { label: "GitHub Repos", value: stats.repos, icon: <Code2 size={22} />, color: "#00cfff" },
    { label: "Followers", value: stats.followers, icon: <Users size={22} />, color: "#8b5cf6" },
    { label: "Open Source", value: "Active", icon: <Star size={22} />, color: "#f59e0b" },
  ];

  return (
    <section id="github-stats" style={{
      padding: "60px 24px",
      position: "relative",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,204,255,0.1)", padding: "6px 16px", borderRadius: "50px", marginBottom: "16px" }}>
            <Github size={16} color="#00cfff" />
            <span style={{ color: "#00cfff", fontSize: "0.8rem" }}>Open Source</span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
            fontWeight: "bold",
            color: "white",
            marginBottom: "8px",
          }}>
            GitHub Presence
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Check out my open source contributions
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(15, 25, 45, 0.6)",
                backdropFilter: "blur(16px)",
                borderRadius: "16px",
                border: `1px solid ${item.color}40`,
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ color: item.color, marginBottom: "8px" }}>{item.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", marginBottom: "4px" }}>
                {loading ? "..." : item.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <a
            href="https://github.com/amilokz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(0,204,255,0.3)",
              borderRadius: "30px",
              color: "white",
              textDecoration: "none",
              fontSize: "0.85rem",
            }}
          >
            <Github size={16} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}