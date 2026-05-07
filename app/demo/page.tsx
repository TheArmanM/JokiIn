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
  Zap
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

  if (!mounted) return <div className="min-h-screen bg-[#000a12]" />;

  // Menu Navigasi Sidebar
  const menuItems = [
    { id: "descriptive", name: "Deskriptif", icon: <Database size={16} /> },
    { id: "validity", name: "Uji Validitas", icon: <ShieldCheck size={16} /> },
    { id: "reliability", name: "Uji Reliabilitas", icon: <Zap size={16} /> },
    { id: "regression", name: "Regresi Linear", icon: <BarChart3 size={16} /> },
    { id: "normality", name: "Uji Normalitas", icon: <Activity size={16} /> },
    { id: "assumptions", name: "Asumsi Klasik", icon: <Binary size={16} /> },
    { id: "ttest", name: "Uji T-Test", icon: <Layout size={16} /> },
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
    <main className="min-h-screen bg-[#000a12] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigasi */}
        <aside className="lg:w-72 shrink-0">
          <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 sticky top-32">
            <div className="mb-8 px-2">
              <h2 className="text-white font-black uppercase italic tracking-tighter text-2xl">
                Demo <span className="text-blue-600">Data</span>
              </h2>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1 italic">
                Standar Output JokiIn
              </p>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black uppercase italic text-[11px] tracking-widest transition-all ${
                    activeTab === item.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]" 
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 relative min-h-[700px]">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] -z-10"></div>
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
          </div>
        </section>

      </div>
    </main>
  );
}