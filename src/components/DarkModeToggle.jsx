import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "100px",
        right: "20px",
        zIndex: 10000,
        background: darkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)",
        color: darkMode ? "#fff" : "#333",
        border: `2px solid ${darkMode ? "#00cfff" : "#8b5cf6"}`,
        padding: "12px",
        borderRadius: "50%",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        boxShadow: darkMode ? "0 0 20px rgba(0,204,255,0.5)" : "0 0 20px rgba(139,92,246,0.3)",
      }}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
}