"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface OrderBundleModalProps {
  isOpen: boolean;
  onClose: () => void;
  bundleData: {
    name: string;
    price: string;
    features: string[];
  } | null;
}

export default function OrderBundleModal({ isOpen, onClose, bundleData }: OrderBundleModalProps) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  if (!isOpen || !bundleData) return null;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "628XXXXXXXXXX"; // Ganti dengan nomor WhatsApp kamu
    const message = `Halo, saya ingin memesan *PROMO BUNDLING*!%0A%0A` +
      `*Paket:* ${bundleData.name}%0A` +
      `*Harga:* ${bundleData.price}%0A` +
      `*Nama:* ${name}%0A` +
      `*Catatan:* ${note || "-"}%0A%0A` +
      `Mohon info instruksi selanjutnya, terima kasih!`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0b1120] border border-blue-500/30 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] animate-in zoom-in duration-300">
        
        {/* Header Dekoratif */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 border-b border-white/5 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Zap size={18} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Konfirmasi Pemesanan Bundling</span>
          </div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tight">
            {bundleData.name}
          </h2>
        </div>

        <form onSubmit={handleWhatsAppOrder} className="p-8 space-y-6">
          {/* Review Ringkas */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Estimasi Biaya:</span>
              <span className="text-xl font-black text-blue-400 italic">{bundleData.price}</span>
            </div>
            <div className="space-y-2">
              {bundleData.features.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] text-slate-400 italic font-medium">
                  <CheckCircle2 size={12} className="text-blue-500" /> {feat}
                </div>
              ))}
              <p className="text-[9px] text-slate-600 pl-5">+ Fitur lainnya sesuai deskripsi paket</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-slate-500 uppercase ml-4 mb-2 block tracking-widest">Nama Lengkap</label>
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Zakaria Maulana"
                className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors italic font-bold"
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-slate-500 uppercase ml-4 mb-2 block tracking-widest">Catatan Tambahan (Opsional)</label>
              <textarea 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Jelaskan detail tugas atau deadline..."
                className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors italic font-bold min-h-[100px] resize-none"
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-500/5 rounded-xl border border-blue-500/10">
            <ShieldCheck size={20} className="text-blue-500 shrink-0" />
            <p className="text-[9px] text-slate-400 italic font-medium leading-relaxed">
              Data pengerjaan aman & rahasia. Pembayaran dilakukan setelah kesepakatan di WhatsApp.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic py-5 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 tracking-widest text-xs"
          >
            Lanjut ke WhatsApp <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}