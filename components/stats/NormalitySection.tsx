"use client";
import { useState } from "react";
import { Binary } from "lucide-react";

export default function NormalitySection() {
  const [sig, setSig] = useState("0.200");
  const isNormal = parseFloat(sig) > 0.05;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-navy">
      <h2 className="text-3xl font-black flex items-center gap-3 mb-8"><Binary className="text-purple-600" size={32}/> Uji Normalitas</h2>
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <p className="text-sm text-gray-500 mb-6">Uji Kolmogorov-Smirnov untuk memastikan data berdistribusi normal.</p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <input type="number" value={sig} onChange={(e)=>setSig(e.target.value)} className="text-5xl font-black p-6 bg-gray-50 rounded-3xl outline-none focus:ring-2 ring-purple-500 w-full" />
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase">Interpretasi (Sig. 2-tailed)</p>
            <p className={`text-xl font-bold ${isNormal ? 'text-purple-600' : 'text-red-500'}`}>
              {isNormal ? "✓ Data Berdistribusi Normal" : "✗ Data Tidak Normal"}
            </p>
            <p className="text-sm text-gray-400 italic">Nilai signifikansi {sig} {isNormal ? ">" : "<"} 0.05</p>
          </div>
        </div>
      </div>
    </div>
  );
}