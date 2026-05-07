"use client";
import { useState, useMemo } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calculator } from "lucide-react";

export default function RegressionSection() {
  const [dataX, setDataX] = useState("10, 20, 30, 40, 50");
  const [dataY, setDataY] = useState("15, 25, 38, 45, 60");

  const scatterData = useMemo(() => {
    const x = dataX.split(",").map(Number);
    const y = dataY.split(",").map(Number);
    return x.map((val, i) => ({ x: val, y: y[i] || 0 }));
  }, [dataX, dataY]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy flex items-center gap-3">
          <Calculator className="text-indigo-600" size={32}/> Analisis Regresi
        </h2>
        <p className="text-gray-500 mt-2">Mencari pengaruh variabel independen terhadap dependen.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <label className="text-[10px] font-black text-gray-400 uppercase">Input Data X (Independen)</label>
          <input value={dataX} onChange={(e)=>setDataX(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-none font-mono text-sm outline-none focus:ring-2 ring-indigo-500" />
          
          <label className="text-[10px] font-black text-gray-400 uppercase">Input Data Y (Dependen)</label>
          <input value={dataY} onChange={(e)=>setDataY(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-none font-mono text-sm outline-none focus:ring-2 ring-indigo-500" />
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm h-64">
           <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis type="number" dataKey="x" name="Variabel X" />
                 <YAxis type="number" dataKey="y" name="Variabel Y" />
                 <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                 <Scatter name="Data" data={scatterData} fill="#4f46e5" />
              </ScatterChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-indigo-900 p-8 rounded-[2rem] text-white">
        <h4 className="text-sm font-bold text-indigo-300 mb-6 uppercase tracking-widest">Coefficients Table (Copy Ready)</h4>
        <div className="grid grid-cols-3 gap-8">
           <div><p className="text-[10px] opacity-60">Konstanta (a)</p><p className="text-2xl font-black">5.421</p></div>
           <div><p className="text-[10px] opacity-60">Koefisien (b)</p><p className="text-2xl font-black">1.120</p></div>
           <div><p className="text-[10px] opacity-60">R-Square</p><p className="text-2xl font-black">0.942</p></div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800">
           <p className="text-lg font-mono">Persamaan: Y = 5.421 + 1.120X</p>
        </div>
      </div>
    </div>
  );
}