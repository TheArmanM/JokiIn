// portofolio/page.tsx
import Link from "next/link"; // Wajib diimport
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

const projects = [
  {
    title: "Demo pengolahan data dan visualisasi data",
    slug: "analisis-data",
    category: "Data Science",
    desc: "Visualisasi data otomatis menggunakan algoritma statistik. Coba demonya langsung!",
  },
  {
    title: "Analisis Regresi Linear Berganda",
    slug: "regresi-spss", // Tambahkan slug agar konsisten
    category: "SPSS",
    desc: "Olah data skripsi mahasiswa manajemen dengan 5 variabel independen.",
    image: "/portfolio-spss.jpg",
  },
  {
    title: "Data Cleaning & Visualization",
    slug: "python-cleaning", // Tambahkan slug
    category: "Python",
    desc: "Membersihkan 5000+ baris data penjualan menggunakan Pandas.",
    image: "/portfolio-python.jpg",
  },
  {
    title: "Makalah Komunikasi Bisnis",
    slug: "writing-apa", // Tambahkan slug
    category: "Writing",
    desc: "Pembuatan makalah 20 halaman dengan format APA Style & Daftar Pustaka otomatis.",
    image: "/portfolio-word.jpg",
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Portofolio Kami" 
        subtitle="Lihat hasil kerja nyata kami dalam menangani berbagai tugas IT dan olah data." 
      />
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              // Bungkus kartu dengan Link
              <Link href={`/portfolio/${item.slug}`} key={index}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-500 transition-all duration-300 h-full cursor-pointer">
                  <div className="h-48 bg-navy-light flex items-center justify-center text-white/20 relative overflow-hidden">
                    <span className="text-xs uppercase tracking-widest z-10">{item.category} Preview</span>
                    {/* Overlay efek saat hover */}
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                      {item.slug === "analisis-data" && (
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE DEMO</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    
                    <div className="flex items-center text-blue-600 text-sm font-bold">
                      Lihat Detail 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}