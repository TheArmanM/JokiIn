"use client";

import { MessageCircle, CreditCard, PenTool, CheckCircle2 } from "lucide-react";

export default function OrderPage() {
  const steps = [
    {
      title: "Konsultasi & Deal",
      desc: "Kirim detail tugas, data mentah, dan deadline via WhatsApp. Kami akan memberikan estimasi harga terbaik sesuai tingkat kesulitan.",
      icon: <MessageCircle className="text-brand-primary" size={24} />,
    },
    {
      title: "DP 50% & Pengerjaan",
      desc: "Pengerjaan dimulai segera setelah konfirmasi pembayaran DP. Anda dapat memantau progres pengerjaan secara berkala.",
      icon: <CreditCard className="text-brand-primary" size={24} />,
    },
    {
      title: "Review & Revisi",
      desc: "Kami mengirimkan preview hasil pengerjaan. Tersedia jatah revisi untuk memastikan hasil sesuai dengan ekspektasi dan standar akademik.",
      icon: <PenTool className="text-brand-primary" size={24} />,
    },
    {
      title: "Pelunasan & Final",
      desc: "Setelah hasil disetujui, lakukan pelunasan. Seluruh file final (Word, SPSS, PPT, dsb) akan dikirimkan secara instan.",
      icon: <CheckCircle2 className="text-brand-primary" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-main pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Alur <span className="text-brand-primary">Order</span>
          </h1>
          <p className="text-brand-primary font-bold uppercase text-xs tracking-[0.2em] mt-4">
            Proses Transparan, Hasil Maksimal
          </p>
        </header>

        <div className="relative space-y-6">
          {/* Vertical Line Decor */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-primary/50 via-brand-primary/10 to-transparent hidden md:block"></div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative flex flex-col md:flex-row gap-8 p-8 glass-card rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 group transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-main border border-white/10 rounded-2xl flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:border-brand-primary/30 transition-all duration-500">
                {step.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-primary text-xl font-bold">0{i + 1}.</span>
                  <h3 className="text-xl font-bold text-white tracking-wide">{step.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-20 p-10 bg-brand-primary/5 border border-brand-primary/20 rounded-[2.5rem] text-center relative overflow-hidden group">
          {/* Inner Glow Decor */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-50 pointer-events-none" />
          
          <p className="text-slate-300 text-sm font-semibold mb-10 relative z-10 max-w-lg mx-auto leading-relaxed">
            "Kerahasiaan identitas dan file kamu dijamin aman 100% bersama sistem layanan profesional kami."
          </p>
          
          <a 
            href="https://wa.me/6285183081282" 
            className="btn-primary inline-flex py-5 px-12 text-xs font-bold tracking-widest relative z-10 hover:scale-105 active:scale-95"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </main>
  );
}