"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { ListChecks } from "lucide-react";

export default function TrendSection() {
  const [data, setData] = useState("10, 25, 45, 30, 55, 70, 65");
  const chartData = data.split(",").map((v, i) => ({ n: `T${i+1}`, v: parseFloat(v) }));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-black flex items-center gap-3 mb-8"><ListChecks className="text-blue-600"/> Visualisasi Tren</h2>
      <textarea value={data} onChange={(e)=>setData(e.target.value)} className="w-full p-4 mb-8 bg-gray-100 rounded-2xl font-mono text-sm" placeholder="Input angka dipisah koma..." />
      <div className="h-[400px] bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/><stop offset="95%" stopColor="#2563eb" stopOpacity={0}/></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="n" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorV)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}