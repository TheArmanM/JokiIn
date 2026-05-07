"use client";
import { useState, use } from "react";
import Navbar from "@/components/Navbar";
import { 
  ArrowLeft, Sigma, ClipboardCheck, Activity, Binary, Layout, 
  Calculator, BarChart3, BrainCircuit, ListChecks, PieChart,
  FileSearch, Code2, PenTool, CheckCircle2, Globe
} from "lucide-react";
import Link from "next/link";

// Import Semua Komponen Statistik untuk Demo
import DescriptiveSection from "@/components/stats/DescriptiveSection";
import ValiditySection from "@/components/stats/ValiditySection";
import ReliabilitySection from "@/components/stats/ReliabilitySection";
import NormalitySection from "@/components/stats/NormalitySection";
import TTestSection from "@/components/stats/TTestSection";
import RegressionSection from "@/components/stats/RegressionSection";
import AssumptionsSection from "@/components/stats/AssumptionsSection";
import TrendSection from "@/components/stats/TrendSection";
import ScatterSection from "@/components/stats/ScatterSection";

export default function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [activeDemo, setActiveDemo] = useState("deskriptif");

  // --- 1. DATA DATABASE PORTOFOLIO ---
  const portfolioData: Record<string, any> = {
    "regresi-spss": {
      title: "Analisis Regresi Linear Berganda",
      category: "SPSS",
      icon: <FileSearch className="text-blue-600" size={40} />,
      problem: "Mahasiswa manajemen memerlukan analisis mendalam untuk 5 variabel independen guna memenuhi syarat kelulusan skripsi.",
      solution: "Melakukan olah data menggunakan IBM SPSS 26 mencakup uji asumsi klasik, analisis regresi berganda, hingga pengujian hipotesis (Uji T dan Uji F).",
      results: ["Tabel Output SPSS Lengkap", "Interpretasi Hasil Analisis", "Lampiran Hasil Olah Data"],
      tools: ["SPSS 26", "Microsoft Excel"]
    },
    "python-cleaning": {
      title: "Data Cleaning & Visualization",
      category: "Python",
      icon: <Code2 className="text-green-600" size={40} />,
      problem: "Terdapat dataset penjualan kotor dengan lebih dari 5000 baris yang memiliki nilai hilang (missing values) dan format tidak konsisten.",
      solution: "Menggunakan library Pandas untuk pembersihan data otomatis dan Matplotlib/Seaborn untuk membuat visualisasi tren penjualan tahunan.",
      results: ["Clean Dataset (CSV)", "Interactive Dashboard Report", "Python Notebook Script"],
      tools: ["Python", "Pandas", "Matplotlib"]
    },
    "writing-apa": {
      title: "Makalah Komunikasi Bisnis",
      category: "Writing",
      icon: <PenTool className="text-orange-600" size={40} />,
      problem: "Penyusunan makalah akademik sepanjang 20 halaman yang memerlukan sitasi ketat dan format APA Style 7th Edition.",
      solution: "Riset mendalam mengenai strategi komunikasi organisasi dan penyusunan daftar pustaka otomatis menggunakan Mendeley.",
      results: ["Makalah 20 Halaman", "Sertifikat Plagiasi Low %", "Daftar Pustaka APA Style"],
      tools: ["MS Word", "Mendeley", "Turnitin"]
    }
  };

  // --- 2. LOGIKA PILIHAN TAMPILAN ---
  
  // A. JIKA SLUG ADALAH DEMO (ANALISIS DATA)
  if (slug === "analisis-data") {
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
      { id: "scatter", label: "10. Sebaran Data", icon: <PieChart size={18}/> },
    ];

    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="pt-24 flex h-screen overflow-hidden">
          <aside className="w-[30%] bg-white border-r border-gray-200 overflow-y-auto p-6 hidden md:block">
            <Link href="/portfolio" className="flex items-center gap-2 text-gray-400 mb-8 hover:text-blue-600 transition text-sm">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            <div className="mb-6">
              <h1 className="text-xl font-black text-navy uppercase tracking-tighter">Statistix Engine</h1>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Interactive Demo</p>
            </div>
            <nav className="space-y-1">
              {menuDemos.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDemo(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeDemo === item.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </aside>
          <section className="flex-1 overflow-y-auto bg-[#FDFDFD] p-6 md:p-12">
            <div className="max-w-4xl mx-auto pb-20">
              {activeDemo === "deskriptif" && <DescriptiveSection />}
              {activeDemo === "validitas" && <ValiditySection />}
              {activeDemo === "reliabilitas" && <ReliabilitySection />}
              {activeDemo === "normalitas" && <NormalitySection />}
              {activeDemo === "ttest" && <TTestSection />}
              {activeDemo === "regresi" && <RegressionSection />}
              {(activeDemo === "hetero" || activeDemo === "multi") && <AssumptionsSection />}
              {activeDemo === "tren" && <TrendSection />}
              {activeDemo === "scatter" && <ScatterSection />}
            </div>
          </section>
        </div>
      </main>
    );
  }

  // B. JIKA SLUG ADALAH DETAIL PORTOFOLIO BIASA
  const project = portfolioData[slug];
  if (!project) return <div className="pt-40 text-center font-bold">Project "{slug}" Not Found.</div>;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <Link href="/portfolio" className="text-gray-400 hover:text-blue-600 flex items-center gap-2 mb-12 transition font-medium">
          <ArrowLeft size={18}/> Kembali ke Portfolio
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-navy leading-[1.1] mb-10 tracking-tight">
              {project.title}
            </h1>
            
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-navy">
                  <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm">01</span>
                  Masalah & Tantangan
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-11">{project.problem}</p>
              </div>

              <div className="group">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-navy">
                  <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm">02</span>
                  Solusi yang Diterapkan
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-11">{project.solution}</p>
              </div>

              <div className="group">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-navy">
                  <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-sm">03</span>
                  Key Deliverables
                </h3>
                <ul className="pl-11 grid grid-cols-1 gap-4">
                  {project.results.map((res: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition font-medium text-navy">
                      <CheckCircle2 className="text-green-500" size={20} /> {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="bg-navy p-12 rounded-[3.5rem] text-white sticky top-32">
            <div className="mb-8">{project.icon}</div>
            <h4 className="text-2xl font-bold mb-6">Project Overview</h4>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="opacity-50 text-sm">Role</span>
                <span className="font-bold">Lead Analyst</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="opacity-50 text-sm">Client Type</span>
                <span className="font-bold">Academic / Research</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="opacity-50 text-sm">Tools Used</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string) => (
                    <span key={tool} className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black flex items-center justify-center gap-2 transition shadow-xl shadow-blue-900/20">
              <Globe size={18}/> View Project File
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}