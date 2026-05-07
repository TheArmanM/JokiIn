import PageHeader from "@/components/PageHeader";

const steps = [
  { no: "01", title: "Konsultasi Gratis", desc: "Kirimkan detail tugas atau data Anda melalui WhatsApp. Kami akan menganalisis tingkat kesulitan dan deadline." },
  { no: "02", title: "Kesepakatan & DP", desc: "Setelah harga disepakati, Anda cukup membayar DP (Down Payment) sebesar 50% untuk memulai pengerjaan." },
  { no: "03", title: "Proses Pengerjaan", desc: "Tugas dikerjakan secara profesional sesuai standar. Anda akan mendapatkan update progres secara berkala." },
  { no: "04", title: "Pelunasan & Serah Terima", desc: "Setelah selesai, kami kirimkan bukti hasil. Lakukan pelunasan, dan file utama akan segera dikirimkan." }
];

export default function OrderPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Alur Kerja & Order" 
        subtitle="Prosedur pemesanan jasa yang transparan, aman, dan sistematis." 
      />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition">
                <span className="text-5xl font-black text-blue-500/20 absolute top-4 right-6">{step.no}</span>
                <h3 className="text-xl font-bold text-navy mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Singkat */}
      <section className="py-20 bg-navy text-white px-6 rounded-t-[3rem]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Sering Ditanyakan</h2>
          <div className="space-y-6 text-left">
            <div className="border-b border-white/10 pb-4">
              <h4 className="font-bold text-blue-400 mb-2">Berapa lama pengerjaan olah data SPSS?</h4>
              <p className="text-gray-400 text-sm">Biasanya 1-3 hari tergantung kerumitan uji statistik yang diminta.</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <h4 className="font-bold text-blue-400 mb-2">Apakah ada garansi revisi?</h4>
              <p className="text-gray-400 text-sm">Ya, kami memberikan gratis revisi minor sebanyak 2x selama tidak mengubah data awal yang diberikan.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}