"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Rodar só no cliente
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  // Evitar render no server
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer transition bg-transparent text-custom-black dark:text-custom-white hover:text-custom-brown"
      aria-label="Trocar tema"
    >

      {dark ? <i className="fa-regular fa-sun" /> : <i className="fa-regular fa-moon" />}
    </button>
  );
}