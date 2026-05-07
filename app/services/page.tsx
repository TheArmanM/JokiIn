"use client";

import { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Info, 
  Database, 
  FileText, 
  Layout, 
  Zap, 
  ShieldCheck,
  Search
} from "lucide-react";

// Pastikan file ini ada di /lib/service-details.ts (Root)
import { serviceDetails } from "@/lib/service-details";

export default function ServicesPage() {
  // State untuk mengontrol slug mana yang aktif di modal
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const closeModal = () => setSelectedSlug(null);

  // Mengambil data detail berdasarkan slug yang dipilih
  const activeData = selectedSlug ? serviceDetails[selectedSlug as keyof typeof serviceDetails] : null;

  // Helper untuk menentukan icon berdasarkan slug
  const getIcon = (slug: string) => {
    switch (slug) {
      case "olah-data": return <Database size={28} className="text-blue-500" />;
      case "penulisan": return <FileText size={28} className="text-blue-500" />;
      case "visual": return <Layout size={28} className="text-blue-500" />;
      case "kilat": return <Zap size={28} className="text-blue-500" />;
      default: return <Database size={28} className="text-blue-500" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Glow Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4">
            <Search size={12} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 italic">Official Services</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            LAYANAN <span className="text-blue-500">KAMI</span>
          </h1>
          <p className="text-slate-500 font-medium italic mt-6 max-w-2xl text-lg">
            Solusi teknis akademik yang dikerjakan dengan standar profesional. Pilih paket untuk melihat rincian harga.
          </p>
        </div>

        {/* Grid Cards Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {Object.entries(serviceDetails).map(([slug, data]) => (
            <div key={slug} className="group relative p-10 bg-[#0b1120] border border-white/5 rounded-[3rem] hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-[#020617] border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500">
                    {getIcon(slug)}
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Mulai Dari</span>
                    <span className="text-2xl font-black text-white italic tracking-tighter">{data.basePrice}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tight mb-4">{data.title}</h3>
                
                {/* Preview Fitur Kecil */}
                <ul className="space-y-2 mb-10">
                  {data.items.slice(0, 2).map((item, i) => (
                    <li key={i} className="text-slate-500 text-[11px] font-bold italic flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {item.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tombol Trigger Modal */}
              <button 
                onClick={() => setSelectedSlug(slug)}
                className="flex items-center gap-3 text-blue-500 font-black uppercase italic text-xs tracking-widest hover:gap-5 transition-all group-hover:text-blue-400"
              >
                Detail Harga & Paket <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* MODAL POP-UP (Conditional Rendering) */}
        {selectedSlug && activeData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop dengan blur */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
              onClick={closeModal}
            ></div>
            
            {/* Modal Box */}
            <div className="relative w-full max-w-3xl bg-[#0b1120] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
              {/* Tombol Close */}
              <button 
                onClick={closeModal} 
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full z-10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-14">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-10 pr-10">
                  {activeData.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Bagian Kiri: Fitur Utama */}
                  <div className="space-y-6">
                    <h4 className="text-blue-500 font-black uppercase text-[10px] tracking-widest border-b border-white/5 pb-2">Fitur Utama:</h4>
                    <ul className="space-y-5">
                      {activeData.items.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                          <div>
                            <p className="text-white font-bold text-sm italic">{item.name}</p>
                            <p className="text-slate-500 text-[10px] italic leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bagian Kanan: Add-ons / Harga Tambahan */}
                  <div className="space-y-6">
                    <h4 className="text-slate-500 font-black uppercase text-[10px] tracking-widest border-b border-white/5 pb-2 flex items-center gap-2">
                      <Info size={12} /> Penyesuaian Harga:
                    </h4>
                    <div className="space-y-3">
                      {activeData.addons.map((addon, i) => (
                        <div key={i} className="flex justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl items-center hover:bg-white/5 transition-colors">
                          <span className="text-slate-300 text-[10px] font-bold italic uppercase">{addon.name}</span>
                          <span className="text-blue-400 text-[10px] font-black italic">{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Modal dengan CTA */}
                <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="text-center md:text-left">
                      <p className="text-slate-500 text-[10px] font-black uppercase italic mb-1">Harga Dasar</p>
                      <p className="text-4xl font-black text-white italic tracking-tighter">{activeData.basePrice}</p>
                   </div>
                   <a 
                    href={`https://wa.me/6285183081282?text=Halo Zakaria, saya ingin pesan paket ${activeData.title}`}
                    target="_blank"
                    className="w-full md:w-auto bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black uppercase italic text-xs tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                  >
                    Amankan Slot <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Guarantee */}
        {/* <div className="mt-24 p-12 bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <div>
              <h4 className="text-white font-black uppercase italic text-xl">Privacy Guaranteed</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase italic tracking-widest mt-1">Identitas klien & file dijamin aman 100%</p>
            </div>
          </div>
          <p className="text-slate-500 text-xs italic max-w-xs md:text-right">
            Dikerjakan secara teknis dengan logika IT dan tools profesional standar industri.
          </p>
        </div> */}
      </div>
    </main>
  );
}