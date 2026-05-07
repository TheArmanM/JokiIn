"use client";

import { useState, useEffect } from "react";
import { 
  Check, 
  Zap, 
  Gem, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Star,
  PlusCircle,
  Clock,
  Layout,
  FileText,
  Database
} from "lucide-react";

export default function PricelistPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const plans = [
    {
      name: "Penulisan & Dokumen",
      price: "30K",
      label: "MS Word Specialist",
      desc: "Merapikan format, resume, hingga pembuatan makalah lengkap.",
      features: [
        "Merapikan Format (Margin/Font)",
        "Daftar Isi/Pustaka Otomatis",
        "Resume PDF/Video ke Word",
        "Pembuatan Makalah + Referensi",
        "Paket Presentasi (Makalah+PPT)"
      ],
      icon: <FileText size={20} className="text-blue-500" />,
      popular: false
    },
    {
      name: "Olah Data & Statistik",
      price: "75K",
      label: "Most Popular",
      desc: "Analisis data profesional menggunakan SPSS, Excel, atau Python.",
      features: [
        "Uji Asumsi Klasik Lengkap",
        "Analisis Regresi & Hipotesis",
        "Interpretasi Hasil Mendalam",
        "Free Konsultasi Hasil",
        "Paket Riset (Data+Interpretasi)"
      ],
      icon: <Database size={20} className="text-blue-500" />,
      popular: true
    },
    {
      name: "Visual & Presentasi",
      price: "40K",
      label: "Design Specialist",
      desc: "Desain PPT, Poster Ilmiah, dan editing elemen visual.",
      features: [
        "PPT Standard (Max 10 Slide)",
        "PPT Premium (Custom Design)",
        "Desain Poster Ilmiah/Infografis",
        "Edit Gambar & Layouting",
        "Paket Visual (Data+Grafik)"
      ],
      icon: <Layout size={20} className="text-blue-500" />,
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#000a12] pt-40 pb-32 px-6">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-2">
            <Flame size={14} className="text-blue-500 fill-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Official Pricelist 2026</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            INVESTASI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">WISUDA</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium italic">
            Harga mulai dari 30RB. Teknis akurat, privasi aman, dan pengerjaan tepat waktu.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-1 rounded-[3rem] transition-all duration-500 group ${
                plan.popular ? "scale-105 z-10" : "scale-100"
              }`}
            >
              <div className={`flex flex-col h-full p-8 md:p-10 rounded-[2.8rem] border backdrop-blur-3xl transition-all duration-500 ${
                plan.popular 
                ? "bg-gradient-to-b from-blue-600/20 to-black border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)]" 
                : "bg-white/[0.02] border-white/10 hover:border-blue-500/50"
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <Star size={12} className="fill-white" /> Recommended
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">{plan.icon}</div>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{plan.label}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mt-1">{plan.name}</h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter italic">{plan.price}</span>
                    <span className="text-slate-500 text-xs font-bold uppercase italic">/ Start From</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-4 font-medium leading-relaxed italic">{plan.desc}</p>
                </div>

                <div className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-blue-500/10 shrink-0">
                        <Check size={12} className="text-blue-500" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/6285183081282?text=Halo Zakaria, saya ingin pesan layanan ${plan.name}`}
                  target="_blank"
                  className={`group/btn w-full py-5 rounded-[2rem] flex items-center justify-center gap-3 font-black uppercase italic text-xs tracking-widest transition-all ${
                    plan.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30" 
                    : "bg-white/5 text-white hover:bg-blue-600 border border-white/10 hover:border-blue-500"
                  }`}
                >
                  Konsultasi Sekarang <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons & Surcharge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Difficulty Add-ons */}
          <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <PlusCircle className="text-blue-500" size={24} />
              <h3 className="text-xl font-black text-white italic uppercase tracking-widest">Penyesuaian Harga</h3>
            </div>
            <div className="space-y-4">
              {[
                { item: "Volume Data (101-500 baris)", price: "+50RB" },
                { item: "Data Cleaning (Data Kotor)", price: "+30RB - 50RB" },
                { item: "Referenasi Scopus/Inter", price: "+20RB" },
                { item: "Tingkat Kesulitan Rumus", price: "+30RB" }
              ].map((addon, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-slate-400 text-xs font-bold uppercase italic">{addon.item}</span>
                  <span className="text-blue-400 font-black italic">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Time Surcharge */}
          <div className="bg-blue-600/5 border border-blue-500/20 rounded-[3rem] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-blue-500" size={24} />
              <h3 className="text-xl font-black text-white italic uppercase tracking-widest">Ketentuan Waktu</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-black/40 p-5 rounded-2xl border border-blue-500/20">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-black italic uppercase text-sm">Same Day Service</span>
                  <span className="text-blue-500 font-black">+50%</span>
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase italic italic leading-relaxed">Selesai dalam &lt;12 jam dari kesepakatan.</p>
              </div>
              <div className="bg-blue-600 p-5 rounded-2xl shadow-lg shadow-blue-600/20">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-black italic uppercase text-sm">Overnight / Express</span>
                  <span className="text-white font-black">DOUBLE</span>
                </div>
                <p className="text-blue-100 text-[10px] font-bold uppercase italic leading-relaxed">Selesai dalam &lt;6 jam (Prioritas Utama).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Trust Section */}
        <div className="pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
             { icon: <ShieldCheck />, title: "Secure Data", desc: "Privasi Klien 100% Aman" },
             { icon: <Zap />, title: "Teknis Akurat", desc: "Logika IT & Tools Pro" },
             { icon: <Gem />, title: "Gratis Revisi", desc: "2x Revisi Minor" },
             { icon: <Flame />, title: "Fast Response", desc: "09.00 - 21.00 WIB" }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-500 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-all">
                   {item.icon}
                </div>
                <h4 className="text-white font-black uppercase italic text-[10px] tracking-widest">{item.title}</h4>
                <p className="text-slate-600 text-[9px] font-bold uppercase mt-1 px-4 leading-relaxed">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}