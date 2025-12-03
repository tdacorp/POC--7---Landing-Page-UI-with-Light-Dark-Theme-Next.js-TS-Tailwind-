// components/Footer.tsx
import React from "react";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 px-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-lg">Navigation</h3>
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
