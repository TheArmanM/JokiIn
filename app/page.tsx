"use client";

import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "@/components/Hero";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Decor Global - Menggunakan brand-primary dari global CSS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />
      
      <Hero />
      
      {/* Section Harga Terpopuler */}
      <section id="harga" className="py-32 px-6 relative overflow-hidden">
        {/* Glow Decor Tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Tag h2 otomatis menggunakan gaya font-black, italic, uppercase dari globals.css */}
            <h2>
              LAYANAN <span className="text-brand-primary">TERPOPULER</span>
            </h2>
            <p className="text-muted font-bold italic uppercase text-[10px] tracking-[0.3em] mt-4">
              Solusi Cepat untuk Tugas Akademik & Profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center">
            
            {/* Card Excel - Menggunakan .glass-card */}
            <div className="group glass-card p-10 hover:border-brand-primary/30">
              <h3 className="font-black text-white text-2xl uppercase italic mb-2 tracking-tight">Olah Data Excel</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-secondary text-[10px] font-black uppercase italic tracking-widest">Start</span>
                <p className="text-5xl font-black text-white italic tracking-tighter">30k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Cleaning Data", "Rumus & Pivot", "Visualisasi Grafik"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary text-sm font-bold italic">
                    <CheckCircle2 size={16} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="block text-center py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase italic text-[10px] tracking-widest hover:bg-brand-primary hover:border-brand-primary transition-all">
                Detail Layanan
              </Link>
            </div>
            
            {/* Card SPSS (Best Seller / Highlighted) */}
            <div className="group p-10 bg-card border-2 border-brand-primary rounded-[3rem] shadow-[0_0_50px_rgba(59,130,246,0.15)] relative scale-105 z-20">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] italic flex items-center gap-2 shadow-lg">
                <Star size={12} fill="white" /> Best Seller
              </div>
              <h3 className="font-black text-white text-2xl uppercase italic mb-2 tracking-tight">Statistik SPSS</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-brand-primary text-[10px] font-black uppercase italic tracking-widest">Start</span>
                <p className="text-5xl font-black text-white italic tracking-tighter">75k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Validitas & Reliabilitas", "Uji Asumsi Klasik", "Interpretasi Hasil Bab 4"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary text-sm font-bold italic">
                    <CheckCircle2 size={16} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              {/* Menggunakan .btn-primary dari global CSS */}
              <Link href="/services" className="btn-primary py-5 text-[10px] tracking-widest hover:scale-[1.02] active:scale-95">
                Order Sekarang <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card Word - Menggunakan .glass-card */}
            <div className="group glass-card p-10 hover:border-brand-primary/30">
              <h3 className="font-black text-white text-2xl uppercase italic mb-2 tracking-tight">Formatting Word</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-secondary text-[10px] font-black uppercase italic tracking-widest">Start</span>
                <p className="text-5xl font-black text-white italic tracking-tighter">30k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Daftar Isi Otomatis", "Daftar Pustaka", "Standar Penulisan"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary text-sm font-bold italic">
                    <CheckCircle2 size={16} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="block text-center py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase italic text-[10px] tracking-widest hover:bg-brand-primary hover:border-brand-primary transition-all">
                Detail Layanan
              </Link>
            </div>

          </div>

          <div className="mt-24 text-center">
             <Link href="/services" className="inline-flex items-center gap-3 text-muted hover:text-brand-primary transition-colors font-black uppercase italic text-[10px] tracking-[0.3em] group">
               Lihat Semua Layanan <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}