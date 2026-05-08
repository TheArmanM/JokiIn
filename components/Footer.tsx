"use client";
import Link from "next/link";
import { Phone, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Glow Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="font-black text-xl text-white italic tracking-tighter">jn</span>
              </div>
              <span className="font-black text-xl italic uppercase tracking-tighter">
                Joki<span className="text-brand-primary">In</span>
              </span>
            </div>
            <p className="text-secondary text-xs font-medium leading-relaxed italic uppercase tracking-wider">
              Solusi pengerjaan tugas, olah data statistik, dan penulisan akademik profesional. Standar IT untuk kebutuhan Akademik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-8 italic">Navigasi</h4>
            <ul className="space-y-4 text-secondary text-xs font-bold italic uppercase tracking-widest">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Beranda</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Layanan</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-primary transition-colors">Portofolio</Link></li>
              <li><Link href="/cara-order" className="hover:text-brand-primary transition-colors">Cara Order</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-8 italic">Kontak</h4>
            <ul className="space-y-5 text-secondary text-xs font-bold italic uppercase tracking-widest">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-primary/10 transition-colors">
                  <Phone size={14} className="text-brand-primary" />
                </div>
                <span>+62 851 8308 1282</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-primary/10 transition-colors">
                  <MapPin size={14} className="text-brand-primary" />
                </div>
                <span>Bumiayu, Jawa Tengah</span>
              </li>
            </ul>
          </div>

          {/* Trust Section */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-8 italic">Keamanan</h4>
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-4 rounded-2xl">
              <ShieldCheck size={20} className="text-brand-primary" />
              <p className="text-[10px] text-secondary font-bold uppercase leading-tight italic">
                Data & Privasi Client De-identified 100%
              </p>
            </div>
            <p className="mt-6 text-[9px] text-muted font-bold uppercase tracking-widest leading-relaxed italic">
              Layanan tersedia 24/7 untuk konsultasi darurat tugas kuliah.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-[10px] font-bold uppercase tracking-[0.2em] italic flex items-center gap-1">
            © {currentYear} Joki<span className="text-brand-primary">In</span>. Built with 
            <Heart size={10} className="fill-red-500 text-red-500" /> & Next.js
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest italic">
            <Link href="/terms" className="text-muted hover:text-brand-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="text-muted hover:text-brand-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}