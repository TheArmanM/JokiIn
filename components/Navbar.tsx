"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[100] bg-[#030712]/95 backdrop-blur-md border-b border-white/5 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">jn</span>
              </div>
              <span className="text-white font-bold text-xl">
                Joki<span className="text-blue-500">In</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-white/80 text-sm items-center">
            <Link href="/services" className="hover:text-blue-500 transition font-medium">Layanan</Link>
            
            {/* Menu Demo ditambahkan di Desktop agar sinkron */}
            <Link href="/demo" className="hover:text-blue-500 transition font-medium">Demo Data</Link>
            
            <Link href="/portfolio" className="hover:text-blue-500 transition font-medium">Portofolio</Link>
            <a href="/pricelist" className="hover:text-blue-500 transition font-medium">Harga</a>
            
            <a 
              href="https://wa.me/6285183081282" 
              className="bg-blue-600 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white p-2 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN (PUSH SYSTEM) --- */}
        <div 
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-5 pb-6">
              <Link href="/services" onClick={() => setIsOpen(false)} className="text-white/80 font-bold text-lg border-b border-white/5 pb-2">Layanan</Link>
              
              {/* Menu Demo di Mobile */}
              <Link href="/demo" onClick={() => setIsOpen(false)} className="text-white/80 font-bold text-lg border-b border-white/5 pb-2">Demo Data</Link>
              
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-white/80 font-bold text-lg border-b border-white/5 pb-2">Portofolio</Link>
              <a href="/pricelist" onClick={() => setIsOpen(false)} className="text-white/80 font-bold text-lg border-b border-white/5 pb-2">Harga</a>
              
              <a 
                href="https://wa.me/6285183081282" 
                className="bg-blue-600 w-full text-center py-4 rounded-xl text-white font-black shadow-lg"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}