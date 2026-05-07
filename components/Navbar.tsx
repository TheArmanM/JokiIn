"use client";
import Link from "next/link"; // Import ini yang wajib ada
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-[60] bg-navy/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Link ke Home saat logo diklik */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">jn</span>
            </div>
            <span className="text-white font-bold text-xl">
              Joki<span className="text-blue-500">In</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-white/80 text-sm items-center">
          <a href="/#harga" className="hover:text-blue-500 transition">Harga</a>
          <Link href="/services" className="hover:text-blue-500 transition">
  Layanan
</Link>
          
          <Link href="/portfolio" className="hover:text-blue-500 transition">
            Portofolio
          </Link>
          
          <a 
            href="https://wa.me/6285183081282" 
            className="bg-blue-600 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </nav>
  );
}