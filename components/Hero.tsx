import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-56 pb-24 px-6 relative overflow-hidden bg-[#020617]">
      {/* Super Strong Radial Glow untuk tema gelap */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-full mb-10 shadow-inner">
          <Zap size={14} className="text-blue-400 fill-blue-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Solusi Tugas Akademik & Profesional</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
          CEPAT. AKURAT. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 shadow-blue-500/50">TERPERCAYA.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto mb-12 leading-relaxed">
          Mulai dari <span className="text-white font-bold">30RB</span>. Olah data statistik, penulisan makalah, hingga desain presentasi premium dikerjakan dengan standar tinggi oleh tim profesional.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="/pricelist" className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase italic text-xs tracking-widest hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-3">
            Lihat Harga <ArrowRight size={16} />
          </a>
          <div className="px-10 py-5 bg-[#0b1120] border border-white/5 text-slate-300 rounded-2xl font-black uppercase italic text-xs tracking-widest flex items-center justify-center gap-3">
            <ShieldCheck size={16} className="text-blue-400" /> 100% Privasi Aman
          </div>
        </div>
      </div>
    </section>
  );
}