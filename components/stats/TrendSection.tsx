"use client";
import { useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { ListChecks, TrendingUp, Info } from "lucide-react";

export default function TrendSection() {
  const [data, setData] = useState("10, 25, 45, 30, 55, 70, 65");
  const chartData = data.split(",").map((v, i) => ({ n: `T${i+1}`, v: parseFloat(v) }));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <ListChecks className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Visualisasi Tren</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Menganalisis fluktuasi dan arah perkembangan data secara temporal atau berdasarkan urutan observasi.
          </p>
        </div>
        <div className="bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 flex items-center gap-2">
          <TrendingUp size={14} className="text-emerald-400" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Growth Analysis</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Input Area */}
        <div className="lg:col-span-4">
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 space-y-4 group hover:border-brand-primary/30 transition-all duration-500">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block ml-2">Data Sequence</label>
            <textarea 
              value={data} 
              onChange={(e)=>setData(e.target.value)} 
              className="w-full h-48 bg-black/20 border border-white/5 rounded-2xl p-4 text-brand-primary font-mono text-sm outline-none focus:ring-1 ring-brand-primary/50 resize-none transition-all" 
              placeholder="Input angka dipisah koma..." 
            />
            <div className="flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Pisahkan setiap titik data dengan koma untuk memperbarui grafik secara real-time.</p>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="lg:col-span-8">
          <div className="h-[400px] bg-white/5 p-8 rounded-[3rem] border border-white/5 relative group overflow-hidden">
            {/* Background Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full" />
            
            <div className="absolute top-6 left-10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Time-Series Forecast</span>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 40, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="n" 
                  axisLine={false} 
                  tickLine={false} 
                  stroke="#475569"
                  fontSize={10}
                  tick={{ fill: '#64748b' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0a1622', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}
                  cursor={{ stroke: 'rgba(59, 130, 246, 0.2)', strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="v" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorV)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer Label */}
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Visual Data Representative • Precision Statistics by JokiIn
        </p>
      </div>
    </div>
  );
}