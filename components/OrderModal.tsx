"use client";
import { useState, useEffect } from "react";
import { X, Send, ReceiptText, ChevronDown, Calendar, GraduationCap, User } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

// PUSAT DATA: Layanan, Sub-Jasa, dan Harganya
const PRICING_STRUCTURE: Record<string, Record<string, number>> = {
  "Olah Data & Statistik": {
    "Analisis SPSS & Excel": 75000,
    "Uji Asumsi Klasik": 80000,
    "Analisis Regresi": 85000,
    "Interpretasi Data": 50000
  },
  "Penulisan Dokumen": {
    "Merapikan Format": 30000,
    "Resume/Ringkasan": 35000,
    "Pembuatan Makalah": 50000,
    "Daftar Pustaka Otomatis": 25000
  },
  "Visual & Presentasi": {
    "PPT Standard": 40000,
    "PPT Premium": 75000,
    "Poster Ilmiah": 60000,
    "Infografis": 55000
  },
  "Layanan Kilat": {
    "Same Day Service": 100000,
    "Overnight/Express": 150000
  }
};

export default function OrderModal({ isOpen, onClose, selectedPackage }: OrderModalProps) {
  // 1. Inisialisasi State
  const initialService = selectedPackage && PRICING_STRUCTURE[selectedPackage] 
    ? selectedPackage 
    : "Olah Data & Statistik";

  const [formData, setFormData] = useState({
    nama: "",
    instansi: "",
    layananUtama: initialService,
    subLayanan: Object.keys(PRICING_STRUCTURE[initialService])[0],
    deadline: "",
    isUrgent: false,
    detail: ""
  });

  const [totalHarga, setTotalHarga] = useState(0);

  // 2. Logika Update Harga & Sub-Layanan Otomatis
  useEffect(() => {
    const hargaDasar = PRICING_STRUCTURE[formData.layananUtama][formData.subLayanan] || 0;
    const multiplier = formData.isUrgent ? 1.5 : 1; // Charge 50% untuk urgent
    setTotalHarga(hargaDasar * multiplier);
  }, [formData.layananUtama, formData.subLayanan, formData.isUrgent]);

  // Reset Sub-Layanan jika Layanan Utama berubah
  const handleMainServiceChange = (val: string) => {
    setFormData({
      ...formData,
      layananUtama: val,
      subLayanan: Object.keys(PRICING_STRUCTURE[val])[0]
    });
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const invoiceId = `INV-${Math.floor(1000 + Math.random() * 9000)}`;
    const formattedHarga = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(totalHarga);

    const message = `*✨ INVOICE PEMESANAN - JOKIIN* %0A` +
      `--------------------------------%0A` +
      `*ID:* ${invoiceId}%0A` +
      `*Nama:* ${formData.nama}%0A` +
      `*Instansi:* ${formData.instansi}%0A` +
      `*Layanan:* ${formData.layananUtama}%0A` +
      `*Sub-Jasa:* ${formData.subLayanan}%0A` +
      `*Status:* ${formData.isUrgent ? "URGENT (+50%)" : "Reguler"}%0A` +
      `*Total Investasi:* ${formattedHarga}%0A` +
      `*Deadline:* ${formData.deadline}%0A` +
      `--------------------------------%0A` +
      `*Catatan:* ${formData.detail}%0A%0A` +
      `Mohon segera diproses ya Zakaria!`;

    window.open(`https://wa.me/6285183081282?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-[#0b1120] border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"><X size={24}/></button>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500"><ReceiptText size={28}/></div>
          <div>
            <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">Checkout Jasa</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Lengkapi detail untuk pembuatan invoice</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Sesi Identitas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase italic flex items-center gap-2"><User size={10}/> Nama Lengkap</label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all" placeholder="Contoh: Budi Santoso"
                onChange={(e) => setFormData({...formData, nama: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase italic flex items-center gap-2"><GraduationCap size={10}/> Instansi / Kampus</label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all" placeholder="Contoh: UMP"
                onChange={(e) => setFormData({...formData, instansi: e.target.value})} />
            </div>
          </div>

          {/* Sesi Pemilihan Jasa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase italic">Layanan Utama</label>
              <select 
                value={formData.layananUtama}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm appearance-none outline-none focus:border-blue-500 cursor-pointer"
                onChange={(e) => handleMainServiceChange(e.target.value)}
              >
                {Object.keys(PRICING_STRUCTURE).map(key => <option key={key} value={key} className="bg-[#0b1120]">{key}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-[46px] text-slate-500 pointer-events-none" size={14} />
            </div>

            <div className="relative space-y-2">
              <label className="text-[10px] font-black text-blue-500 uppercase italic">Sub-Jasa Spesifik</label>
              <select 
                value={formData.subLayanan}
                className="w-full bg-blue-500/10 border border-blue-500/20 rounded-2xl px-5 py-3.5 text-white text-sm appearance-none outline-none focus:border-blue-500 cursor-pointer"
                onChange={(e) => setFormData({...formData, subLayanan: e.target.value})}
              >
                {Object.keys(PRICING_STRUCTURE[formData.layananUtama]).map(sub => (
                  <option key={sub} value={sub} className="bg-[#0b1120]">{sub}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-[46px] text-blue-500 pointer-events-none" size={14} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase italic flex items-center gap-2"><Calendar size={10}/> Deadline</label>
                <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all invert"
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})} />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 w-full bg-blue-500/5 border border-blue-500/20 rounded-2xl p-4 cursor-pointer hover:bg-blue-500/10 transition-all" 
                  onClick={() => setFormData({...formData, isUrgent: !formData.isUrgent})}>
                  <input type="checkbox" checked={formData.isUrgent} onChange={() => {}} className="w-4 h-4 rounded border-white/10 text-blue-600 focus:ring-0 bg-transparent" />
                  <span className="text-[10px] font-black text-slate-300 uppercase italic">Layanan Urgent (+50%)</span>
                </label>
              </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase italic">Catatan Tambahan</label>
            <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-blue-500 outline-none transition-all resize-none" placeholder="Berikan detail tugas Anda..."
              onChange={(e) => setFormData({...formData, detail: e.target.value})} />
          </div>

          {/* TOTAL HARGA FOOTER */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase italic leading-none mb-1">Estimasi Investasi</p>
              <p className="text-3xl font-black text-white italic tracking-tighter">
                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(totalHarga)}
              </p>
            </div>
            <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic py-4 px-10 rounded-[2rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Kirim Invoice <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}