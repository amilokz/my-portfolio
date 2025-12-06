import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "GitHub Contributions", value: 2000, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
];

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function Stats() {
  return (
    <section id="stats" className="py-5 text-white" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">Stats</h2>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {statsData.map((s, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-4 text-center"
              style={{
                width: 220,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <StatCounter target={s.value} suffix={s.suffix} />
              <p className="mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ target = 0, suffix = "" }) {
  const count = useCountUp(target, 1000);
  return (
    <div style={{ fontSize: 32, fontWeight: 700, color: "#00cfff" }}>
      {count}
      {suffix}
    </div>
  );
}
