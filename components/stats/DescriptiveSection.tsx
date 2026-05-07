"use client";
import { useState, useMemo } from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Sigma } from "lucide-react";

export default function DescriptiveSection() {
  const [input, setInput] = useState("80, 85, 90, 75, 70, 95, 88");

  const stats = useMemo(() => {
    const d = input.split(/[, \n]+/).map(Number).filter(n => !isNaN(n));
    if (d.length === 0) return { n:0, mean:0, sd:0, min:0, max:0, data:[] };
    const mean = d.reduce((a, b) => a + b, 0) / d.length;
    const sd = Math.sqrt(d.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (d.length - 1));
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy flex items-center gap-3">
          <Sigma className="text-blue-600" size={32}/> Statistik Deskriptif
        </h2>
        <p className="text-gray-500 mt-2">Menganalisis pemusatan dan penyebaran data mentah.</p>
      </div>

      <div className="grid gap-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Data Input</label>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-blue-500 font-mono text-sm"
          />
        </div>

        <div className="bg-navy p-8 rounded-[2rem] text-white">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div><p className="text-blue-300 text-[10px] uppercase font-bold">N</p><p className="text-2xl font-black">{stats.n}</p></div>
            <div><p className="text-blue-300 text-[10px] uppercase font-bold">Mean</p><p className="text-2xl font-black">{stats.mean}</p></div>
            <div><p className="text-blue-300 text-[10px] uppercase font-bold">Std. Dev</p><p className="text-2xl font-black">{stats.sd}</p></div>
            <div><p className="text-blue-300 text-[10px] uppercase font-bold">Min</p><p className="text-2xl font-black">{stats.min}</p></div>
            <div><p className="text-blue-300 text-[10px] uppercase font-bold">Max</p><p className="text-2xl font-black">{stats.max}</p></div>
          </div>
        </div>

        <div className="h-64 bg-white p-6 rounded-3xl border border-gray-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.data}>
              <XAxis dataKey="i" hide />
              <Tooltip cursor={{fill: '#f1f5f9'}} />
              <Bar dataKey="v" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}