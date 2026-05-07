import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">

      <Hero />
      {/* Hero Section
      <section className="bg-navy pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
            Tugas Selesai, <br/> <span className="text-blue-500">Tanpa Pusing.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Pakar Olah Data SPSS, Python, dan Excel. Pengerjaan sistematis, profesional, dan rapi.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#harga" className="bg-white text-navy px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">Lihat Pricelist</a>
          </div>
        </div>
      </section> */}

      {/* Placeholder Section Harga */}
      <section id="harga" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Layanan Terpopuler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Excel */}
            <div className="p-8 border rounded-3xl hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-2">Olah Data Excel</h3>
              <p className="text-4xl font-black mb-4 text-navy">Rp30k</p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>✓ Cleaning Data</li>
                <li>✓ Rumus & Pivot</li>
                <li>✓ Visualisasi Grafik</li>
              </ul>
              <a href="https://wa.me/6285183081282" className="block py-3 bg-navy text-white rounded-xl">Order Sekarang</a>
            </div>
            
            {/* Card SPSS */}
            <div className="p-8 border-2 border-blue-500 rounded-3xl shadow-lg relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs">Best Seller</span>
              <h3 className="font-bold text-xl mb-2">Statistik SPSS</h3>
              <p className="text-4xl font-black mb-4 text-navy">Rp75k</p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>✓ Validitas & Reliabilitas</li>
                <li>✓ Uji Asumsi Klasik</li>
                <li>✓ Interpretasi Hasil</li>
              </ul>
              <a href="https://wa.me/6285183081282" className="block py-3 bg-blue-600 text-white rounded-xl">Order Sekarang</a>
            </div>

            {/* Card Word */}
            <div className="p-8 border rounded-3xl hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-2">Formatting Word</h3>
              <p className="text-4xl font-black mb-4 text-navy">Rp30k</p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>✓ Daftar Isi Otomatis</li>
                <li>✓ Daftar Pustaka</li>
                <li>✓ Standar Penulisan</li>
              </ul>
              <a href="https://wa.me/6285183081282" className="block py-3 bg-navy text-white rounded-xl">Order Sekarang</a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}