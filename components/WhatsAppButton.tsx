"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "6285183081282";
  const message = "Halo, saya tertarik dengan jasa olah data/tugas kuliah Anda.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:scale-110 transition-transform p-4 rounded-full shadow-2xl flex items-center gap-2 text-white font-bold"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Konsultasi Sekarang</span>
    </a>
  );
}