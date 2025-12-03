"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Facebook, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-sm py-2 px-6 flex items-center justify-between">
      
      {/* Left: Phone + Email */}
      <div className="flex items-center gap-6">
        <p className="ml-8">📞 +91 9876543210</p>
        <p>✉️ contact@bistrobliss.com</p>
      </div>

      {/* Center: Social Icons */}
      <div className="flex items-center gap-4 ml-150">
        <Link href="#" className="hover:text-blue-500"><Facebook size={18} /></Link>
        <Link href="#" className="hover:text-pink-500"><Instagram size={18} /></Link>
        <Link href="#" className="hover:text-blue-400"><Twitter size={18} /></Link>
        <Link href="#" className="hover:text-blue-400"><Github size={18} /></Link>
      </div>

      {/* Right: Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 mr-4 border border-black dark:border-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  );
}
