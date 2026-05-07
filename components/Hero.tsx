"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Code, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    /* 
      PERUBAHAN: 
      1. Menghapus pt-20 karena spasi sudah diatur oleh 'Spacer' di Navbar.tsx.
      2. Menggunakan min-h-[calc(100vh-80px)] agar tinggi tetap proporsional 
         terhadap viewport setelah dikurangi tinggi navbar.
    */
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#000a12]">
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center py-12 md:py-20">
        {/* Badge Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>Solusi Tugas & Olah Data Terpercaya</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
        >
          SOLUSI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AKURAT</span> <br />
          TUGAS MENINGKAT
        </motion.h1>

        {/* Sub-heading */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Bantu Tugas Kuliah Jadi Lebih Mudah! Spesialis dalam analisis data, coding Python, dan penulisan laporan penelitian. Dikerjakan oleh tim ahli profesional.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a href="#harga" className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold transition-all hover:bg-blue-700 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] overflow-hidden">
            <span className="relative z-10">Cek Harga Jasa</span>
          </a>
          <a href="/portfolio" className="px-8 py-4 bg-white/5 text-white rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
            Lihat Portofolio
          </a>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <ShieldCheck size={28} className="text-blue-500" />
            <span className="text-sm font-medium">Privasi Aman</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <Database size={28} className="text-blue-500" />
            <span className="text-sm font-medium">Olah Data Akurat</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <Code size={28} className="text-blue-500" />
            <span className="text-sm font-medium">Standard IT</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <Sparkles size={28} className="text-blue-500" />
            <span className="text-sm font-medium">Hasil Maksimal</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}