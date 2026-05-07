"use client";
import { useState, use } from "react";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Sigma, ClipboardCheck, Activity, Binary, Layout, Calculator, BarChart3, BrainCircuit, ListChecks, PieChart as PieIcon } from "lucide-react";
import Link from "next/link";

// Import Semua Komponen Statistik
import DescriptiveSection from "@/components/stats/DescriptiveSection";
import ValiditySection from "@/components/stats/ValiditySection";
import ReliabilitySection from "@/components/stats/ReliabilitySection";
import NormalitySection from "@/components/stats/NormalitySection";
import TTestSection from "@/components/stats/TTestSection";
import RegressionSection from "@/components/stats/RegressionSection";
import AssumptionsSection from "@/components/stats/AssumptionsSection";
import TrendSection from "@/components/stats/TrendSection";
import ScatterSection from "@/components/stats/ScatterSection";

export default function AnalyticsDashboard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [activeDemo, setActiveDemo] = useState("deskriptif");

  if (slug !== "analisis-data") {
    return <div className="pt-40 text-center">Halaman Deskriptif Proyek</div>;
  }

  const menuDemos = [
    { id: "deskriptif", label: "01. Deskriptif", icon: <Sigma size={18}/> },
    { id: "validitas", label: "02. Uji Validitas", icon: <ClipboardCheck size={18}/> },
    { id: "reliabilitas", label: "03. Uji Reliabilitas", icon: <Activity size={18}/> },
    { id: "normalitas", label: "04. Uji Normalitas", icon: <Binary size={18}/> },
    { id: "ttest", label: "05. Independent T-Test", icon: <Layout size={18}/> },
    { id: "regresi", label: "06. Regresi Linear", icon: <Calculator size={18}/> },
    { id: "hetero", label: "07. Heteroskedastisitas", icon: <BarChart3 size={18}/> },
    { id: "multi", label: "08. Multikolinearitas", icon: <BrainCircuit size={18}/> },
    { id: "tren", label: "09. Visualisasi Tren", icon: <ListChecks size={18}/> },
    { id: "scatter", label: "10. Sebaran Data", icon: <PieIcon size={18}/> },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="pt-24 flex h-screen overflow-hidden">
        {/* SIDEBAR (30%) */}
        <aside className="w-[30%] bg-white border-r border-gray-200 overflow-y-auto p-6 hidden md:block">
          <Link href="/portfolio" className="flex items-center gap-2 text-gray-400 mb-8 hover:text-blue-600 transition text-sm">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="mb-6">
            <h1 className="text-xl font-black text-navy">Statistix Engine</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Dashboard v3.0</p>
          </div>
          
          <nav className="space-y-1">
            {menuDemos.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDemo(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeDemo === item.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT (70%) */}
        <section className="flex-1 overflow-y-auto bg-[#FDFDFD] p-6 md:p-12">
          <div className="max-w-4xl mx-auto pb-20">
            
            {/* Logic Rendering Dinamis */}
            {activeDemo === "deskriptif" && <DescriptiveSection />}
            {activeDemo === "validitas" && <ValiditySection />}
            {activeDemo === "reliabilitas" && <ReliabilitySection />}
            {activeDemo === "normalitas" && <NormalitySection />}
            {activeDemo === "ttest" && <TTestSection />}
            {activeDemo === "regresi" && <RegressionSection />}
            
            {/* Hetero & Multi menggunakan komponen Assumptions yang sama */}
            {(activeDemo === "hetero" || activeDemo === "multi") && <AssumptionsSection />}
            
            {activeDemo === "tren" && <TrendSection />}
            {activeDemo === "scatter" && <ScatterSection />}

            {/* Fallback jika ID tidak dikenal */}
            {!menuDemos.find(m => m.id === activeDemo) && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 italic">Pilih modul dari sidebar untuk memulai analisis.</p>
              </div>
            )}
            
          </div>
        </section>
      </div>
    </main>
  );
}