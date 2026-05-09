"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[100] bg-main/90 backdrop-blur-md border-b border-white/5 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-white font-bold text-xl tracking-tighter">jn</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Joki<span className="text-brand-primary">In</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {/* Menggunakan class nav-link yang sudah bersih di globals.css */}
            <Link href="/services" className="nav-link">Layanan</Link>
            <Link href="/demo" className="nav-link">Demo Data</Link>
            <Link href="/portfolio" className="nav-link">Portofolio</Link>
            <Link href="/pricelist" className="nav-link">Harga</Link>
            
            <a 
              href="https://wa.me/6285183081282" 
              className="btn-primary py-2 px-6 text-sm font-semibold"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white p-2 outline-none transition-colors hover:text-brand-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN (PUSH SYSTEM) --- */}
        <div 
          className={`grid transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6 pb-8">
              {[
                { name: "Layanan", href: "/services" },
                { name: "Demo Data", href: "/demo" },
                { name: "Portofolio", href: "/portfolio" },
                { name: "Harga", href: "/pricelist" },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-white font-semibold text-lg border-b border-white/5 pb-3 hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              <a 
                href="https://wa.me/6285183081282" 
                className="btn-primary w-full text-center py-4 text-base font-semibold"
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