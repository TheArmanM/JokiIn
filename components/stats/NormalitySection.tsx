"use client";

import { useState } from "react";
import { Binary, Info, CheckCircle2, AlertCircle } from "lucide-react";

export default function NormalitySection() {
  const [sig, setSig] = useState("0.200");
  const isNormal = parseFloat(sig) > 0.05;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-primary/10 rounded-xl">
            <Binary className="text-brand-primary" size={24}/>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Uji Normalitas</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-2xl">
          Menggunakan uji One-Sample Kolmogorov-Smirnov untuk memastikan residual data berdistribusi normal sebagai syarat utama analisis parametrik.
        </p>
      </div>

      {/* Main Analysis Card */}
      <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-500">
        {/* Background Accent */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 rounded-full transition-colors duration-500 ${isNormal ? 'bg-emerald-500' : 'bg-rose-500'}`} />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Input Area */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block ml-2">Asymp. Sig. (2-tailed)</label>
            <div className="relative">
              <input 
                type="number" 
                step="0.001"
                value={sig} 
                onChange={(e) => setSig(e.target.value)} 
                className="text-6xl font-bold p-8 bg-black/20 border border-white/5 rounded-[2.5rem] outline-none focus:ring-1 ring-brand-primary/50 w-full text-white transition-all" 
              />
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 text-brand-primary group-hover:opacity-50 transition-opacity">
                <Binary size={40} />
              </div>
            </div>
          </div>

          {/* Interpretation Area */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Interpretasi Hasil</p>
              <div className="flex items-center gap-3">
                {isNormal ? (
                  <CheckCircle2 className="text-emerald-400" size={28} />
                ) : (
                  <AlertCircle className="text-rose-400" size={28} />
                )}
                <p className={`text-2xl font-bold tracking-tight ${isNormal ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isNormal ? "Distribusi Normal" : "Tidak Normal"}
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Nilai signifikansi sebesar <span className="text-brand-primary font-bold">{sig}</span> menunjukkan bahwa data {isNormal ? "memenuhi" : "tidak memenuhi"} asumsi normalitas.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 italic">
                <Info size={12} />
                <p>Syarat: Nilai p-value (Sig.) {`>`} 0,05</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Note */}
      <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-slate-400 font-medium text-center md:text-left leading-relaxed italic">
          "Setiap pengerjaan olah data di JokiIn menyertakan lampiran output SPSS/SmartPLS asli sebagai bukti validitas pengerjaan akademik Anda."
        </p>
        <span className="text-[9px] font-bold text-brand-primary uppercase tracking-[0.2em] border border-brand-primary/20 px-4 py-1.5 rounded-full whitespace-nowrap">
          Academic Integrity Verified
        </span>
      </div>
    </div>
  );
}