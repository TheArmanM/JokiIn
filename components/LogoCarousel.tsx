// "use client";

// import { motion } from "framer-motion";

// const UNIVERSITY_LOGOS = [
//   { name: "UNSOED", src: "https://unsoed.ac.id/wp-content/uploads/2024/07/Logo-UNSOED.png" },
//   { name: "ITB", src: "https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" },
//   { name: "UNWIKU", src: "https://upload.wikimedia.org/wikipedia/id/9/99/LOGO-UNWIKU-WARNA-BARU.png" },
//   { name: "UMP", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeuQ4a9VDpSQwC5cqVERD3Titj1f1AIE4G8JS3a-Msy1VwsYCxPbIRaUhTZuzusaXXPRHCTeRC24q7_DCaok5Ow7Q_fSyQE2uVvzHpVHC3iYbsgJ4mP6y6ZkQzliCMhEiO0ZjmLsQLltg/s2048/Logo+Universitas+Muhammadiyah+Purwokerto+%2528UMP%2529+%2528Cover%2529.png" },
//   { name: "UNDIP", src: "https://upload.wikimedia.org/wikipedia/id/9/9b/UNDIPOfficial.png" },
//   { name: "UNS", src: "https://pasca.uns.ac.id/wp-content/uploads/2016/06/cropped-logo-universitas-sebelas-maret-surakarta.png" },
//   { name: "UNNES", src: "https://unnes.ac.id/lppm/wp-content/uploads/sites/16/2015/08/Logo-Transparan-Warna-1.png" },
// ];

// const Row = ({ direction, speed }: { direction: "left" | "right", speed: number }) => {
//   const isRight = direction === "right";
  
//   return (
//     <div className="flex w-full overflow-hidden mb-6 select-none">
//       <motion.div
//         className="flex flex-nowrap gap-8"
//         animate={{
//           x: isRight ? ["-50%", "0%"] : ["0%", "-50%"],
//         }}
//         transition={{
//           duration: speed,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{ width: "fit-content" }}
//       >
//         {/* Render 2x untuk loop mulus */}
//         {[...UNIVERSITY_LOGOS, ...UNIVERSITY_LOGOS].map((logo, idx) => (
//           <div
//             key={idx}
//             className="w-32 h-20 md:w-44 md:h-24 glass-card rounded-2xl flex items-center justify-center p-6 border border-white/5 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:border-brand-primary/50 transition-all duration-500 group"
//           >
//             <img 
//               src={logo.src} 
//               alt={logo.name} 
//               className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default function LogoCarousel() {
//   return (
//     <section className="py-24 bg-main relative overflow-hidden border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">
//           Dipercaya Mahasiswa <span className="text-brand-primary">Kampus Besar</span>
//         </h2>
//         <p className="text-slate-500 text-[10px] font-bold mt-4 uppercase tracking-[0.4em]">
//           Solusi Tugas Akademik Standar Nasional
//         </p>
//       </div>

//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-main to-transparent z-10" />
//         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-main to-transparent z-10" />

//         <div className="flex flex-col">
//           <Row direction="right" speed={20} />
//           <Row direction="left" speed={25} />
//           <Row direction="right" speed={22} />
//           <Row direction="left" speed={28} />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const ANONYMOUS_TESTIMONIALS = [
  { univ: "PTN Jawa Tengah", text: "Olah data statistik jadi jauh lebih mudah dimengerti. Penjelasan rumusnya detail banget!", rating: 5 },
  { univ: "Lulusan Teknik UMP", text: "Hasil coding rapi dan sesuai standar kampus. Sangat membantu saat persiapan wisuda.", rating: 5 },
  { univ: "Mahasiswa Informatika", text: "Bug bounty hunter yang paham web dev. Dashboard datanya sangat profesional.", rating: 5 },
  { univ: "PTN Terkemuka Bandung", text: "Analisis kuesioner valid dan reliabel. Revisi ditanggapi dengan cepat dan tuntas.", rating: 5 },
  { univ: "Jurusan Ekonomi Bisnis", text: "Tampilan visualisasinya premium. Cocok buat presentasi tugas akhir yang meyakinkan.", rating: 5 },
  { univ: "Mahasiswa Semester Akhir", text: "Solusi cerdas buat yang stuck di olah data. Terima kasih atas bimbingannya!", rating: 4.8 },
];

const Row = ({ direction, speed, items }: { direction: "left" | "right", speed: number, items: typeof ANONYMOUS_TESTIMONIALS }) => {
  const isRight = direction === "right";
  
  return (
    <div className="flex w-full overflow-hidden mb-8 select-none">
      <motion.div
        className="flex flex-nowrap gap-6"
        animate={{
          x: isRight ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "fit-content" }}
      >
        {/* Render 2x untuk loop mulus */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="w-[280px] md:w-[350px] bg-white/5 backdrop-blur-sm rounded-[2rem] p-6 border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <Quote className="text-brand-primary/20 group-hover:text-brand-primary/50 transition-colors" size={32} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className={`${i < Math.floor(item.rating) ? 'text-brand-primary fill-brand-primary' : 'text-slate-600'}`} />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">
                Verified Client
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                {item.univ}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TestimonialCarousel() {
  return (
    <section className="py-24 bg-main relative overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-brand-primary/10 rounded-full border border-brand-primary/20 mb-6">
          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">Success Stories</p>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          Apa Kata Mereka Tentang <span className="text-brand-primary">JokiIn</span>
        </h2>
        <p className="text-slate-500 text-xs mt-4 max-w-xl mx-auto leading-relaxed">
          Telah dipercaya oleh banyak mahasiswa untuk menyelesaikan berbagai tantangan akademik dengan standar kualitas profesional.
        </p>
      </div>

      <div className="relative">
        {/* Masking Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col">
          <Row direction="right" speed={35} items={ANONYMOUS_TESTIMONIALS} />
          <Row direction="left" speed={40} items={ANONYMOUS_TESTIMONIALS.slice().reverse()} />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em]">
          Keamanan & Kerahasiaan Data Klien Adalah Prioritas Utama Kami
        </p>
      </div>
    </section>
  );
}