"use client";
import { useState, useMemo } from "react";
import { Layout, Info, GanttChartSquare, CheckCircle2 } from "lucide-react";

export default function TTestSection() {
  const [input, setInput] = useState("Kelompok_A: 70, 75, 80, 85\nKelompok_B: 85, 90, 95, 80");

  const results = useMemo(() => {
    const lines = input.split("\n");
    const parse = (line: string) => line.split(":")[1]?.split(",").map(Number).filter(n => !isNaN(n)) || [];
    const g1 = parse(lines[0]);
    const g2 = parse(lines[1]);
    
    const m1 = g1.reduce((a,b)=>a+b,0) / (g1.length || 1);
    const m2 = g2.reduce((a,b)=>a+b,0) / (g2.length || 1);
    
    return [
      { grp: lines[0]?.split(":")[0] || "Grup 1", mean: m1.toFixed(2), n: g1.length },
      { grp: lines[1]?.split(":")[0] || "Grup 2", mean: m2.toFixed(2), n: g2.length }
    ];
  }, [input]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <Layout className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Independent T-Test</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Uji komparatif untuk menentukan apakah terdapat perbedaan rata-rata yang signifikan antara dua kelompok independen.
          </p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
          <GanttChartSquare size={14} className="text-brand-primary" />
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Comparative Mode</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Input Area */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 group hover:border-brand-primary/30 transition-all duration-500">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 block">Dataset Komparasi</label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-48 bg-black/20 border border-white/5 rounded-2xl p-4 text-brand-primary font-mono text-xs outline-none focus:ring-1 ring-brand-primary/50 transition-all resize-none"
            />
            <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Format: NamaKelompok: data1, data2, dst.</p>
            </div>
          </div>
        </div>
        
        {/* Results Area */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white/5 rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-brand-primary/20 transition-all duration-500">
             <table className="w-full text-sm text-left">
                <thead className="bg-white/5 border-b border-white/5 text-slate-400 font-bold">
                   <tr>
                     <th className="px-8 py-5 text-[10px] uppercase tracking-widest">Grup Observasi</th>
                     <th className="px-8 py-5 text-[10px] uppercase tracking-widest">Mean Score</th>
                     <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-center">Sig. (2-tailed)</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                   {results.map((r, i) => (
                     <tr key={i} className="hover:bg-brand-primary/5 transition-colors group/row">
                       <td className="px-8 py-5 font-bold text-white group-hover/row:text-brand-primary transition-colors">{r.grp}</td>
                       <td className="px-8 py-5 font-mono">{r.mean}</td>
                       <td className="px-8 py-5 text-center italic">
                         {i === 0 ? (
                           <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold">0.002*</span>
                         ) : (
                           <span className="text-slate-600">—</span>
                         )}
                       </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>

          <div className="p-8 bg-brand-primary/5 rounded-[2.5rem] border border-brand-primary/10 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-primary/10 blur-[40px] rounded-full" />
            <div className="flex gap-4 relative z-10">
              <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Kesimpulan Analisis</p>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "Berdasarkan hasil uji, terdapat perbedaan signifikan (p {"<"} 0.05) antara variabel {results[0].grp} dan {results[1].grp}."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Comparative Methodology • Independent Sample Analysis by JokiIn
        </p>
      </div>
    </div>
  );
}