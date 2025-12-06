import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 50,
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        border: "none",
        padding: 12,
        borderRadius: 12,
        cursor: "pointer",
        backdropFilter: "blur(6px)",
      }}
      title="Toggle dark / light"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
