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
    <main className="min-h-screen bg-[#020617] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter">
              PORT<span className="text-blue-500">FOLIO</span>
            </h1>
           
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-[#0b1120] border border-white/5 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
              {/* Total: 500+ Projects Done */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative aspect-video bg-[#0b1120] border border-white/5 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
              {/* Background Mockup Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
              <Search className="text-slate-800 opacity-20 group-hover:scale-150 transition-transform duration-700" size={80} />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-blue-600/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-8 flex flex-col justify-center">
                <span className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-2 italic">
                  {project.category} • {project.tool}
                </span>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-6">
                  {project.title}
                </h3>
                <a href="/demo" className="flex items-center gap-2 text-[10px] font-black text-white border border-white/20 px-6 py-3 rounded-xl w-fit hover:bg-white hover:text-blue-600 transition-all">
                  Lihat Demo <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-slate-600 text-xs italic font-medium max-w-lg mx-auto leading-relaxed">
            *Beberapa project tidak ditampilkan secara detail untuk menjaga kerahasiaan data pribadi klien (Privacy De-identification).
          </p>
        </div>
      </div>
    </main>
  );
}