"use client";
import { useState, useMemo } from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, Cell } from "recharts";
import { Sigma, Info, LayoutDashboard } from "lucide-react";

export default function DescriptiveSection() {
  const [input, setInput] = useState("80, 85, 90, 75, 70, 95, 88");

  const stats = useMemo(() => {
    const d = input.split(/[, \n]+/).map(Number).filter(n => !isNaN(n));
    if (d.length === 0) return { n:0, mean:0, sd:0, min:0, max:0, data:[] };
    const mean = d.reduce((a, b) => a + b, 0) / d.length;
    const sd = d.length > 1 
      ? Math.sqrt(d.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (d.length - 1))
      : 0;
    return {
      n: d.length,
      mean: mean.toFixed(2),
      sd: sd.toFixed(2),
      min: Math.min(...d),
      max: Math.max(...d),
      data: d.map((v, i) => ({ i, v }))
    };
  }, [input]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <Sigma className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Statistik Deskriptif</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">Ringkasan statistik untuk memberikan gambaran umum mengenai distribusi dan tendensi sentral data penelitian Anda.</p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
          <LayoutDashboard size={14} className="text-brand-primary" />
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Standard Analysis Mode</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Area */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 group hover:border-brand-primary/30 transition-all duration-500">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 block">Input Data Mentah</label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan angka dipisah koma..."
              className="w-full h-40 bg-black/20 border border-white/5 rounded-2xl p-4 text-brand-primary font-mono text-sm outline-none focus:ring-1 ring-brand-primary/50 transition-all resize-none"
            />
            <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Gunakan koma (,) atau baris baru untuk memisahkan data.</p>
            </div>
          </div>
        </div>

        {/* Stats & Visualization */}
        <div className="lg:col-span-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Sample (N)", val: stats.n },
              { label: "Mean", val: stats.mean },
              { label: "Std. Dev", val: stats.sd },
              { label: "Min", val: stats.min },
              { label: "Max", val: stats.max }
            ].map((s, idx) => (
              <div key={idx} className="bg-white/5 p-5 rounded-3xl border border-white/5 text-center group hover:bg-brand-primary/5 transition-colors duration-300">
                <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mb-1">{s.label}</p>
                <p className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors tracking-tight">{s.val}</p>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="h-72 bg-white/5 p-8 rounded-[2.5rem] border border-white/5 relative group">
            <div className="absolute top-6 left-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Distribusi Nilai</span>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.data}>
                <XAxis dataKey="i" hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ 
                    backgroundColor: '#0a1622', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Bar dataKey="v" radius={[8, 8, 8, 8]} barSize={24}>
                  {stats.data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index % 2 === 0 ? "#3b82f6" : "rgba(59, 130, 246, 0.4)"} 
                      className="transition-all duration-500 hover:opacity-80"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Output data otomatis disesuaikan dengan standar pelaporan skripsi & tesis
        </p>
      </div>
    </div>
  );
}