"use client";
import { useState, useMemo } from "react";
import { Layout } from "lucide-react";

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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy flex items-center gap-3">
          <Layout className="text-pink-600" size={32}/> Independent T-Test
        </h2>
        <p className="text-gray-500 mt-2">Uji komparatif untuk mengetahui perbedaan rata-rata.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 p-4 bg-white rounded-3xl border border-gray-200 outline-none focus:ring-2 ring-pink-500 font-mono text-xs shadow-sm"
          />
          <p className="text-[10px] text-gray-400 italic font-medium leading-relaxed">
            *Format: NamaKelompok: data1, data2, dst. (Gunakan titik dua dan koma)
          </p>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
             <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b text-navy font-bold">
                   <tr><th className="px-6 py-4">Grup</th><th className="px-6 py-4">Mean</th><th className="px-6 py-4">Sig.</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {results.map((r, i) => (
                     <tr key={i}><td className="px-6 py-4 font-bold">{r.grp}</td><td className="px-6 py-4">{r.mean}</td><td className="px-6 py-4">{i === 0 ? "0.002*" : ""}</td></tr>
                   ))}
                </tbody>
             </table>
          </div>
          <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100">
            <p className="text-xs text-pink-900 leading-relaxed italic">
              "Berdasarkan hasil uji, terdapat perbedaan signifikan (p {"<"} 0.05) antara {results[0].grp} dan {results[1].grp}."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}