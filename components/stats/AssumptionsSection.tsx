"use client";
import { useState } from "react";
import { BarChart3, BrainCircuit } from "lucide-react";

export default function AssumptionsSection() {
  const [vif, setVif] = useState("1.121");
  const [glejser, setGlejser] = useState("0.654");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
      <section>
        <h2 className="text-2xl font-black flex items-center gap-3 mb-6"><BarChart3 className="text-cyan-600"/> Uji Heteroskedastisitas (Glejser)</h2>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center">
          <div><p className="text-xs text-gray-400 uppercase font-bold">Sig. Glejser X1</p><input value={glejser} onChange={(e)=>setGlejser(e.target.value)} className="text-2xl font-black outline-none w-24"/></div>
          <p className={`px-4 py-1 rounded-full text-[10px] font-black ${parseFloat(glejser) > 0.05 ? 'bg-cyan-100 text-cyan-600' : 'bg-red-100 text-red-600'}`}>
            {parseFloat(glejser) > 0.05 ? "LOLOS (TIDAK ADA HETEROS)" : "GEJALA HETEROS"}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black flex items-center gap-3 mb-6"><BrainCircuit className="text-red-600"/> Uji Multikolinearitas</h2>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center">
          <div><p className="text-xs text-gray-400 uppercase font-bold">Nilai VIF</p><input value={vif} onChange={(e)=>setVif(e.target.value)} className="text-2xl font-black outline-none w-24"/></div>
          <p className={`px-4 py-1 rounded-full text-[10px] font-black ${parseFloat(vif) < 10 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {parseFloat(vif) < 10 ? "LOLOS (VIF < 10)" : "ADA MULTIKOL"}
          </p>
        </div>
      </section>
    </div>
  );
}