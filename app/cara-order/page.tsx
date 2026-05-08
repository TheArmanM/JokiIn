"use client";

import { MessageCircle, CreditCard, PenTool, CheckCircle2 } from "lucide-react";

export default function OrderPage() {
  const steps = [
    {
      title: "Konsultasi & Deal",
      desc: "Kirim detail tugas, data mentah, dan deadline via WhatsApp. Kami akan berikan estimasi harga terbaik.",
      icon: <MessageCircle className="text-brand-primary" size={24} />,
    },
    {
      title: "DP 50% & Pengerjaan",
      desc: "Sesuai ketentuan, pengerjaan dimulai setelah pembayaran DP. Progress bisa dipantau secara berkala.",
      icon: <CreditCard className="text-brand-primary" size={24} />,
    },
    {
      title: "Review & Revisi",
      desc: "Kami kirimkan preview hasil pengerjaan. Kamu mendapatkan jatah 2x revisi minor untuk memastikan hasil sempurna.",
      icon: <PenTool className="text-brand-primary" size={24} />,
    },
    {
      title: "Pelunasan & Final",
      desc: "Setelah hasil oke, lakukan pelunasan. Seluruh file final (Word, SPSS, PPT, dsb) akan dikirimkan saat itu juga.",
      icon: <CheckCircle2 className="text-brand-primary" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-main pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          {/* h1 otomatis menggunakan fluid typography & style dari globals.css */}
          <h1>
            Alur <span className="text-brand-primary">Order</span>
          </h1>
          <p className="text-muted font-black italic mt-2 uppercase text-[10px] tracking-widest">
            Proses Transparan, Hasil Maksimal
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line Decor - Menggunakan brand-primary */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-primary/50 via-brand-primary/10 to-transparent hidden md:block"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-8 p-8 glass-card rounded-[2.5rem] hover:border-brand-primary/30 group">
              <div className="w-16 h-16 bg-main border border-brand-primary/20 rounded-2xl flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand-primary font-black italic tracking-tighter">0{i + 1}.</span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-wide">{step.title}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed italic font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 p-10 bg-brand-primary/5 border border-brand-primary/20 rounded-[3rem] text-center relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-50 pointer-events-none" />
          
          <p className="text-primary text-sm font-bold italic mb-8 relative z-10">
            "Kerahasiaan identitas dan file kamu dijamin aman 100% bersama JokiIn."
          </p>
          
          <a 
            href="https://wa.me/6285183081282" 
            className="btn-primary inline-flex py-5 px-12 text-[10px] tracking-[0.2em] relative z-10 hover:scale-105 active:scale-95"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </main>
  );
}