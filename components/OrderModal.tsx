"use client";
import { useState, useEffect } from "react";
import { X, Send, ReceiptText, ChevronDown, Calendar, GraduationCap, User } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

const PRICING_STRUCTURE: Record<string, Record<string, number>> = {
  "Olah Data & Statistik": {
    "Analisis SPSS & Excel": 50000,
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

  useEffect(() => {
    const hargaDasar = PRICING_STRUCTURE[formData.layananUtama][formData.subLayanan] || 0;
    const multiplier = formData.isUrgent ? 1.5 : 1;
    setTotalHarga(hargaDasar * multiplier);
  }, [formData.layananUtama, formData.subLayanan, formData.isUrgent]);

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-card border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
          <X size={24}/>
        </button>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-brand-primary/10 rounded-2xl text-brand-primary">
            <ReceiptText size={28}/>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">Checkout Jasa</h2>
            <p className="text-slate-500 text-xs font-medium mt-1">Lengkapi detail untuk pembuatan invoice</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sesi Identitas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <User size={12}/> Nama Lengkap
              </label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-slate-600" placeholder="Budi Santoso"
                onChange={(e) => setFormData({...formData, nama: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={12}/> Instansi / Kampus
              </label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-slate-600" placeholder="UMP"
                onChange={(e) => setFormData({...formData, instansi: e.target.value})} />
            </div>
          </div>

          {/* Sesi Pemilihan Jasa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Layanan Utama</label>
              <select 
                value={formData.layananUtama}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm appearance-none outline-none focus:border-brand-primary cursor-pointer"
                onChange={(e) => handleMainServiceChange(e.target.value)}
              >
                {Object.keys(PRICING_STRUCTURE).map(key => <option key={key} value={key} className="bg-card">{key}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-[46px] text-slate-500 pointer-events-none" size={16} />
            </div>

            <div className="relative space-y-2">
              <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Sub-Jasa Spesifik</label>
              <select 
                value={formData.subLayanan}
                className="w-full bg-brand-primary/10 border border-brand-primary/20 rounded-2xl px-5 py-3.5 text-white text-sm appearance-none outline-none focus:border-brand-primary cursor-pointer"
                onChange={(e) => setFormData({...formData, subLayanan: e.target.value})}
              >
                {Object.keys(PRICING_STRUCTURE[formData.layananUtama]).map(sub => (
                  <option key={sub} value={sub} className="bg-card">{sub}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-[46px] text-brand-primary pointer-events-none" size={16} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={12}/> Deadline
                </label>
                <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-brand-primary outline-none transition-all invert"
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})} />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 w-full bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-4 cursor-pointer hover:bg-brand-primary/10 transition-all" 
                  onClick={() => setFormData({...formData, isUrgent: !formData.isUrgent})}>
                  <input type="checkbox" checked={formData.isUrgent} readOnly className="w-4 h-4 rounded border-white/10 text-brand-primary focus:ring-0 bg-transparent" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Layanan Urgent (+50%)</span>
                </label>
              </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Catatan Tambahan</label>
            <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-brand-primary outline-none transition-all resize-none placeholder:text-slate-600" placeholder="Berikan detail tugas Anda..."
              onChange={(e) => setFormData({...formData, detail: e.target.value})} />
          </div>

          {/* TOTAL HARGA FOOTER */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Estimasi Investasi</p>
              <p className="text-3xl font-bold text-white tracking-tighter">
                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(totalHarga)}
              </p>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto py-4 px-10 rounded-2xl shadow-xl shadow-brand-primary/20">
              Kirim Invoice <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}