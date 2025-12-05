"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Facebook, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const html = document.documentElement;
    theme === "dark"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-sm py-2 px-6 flex items-center 
    justify-between md:flex-row flex-col"style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Left: Phone + Email */}
      <div className="flex items-center gap-6 dark:bg-gray-900 flex-col sm:flex-row md:gap-4 text-sm text-gray-800 dark:text-gray-200"style={{ background: "var(--bg)", color: "var(--text)" }}>
        <p className="ml-8 dark:text-white">📞 +91 9876543210</p>
        <p>✉️ contact@bistrobliss.com</p>
      </div>

      {/* Center: Social Icons */}
      <div className="flex items-center gap-4 mt-2 md:mt-0 space-x-3 sm:mt-0">
        <Link href="#" className="hover:text-blue-500"><Facebook size={18} /></Link>
        <Link href="#" className="hover:text-pink-500"><Instagram size={18} /></Link>
        <Link href="#" className="hover:text-blue-400"><Twitter size={18} /></Link>
        <Link href="#" className="hover:text-blue-400"><Github size={18} /></Link>
      </div>

      {/* Right: Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 mt-3"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
