"use client";
import { useState, useMemo } from "react";
import { ClipboardCheck, Info, ShieldCheck, Search } from "lucide-react";

export default function ValiditySection() {
  const [input, setInValid] = useState("0.64, 0.71, 0.25, 0.42, 0.88");
  const rTable = 0.312; // Standar N=40 alpha 5%

  const data = useMemo(() => {
    return input.split(/[, \n]+/).map(Number).filter(n => !isNaN(n)).map((v, i) => ({
      item: `Item_${i + 1}`,
      val: v,
      status: v > rTable ? "VALID" : "TIDAK VALID"
    }));
  }, [input]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <ClipboardCheck className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Uji Validitas</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Verifikasi ketepatan instrumen penelitian dengan membandingkan nilai korelasi butir pernyataan terhadap r-tabel.
          </p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
          <ShieldCheck size={14} className="text-brand-primary" />
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Accuracy Verified</span>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 group hover:border-brand-primary/30 transition-all duration-500">
        <div className="flex items-center justify-between mb-4">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Koefisien Korelasi (r-hitung)</label>
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <Search size={12} />
            <span>N=40 (α=0.05)</span>
          </div>
        </div>
        <input 
          value={input}
          onChange={(e) => setInValid(e.target.value)}
          className="w-full p-5 bg-black/20 border border-white/5 rounded-2xl outline-none focus:ring-1 ring-brand-primary/50 text-brand-primary font-mono text-sm transition-all"
          placeholder="0.00, 0.00, ..."
        />
        <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed">
          <Info size={12} className="shrink-0 mt-0.5" />
          <p>Masukkan nilai r-hitung hasil output SPSS/SmartPLS untuk memvalidasi butir kuesioner Anda.</p>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-brand-primary/20 transition-all duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 border-b border-white/5 text-slate-400 font-bold">
              <tr>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest">Item Pernyataan</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest">R-Hitung</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest">R-Tabel</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-right">Kesimpulan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-brand-primary/5 transition-colors group/row">
                  <td className="px-8 py-5 font-bold text-white group-hover/row:text-brand-primary transition-colors">{row.item}</td>
                  <td className="px-8 py-5 font-mono">{row.val.toFixed(3)}</td>
                  <td className="px-8 py-5 font-mono opacity-50">{rTable}</td>
                  <td className="px-8 py-5 text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-tighter ${
                      row.status === 'VALID' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Instrument Validity Standard • Quality Assured by JokiIn
        </p>
      </div>
    </div>
  );
}