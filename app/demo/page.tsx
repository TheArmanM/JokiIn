"use client";

import { useState, useEffect } from "react";
import { 
  BarChart3, 
  Database, 
  ShieldCheck, 
  Activity, 
  Binary, 
  Layout, 
  FileText,
  Search,
  Zap,
  ChevronRight
} from "lucide-react";

// Import semua komponen dari folder components/stats
import DescriptiveSection from "@/components/stats/DescriptiveSection";
import ValiditySection from "@/components/stats/ValiditySection";
import ReliabilitySection from "@/components/stats/ReliabilitySection";
import RegressionSection from "@/components/stats/RegressionSection";
import NormalitySection from "@/components/stats/NormalitySection";
import AssumptionsSection from "@/components/stats/AssumptionsSection";
import TTestSection from "@/components/stats/TTestSection";

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("descriptive");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-main" />;

  // Menu Navigasi Sidebar
  const menuItems = [
    { id: "descriptive", name: "Statistik Deskriptif", icon: <Database size={18} /> },
    { id: "validity", name: "Uji Validitas", icon: <ShieldCheck size={18} /> },
    { id: "reliability", name: "Uji Reliabilitas", icon: <Zap size={18} /> },
    { id: "regression", name: "Analisis Regresi", icon: <BarChart3 size={18} /> },
    { id: "normality", name: "Uji Normalitas", icon: <Activity size={18} /> },
    { id: "assumptions", name: "Asumsi Klasik", icon: <Binary size={18} /> },
    { id: "ttest", name: "Uji Perbedaan (T-Test)", icon: <Layout size={18} /> },
  ];

  // Logic Render Komponen
  const renderContent = () => {
    switch (activeTab) {
      case "descriptive": return <DescriptiveSection />;
      case "validity": return <ValiditySection />;
      case "reliability": return <ReliabilitySection />;
      case "regression": return <RegressionSection />;
      case "normality": return <NormalitySection />;
      case "assumptions": return <AssumptionsSection />;
      case "ttest": return <TTestSection />;
      default: return <DescriptiveSection />;
    }
  };

  return (
    <main className="min-h-screen bg-main pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Navigasi */}
        <aside className="lg:w-80 shrink-0">
          <div className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 sticky top-32">
            <div className="mb-10 px-2">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Live Preview</span>
              </div>
              <h1 className="text-white font-bold tracking-tight text-3xl">
                DEMO<span className="text-brand-primary">DATA</span>
              </h1>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2 leading-relaxed">
                Standar Output & <br />Visualisasi JokiIn
              </p>
            </div>
            
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group ${
                    activeTab === item.id 
                    ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20" 
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={activeTab === item.id ? "text-white" : "text-brand-primary"}>
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                  <ChevronRight size={14} className={`transition-transform duration-300 ${activeTab === item.id ? "translate-x-1" : "opacity-0"}`} />
                </button>
              ))}
            </nav>

            <div className="mt-10 p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-3xl">
              <p className="text-slate-400 text-[10px] font-medium leading-relaxed">
                Butuh analisis data kustom? Hubungi tim kami untuk konsultasi metodologi penelitian Anda.
              </p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-card/20 backdrop-blur-sm border border-white/5 rounded-[3.5rem] p-8 md:p-16 relative min-h-[800px] shadow-2xl">
          {/* Internal Glow Effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
            {renderContent()}
          </div>

          {/* Watermark/Footer Note */}
          <div className="mt-20 pt-10 border-t border-white/5 flex items-center gap-4 text-slate-600">
             <FileText size={14} />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Data Privacy Guaranteed • ISO 27037 Standard</span>
          </div>
        </section>

      </div>
    </main>
  );
}