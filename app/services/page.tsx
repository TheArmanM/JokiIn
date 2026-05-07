// app/services/page.tsx
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BarChart3, PenTool, Layout, Database, ShieldCheck, Cpu } from "lucide-react";

const allServices = [
  {
    title: "Olah Data & Statistik",
    desc: "Analisis data menggunakan SPSS, Excel, atau Python (Pandas/NumPy). Meliputi uji validitas, reliabilitas, regresi, hingga visualisasi data.",
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    features: ["SPSS Full Output", "Interpretasi Data", "Cleaning Big Data"]
  },
  {
    title: "Penulisan Akademik",
    desc: "Pembuatan makalah, laporan praktikum, dan resume materi dengan standar penulisan ilmiah yang rapi.",
    icon: <PenTool className="w-8 h-8 text-blue-500" />,
    features: ["Daftar Isi Otomatis", "APA/IEEE Style", "Referensi Jurnal"]
  },
  {
    title: "Web & Apps Development",
    desc: "Jasa pembuatan website portofolio, landing page, atau perbaikan error menggunakan Next.js, WordPress, atau Tailwind CSS.",
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    features: ["Responsive Design", "Modern UI"]
  },
  {
    title: "Database & SQL",
    desc: "Perancangan database, pembuatan query SQL kompleks, hingga normalisasi database untuk tugas mata kuliah.",
    icon: <Database className="w-8 h-8 text-blue-500" />,
    features: ["ERD Design", "Query Optimization", "MySQL/PostgreSQL"]
  },
  {
    title: "Cybersecurity Basics",
    desc: "Bantuan tugas terkait keamanan informasi, analisis celah keamanan sederhana, hingga konfigurasi sistem Linux.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    features: ["Linux Configuration", "Security Analysis"]
  },
  {
    title: "Editing & Visual",
    desc: "Pembuatan PPT premium yang dinamis, poster ilmiah untuk tugas, hingga desain infografis yang menarik.",
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    features: ["Custom PPT", "Infografis Data"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-navy text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Layanan Profesional Kami</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai solusi akademik dan teknis dengan standar kualitas industri IT.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className="p-8 border border-gray-100 rounded-3xl bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="border-t pt-6">
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto bg-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Butuh Layanan Custom?</h2>
            <p className="mb-8 text-white/70">Punya tugas khusus yang tidak ada di daftar? Jangan ragu untuk konsultasikan kebutuhan Anda.</p>
            <a 
              href="https://wa.me/6285183081282" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition inline-block"
            >
              Chat Sekarang
            </a>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}