"use client";

import { MessageCircle, CreditCard, PenTool, CheckCircle2 } from "lucide-react";

export default function OrderPage() {
  const steps = [
    {
      title: "Konsultasi & Deal",
      desc: "Kirim detail tugas, data mentah, dan deadline via WhatsApp. Kami akan berikan estimasi harga terbaik.",
      icon: <MessageCircle className="text-blue-500" size={24} />,
    },
    {
      title: "DP 50% & Pengerjaan",
      desc: "Sesuai ketentuan, pengerjaan dimulai setelah pembayaran DP. Progress bisa dipantau secara berkala.",
      icon: <CreditCard className="text-blue-500" size={24} />,
    },
    {
      title: "Review & Revisi",
      desc: "Kami kirimkan preview hasil pengerjaan. Kamu mendapatkan jatah 2x revisi minor untuk memastikan hasil sempurna.",
      icon: <PenTool className="text-blue-500" size={24} />,
    },
    {
      title: "Pelunasan & Final",
      desc: "Setelah hasil oke, lakukan pelunasan. Seluruh file final (Word, SPSS, PPT, dsb) akan dikirimkan saat itu juga.",
      icon: <CheckCircle2 className="text-blue-500" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">
            Alur <span className="text-blue-500">Order</span>
          </h1>
          <p className="text-slate-500 font-bold italic mt-2 uppercase text-[10px] tracking-widest">
            Proses Transparan, Hasil Maksimal
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line Decor */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-blue-600/50 via-blue-900/10 to-transparent hidden md:block"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-8 p-8 bg-[#0b1120] border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 bg-[#020617] border border-blue-500/20 rounded-2xl flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-500 font-black italic">0{i + 1}.</span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-wide">{step.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed italic">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] text-center">
          <p className="text-slate-300 text-sm font-bold italic mb-6 italic">
            "Kerahasiaan identitas dan file kamu dijamin aman 100% bersama JokiIn."
          </p>
          <a href="https://wa.me/6285183081282" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase italic text-xs tracking-widest hover:bg-blue-500 transition-all">
            Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </main>
  );
}