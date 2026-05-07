"use client";
// Ubah PieIcon menjadi PieChart
import { PieChart } from "lucide-react"; 
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function ScatterSection() {
  const data = [
    { x: 10, y: 20 }, { x: 20, y: 50 }, { x: 30, y: 40 }, 
    { x: 45, y: 85 }, { x: 50, y: 35 }, { x: 70, y: 90 }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Update penggunaan icon di sini */}
      <h2 className="text-3xl font-black flex items-center gap-3 mb-8">
        <PieChart className="text-yellow-600" size={32}/> Sebaran Data (Scatter)
      </h2>
      
      <div className="h-[400px] bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis type="number" dataKey="x" name="Variabel X" />
            <YAxis type="number" dataKey="y" name="Variabel Y" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Data Mahasiswa" data={data} fill="#ca8a04">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fillOpacity={0.6} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}