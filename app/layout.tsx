// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer

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
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* Footer diletakkan di sini */}
      </body>
    </html>
  );
}