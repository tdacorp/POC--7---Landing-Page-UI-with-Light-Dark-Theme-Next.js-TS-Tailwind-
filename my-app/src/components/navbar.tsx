"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-0 px-8 flex items-center justify-between bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpg"  // ← replace with your image path
          alt="Bistro Bliss Logo"
          width={64}
          height={64}
          className="h-20 w-auto"
        />
        <h1 className="text-2xl font-semibold"><i>Bistro Bliss</i></h1>
      </div>

      {/* Center Nav Links */}
      <div className="flex gap-10 text-gray-700 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Book a Table Button */}
      <button className="px-5 py-2 border-black border-2 text-black font-bold rounded-full text-sm hover:bg-gray-100 transition">
        Book A Table
      </button>
    </nav>
  );
}
