"use client";

import { useState } from "react";
import { Activity, ShieldCheck, Info } from "lucide-react";

export default function ReliabilitySection() {
  const [alpha, setAlpha] = useState("0.856");
  const isReliable = parseFloat(alpha) >= 0.6;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-primary/10 rounded-xl">
            <Activity className="text-brand-primary" size={24}/>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Uji Reliabilitas</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-2xl">
          Mengukur tingkat konsistensi instrumen penelitian menggunakan kriteria Cronbach's Alpha untuk memastikan keandalan kuesioner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Card */}
        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center group hover:border-brand-primary/30 transition-all duration-500">
          <label className="text-[10px] font-bold text-slate-500 mb-4 block uppercase tracking-[0.2em]">Cronbach's Alpha Value</label>
          <div className="relative">
            <input 
              type="number" 
              step="0.001" 
              value={alpha} 
              onChange={(e) => setAlpha(e.target.value)} 
              className="w-full bg-black/20 border border-white/5 p-6 rounded-2xl outline-none focus:ring-1 ring-brand-primary/50 text-brand-primary font-mono text-3xl font-bold transition-all" 
            />
            <ShieldCheck className="absolute right-6 top-1/2 -translate-y-1/2 text-white/5 group-hover:text-brand-primary/20 transition-colors" size={32} />
          </div>
          <div className="mt-6 flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed">
            <Info size={12} className="shrink-0 mt-0.5" />
            <p>Standar reliabilitas yang digunakan adalah nilai koefisien {`>`} 0,60.</p>
          </div>
        </div>

        {/* Status Card */}
        <div className={`p-10 rounded-[3rem] flex flex-col justify-center relative overflow-hidden transition-all duration-500 border shadow-2xl ${
          isReliable 
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
          : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
        }`}>
          {/* Decorative Glow */}
          <div className={`absolute -top-12 -right-12 w-32 h-32 blur-[60px] rounded-full opacity-30 ${isReliable ? 'bg-emerald-400' : 'bg-rose-400'}`} />
          
          <div className="relative z-10">
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-60 mb-2">Interpretasi Instrumen</p>
            <p className="text-5xl font-bold tracking-tighter mb-4">
              {isReliable ? "RELIABEL" : "TIDAK RELIABEL"}
            </p>
            
            <div className="pt-6 border-t border-current/10 inline-block">
              <p className="text-xs font-medium font-mono">
                Hasil: {alpha} {isReliable ? "≥" : "<"} 0.60
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Footer */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Analisis konsistensi internal diproses secara presisi sesuai kaidah metodologi penelitian
        </p>
      </div>
    </div>
  );
}