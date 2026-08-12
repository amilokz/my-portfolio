import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl"
      aria-label="Toggle Theme"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        className={`transition-transform duration-500 ${
          darkMode ? "rotate-0" : "rotate-180"
        }`}
      >
        {darkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-900 dark:text-gray-100" />}
      </span>
    </button>
  );
}
