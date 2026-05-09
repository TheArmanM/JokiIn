"use client";

import { useState, Suspense } from "react";
import { 
  Database, FileText, Layout, Zap, Search, Gem, Check, ArrowRight 
} from "lucide-react";
import OrderModal from "@/components/OrderModal";
import OrderBundleModal from "@/components/OrderBundleModal";
import { serviceDetails } from "@/lib/service-details";

type ServiceSlug = keyof typeof serviceDetails;

const BUNDLE_PACKAGES = [
  {
    name: "Bundling Analisis Lengkap",
    price: "100K",
    originalPrice: "115K",
    label: "Data + Interpretasi",
    desc: "Solusi bagi yang sudah memiliki data namun butuh pengolahan sekaligus penjelasan hasilnya.",
    features: ["Olah Data", "Uji Hipotesis", "Interpretasi MS Word", "Visualisasi", "Revisi 2x"],
    icon: <Database size={20} className="text-brand-primary" />,
    color: "from-brand-primary/20 to-blue-900/20",
    borderColor: "border-brand-primary/30"
  },
  {
    name: "Bundling Visual Presentasi",
    price: "65K",
    originalPrice: "80K",
    label: "Dokumen + Slide",
    desc: "Ubah materi mentah atau makalah menjadi slide presentasi yang siap dipaparkan.",
    features: ["Ringkasan Materi", "Desain PPT Premium", "Animasi Profesional", "Format PDF/PPTX", "Express < 24 Jam"],
    icon: <Layout size={20} className="text-purple-500" />,
    color: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-purple-500/30"
  }
];

function ServicesContent() {
  const [selectedSlug, setSelectedSlug] = useState<ServiceSlug | null>(null);
  const [isRegulerModalOpen, setIsRegulerModalOpen] = useState(false);
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [activeBundle, setActiveBundle] = useState<typeof BUNDLE_PACKAGES[0] | null>(null);

  const activeData = selectedSlug ? serviceDetails[selectedSlug] : null;

  const getIcon = (slug: string) => {
    const icons: Record<string, React.ReactNode> = {
      "olah-data": <Database size={28} className="text-brand-primary" />,
      "penulisan": <FileText size={28} className="text-brand-primary" />,
      "visual": <Layout size={28} className="text-brand-primary" />,
      "kilat": <Zap size={28} className="text-brand-primary" />
    };
    return icons[slug] || <Database size={28} />;
  };

  return (
    <main className="min-h-screen bg-main pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full mb-6">
            <Search size={14} className="text-brand-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Official Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            LAYANAN <span className="text-brand-primary">KAMI</span>
          </h1>
          <p className="text-secondary font-medium mt-6 max-w-2xl text-lg leading-relaxed">
            Solusi teknis akademik profesional. Pilih paket bundling untuk penawaran lebih hemat dan hasil yang lebih komprehensif.
          </p>
        </header>

        {/* Section Bundling */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white">
              <Gem className="text-brand-primary" size={24} /> 
              Paket Bundling <span className="text-brand-primary">Hemat</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUNDLE_PACKAGES.map((bundle, i) => (
              <div 
                key={i}
                className={`group glass-card p-8 rounded-[2.5rem] border ${bundle.borderColor} bg-gradient-to-br ${bundle.color} cursor-pointer hover:scale-[1.01] transition-all overflow-hidden relative`}
                onClick={() => { setActiveBundle(bundle); setIsBundleModalOpen(true); }}
              >
                {/* Discount Badge */}
                <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase rotate-12 z-10 shadow-lg">
                  HEMAT {parseInt(bundle.originalPrice) - parseInt(bundle.price)}K!
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{bundle.name}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bundle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check size={14} className="text-brand-primary shrink-0" />
                          <span className="text-sm font-medium text-secondary">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-end items-end shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                    <span className="text-slate-500 text-xs font-bold line-through tracking-widest">{bundle.originalPrice}</span>
                    <span className="text-5xl font-bold text-white tracking-tighter">{bundle.price}</span>
                    <button className="btn-primary mt-6 w-full lg:w-auto px-8 py-3 text-sm font-semibold">
                      Ambil Promo <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Satuan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
          {Object.entries(serviceDetails).map(([slug, data]) => (
            <div key={slug} className="group glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-main border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-brand-primary/30 transition-all duration-500">
                  {getIcon(slug)}
                </div>
                <div className="text-right">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Mulai Dari</span>
                  <span className="text-3xl font-bold text-white tracking-tighter">{data.basePrice}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">{data.title}</h3>
              <button 
                onClick={() => { setSelectedSlug(slug as ServiceSlug); setIsRegulerModalOpen(true); }}
                className="flex items-center gap-2 text-brand-primary font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all w-fit"
              >
                Detail Paket <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Modals */}
        <OrderModal 
          isOpen={isRegulerModalOpen} 
          onClose={() => setIsRegulerModalOpen(false)} 
          selectedPackage={activeData?.title || ""} 
        />
        <OrderBundleModal 
          isOpen={isBundleModalOpen} 
          onClose={() => { setIsBundleModalOpen(false); setActiveBundle(null); }} 
          bundleData={activeBundle} 
        />
      </div>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main" />}>
      <ServicesContent />
    </Suspense>
  );
}