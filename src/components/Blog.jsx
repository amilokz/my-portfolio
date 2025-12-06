import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Laravel Tips I Wish I Knew Earlier",
      desc: "Clean code, Eloquent tricks, debugging, and best practices.",
    },
    {
      title: "Best Practices for Clean React Code",
      desc: "Reusable components, folder structure, hooks, and performance.",
    },
    {
      title: "My Web Development Journey",
      desc: "How I started, what I learned, and how I improved.",
    },
  ];

  return (
    <section className="py-5 text-white" id="blog">
      <h2 className="text-center fw-bold mb-5 display-5">Blog & Articles</h2>

      <div className="container">
        <div className="row g-4">
          {posts.map((p, i) => (
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
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h4 className="fw-bold">{p.title}</h4>
                <p className="text-light">{p.desc}</p>
                <a href="#" className="text-info">Read more →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
