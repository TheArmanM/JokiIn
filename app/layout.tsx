// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Ganti ke Poppins
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Konfigurasi Poppins: Tidak kaku & modern
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Nama variabel CSS
});

export const metadata: Metadata = {
  title: "JokiIn - Solusi Tugas IT",
  description: "Cepat. Akurat. Terpercaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* 
        1. Tambahkan poppins.variable ke body 
        2. Gunakan poppins.className agar seluruh teks otomatis pakai Poppins
      */}
      <body className={`${poppins.variable} ${poppins.className} bg-[#000a12] text-white min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}