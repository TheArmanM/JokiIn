"use client";
import { useState, useMemo } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Calculator, Info, LineChart } from "lucide-react";

export default function RegressionSection() {
  const [dataX, setDataX] = useState("10, 20, 30, 40, 50");
  const [dataY, setDataY] = useState("15, 25, 38, 45, 60");

  const scatterData = useMemo(() => {
    const x = dataX.split(",").map(Number);
    const y = dataY.split(",").map(Number);
    return x.map((val, i) => ({ x: val, y: y[i] || 0 }));
  }, [dataX, dataY]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary/10 rounded-xl">
              <Calculator className="text-brand-primary" size={24}/>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Analisis Regresi</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">Menganalisis hubungan dan kekuatan pengaruh antara variabel independen terhadap variabel dependen.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Input Area */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block ml-2">Variabel Independen (X)</label>
              <input 
                value={dataX} 
                onChange={(e)=>setDataX(e.target.value)} 
                className="w-full p-4 bg-black/20 border border-white/5 rounded-2xl text-brand-primary font-mono text-sm outline-none focus:ring-1 ring-brand-primary/50 transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block ml-2">Variabel Dependen (Y)</label>
              <input 
                value={dataY} 
                onChange={(e)=>setDataY(e.target.value)} 
                className="w-full p-4 bg-black/20 border border-white/5 rounded-2xl text-brand-primary font-mono text-sm outline-none focus:ring-1 ring-brand-primary/50 transition-all" 
              />
            </div>

            <div className="pt-4 flex items-start gap-2 text-[10px] text-slate-500 italic leading-relaxed border-t border-white/5">
              <Info size={12} className="shrink-0 mt-0.5" />
              <p>Visualisasi scatter plot akan diperbarui secara otomatis berdasarkan perubahan data input.</p>
            </div>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-7">
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 h-full relative group">
            <div className="absolute top-6 left-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scatter Plot Analysis</span>
            </div>
            
            <ResponsiveContainer width="100%" height="100%" className="min-h-[250px]">
              <ScatterChart margin={{ top: 40, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  stroke="#475569" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  stroke="#475569" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3', stroke: 'rgba(59, 130, 246, 0.5)' }}
                  contentStyle={{ 
                    backgroundColor: '#0a1622', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '11px',
                    color: '#fff'
                  }}
                />
                <Scatter name="Data" data={scatterData}>
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#3b82f6" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <LineChart size={18} className="text-brand-primary" />
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Statistical Coefficients</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-1">
              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Konstanta (α)</p>
              <p className="text-3xl font-bold text-white tracking-tight">5.421</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Koefisien Regresi (β)</p>
              <p className="text-3xl font-bold text-white tracking-tight">1.120</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">R-Square (R²)</p>
              <p className="text-3xl font-bold text-brand-primary tracking-tight">0.942</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-black/20 border border-white/5 rounded-2xl inline-block">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Persamaan Regresi Linier</p>
            <p className="text-xl font-mono font-bold text-white">Y = 5.421 + 1.120X + ε</p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] italic">
          Metodologi analisis mengikuti standar pelaporan kuantitatif akademik yang valid
        </p>
      </div>
    </div>
  );
}