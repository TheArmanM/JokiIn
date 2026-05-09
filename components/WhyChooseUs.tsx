"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Headphones, Zap, SearchCheck, HeartHandshake } from "lucide-react";

const REASONS = [
  {
    title: "Privasi 100% Terjamin",
    desc: "Identitas dan data penelitian kamu dirahasiakan sepenuhnya. Privasi adalah prioritas nomor satu kami.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Mudah Dipahami",
    desc: "Bukan sekadar terima hasil, kami jelaskan logikanya agar kamu siap dan percaya diri saat bimbingan.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-indigo-500/20 to-transparent"
  },
  {
    title: "Bebas Revisi",
    desc: "Kami dampingi sampai dosen setuju. Revisi pengerjaan dilakukan dengan cepat tanpa biaya tambahan.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "from-cyan-500/20 to-transparent"
  },
  {
    title: "Pengerjaan Ekspres",
    desc: "Tenggat waktu mepet bukan masalah. Tim kami siap membantu menyelesaikan tugas tepat waktu.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-400/20 to-transparent"
  },
  {
    title: "Hasil Akurat",
    desc: "Setiap data diolah dengan teliti menggunakan metode yang tepat sesuai standar akademik nasional.",
    icon: <SearchCheck className="w-6 h-6" />,
    color: "from-blue-600/20 to-transparent"
  },
  {
    title: "Konsultasi Ramah",
    desc: "Admin kami siap merespon pertanyaanmu dengan ramah dan solutif setiap hari.",
    icon: <Headphones className="w-6 h-6" />,
    color: "from-sky-500/20 to-transparent"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#030712]">
      {/* Dekorasi Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Kenapa Mahasiswa Memilih <span className="text-brand-primary">Kami?</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Kami memahami lelahnya mengerjakan tugas akhir sendirian. Inilah alasan mengapa ratusan mahasiswa mempercayakan solusinya kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-primary/30 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 blur-xl" />
              
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-brand-primary border border-brand-primary/20 group-hover:scale-110 transition-transform duration-500`}>
                  {reason.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}