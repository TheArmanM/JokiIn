// lib/service-details.ts

export const serviceDetails = {
  "olah-data": {
    title: "Olah Data & Statistik",
    basePrice: "Rp50.000",
    items: [
      { name: "Analisis SPSS & Excel", desc: "Uji hipotesis lengkap" },
      { name: "Uji Asumsi Klasik", desc: "Normalitas, Multikol, dll" },
      { name: "Interpretasi Hasil", desc: "Penjelasan Bab 4" },
    ],
    addons: [
      { name: "101-500 baris data", price: "+Rp50.000" },
      { name: "Data Cleaning (Data Kotor)", price: "+Rp30.000" },
      { name: "Tambah variabel SPSS", price: "+Rp10.000/var" }
    ]
  },
  "penulisan": {
    title: "Penulisan Dokumen",
    basePrice: "Rp30.000",
    items: [
      { name: "Merapikan Format", desc: "Margin, Font, Daftar Isi" },
      { name: "Resume/Ringkasan", desc: "Dari PDF/Video ke Word" },
      { name: "Pembuatan Makalah", desc: "Full materi + Referensi" },
    ],
    addons: [
      { name: "Lebih dari 10 halaman", price: "+Rp5.000/hlm" },
      { name: "Referensi Scopus/Buku", price: "+Rp20.000" },
      { name: "Materi Rumus Rumit", price: "+Rp30.000" }
    ]
  },
  "visual": {
    title: "Visual & Presentasi",
    basePrice: "Rp40.000",
    items: [
      { name: "PPT Standard", desc: "Rapi & Clean (Max 10 Slide)" },
      { name: "PPT Premium", desc: "Desain Custom + Animasi" },
      { name: "Desain Poster", desc: "Poster Ilmiah / Infografis" },
    ],
    addons: [
      { name: "Tambah Slide (>10)", price: "+Rp5.000/slide" },
      { name: "Custom Asset/Ilustrasi", price: "+Rp15.000" },
      { name: "Bahan Mentah Belum Ada", price: "+Rp30.000" }
    ]
  },
  "kilat": {
    title: "Layanan Kilat",
    basePrice: "+50%",
    items: [
      { name: "Same Day Service", desc: "Selesai dalam < 12 Jam" },
      { name: "Overnight/Express", desc: "Selesai dalam < 6 Jam" },
      { name: "Prioritas Utama", desc: "Langsung dikerjakan admin" },
    ],
    addons: [
      { name: "Express < 6 Jam", price: "+100% Harga" },
      { name: "Same Day < 12 Jam", price: "+50% Harga" }
    ]
  }
};