"use client";
import { useState } from "react";
import { Activity } from "lucide-react";

export default function ReliabilitySection() {
  const [alpha, setAlpha] = useState("0.856");
  const isReliable = parseFloat(alpha) >= 0.6;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-black text-navy flex items-center gap-3 mb-8">
        <Activity className="text-orange-600" size={32}/> Uji Reliabilitas
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <label className="text-[10px] font-black text-gray-400 mb-2 block uppercase">Cronbach's Alpha</label>
          <input type="number" step="0.001" value={alpha} onChange={(e)=>setAlpha(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-orange-500 font-mono" />
        </div>
        <div className={`p-8 rounded-[2rem] flex flex-col justify-center text-white ${isReliable ? 'bg-orange-600' : 'bg-red-500'}`}>
          <p className="text-xs uppercase font-bold opacity-80">Status Reliabilitas</p>
          <p className="text-4xl font-black">{isReliable ? "RELIABEL" : "TIDAK RELIABEL"}</p>
          <p className="mt-2 text-sm italic">"{alpha} {'>'} 0.60"</p>
        </div>
      </div>
    </div>
  );
}