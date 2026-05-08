"use client";

import { ExternalLink, Search } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    { title: "Analisis Regresi Linear Berganda", category: "Olah Data", tool: "SPSS v29" },
    { title: "PPT Premium Skripsi Teknik", category: "Presentasi", tool: "Canva/PPT" },
    { title: "Merapikan Format Tesis 150 Hlm", category: "Dokumen", tool: "MS Word" },
    { title: "Dashboard Penjualan UMKM", category: "Data Visual", tool: "Excel/Power BI" },
    { title: "Poster Ilmiah Nasional", category: "Visual", tool: "Photoshop" },
    { title: "Resume 5 Jurnal Internasional", category: "Penulisan", tool: "Academic" },
  ];

  return (
    <main className="min-h-screen bg-main pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Glow Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            {/* Tag h1 otomatis menggunakan fluid typography & style dari globals.css */}
            <h1>
              PORT<span className="text-brand-primary">FOLIO</span>
            </h1>
            <p className="text-muted font-black italic mt-2 uppercase text-[10px] tracking-widest">
              Hasil Kerja Nyata & Kepuasan Klien
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-card border border-white/5 rounded-2xl text-[10px] font-black text-secondary uppercase tracking-widest italic">
              Project yang sudah diselesaikan
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative aspect-video glass-card overflow-hidden flex items-center justify-center">
              {/* Background Mockup Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent"></div>
              
              {/* Placeholder Icon */}
              <Search className="text-white/5 group-hover:scale-150 transition-transform duration-700" size={80} />
              
              {/* Content Overlay - Menggunakan brand-primary untuk Hover State */}
              <div className="absolute inset-0 bg-brand-primary/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-8 flex flex-col justify-center">
                <span className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-2 italic">
                  {project.category} • {project.tool}
                </span>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-6">
                  {project.title}
                </h3>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-[10px] font-black text-white border border-white/20 px-6 py-3 rounded-xl w-fit hover:bg-white hover:text-brand-primary transition-all uppercase italic"
                >
                  Lihat Demo <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted text-[10px] italic font-bold max-w-lg mx-auto leading-relaxed uppercase tracking-wider">
            *Beberapa project tidak ditampilkan secara detail untuk menjaga kerahasiaan data pribadi klien (Privacy De-identification).
          </p>
        </div>
      </div>
    </main>
  );
}