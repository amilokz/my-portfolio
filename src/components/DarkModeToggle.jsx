import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
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
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle light / dark mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
