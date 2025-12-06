"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

  return (
   <nav
  className="w-full mb-0 flex flex-col md:flex-row items-center justify-between bg-white shadow-sm px-4 md:py-3 dark:text-white"
  style={{ background: "var(--bg)", color: "var(--text)" }}
  
>
  {/* Logo + Title + Button (mobile: single line, desktop: separate) */}
  <div className="flex items-center  w-full md:w-auto">
    {/* Image + H1 */}
    <div className="flex items-center">
      <Image
        src="/image.png"
        alt="Bistro Bliss Logo"
        width={50}
        height={50}
        className="h-12 w-auto"
      />
      <h1
        className="text-2xl font-semibold text-black"
        style={{ color: "var(--text)" }}
      >
        <i>Bistro Bliss</i>
      </h1>
    </div>

     {/* Center Nav Links (desktop only) */}
  <div className="hidden md:flex gap-10 md:mt-0 lg:ml-105 lg:mr-80  md:ml-0 md:mr-0">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/menu">Menu</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/cart">Cart</Link>
  </div>

    {/* Button */}
    <button
      onClick={() => router.push("/book-table")}
      className="
        px-4 py-2 border-2 border-black font-bold rounded-full text-sm 
        bg-white text-black hover:bg-gray-100 transition 
        dark:bg-gray-900 dark:text-white dark:border-white
        ml-15
      "
    >
      Book A Table
    </button>
      <button className="font-bold text-2xl ml-4 block md:hidden"
      onClick={()=>setOpen(!open)}>⋮</button>
  </div>
  {open && (
  <div className=" z-50 p-0">
    <ul className="absolute top-10 left-0 bg-white p-2 mt-6 w-20 rounded-b-sm shadow-lg z-50 ml-87">
      <li>
        <Link href="/" onClick={() => setOpen(false)}>
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setOpen(false)}>
          <p>About</p>
        </Link>
      </li>
      <li>
        <Link href="/menu" onClick={() => setOpen(false)}>
          <p>Menu</p>
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setOpen(false)}>
          <p>Contact</p>
        </Link>
      </li>
      <li>
        <Link href="/cart" onClick={() => setOpen(false)}>
          <p>Cart</p>
        </Link>
      </li>
    </ul>
  </div>
)}

</nav>


  );
}
