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
    // Menggunakan nomor WhatsApp Zakaria Dwi Arman Maulana
    const phoneNumber = "6285183081282"; 
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

      {/* Modal Card - Menggunakan bg-card dari global.css */}
      <div className="relative w-full max-w-lg bg-card border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header Dekoratif */}
        <div className="bg-gradient-to-r from-brand-primary/20 to-purple-600/10 p-8 border-b border-white/5 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Zap size={18} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Konfirmasi Bundling</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {bundleData.name}
          </h2>
        </div>

        <form onSubmit={handleWhatsAppOrder} className="p-8 space-y-6">
          {/* Review Ringkas */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimasi Biaya:</span>
              <span className="text-2xl font-bold text-brand-primary tracking-tighter">{bundleData.price}</span>
            </div>
            <div className="space-y-3">
              {bundleData.features.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 size={14} className="text-brand-primary" /> {feat}
                </div>
              ))}
              <p className="text-xs text-slate-500 pl-6">+ Fitur lainnya sesuai deskripsi paket</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="space-y-5">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block tracking-widest">Nama Lengkap</label>
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Zakaria Maulana"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors font-medium placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block tracking-widest">Catatan Tambahan (Opsional)</label>
              <textarea 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Detail tugas atau deadline..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors font-medium min-h-[100px] resize-none placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex items-center gap-3 px-4 py-3 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
            <ShieldCheck size={20} className="text-brand-primary shrink-0" />
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
              Data pengerjaan aman & rahasia. Pembayaran dilakukan setelah kesepakatan tercapai.
            </p>
          </div>

          <button 
            type="submit"
            className="btn-primary w-full py-5 rounded-2xl shadow-xl shadow-brand-primary/20 text-sm"
          >
            Lanjut ke WhatsApp <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}