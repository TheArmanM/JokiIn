"use client";

import { MessageCircle } from "lucide-react";

// Kita tambahkan Interface Props agar komponen ini bisa menerima pesan custom
interface WhatsAppButtonProps {
  message?: string; // Tanda tanya (?) berarti tidak wajib diisi
}

export default function WhatsAppButton({ message }: WhatsAppButtonProps) {
  const phoneNumber = "6285183081282";
  
  // Pesan default jika di halaman Home (app/page.tsx) tidak mengirim props message
  const defaultMessage = "Halo Zakaria, saya tertarik dengan jasa olah data/tugas kuliah Anda.";
  
  // Gunakan pesan custom jika ada, jika tidak pakai yang default
  const finalMessage = message || defaultMessage;
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      // Saya tambahkan efek shadow neon hijau agar lebih "eye-catching"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] hover:scale-110 transition-all p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center gap-3 text-white font-black uppercase italic text-[10px] tracking-widest group"
    >
      {/* Ikon WA dengan sedikit animasi rotasi saat di-hover */}
      <MessageCircle size={26} fill="white" className="group-hover:rotate-12 transition-transform" />
      
      <span className="hidden md:inline border-l border-white/20 pl-3">
        Konsultasi Sekarang
      </span>

      {/* Efek Ping (lingkaran memancar) untuk menarik perhatian user */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </a>
  );
}