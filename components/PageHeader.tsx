"use client";

export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className="relative bg-main pt-40 pb-20 px-6 overflow-hidden border-b border-white/5">
      {/* Background Decor - Industrial Grid / Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Minimalist Tech Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-brand-primary"></div>
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic">
                System / Directory
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
              {title}
            </h1>

            {/* Subtitle with better spacing */}
            <p className="text-secondary text-xs md:text-sm font-bold max-w-xl italic uppercase tracking-[0.15em] leading-relaxed border-l-2 border-brand-primary pl-6">
              {subtitle}
            </p>
          </div>

          {/* Decorative Corner Element */}
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-[10px] font-black text-muted uppercase italic tracking-[0.3em] mb-1">Status</p>
              <div className="flex items-center gap-2 justify-end">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <p className="text-[10px] font-black text-white uppercase italic tracking-widest">System Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}