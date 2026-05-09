"use client";

import React, { useState } from "react"; // Tambahkan useState
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "@/components/Hero";
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  FileText, 
  Database, 
  Layout,
  X // Import icon close untuk modal
} from "lucide-react";
import Link from "next/link";
import TestimonialCarousel from "@/components/LogoCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  // State untuk mengontrol Popup
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Fungsi Generator Pesan WA Profesional
  const sendWhatsApp = (serviceName: string) => {
    const phoneNumber = "6285183081282";
    const message = `Halo Admin, saya tertarik dengan layanan *${serviceName}*.%0A%0A*Detail Kebutuhan:*%0A- Jenis Tugas: [Sebutkan di sini]%0A- Deadline: [Sebutkan tanggal]%0A%0AMohon informasi lebih lanjut mengenai prosedur dan estimasi biayanya. Terima kasih!`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Data Konten Modal
  const modalContent: Record<string, { title: string; desc: string; details: string[] }> = {
    dokumen: {
      title: "Penulisan Dokumen",
      desc: "Layanan optimasi dokumen akademik agar sesuai dengan standar pedoman penulisan.",
      details: [
        "Merapikan Margin, Font, dan Spasi sesuai pedoman.",
        "Pembuatan Daftar Isi, Tabel, dan Pustaka otomatis.",
        "Parafrase manual untuk menurunkan skor Turnitin.",
        "Pembuatan resume/CV profesional dari berbagai format.",
        "Pembuatan makalah lengkap dengan sitasi kredibel."
      ]
    },
    visual: {
      title: "Visual & Presentasi",
      desc: "Transformasi materi Anda menjadi desain visual yang menarik dan komunikatif.",
      details: [
        "Desain Slide PPT Premium (Interaktif & Animasi).",
        "Pembuatan Poster Ilmiah untuk seminar/lomba.",
        "Redesain layouting dokumen agar lebih elegan.",
        "Infografis data statistik yang mudah dipahami.",
        "Editing gambar pendukung materi presentasi."
      ]
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Background Decor Global */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />
      
      <Hero />

      {/* Section Value Proposition - Empati Mahasiswa */}
      <section className="py-24 px-6 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
              Layanan <span className="text-brand-primary">Unggulan</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.4em] mt-4">
              Solusi Profesional untuk Berbagai Kebutuhan Akademik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
            
            {/* Card 1: Penulisan Dokumen */}
            <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <FileText size={24} />
                  </div>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">MS Word Specialist</span>
                </div>
                <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Penulisan Dokumen</h3>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  Merapikan format, resume, hingga pembuatan makalah lengkap.
                </p>
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mulai</span>
                  <p className="text-5xl font-bold text-white tracking-tighter">30k</p>
                </div>
                <ul className="text-left space-y-4 mb-12">
                  {[
                    "Merapikan Format (Margin/Font)",
                    "Daftar Isi/Pustaka Otomatis",
                    "Resume PDF/Video ke Word",
                    "Pembuatan Makalah + Referensi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm font-medium leading-tight">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => setActiveModal('dokumen')}
                className="block w-full text-center py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary transition-all cursor-pointer"
              >
                Cek Detail
              </button>
            </div>
            
            {/* Card 2: Olah Data & Statistik (CHATT GENERATOR) */}
            <div className="group p-10 bg-white/[0.08] border-2 border-brand-primary rounded-[2.5rem] shadow-[0_0_50px_rgba(59,130,246,0.15)] relative md:scale-105 z-20 flex flex-col justify-between">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg whitespace-nowrap">
                <Star size={12} fill="white" /> Paling Populer
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-primary/20 rounded-xl text-brand-primary">
                    <Database size={24} />
                  </div>
                  <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Data Analyst</span>
                </div>
                <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Olah Data & Statistik</h3>
                <p className="text-slate-300 text-xs mb-8 leading-relaxed">
                  Analisis data profesional menggunakan SPSS, Excel, atau Python.
                </p>
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">Mulai</span>
                  <p className="text-5xl font-bold text-white tracking-tighter">50k</p>
                </div>
                <ul className="text-left space-y-4 mb-12">
                  {[
                    "Uji Asumsi Klasik Lengkap",
                    "Analisis Regresi & Hipotesis",
                    "Interpretasi Hasil Mendalam",
                    "Free Konsultasi Hasil",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white text-sm font-semibold leading-tight">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => sendWhatsApp("Olah Data & Statistik")}
                className="btn-primary w-full py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 cursor-pointer"
              >
                Konsultasi Sekarang <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 3: Visual & Presentasi */}
            <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <Layout size={24} />
                  </div>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Design Specialist</span>
                </div>
                <h3 className="font-bold text-white text-2xl mb-2 tracking-tight">Visual & Presentasi</h3>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  Desain PPT, Poster Ilmiah, dan editing elemen visual.
                </p>
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mulai</span>
                  <p className="text-5xl font-bold text-white tracking-tighter">40k</p>
                </div>
                <ul className="text-left space-y-4 mb-12">
                  {[
                    "PPT Standard (Max 10 Slide)",
                    "PPT Premium (Custom Design)",
                    "Desain Poster Ilmiah/Infografis",
                    "Edit Gambar & Layouting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm font-medium leading-tight">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => setActiveModal('visual')}
                className="block w-full text-center py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary transition-all cursor-pointer"
              >
                Lihat Detail
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* COMPONENT MODAL (Popup Fitur Tambahan) */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full shadow-2xl overflow-hidden">
            {/* Background Glow Inside Modal */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 blur-[80px]" />
            
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">
              {modalContent[activeModal].title}
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              {modalContent[activeModal].desc}
            </p>
            
            <div className="space-y-4 mb-10">
              {modalContent[activeModal].details.map((point, i) => (
                <div key={i} className="flex gap-4 items-start text-slate-300">
                  <CheckCircle2 size={20} className="text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => sendWhatsApp(modalContent[activeModal].title)}
              className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Pesan Sekarang <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <TestimonialCarousel />
      <WhyChooseUs />

      <WhatsAppButton />
    </main>
  );
}