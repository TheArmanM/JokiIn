import React from 'react';
import { ArrowRight, ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';

// Import gambar dari folder assets
import heroBg from '../assets/images/hero.png'; 

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] p-6">
      
      {/* 1. BACKGROUND UTAMA (Tetap Tajam/Clear) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay gelap tipis agar gambar asli tidak terlalu terang */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. KARTU GLASSMORPHISM (Elemen Utama di Gambar) */}
      <div className="relative z-20 w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8 md:p-20 text-center">
          
          {/* Efek Cahaya di dalam kartu (Glow) */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <div className="bg-blue-500 p-1 rounded-full">
              <FileText size={12} className="text-white" />
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              Solusi Tugas Akademik & Profesional
            </span>
          </div>
          
          {/* Heading - Menggunakan Font Bold & Bersih */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            CEPAT. AKURAT.<br />
            TERPERCAYA.
          </h1>
          
          {/* Deskripsi */}
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Mulai dari <span className="font-bold text-white">30RB</span>. Olah data statistik, penulisan makalah, hingga desain presentasi premium dikerjakan dengan standar tinggi oleh tim profesional.
          </p>

          {/* Tombol dengan gaya persis seperti di gambar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/pricelist" 
              className="group px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-full font-bold text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all"
            >
              Lihat Harga <ArrowUpRight size={20} />
            </a>
            
            <div className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-md text-blue-300 rounded-full font-bold text-lg flex items-center gap-2">
              <ShieldCheck size={20} className="text-blue-400" /> 
              100% Privasi Aman
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}