"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Search, Layout, Database, FileText, BarChart3, Palette, PenTool } from "lucide-react";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    { 
      title: "Analisis Regresi Linear Berganda", 
      category: "Olah Data", 
      tool: "SPSS v29",
      icon: <Database size={40} />
    },
    { 
      title: "PPT Premium Skripsi Teknik", 
      category: "Presentasi", 
      tool: "Canva/PPT",
      icon: <Layout size={40} />
    },
    { 
      title: "Merapikan Format Tesis 150 Hlm", 
      category: "Dokumen", 
      tool: "MS Word",
      icon: <FileText size={40} />
    },
    { 
      title: "Dashboard Penjualan UMKM", 
      category: "Data Visual", 
      tool: "Excel/Power BI",
      icon: <BarChart3 size={40} />
    },
    { 
      title: "Poster Ilmiah Nasional", 
      category: "Visual", 
      tool: "Photoshop",
      icon: <Palette size={40} />
    },
    { 
      title: "Resume 5 Jurnal Internasional", 
      category: "Penulisan", 
      tool: "Academic",
      icon: <PenTool size={40} />
    },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-main pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Project Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              PORTO<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">FOLIO</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium tracking-wide leading-relaxed max-w-xl">
              Eksplorasi hasil kerja nyata kami dalam membantu mahasiswa dan profesional menyelesaikan tugas akademik dengan standar industri.
            </p>
          </div>
          
          <div className="hidden md:flex flex-col items-end">
            <span className="text-5xl font-bold text-white/10 tracking-tighter">06</span>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">Featured Projects</span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative aspect-video rounded-[2.5rem] border border-white/5 overflow-hidden glass-card transition-all duration-500 hover:border-brand-primary/50"
            >
              {/* Background Mockup Style */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="absolute inset-0 flex items-center justify-center text-white/5 group-hover:text-brand-primary/20 transition-colors duration-500">
                {project.icon}
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-brand-primary/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-10 flex flex-col justify-center">
                <div className="space-y-1 mb-6">
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="pt-2">
                    <span className="text-[10px] font-medium px-2 py-1 bg-white/10 rounded-md text-white/80">
                      Used: {project.tool}
                    </span>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-[10px] font-bold text-white border border-white/30 px-6 py-3.5 rounded-full w-fit hover:bg-white hover:text-brand-primary transition-all uppercase tracking-widest"
                >
                  Detail Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-32 text-center border-t border-white/5 pt-12">
          <div className="flex items-center justify-center gap-3 mb-4 text-slate-500">
            <Search size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Privacy & Confidentiality</span>
          </div>
          <p className="text-slate-500 text-[11px] font-medium max-w-2xl mx-auto leading-relaxed">
            Untuk menjaga privasi dan kerahasiaan data pribadi klien, beberapa detail proyek telah disamarkan (De-identified) sesuai dengan etika profesional layanan kami.
          </p>
        </div>
      </div>
    </main>
  );
}