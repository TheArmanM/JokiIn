"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

const PRICELIST_PLANS = [
  {
    name: "Penulisan Dokumen",
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
    icon: <FileText size={20} className="text-brand-primary" />,
    popular: false
  },
  {
    name: "Olah Data & Statistik",
    price: "50K",
    label: "Paling Populer",
    desc: "Analisis data profesional menggunakan SPSS, Excel, atau Python.",
    features: [
      "Uji Asumsi Klasik Lengkap",
      "Analisis Regresi & Hipotesis",
      "Interpretasi Hasil Mendalam",
      "Free Konsultasi Hasil",
      "Paket Riset (Data+Interpretasi)"
    ],
    icon: <Database size={20} className="text-brand-primary" />,
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
    icon: <Layout size={20} className="text-brand-primary" />,
    popular: false
  }
];

export default function PricelistPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleBooking = (planName: string) => {
    const slug = encodeURIComponent(planName);
    router.push(`/services?package=${slug}`);
  };

  return (
    <main className="min-h-screen bg-main pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full mb-6">
            <Flame size={14} className="text-brand-primary fill-brand-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Pricelist 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            INVESTASI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">WISUDA</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base font-medium mt-6 leading-relaxed">
            Harga kompetitif dengan pengerjaan standar profesional. Kami memastikan setiap detail tugas Anda dikerjakan dengan presisi tinggi.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {PRICELIST_PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col transition-all duration-500 group ${
                plan.popular ? "md:scale-105 z-10" : "hover:scale-[1.02]"
              }`}
              onClick={() => handleBooking(plan.name)}
            >
              <div className={`flex flex-col h-full p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500 cursor-pointer ${
                plan.popular 
                ? "bg-gradient-to-b from-brand-primary/20 to-card border-brand-primary shadow-[0_0_50px_rgba(59,130,246,0.2)]" 
                : "glass-card border-white/5 hover:border-brand-primary/50"
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <Star size={12} className="fill-white" /> Recommended
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-brand-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-500">{plan.icon}</div>
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">{plan.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">/ Mulai</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-4 font-medium leading-relaxed">{plan.desc}</p>
                </div>

                <div className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/feat">
                      <div className="p-1 rounded-full bg-brand-primary/10 shrink-0 group-hover/feat:bg-brand-primary transition-colors">
                        <Check size={12} className="text-brand-primary group-hover/feat:text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover/feat:text-white transition-colors">{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`btn-primary w-full py-5 text-xs font-bold tracking-widest ${
                    !plan.popular && "bg-white/5 border border-white/10 hover:bg-brand-primary hover:border-brand-primary"
                  }`}
                >
                  Booking Sekarang <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons & Surcharge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/20 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-primary/10 rounded-2xl">
                <PlusCircle className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Penyesuaian Harga</h3>
            </div>
            <div className="space-y-2">
              {[
                { item: "Volume Data (>500 baris)", price: "+50RB" },
                { item: "Data Cleaning (Data Kotor)", price: "+30RB - 50RB" },
                { item: "Referensi Scopus", price: "+20RB" },
                { item: "Tingkat Kesulitan Rumus", price: "+30RB" }
              ].map((addon, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group/line">
                  <span className="text-slate-300 text-sm font-medium group-hover/line:text-white transition-colors">{addon.item}</span>
                  <span className="text-brand-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-[2.5rem] p-8 md:p-10 hover:bg-brand-primary/10 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-primary/10 rounded-2xl">
                <Clock className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Ketentuan Waktu</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-main/40 p-6 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-sm">Same Day Service</span>
                  <span className="text-brand-primary font-bold">+50%</span>
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">Penyelesaian prioritas dalam waktu kurang dari 12 jam kerja.</p>
              </div>
              <div className="bg-brand-primary p-6 rounded-2xl shadow-xl shadow-brand-primary/20 group/flash cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/flash:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">Express Flash</span>
                  <span className="text-white font-bold">Double</span>
                </div>
                <p className="text-blue-100 text-xs font-medium leading-relaxed relative z-10">Prioritas Utama: Selesai kilat dalam waktu kurang dari 6 jam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Trust Section */}
        <div className="pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={20}/>, title: "Secure Data", desc: "Privasi Dijamin Aman" },
              { icon: <Zap size={20}/>, title: "Teknis Akurat", desc: "Standar Profesional" },
              { icon: <Gem size={20}/>, title: "Gratis Revisi", desc: "2x Revisi Minor" },
              { icon: <Flame size={20}/>, title: "Fast Response", desc: "Online Setiap Hari" }
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-brand-primary group-hover:bg-brand-primary/10 group-hover:rotate-[10deg] transition-all duration-300">
                    {item.icon}
                </div>
                <h4 className="text-white font-bold uppercase text-[10px] tracking-widest">{item.title}</h4>
                <p className="text-slate-500 text-[10px] font-medium mt-1 px-4 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}