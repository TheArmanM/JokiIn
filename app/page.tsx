"use client";

import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "@/components/Hero";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import TestimonialCarousel from "@/components/LogoCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Decor Global */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />
      
      <Hero />

      {/* Section Value Proposition - Empati Mahasiswa */}
      {/* Section Value Proposition - Empati Mahasiswa */}
<section className="py-24 px-6 relative overflow-hidden">
  {/* Dekorasi cahaya di belakang agar tidak flat */}
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/5 blur-[100px] -z-10" />
  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Privasi Aman",
        desc: "Identitas dan data penelitian kamu dijamin kerahasiaannya 100%.",
        icon: <ShieldCheck size={28} />,
      },
      {
        title: "Bimbingan Detail",
        desc: "Hasil kerja dijelaskan sampai kamu paham untuk bahan bimbingan dosen.",
        icon: <MessageCircle size={28} />,
      },
      {
        title: "Pengerjaan Cepat",
        desc: "Deadline mepet? Tenang, kami bantu selesaikan tepat waktu.",
        icon: <Clock size={28} />,
      },
    ].map((item, idx) => (
      <div 
        key={idx} 
        className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand-primary/30 hover:bg-white/[0.05] transition-all duration-500"
      >
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Icon Container dengan Glow saat Hover */}
          <div className="p-4 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-2xl text-brand-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500">
            {item.icon}
          </div>
          
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">
              {item.title}
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      
      {/* Section Layanan */}
      <section id="harga" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              SOLUSI <span className="text-brand-primary">TUGAS AKHIR</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.4em] mt-4">
              Bantuan Profesional untuk Mahasiswa Berbagai Jurusan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center">
            
            {/* Card Olah Data - General */}
            <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500">
              <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Olah Data Penelitian</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mulai</span>
                <p className="text-5xl font-bold text-white tracking-tighter">30k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Input & Cleaning Data", "Visualisasi Tabel/Grafik", "Analisis Deskriptif"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="https://wa.me/your-number" className="block text-center py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary transition-all">
                Tanya Dulu Yuk
              </Link>
            </div>
            
            {/* Card Bab 4/Skripsi (Best Seller) */}
            <div className="group p-10 bg-white/[0.08] border-2 border-brand-primary rounded-[2.5rem] shadow-[0_0_50px_rgba(59,130,246,0.15)] relative md:scale-105 z-20">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                <Star size={12} fill="white" /> Terlaris
              </div>
              <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Analisis Bab 4 (SPSS)</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">Mulai</span>
                <p className="text-5xl font-bold text-white tracking-tighter">75k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Olah Kuesioner Lengkap", "Uji Hipotesis & Asumsi", "Penjelasan Interpretasi"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="https://wa.me/your-number" className="btn-primary py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                Konsultasi Gratis <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card Rapikan Skripsi */}
            <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500">
              <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Rapikan Skripsi</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mulai</span>
                <p className="text-5xl font-bold text-white tracking-tighter">30k</p>
              </div>
              <ul className="text-left space-y-4 mb-12">
                {["Daftar Isi/Tabel Otomatis", "Cek Penulisan (Typo)", "Format Sesuai Pedoman"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="https://wa.me/your-number" className="block text-center py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary transition-all">
                Cek Harga
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Testimoni Ganti Logo Carousel */}
      <TestimonialCarousel />
      <WhyChooseUs />

      <WhatsAppButton />
    </main>
  );
}