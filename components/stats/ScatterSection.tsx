"use client";

import { PieChart, Info, Target } from "lucide-react"; 
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function ScatterSection() {
  const data = [
    { x: 10, y: 20 }, { x: 20, y: 50 }, { x: 30, y: 40 }, 
    { x: 45, y: 85 }, { x: 50, y: 35 }, { x: 70, y: 90 }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <PieChart className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Sebaran Data (Scatter)</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Visualisasi hubungan antar variabel untuk mendeteksi pola, tren, dan pencilan (outliers) dalam dataset penelitian.
          </p>
        </div>
        <div className="bg-brand-primary/5 px-4 py-2 rounded-full border border-brand-primary/20 flex items-center gap-2">
          <Target size={14} className="text-brand-primary" />
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Core Distribution</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/5 relative group hover:border-brand-primary/20 transition-all duration-500">
        <div className="absolute top-6 left-10 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bivariate Analysis Plot</span>
        </div>

        <div className="h-[400px] mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="Variabel X" 
                stroke="#475569" 
                fontSize={11} 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: '#64748b' }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Variabel Y" 
                stroke="#475569" 
                fontSize={11} 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: '#64748b' }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3', stroke: 'rgba(59, 130, 246, 0.5)' }}
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
              <Scatter name="Data Mahasiswa" data={data}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill="#3b82f6" 
                    fillOpacity={0.6}
                    className="hover:fill-opacity-100 transition-all duration-300 cursor-pointer" 
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Legend/Note */}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-start gap-3 text-[10px] text-slate-500 italic leading-relaxed">
          <Info size={14} className="shrink-0 text-brand-primary" />
          <p>
            Grafik ini merepresentasikan sebaran data dari variabel independen (X) terhadap variabel dependen (Y). 
            Titik-titik yang mengumpul menunjukkan adanya korelasi yang kuat dalam dataset.
          </p>
        </div>
      </div>

      {/* Footer Label */}
      <div className="pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          Data Visualization Powered by JokiIn Analytics Engine
        </p>
      </div>
    </div>
  );
}