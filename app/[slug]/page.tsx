// app/pricelist/[slug]/page.tsx
import { notFound } from "next/navigation";
import { packagesData } from "@/lib/packages";
import { ArrowLeft, CheckCircle2, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function PackageDetail({ params }: { params: { slug: string } }) {
  const data = packagesData[params.slug as keyof typeof packagesData];

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/pricelist" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors text-[10px] font-black uppercase tracking-widest mb-10 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke List
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kiri: Deskripsi & Fitur */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
                {data.name}
              </h1>
              <p className="text-slate-400 text-lg italic leading-relaxed">
                {data.fullDesc}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-black uppercase italic tracking-widest text-sm border-l-4 border-blue-600 pl-4">Layanan Termasuk:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#0b1120] border border-white/5 rounded-2xl">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                    <span className="text-slate-300 text-xs font-bold italic">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kanan: Card Harga & Order */}
          <div className="space-y-6">
            <div className="p-8 bg-blue-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-2 block italic">Harga Mulai Dari</span>
              <div className="text-6xl font-black text-white italic tracking-tighter mb-8">{data.basePrice}</div>
              
              <a 
                href={`https://wa.me/6285183081282?text=Halo Zakaria, saya ingin pesan paket ${data.name}`}
                className="w-full py-4 bg-white text-blue-600 rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                <MessageCircle size={16} /> Amankan Slot
              </a>
            </div>

            <div className="p-6 bg-[#0b1120] border border-white/5 rounded-[2.5rem]">
              <h4 className="text-white font-black uppercase italic text-[10px] tracking-widest mb-4 flex items-center gap-2">
                <Info size={14} className="text-blue-500" /> Biaya Tambahan
              </h4>
              <div className="space-y-3">
                {data.addons.map((addon, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] font-bold italic uppercase border-b border-white/5 pb-2 last:border-0">
                    <span className="text-slate-500">{addon.item}</span>
                    <span className="text-blue-400">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}