"use client";
import Link from "next/link";
import { Code2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000a12] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl text-white ">jn</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Joki<span className="text-blue-500">In</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi pengerjaan tugas, olah data statistik, dan penulisan akademik profesional. Cepat, akurat, dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">Navigasi</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-blue-500 transition">Beranda</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition">Layanan</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-500 transition">Portofolio</Link></li>
              <li><Link href="/cara-order" className="hover:text-blue-500 transition">Cara Order</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-white">Kontak</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>+62 851 8308 1282</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                <span>Bumiayu, Jawa Tengah</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-6 text-white">Ikuti Kami</h4>
            <div className="flex gap-4">
              
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Tersedia 24/7 untuk konsultasi darurat tugas kuliah.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} JokiIn. Dikerjakan dengan Next.js & ❤️
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/terms" className="hover:text-white transition">Syarat & Ketentuan</Link>
            <Link href="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}