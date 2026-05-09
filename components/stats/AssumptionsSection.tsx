"use client";

import { useState } from "react";
import { ShieldCheck, Activity, Info } from "lucide-react";

export default function AssumptionsSection() {
  const [vif, setVif] = useState("1.121");
  const [glejser, setGlejser] = useState("0.654");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
      {/* Header Deskripsi */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Uji Asumsi Klasik</h2>
        <p className="text-slate-400 text-sm">Memastikan model regresi memenuhi syarat objektivitas, tidak bias, dan memiliki varians yang konsisten.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Uji Heteroskedastisitas */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <Activity className="text-brand-primary" size={20}/>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Heteroskedastisitas</h3>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Sig. Glejser (X1)</p>
                <input 
                  value={glejser} 
                  onChange={(e) => setGlejser(e.target.value)} 
                  className="bg-transparent text-3xl font-bold text-white outline-none w-full group-hover:text-brand-primary transition-colors"
                />
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[9px] font-bold tracking-tighter uppercase ${parseFloat(glejser) > 0.05 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                {parseFloat(glejser) > 0.05 ? "Lolos Uji" : "Terjadi Gejala"}
              </div>
            </div>
            <div className="flex items-start gap-2 text-[10px] text-slate-500 leading-relaxed italic border-t border-white/5 pt-4">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Syarat: Nilai signifikansi {`>`} 0,05 agar tidak terjadi gejala heteroskedastisitas.</p>
            </div>
          </div>
        </section>

        {/* Uji Multikolinearitas */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <ShieldCheck className="text-brand-primary" size={20}/>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Multikolinearitas</h3>
          </div>

          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Nilai VIF (Tolerance)</p>
                <input 
                  value={vif} 
                  onChange={(e) => setVif(e.target.value)} 
                  className="bg-transparent text-3xl font-bold text-white outline-none w-full group-hover:text-brand-primary transition-colors"
                />
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[9px] font-bold tracking-tighter uppercase ${parseFloat(vif) < 10 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                {parseFloat(vif) < 10 ? "Lolos Uji" : "Terjadi Gejala"}
              </div>
            </div>
            <div className="flex items-start gap-2 text-[10px] text-slate-500 leading-relaxed italic border-t border-white/5 pt-4">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Syarat: Nilai VIF {`<`} 10,00 menunjukkan tidak adanya hubungan antar variabel independen.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Insight */}
      <div className="bg-brand-primary/5 rounded-3xl p-6 border border-brand-primary/10">
        <p className="text-[11px] text-slate-400 leading-relaxed text-center font-medium italic">
          "Dalam pengerjaan JokiIn, setiap output data dipastikan melalui proses screening asumsi klasik secara ketat untuk menjamin validitas penelitian mahasiswa."
        </p>
      </div>
    </div>
  );
}