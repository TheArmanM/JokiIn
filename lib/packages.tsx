// lib/packages.ts
export const packagesData = {
  "olah-data": {
    name: "Olah Data & Statistik",
    fullDesc: "Analisis statistik profesional menggunakan software standar industri (SPSS, Excel, Python). Cocok untuk Bab 4 Skripsi, Tesis, atau riset perusahaan.",
    basePrice: "75K",
    features: [
      "Uji Validitas & Reliabilitas",
      "Uji Asumsi Klasik (Normalitas, Multikol, dll)",
      "Analisis Regresi Linear/Logistik",
      "Interpretasi Hasil (Siap Copy-Paste ke Bab 4)",
      "Grafik & Tabel Distribusi"
    ],
    addons: [
      { item: "Tambah Variabel (>3)", price: "+10RB/var" },
      { item: "Data Mentah Berantakan", price: "+30RB" },
      { item: "Analisis Path/SEM", price: "Custom" }
    ]
  },
  "penulisan": {
    name: "Penulisan & Dokumen",
    fullDesc: "Layanan penulisan akademik dan profesional. Kami memastikan format dokumen Anda sempurna sesuai pedoman kampus atau instansi.",
    basePrice: "30K",
    features: [
      "Merapikan Margin, Font, & Spasi",
      "Pembuatan Daftar Isi & Pustaka Otomatis",
      "Pembuatan Makalah Full Materi",
      "Resume Materi Video/PDF",
      "Parafrase Anti-Plagiasi"
    ],
    addons: [
      { item: "Cek Turnitin", price: "+15RB" },
      { item: "Referensi Jurnal Scopus", price: "+20RB" },
      { item: "Lebih dari 20 Halaman", price: "+5RB/hlm" }
    ]
  },
  "visual": {
    name: "Visual & Presentasi",
    fullDesc: "Ubah data dan materi membosankan menjadi presentasi yang memukau. Fokus pada estetika dan kemudahan audiens memahami poin Anda.",
    basePrice: "40K",
    features: [
      "PPT Standard (Minimalist & Clean)",
      "PPT Premium (Custom Illustration)",
      "Desain Poster Ilmiah/Infografis",
      "Layouting Modul/E-book",
      "Touch-up Gambar & Aset Visual"
    ],
    addons: [
      { item: "Animasi Transisi Kompleks", price: "+25RB" },
      { item: "Input Materi dari Buku Fisik", price: "+20RB" },
      { item: "Express 3 Jam Selesai", price: "+100%" }
    ]
  }
};