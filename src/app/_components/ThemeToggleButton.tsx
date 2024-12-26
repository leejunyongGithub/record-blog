"use client";
import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(global.window.__theme || "light");
    global.window.__onThemeChange = setTheme;
  }, []);

  if (theme === undefined) return null;

  return (
    <button
      className="hover:bg-gray-400/10 dark:hover:bg-gray-500/30 rounded-md p-2 transition-all duration-300 opacity-0 animate-fadeIn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <BsMoonFill className="drop-shadow-lg text-yellow-500" size={20} /> : <BsSunFill className="drop-shadow-lg text-yellow-500" size={20} />}
    </button>
  );
}
