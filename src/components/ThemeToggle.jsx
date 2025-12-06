import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl"
      aria-label="Toggle Theme"
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        className={`transition-transform duration-500 ${
          dark ? "rotate-0" : "rotate-180"
        }`}
      >
        {dark ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-900 dark:text-gray-100" />}
      </span>
    </button>
  );
}
