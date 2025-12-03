"use client";

import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-white shadow-sm md:flex  dark:text-white  flex-col md:flex-row px-4 py-3"style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"  // ← replace with your image path
          alt="Bistro Bliss Logo"
          width={50}
          height={50}
          className="h-20 w-auto"
        />
        <h1 className="text-2xl font-semibold text-black "style={{ background: "var(--bg)", color: "var(--text)" }}><i>Bistro Bliss</i></h1>
      </div>

      {/* Center Nav Links */}
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Book a Table Button */}
      <button className="px-5 py-2 border-black border-2 text-black font-bold rounded-full text-sm hover:bg-gray-100 transition dark:text-white mt-2 md:mt-0 "style={{ background: "var(--bg)", color: "var(--text)" }}>
        Book A Table
      </button>
    </nav>
  );
}
