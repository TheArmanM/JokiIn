"use client";
import { useState, useMemo } from "react";
import { ClipboardCheck, Copy } from "lucide-react";

export default function ValiditySection() {
  const [input, setInValid] = useState("0.64, 0.71, 0.25, 0.42, 0.88");
  const rTable = 0.312; // Standar N=40 alpha 5%

  const data = useMemo(() => {
    return input.split(/[, \n]+/).map(Number).filter(n => !isNaN(n)).map((v, i) => ({
      item: `Butir ${i + 1}`,
      val: v,
      status: v > rTable ? "VALID" : "TIDAK VALID"
    }));
  }, [input]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy flex items-center gap-3">
          <ClipboardCheck className="text-emerald-600" size={32}/> Uji Validitas
        </h2>
        <p className="text-gray-500 mt-2">Mengukur sejauh mana ketepatan suatu alat ukur (kuesioner).</p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-8">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Input R-Hitung</label>
        <input 
          value={input}
          onChange={(e) => setInValid(e.target.value)}
          className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-emerald-500 font-mono text-sm"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-serif">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b-2 border-navy text-navy">
            <tr>
              <th className="px-6 py-4 font-bold">Item Pernyataan</th>
              <th className="px-6 py-4 font-bold">R-Hitung</th>
              <th className="px-6 py-4 font-bold">R-Tabel</th>
              <th className="px-6 py-4 font-bold">Kesimpulan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-emerald-50/30 transition">
                <td className="px-6 py-4">{row.item}</td>
                <td className="px-6 py-4">{row.val}</td>
                <td className="px-6 py-4 font-mono">{rTable}</td>
                <td className={`px-6 py-4 font-black ${row.status === 'VALID' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}