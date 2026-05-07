// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JokiIn - Solusi Tugas Kuliah & Olah Data",
  description: "Jasa olah data SPSS, Python, Excel dan penulisan tugas IT profesional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#000a12] text-white`}>
        <Navbar />
        {/* Main di sini akan otomatis mengikuti dorongan Navbar jika kita setting di component */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}