/* ====== PENGATURAN: ganti nomor WhatsApp (awali 62, tanpa 0) ====== */
const WA = "6282359582425";
const IG = "https://instagram.com/digikreatif",
    TT = "https://tiktok.com/@digikreatif",
    EMAIL = "halo@digikreatif.id";

const KAT = {
    canva: {
        nama: "Template Canva",
        file: "canva.html",
        w: "",
        fmt: "Canva (tautan template)",
        desk: "Poster promosi, konten media sosial, katalog produk, dan daftar harga yang tinggal kamu edit di Canva.",
        sub: ["Poster", "Media Sosial", "Katalog", "Daftar Harga"],
        isi: [
            "Tautan template Canva (bisa diedit gratis)",
            "Font dan warna mudah diganti",
            "Ukuran siap pakai untuk Instagram dan WhatsApp"
        ],
        edit: "Buka tautan, klik Gunakan template, lalu ganti teks, foto, dan logo."
    },
    website: {
        nama: "Template Website",
        file: "website.html",
        w: "w",
        fmt: "File HTML siap upload",
        desk: "Desain website profil usaha dan katalog produk yang rapi di HP maupun laptop.",
        sub: ["Profil Usaha", "Katalog Produk"],
        isi: [
            "File website lengkap (HTML dan CSS)",
            "Tombol pesan WhatsApp sudah terpasang",
            "Panduan upload ke hosting gratis"
        ],
        edit: "Ganti teks, foto, dan nomor WhatsApp pada file, lalu upload sesuai panduan."
    },
    administrasi: {
        nama: "Template Administrasi",
        file: "administrasi.html",
        w: "a",
        fmt: "Excel / Google Sheets",
        desk: "Pembukuan sederhana dan pencatatan stok memakai Excel atau Google Sheets.",
        sub: ["Pembukuan", "Stok"],
        isi: [
            "File Excel atau Google Sheets dengan rumus otomatis",
            "Contoh pengisian data",
            "Ringkasan laporan bulanan"
        ],
        edit: "Isi kolom berwarna putih, kolom hasil dihitung otomatis."
    }
};

const P = [
{
    id: "poster-1",
    kat: "canva",
    sub: "Poster",
    nama: "Poster Promo Diskon",
    harga: 25000,
    tag: "Terlaris",
    desk: "Poster diskon yang menarik perhatian, siap dipakai untuk story maupun cetak.",
    cocok: "Toko online, warung, dan usaha kuliner.",
    img: "poster1.png",
    c: ["#fff0e6", "#ff8a5b", "#d6336c"],
    t: ["Promo Spesial", "50%", "Diskon semua produk", "Belanja Sekarang"]
},
{
    id: "poster-2",
    kat: "canva",
    sub: "Poster",
    nama: "Poster Penawaran Spesial",
    harga: 25000,
    tag: "Terbaru",
    desk: "Poster penawaran terbatas dengan tampilan bersih dan tombol ajakan memesan.",
    cocok: "Toko, bisnis jasa, dan kegiatan promosi.",
    img: "poster2.png",
    c: ["#e6f4ff", "#3498db", "#154360"],
    t: ["Promo Menarik", "30%", "Penawaran spesial", "Pesan Sekarang"]
},
{
    id: "poster-3",
    kat: "canva",
    sub: "Poster",
    nama: "Poster Grand Opening",
    harga: 25000,
    tag: "Pilihan",
    desk: "Poster pembukaan usaha dengan ruang untuk alamat dan jam buka.",
    cocok: "Toko, kafe, dan bisnis yang baru dibuka.",
    img: "poster3.png",
    c: ["#fce4ec", "#ec407a", "#880e4f"],
    t: ["Grand Opening", "OPEN", "Kami Hadir Untuk Anda", "Kunjungi Kami"]
},
{
    id: "poster-4",
    kat: "canva",
    sub: "Poster",
    nama: "Poster Produk Unggulan",
    harga: 25000,
    tag: "Rekomendasi",
    desk: "Poster untuk menonjolkan produk andalan dengan tampilan sederhana dan profesional.",
    cocok: "Promosi produk dan layanan unggulan.",
    img: "poster4.png",
    c: ["#e8f5e9", "#43a047", "#1b5e20"],
    t: ["Produk Unggulan", "BEST", "Kualitas Terbaik", "Lihat Produk"]
},
{
    id: "media-sosial-1",
    kat: "canva",
    sub: "Media Sosial",
    nama: "Feed Postingan Konten Baru",
    harga: 25000,
    tag: "Terlaris",
    desk: "Desain feed untuk mengumumkan konten atau postingan terbaru.",
    cocok: "Instagram, Facebook, dan media sosial lainnya.",
    img: "media-sosial1.png",
    c: ["#f3e5f5", "#ab47bc", "#6a1b9a"],
    t: ["Hello Everyone", "NEW POST", "Konten Media Sosial", "Follow Us"]
},
{
    id: "media-sosial-2",
    kat: "canva",
    sub: "Media Sosial",
    nama: "Feed Promo Sale",
    harga: 25000,
    tag: "Terbaru",
    desk: "Desain feed untuk promo sale dan penawaran terbatas.",
    cocok: "Pemilik bisnis online dan toko digital.",
    img: "media-sosial2.png",
    c: ["#e0f7fa", "#26c6da", "#006064"],
    t: ["Special Offer", "SALE", "Penawaran Terbatas", "Shop Now"]
},
{
    id: "media-sosial-3",
    kat: "canva",
    sub: "Media Sosial",
    nama: "Feed Quotes Inspirasi",
    harga: 25000,
    tag: "Pilihan",
    desk: "Desain postingan kutipan dan inspirasi harian dengan tampilan modern.",
    cocok: "Kreator konten dan bisnis digital.",
    img: "media-sosial3.png",
    c: ["#fff3e0", "#ffa726", "#e65100"],
    t: ["Daily Inspiration", "IDEA", "Inspirasi Hari Ini", "Read More"]
},
{
    id: "media-sosial-4",
    kat: "canva",
    sub: "Media Sosial",
    nama: "Feed Koleksi Terbaru",
    harga: 25000,
    tag: "Rekomendasi",
    desk: "Desain feed untuk memperkenalkan koleksi atau produk baru dan mempercantik akun.",
    cocok: "Instagram bisnis dan toko online.",
    img: "media-sosial4.png",
    c: ["#e8eaf6", "#5c6bc0", "#283593"],
    t: ["New Collection", "2026", "Koleksi Terbaru", "Explore"]
},
{
    id: "katalog-1",
    kat: "canva",
    sub: "Katalog",
    nama: "Katalog Koleksi Fashion",
    harga: 55000,
    tag: "Terlaris",
    desk: "Katalog produk yang rapi dan mudah dibaca, cocok untuk koleksi pakaian dan tas.",
    cocok: "Toko online, reseller, dan butik.",
    img: "katalog1.png",
    c: ["#e9f1ff", "#6c9bf5", "#1b3f94"],
    t: ["KATALOG", "Koleksi 2026", "Kemeja|Rp89.000", "Tas|Rp129.000"]
},
{
    id: "katalog-2",
    kat: "canva",
    sub: "Katalog",
    nama: "Katalog Menu Makanan dan Minuman",
    harga: 55000,
    tag: "Terbaru",
    desk: "Katalog menu dengan tampilan modern dan profesional, lengkap dengan harga.",
    cocok: "Kafe, katering, dan bisnis kuliner.",
    img: "katalog2.png",
    c: ["#e8f7ef", "#59d08f", "#14603a"],
    t: ["KATALOG", "Menu Spesial", "Kopi|Rp18.000", "Roti|Rp15.000"]
},
{
    id: "katalog-3",
    kat: "canva",
    sub: "Katalog",
    nama: "Katalog Produk Pilihan",
    harga: 55000,
    tag: "Pilihan",
    desk: "Katalog yang menonjolkan foto dan harga produk.",
    cocok: "Fashion, aksesori, dan produk kecantikan.",
    img: "katalog3.png",
    c: ["#fdeef3", "#f783ac", "#a61e4d"],
    t: ["KATALOG", "Produk Pilihan", "Dress|Rp199.000", "Rok|Rp99.000"]
},
{
    id: "katalog-4",
    kat: "canva",
    sub: "Katalog",
    nama: "Katalog Paket Penawaran",
    harga: 55000,
    tag: "Rekomendasi",
    desk: "Katalog paket harga yang sederhana dan siap dikirim ke pelanggan.",
    cocok: "Perusahaan, toko, dan penyedia jasa.",
    img: "katalog4.png",
    c: ["#fff3e0", "#ffb866", "#b84700"],
    t: ["KATALOG", "Penawaran Terbaik", "Paket A|Rp250.000", "Paket B|Rp450.000"]
},
{
    id: "daftar-harga-1",
    kat: "canva",
    sub: "Daftar Harga",
    nama: "Daftar Harga Top Up Saldo",
    harga: 20000,
    tag: "Terlaris",
    desk: "Daftar harga top up saldo e-wallet dengan pilihan nominal yang jelas dan mudah dibaca.",
    cocok: "Konter pulsa, toko online, dan penyedia layanan top up.",
    img: "daftar_harga1.png",
    c: ["#fdeef3", "#f783ac", "#a61e4d"],
    t: ["Top Up Saldo", "Saldo 50rb|Rp52.000", "Saldo 100rb|Rp102.000", "Saldo 200rb|Rp203.000", "Saldo 500rb|Rp505.000"]
},
{
    id: "daftar-harga-2",
    kat: "canva",
    sub: "Daftar Harga",
    nama: "Daftar Harga Agen BRILink",
    harga: 20000,
    tag: "Terbaru",
    desk: "Daftar tarif layanan agen BRILink, seperti transfer, tarik tunai, dan setor tunai.",
    cocok: "Agen BRILink, agen layanan keuangan, dan konter pembayaran.",
    img: "daftar_harga2.png",
    c: ["#e6f4ff", "#4fb0ff", "#0b4a8f"],
    t: ["Agen BRILink", "Transfer|Rp5.000", "Tarik Tunai|Rp5.000", "Setor Tunai|Rp5.000", "Bayar Listrik|Rp3.000"]
},
{
    id: "daftar-harga-3",
    kat: "canva",
    sub: "Daftar Harga",
    nama: "Daftar Harga Layanan Followers Shopee",
    harga: 20000,
    tag: "Pilihan",
    desk: "Daftar harga paket layanan followers toko Shopee dengan pilihan jumlah yang mudah dibandingkan.",
    cocok: "Penyedia jasa media sosial dan layanan promosi toko online.",
    img: "daftar_harga3.png",
    c: ["#e8f7ef", "#59d08f", "#14603a"],
    t: ["Paket Followers", "100 Followers|Rp10.000", "500 Followers|Rp40.000", "1.000 Followers|Rp75.000", "5.000 Followers|Rp350.000"]
},
{
    id: "daftar-harga-4",
    kat: "canva",
    sub: "Daftar Harga",
    nama: "Daftar Harga Jajanan",
    harga: 20000,
    tag: "Rekomendasi",
    desk: "Daftar harga jajanan yang ramai dan mudah dibaca, siap dipasang di gerobak atau dikirim ke pelanggan.",
    cocok: "Penjual jajanan, kedai kecil, dan usaha kuliner.",
    img: "daftar_harga4.png",
    c: ["#fff3e0", "#ffb866", "#b84700"],
    t: ["Daftar Harga Jajanan", "Cilok|Rp5.000", "Es Teh|Rp3.000", "Pentol|Rp10.000", "Risol|Rp4.000"]
},
   {
    id: "web-1",
    kat: "website",
    sub: "Profil Usaha",
    nama: "Web Profil Kafe",
    harga: 99000,
    tag: "Pilihan",
    desk: "Website profil dengan menu, jam buka, lokasi, dan galeri.",
    cocok: "Kafe, kedai, dan rumah makan.",
    img: "web1.png",
    c: ["#f6ece3", "#d9a066", "#6b3e26"],
    t: ["Kopi Senja", "Tempat santai", "untuk ngopi", "Buka setiap hari 08.00 - 22.00", "Lihat Menu"]
},
{
    id: "web-2",
    kat: "website",
    sub: "Profil Usaha",
    nama: "Web Profil Usaha Jasa",
    harga: 89000,
    tag: "Terbaru",
    desk: "Website untuk usaha jasa lengkap dengan layanan dan testimoni.",
    cocok: "Salon, bengkel, laundry, dan les.",
    img: "web2.png",
    c: ["#e6f4ff", "#4fb0ff", "#0b4a8f"],
    t: ["Salon Ayu", "Cantik tanpa antre", "booking lewat WA", "Perawatan rambut dan wajah", "Booking"]
},
{
    id: "web-3",
    kat: "website",
    sub: "Katalog Produk",
    nama: "Web Katalog Produk",
    harga: 129000,
    tag: "Terlaris",
    desk: "Katalog dengan kartu produk dan tombol pesan WhatsApp di tiap produk.",
    cocok: "Toko online dan reseller.",
    img: "web3.png",
    c: ["#ebfaf0", "#4cd68f", "#0f6b3f"],
    t: ["TokoKu", "Produk Pilihan", "Tas|Rp89rb", "Dompet|Rp59rb", "Topi|Rp39rb"]
},
{
    id: "web-4",
    kat: "website",
    sub: "Katalog Produk",
    nama: "Web Katalog Fashion",
    harga: 119000,
    tag: "Rekomendasi",
    desk: "Tampilan katalog bergaya modern untuk pakaian dan aksesori.",
    cocok: "Butik dan toko pakaian.",
    img: "web4.png",
    c: ["#fbe9f4", "#e873bd", "#6b1f5a"],
    t: ["Mode.id", "Koleksi Terbaru", "Kemeja|Rp129rb", "Dress|Rp199rb", "Rok|Rp99rb"]
},
{
    id: "web-5",
    kat: "website",
    sub: "Profil Usaha",
    nama: "Web Profil Laundry",
    harga: 89000,
    tag: "Terbaru",
    desk: "Website profil laundry dengan daftar layanan, harga, dan tombol pesan jemput.",
    cocok: "Laundry, cuci sepatu, dan jasa kebersihan.",
    img: "web5.png",
    c: ["#e6fbf7", "#38d9c0", "#0b6e63"],
    t: ["CleanFresh", "Cucian bersih", "wangi tanpa ribet", "Antar jemput gratis area kota", "Pesan Jemput"]
},
{
    id: "web-6",
    kat: "website",
    sub: "Profil Usaha",
    nama: "Web Profil Kursus",
    harga: 89000,
    tag: "Pilihan",
    desk: "Website profil lembaga kursus lengkap dengan program, jadwal, dan pendaftaran.",
    cocok: "Kursus, bimbel, dan pelatihan.",
    img: "web6.png",
    c: ["#eef0ff", "#7c8cf8", "#2b3a9f"],
    t: ["Cerdas Course", "Belajar seru", "hasil nyata", "Kelas offline dan online", "Daftar Kelas"]
},
{
    id: "web-7",
    kat: "website",
    sub: "Katalog Produk",
    nama: "Web Katalog Skincare",
    harga: 119000,
    tag: "Baru",
    desk: "Katalog produk kecantikan dengan kartu produk, harga, dan tombol pesan.",
    cocok: "Toko skincare dan kosmetik.",
    img: "web7.png",
    c: ["#f8f0fc", "#cc5de8", "#862e9c"],
    t: ["GlowSkin", "Perawatan Pilihan", "Serum|Rp89rb", "Toner|Rp59rb", "Cream|Rp75rb"]
},
{
    id: "web-8",
    kat: "website",
    sub: "Katalog Produk",
    nama: "Web Katalog Oleh-Oleh",
    harga: 109000,
    tag: "Rekomendasi",
    desk: "Katalog makanan khas dengan foto, harga, dan pemesanan lewat WhatsApp.",
    cocok: "Toko oleh-oleh dan makanan ringan.",
    img: "web8.png",
    c: ["#fff4e6", "#ffa94d", "#c2410c"],
    t: ["Oleh2Kita", "Khas Daerah", "Keripik|Rp25rb", "Dodol|Rp35rb", "Kopi|Rp45rb"]
},
    {
    id: "adm-1",
    kat: "administrasi",
    sub: "Pembukuan",
    nama: "Pembukuan Harian Sederhana",
    harga: 35000,
    tag: "Terlaris",
    desk: "Catat pemasukan dan pengeluaran harian, saldo terhitung otomatis.",
    cocok: "Usaha rumahan dan warung.",
    img: "buku1.png",
    c: ["#e8f7ef", "#59d08f", "#14603a"],
    t: ["Pembukuan Harian", "Tanggal|Keterangan|Jumlah", "01 Okt|Penjualan|Rp250.000", "02 Okt|Beli bahan|-Rp80.000", "03 Okt|Penjualan|Rp310.000", "04 Okt|Ongkir|-Rp15.000", "Saldo||Rp465.000"]
},
{
    id: "adm-2",
    kat: "administrasi",
    sub: "Pembukuan",
    nama: "Laporan Untung Rugi Bulanan",
    harga: 40000,
    tag: "Terbaru",
    desk: "Laporan laba rugi bulanan lengkap dengan grafik.",
    cocok: "UMKM yang ingin tahu keuntungan bersih.",
    img: "buku2.png",
    c: ["#fff3e0", "#ffb866", "#b84700"],
    t: ["Laba Rugi Oktober", "Keterangan|Bulan lalu|Bulan ini", "Pendapatan|Rp5,2jt|Rp6,1jt", "Biaya|Rp2,4jt|Rp2,6jt", "Laba kotor|Rp2,8jt|Rp3,5jt", "Pajak|Rp26rb|Rp35rb", "Laba bersih|Rp2,7jt|Rp3,4jt"]
},
{
    id: "adm-3",
    kat: "administrasi",
    sub: "Pembukuan",
    nama: "Pencatat Utang Piutang",
    harga: 35000,
    tag: "Pilihan",
    desk: "Catat utang dan piutang beserta jatuh tempo dan status pelunasannya.",
    cocok: "Toko, usaha dagang, dan perusahaan.",
    img: "buku3.png",
    c: ["#fdecec", "#ff8787", "#c92a2a"],
    t: ["Utang Piutang", "Nama|Jatuh tempo|Jumlah", "Budi|10 Okt|Rp500.000", "Sari|15 Okt|Rp1.200.000", "Andi|20 Okt|Rp350.000", "Dewi|25 Okt|Rp800.000", "Total||Rp2.850.000"]
},
{
    id: "adm-4",
    kat: "administrasi",
    sub: "Pembukuan",
    nama: "Arus Kas Tahunan",
    harga: 45000,
    tag: "Rekomendasi",
    desk: "Rekap kas masuk dan keluar tiap bulan lengkap dengan grafik tahunan.",
    cocok: "Bisnis yang ingin memantau keuangan sepanjang tahun.",
    img: "buku4.png",
    c: ["#e6fcf5", "#20c997", "#087f5b"],
    t: ["Arus Kas 2026", "Bulan|Masuk|Keluar", "Januari|Rp12jt|Rp8jt", "Februari|Rp15jt|Rp9jt", "Maret|Rp14jt|Rp10jt", "April|Rp18jt|Rp11jt", "Saldo||Rp21jt"]
},
{
    id: "adm-5",
    kat: "administrasi",
    sub: "Stok",
    nama: "Pencatat Stok Barang",
    harga: 35000,
    tag: "Pilihan",
    desk: "Catat barang masuk dan keluar, ada peringatan saat stok menipis.",
    cocok: "Toko online dan toko kelontong.",
    img: "buku5.png",
    c: ["#e8f0ff", "#6c92f5", "#1c3d99"],
    t: ["Stok Barang", "Barang|Masuk|Stok", "Gelas|50|42", "Sedotan|100|85", "Cup|80|12", "Tutup|60|55", "Total|290|194"]
},
{
    id: "adm-6",
    kat: "administrasi",
    sub: "Stok",
    nama: "Stok dan Penjualan Otomatis",
    harga: 55000,
    tag: "Baru",
    desk: "Stok berkurang otomatis setiap kali kamu mencatat penjualan.",
    cocok: "Usaha dengan banyak varian produk.",
    img: "buku6.png",
    c: ["#f0eaff", "#a58bf7", "#3d2399"],
    t: ["Stok &amp; Penjualan", "Barang|Terjual|Sisa", "Kaos M|8|22", "Kaos L|5|15", "Hoodie|3|9", "Topi|6|24", "Total|22|70"]
},
{
    id: "adm-7",
    kat: "administrasi",
    sub: "Stok",
    nama: "Stok Bahan Baku",
    harga: 45000,
    tag: "Terbaru",
    desk: "Pantau pemakaian dan sisa bahan baku, ada penanda saat stok di bawah batas minimal.",
    cocok: "Kafe, katering, dan usaha produksi makanan.",
    img: "buku7.png",
    c: ["#fff9db", "#fcc419", "#b45309"],
    t: ["Stok Bahan Baku", "Bahan|Dipakai|Sisa", "Kopi (kg)|12|8", "Gula (kg)|20|15", "Susu (L)|30|10", "Cup (pcs)|200|150", "Perlu restok||Susu"]
},
{
    id: "adm-8",
    kat: "administrasi",
    sub: "Stok",
    nama: "Harga Pokok dan Harga Jual",
    harga: 50000,
    tag: "Rekomendasi",
    desk: "Hitung modal, harga jual, dan margin keuntungan setiap produk.",
    cocok: "Pedagang, produsen, dan perusahaan.",
    img: "buku8.png",
    c: ["#e7f5ff", "#4dabf7", "#1864ab"],
    t: ["HPP dan Harga Jual", "Produk|Modal|Jual", "Kaos|Rp35rb|Rp65rb", "Hoodie|Rp80rb|Rp150rb", "Topi|Rp15rb|Rp35rb", "Tas|Rp45rb|Rp95rb", "Rata-rata margin||51%"]
}
];

/* ====== PAKET HEMAT: harga normal dan hemat dihitung otomatis dari isi paket ====== */
const PAKET = [
    { id: "paket-1", nama: "Paket Starter", harga: 59000, isi: ["poster-1", "media-sosial-1", "daftar-harga-1"] },
    { id: "paket-2", nama: "Paket Bisnis", harga: 99000, isi: ["katalog-1", "adm-1", "adm-5"] }
];

const rp = n => "Rp" + n.toLocaleString("id-ID");
const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const kode = p => "DK-" + p.id.toUpperCase();

PAKET.forEach(k => {
    const it = k.isi.map(id => P.find(x => x.id === id)).filter(Boolean);
    k.normal = it.reduce((s, x) => s + x.harga, 0);
    k.desk = `Berisi ${it.map(x => x.nama).join(", ")}.` + (k.normal > k.harga ? ` Hemat ${rp(k.normal - k.harga)}.` : "");
});

/* pesan WhatsApp: daftar pesanan + kode produk + total */
const pesanan = list => wa(
    `Halo DigiKreatif, saya ingin memesan:\n` +
    list.map((p, i) => `${i + 1}. ${p.nama} [${kode(p)}] - ${rp(p.harga)}`).join("\n") +
    `\n\nTotal: ${rp(list.reduce((s, p) => s + p.harga, 0))}\n\nMohon info cara pembayarannya. Terima kasih!`
);
const pesan = p => pesanan([p]);

/* ====== PREVIEW DESAIN (SVG): 3 warna + teks contoh. Ganti dengan gambar asli lewat img:"nama.jpg" ====== */
const INK = "#1d1f4d",
    MUTE = "#5b5e86";

const tx = (x, y, s, w, f, t, a) =>
    `<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" fill="${f}"${a ? ` text-anchor="${a}"` : ""}>${t}</text>`;

const frame = (c, brand) =>
    `<circle cx="372" cy="26" r="56" fill="${c[1]}"/><circle cx="20" cy="290" r="50" fill="${c[2]}"/><rect x="28" y="24" width="344" height="252" rx="16" fill="#fff"/><path d="M28 40a16 16 0 0 1 16-16H356a16 16 0 0 1 16 16V54H28Z" fill="${c[0]}"/><circle cx="46" cy="39" r="4" fill="${c[1]}"/><circle cx="60" cy="39" r="4" fill="${c[2]}"/><circle cx="74" cy="39" r="4" fill="${INK}" opacity=".3"/>` +
    tx(46, 80, 15, 800, c[2], brand) +
    tx(354, 80, 11, 600, INK, "Menu &nbsp; Tentang &nbsp; Kontak", "end");

const D = {
    "Poster": (c, t) => {
        const s = Math.min(84, Math.floor(300 / (t[1].length * .58))),
            y = 70 + s,
            u = y + 32;

        return `<path d="M400 0H250C270 50 340 90 400 100Z" fill="${c[1]}"/><path d="M0 300V262C50 270 90 290 120 300Z" fill="${c[2]}"/><circle cx="352" cy="256" r="28" fill="${c[1]}"/>` +
            tx(32, 62, 17, 700, c[2], t[0]) +
            tx(32, y, s, 800, INK, t[1]) +
            tx(32, u, 20, 600, INK, t[2]) +
            `<rect x="32" y="${u + 22}" width="150" height="38" rx="19" fill="${c[2]}"/>` +
            tx(107, u + 46, 15, 700, "#fff", t[3], "middle");
    },

    "Media Sosial": (c, t) => {
        const f = [[c[1], INK], [c[2], "#fff"], ["#fff", INK]];

        return tx(24, 34, 15, 700, c[2], t[0]) +
            [1, 2, 3].map((n, i) => {
                const x = 24 + i * 120,
                    [w, s] = t[n].split("|");

                return `<rect x="${x}" y="52" width="112" height="212" rx="18" fill="${f[i][0]}"/><path d="M${x} 200Q${x + 56} 160 ${x + 112} 200V246a18 18 0 0 1-18 18H${x + 18}a18 18 0 0 1-18-18Z" fill="${i == 2 ? c[1] : "#fff"}" opacity=".35"/>` +
                    tx(x + 56, 112, 24, 800, f[i][1], w, "middle") +
                    tx(x + 56, 136, 11, 600, f[i][1], s, "middle");
            }).join("");
    },

    "Katalog": (c, t) => {
        const [a, b] = t[1].split(" ");

        return `<rect x="36" y="28" width="196" height="244" rx="22" fill="${c[1]}"/><path d="M36 190Q120 150 232 200V250a22 22 0 0 1-22 22H58a22 22 0 0 1-22-22Z" fill="${c[2]}"/><circle cx="190" cy="72" r="30" fill="${c[2]}" opacity=".35"/>` +
            tx(56, 76, 14, 700, INK, t[0]) +
            tx(56, 114, 30, 800, INK, a) +
            tx(56, 146, 30, 800, INK, b) +
            tx(56, 252, 13, 600, "#fff", "Edit di Canva") +
            `<rect x="248" y="28" width="116" height="244" rx="18" fill="#fff"/>` +
            [2, 3].map((n, i) => {
                const y = i ? 190 : 80,
                    [nm, pr] = t[n].split("|");

                return `<circle cx="306" cy="${y}" r="30" fill="${i ? c[1] : c[2]}"/>` +
                    tx(306, y + 50, 13, 700, INK, nm, "middle") +
                    tx(306, y + 68, 12, 800, c[2], pr, "middle");
            }).join("");
    },

    "Daftar Harga": (c, t) =>
        `<rect x="40" y="24" width="320" height="252" rx="24" fill="#fff"/><path d="M40 48a24 24 0 0 1 24-24H336a24 24 0 0 1 24 24V76Q280 108 200 78T40 84Z" fill="${c[2]}"/>` +
        tx(200, 62, 24, 800, "#fff", t[0], "middle") +
        [1, 2, 3, 4].map((n, i) => {
            const y = 136 + i * 34,
                [nm, pr] = t[n].split("|");

            return tx(64, y, 17, 600, INK, nm) +
                tx(336, y, 17, 800, c[2], pr, "end") +
                `<path d="M64 ${y + 12}H336" stroke="${c[1]}" stroke-width="2" stroke-dasharray="4 5"/>`;
        }).join(""),

    "Profil Usaha": (c, t) =>
        frame(c, t[0]) +
        `<circle cx="320" cy="202" r="56" fill="${c[1]}"/><circle cx="332" cy="240" r="34" fill="${c[2]}"/>` +
        tx(46, 138, 24, 800, INK, t[1]) +
        tx(46, 168, 24, 800, INK, t[2]) +
        tx(46, 196, 12, 500, MUTE, t[3]) +
        `<rect x="46" y="212" width="112" height="34" rx="17" fill="${c[2]}"/>` +
        tx(102, 234, 13, 700, "#fff", t[4], "middle"),

    "Katalog Produk": (c, t) =>
        frame(c, t[0]) +
        tx(46, 108, 20, 800, INK, t[1]) +
        [2, 3, 4].map((n, i) => {
            const x = 46 + i * 108,
                [nm, pr] = t[n].split("|");

            return `<rect x="${x}" y="122" width="98" height="136" rx="12" fill="${c[0]}"/><rect x="${x}" y="122" width="98" height="68" rx="12" fill="${i == 1 ? c[2] : c[1]}"/><circle cx="${x + 49}" cy="156" r="20" fill="#fff" opacity=".5"/>` +
                tx(x + 10, 210, 12, 700, INK, nm) +
                tx(x + 10, 228, 13, 800, c[2], pr) +
                `<rect x="${x + 10}" y="236" width="56" height="16" rx="8" fill="${c[2]}"/>` +
                tx(x + 38, 247.5, 10, 700, "#fff", "Pesan", "middle");
        }).join(""),

    "Pembukuan": (c, t) => {
        const X = [44, 170, 350],
            cell = (r, y, s, w, f) =>
                r.split("|").map((v, i) =>
                    v ? tx(X[i], y, s, w, f, v, i == 2 ? "end" : "") : ""
                ).join("");

        return `<circle cx="384" cy="20" r="66" fill="${c[1]}"/><circle cx="10" cy="292" r="56" fill="${c[2]}"/><rect x="24" y="24" width="352" height="252" rx="16" fill="#fff"/><path d="M24 40a16 16 0 0 1 16-16H360a16 16 0 0 1 16 16V66H24Z" fill="${c[2]}"/>` +
            tx(44, 52, 17, 800, "#fff", t[0]) +
            `<rect x="24" y="66" width="352" height="26" fill="${c[0]}"/>` +
            cell(t[1], 84, 12, 700, c[2]) +
            [2, 3, 4, 5].map((n, i) =>
                cell(t[n], 116 + i * 30, 13, 500, INK) +
                `<path d="M44 ${126 + i * 30}H356" stroke="${c[0]}" stroke-width="2"/>`
            ).join("") +
            `<rect x="24" y="226" width="352" height="38" fill="${c[1]}"/>` +
            cell(t[6], 250, 14, 800, INK);
    }
};

D["Stok"] = D["Pembukuan"];

const svg = p =>
    `<svg viewBox="0 0 400 300" role="img" aria-label="Contoh desain ${p.nama}" font-family="Bricolage Grotesque,Plus Jakarta Sans,sans-serif"><rect width="400" height="300" fill="${p.c[0]}"/>${D[p.sub](p.c, p.t)}</svg>`;

const thumb = p =>
    `<div class="thumb">${svg(p)}${p.img ? `<img loading="lazy" src="gambar/${p.img}" alt="Preview ${p.nama}" onerror="this.remove()">` : ""}</div>`;

const $ = s => document.querySelector(s);

/* ====== KARTU PRODUK ====== */
const card = p =>
    `<article class="card">
    <a class="rel" href="detail.html?id=${p.id}" aria-label="Lihat detail ${p.nama}">${p.tag ? `<span class="tag">${p.tag}</span>` : ""}${thumb(p)}</a>
    <div class="body"><h3><a href="detail.html?id=${p.id}">${p.nama}</a></h3><p>${p.desk}</p><div class="price">${rp(p.harga)}</div></div>
    <div class="acts"><button class="btn btn-pri btn-sm" data-add="${p.id}"></button><a class="btn btn-ghost btn-sm" href="detail.html?id=${p.id}">Lihat Detail</a></div></article>`;

/* ====== HEADER, FOOTER, KERANJANG, TOMBOL WHATSAPP (dipakai semua halaman) ====== */
const page = location.pathname.split("/").pop() || "index.html";
const link = (f, t) => `<a href="${f}" class="${page === f ? "on" : ""}">${t}</a>`;
const ikonKeranjang = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 11.2a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.5L21 7H6"/></svg>`;
const ikonWa = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.7-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.200c0 1.300.9 2.500 1 2.700.1.2 1.800 2.800 4.400 3.900 1.600.7 2.200.7 3 .6.5-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.2-.2-.5-.3Z"/></svg>`;

document.getElementById("hdr").outerHTML =
    `<header class="site"><div class="wrap bar">
    <a class="logo" href="index.html"><img src="gambar/logo.png" alt=""><span>DigiKreatif</span></a>
    <nav id="nav">${link("index.html", "Beranda")}${Object.values(KAT).map(k => link(k.file, k.nama.replace("Template ", ""))).join("")}<a href="index.html#cara">Cara Pesan</a><a href="index.html#faq">FAQ</a>
    <a class="btn btn-wa btn-sm" href="${wa("Halo DigiKreatif, saya ingin bertanya tentang template.")}" target="_blank" rel="noopener">Chat WhatsApp</a></nav>
    <button class="cart-btn" data-buka aria-label="Buka keranjang">${ikonKeranjang}<span class="badge" id="badge" hidden>0</span></button>
    <button class="burger" aria-label="Buka menu" aria-expanded="false">☰</button></div></header>`;

document.getElementById("ftr").outerHTML =
    `<footer><div class="wrap"><div class="fgrid">
   <div>
    <a class="logo" href="index.html"><img src="gambar/logo.png" alt=""><span>DigiKreatif</span></a>
    <p>Template desain, website, dan administrasi siap pakai untuk semua kebutuhan bisnis: praktis, mudah diedit, harga terjangkau.</p>
    <p class="jam">Pesan lewat WhatsApp setiap hari, pukul 08.00 - 21.00 WIB.</p>
</div>
    <div><h4>Katalog</h4>${Object.values(KAT).map(k => `<a href="${k.file}">${k.nama}</a>`).join("")}</div>
    <div><h4>Bantuan</h4><a href="index.html#cara">Cara Pesan</a><a href="index.html#faq">FAQ dan Lisensi</a><a href="index.html#katalog">Semua Katalog</a></div>
    <div><h4>Hubungi Kami</h4><a href="${wa("Halo DigiKreatif")}" target="_blank" rel="noopener">WhatsApp</a><a href="${IG}" target="_blank" rel="noopener">Instagram</a><a href="${TT}" target="_blank" rel="noopener">TikTok</a><a href="mailto:${EMAIL}">${EMAIL}</a></div>
    </div><p class="copy">© 2026 DigiKreatif. Semua hak dilindungi.</p></div></footer>`;

document.body.insertAdjacentHTML("beforeend",
    `<a class="wa-float" href="${wa("Halo DigiKreatif, saya ingin bertanya.")}" target="_blank" rel="noopener" aria-label="Chat WhatsApp">${ikonWa}</a>
    <div class="ov" id="ov" data-tutup></div>
    <aside class="drawer" id="drawer" aria-label="Keranjang belanja" aria-hidden="true">
        <div class="d-head"><h3>Keranjang</h3><button class="x" data-tutup aria-label="Tutup keranjang">✕</button></div>
        <div class="d-list" id="d-list"></div>
        <div class="d-foot" id="d-foot" hidden>
            <div class="d-total"><span>Total</span><b id="d-total"></b></div>
            <a class="btn btn-wa" id="d-co" target="_blank" rel="noopener">Checkout via WhatsApp</a>
            <button class="btn-link" data-kosong>Kosongkan keranjang</button>
        </div>
    </aside>
    <div class="toast" id="toast" role="status"></div>`);

const burger = $(".burger");
burger.onclick = () => burger.setAttribute("aria-expanded", $("#nav").classList.toggle("open"));

/* ====== KERANJANG (tersimpan di browser, jadi tidak hilang saat halaman dipindah) ====== */
const KEY = "digikreatif-keranjang";
const semua = [...P, ...PAKET];
const cari = id => semua.find(x => x.id === id);
let cart = [];
try { cart = (JSON.parse(localStorage.getItem(KEY)) || []).filter(cari); } catch (e) { cart = []; }
const simpan = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { } };

const toast = t => {
    const e = $("#toast");
    e.textContent = t;
    e.classList.add("on");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => e.classList.remove("on"), 1800);
};

const buka = b => {
    $("#drawer").classList.toggle("open", b);
    $("#ov").classList.toggle("on", b);
    $("#drawer").setAttribute("aria-hidden", String(!b));
    document.body.style.overflow = b ? "hidden" : "";
};

const sinkron = () => {
    document.querySelectorAll("[data-add]").forEach(b => {
        const ada = cart.includes(b.dataset.add);
        b.classList.toggle("ada", ada);
        b.textContent = ada ? "✓ Di Keranjang" : "Tambah ke Keranjang";
    });

    const list = cart.map(cari), total = list.reduce((s, p) => s + p.harga, 0);
    $("#badge").textContent = list.length;
    $("#badge").hidden = !list.length;
    $("#d-total").textContent = rp(total);
    $("#d-foot").hidden = !list.length;
    $("#d-co").href = pesanan(list);
    $("#d-list").innerHTML = list.length
        ? list.map(p => `<div class="d-item"><div class="d-img">${p.sub ? thumb(p) : "🎁"}</div><div><b>${p.nama}</b><small>${kode(p)}</small><span class="price">${rp(p.harga)}</span></div><button class="x" data-hapus="${p.id}" aria-label="Hapus ${p.nama}">✕</button></div>`).join("")
        : `<div class="d-kosong"><p>Keranjangmu masih kosong.</p><a class="btn btn-pri btn-sm" href="index.html#katalog" data-tutup>Lihat Katalog</a></div>`;
};

document.addEventListener("click", e => {
    const a = e.target.closest("[data-add],[data-hapus],[data-buka],[data-tutup],[data-kosong]");
    if (!a) return;

    if (a.dataset.add) {
        if (cart.includes(a.dataset.add)) return buka(true);
        cart.push(a.dataset.add);
        toast("Ditambahkan ke keranjang");
        $("#badge").classList.add("bump");
        setTimeout(() => $("#badge").classList.remove("bump"), 400);
    } else if (a.dataset.hapus) {
        cart = cart.filter(id => id !== a.dataset.hapus);
    } else if (a.dataset.kosong !== undefined) {
        cart = [];
    } else {
        return buka(a.dataset.buka !== undefined);
    }

    simpan();
    sinkron();
});

document.addEventListener("keydown", e => { if (e.key === "Escape") buka(false); });

/* ====== BERANDA ====== */
document.querySelectorAll("[data-count]").forEach(e =>
    e.textContent = P.filter(p => p.kat === e.dataset.count).length + " template"
);
document.querySelectorAll("[data-stat]").forEach(e => e.textContent = P.length);
document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = wa(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
});

const pk = $("#paket");
if (pk) {
    pk.innerHTML = PAKET.map(k =>
        `<div><h3>${k.nama}</h3><p>${k.desk}</p><span class="harga">${k.normal > k.harga ? `<s>${rp(k.normal)}</s>` : ""}<span class="price">${rp(k.harga)}</span></span><button class="btn btn-sun" data-add="${k.id}"></button></div>`
    ).join("");
}

const tl = $("#terlaris");
if (tl) {
    const per = Object.keys(KAT).map(k => P.filter(p => p.kat === k).sort((a, b) => (b.tag === "Terlaris") - (a.tag === "Terlaris")));
    tl.innerHTML = [0, 1].flatMap(i => per.map(l => l[i])).filter(Boolean).slice(0, 4).map(card).join("");
}

/* ====== HALAMAN KATEGORI: filter, cari, urutkan ====== */
const grid = $("#grid");
if (grid) {
    const kk = document.body.dataset.kat, k = KAT[kk], list = P.filter(p => p.kat === kk);
    $("#k-nama").textContent = $("#k-judul").textContent = k.nama;
    $("#k-desk").textContent = k.desk;

    const awal = decodeURIComponent(location.hash.slice(1));
    const st = { sub: k.sub.includes(awal) ? awal : "", q: "", urut: "" };
    const urutan = {
        murah: (a, b) => a.harga - b.harga,
        mahal: (a, b) => b.harga - a.harga,
        nama: (a, b) => a.nama.localeCompare(b.nama)
    };

    grid.insertAdjacentHTML("beforebegin",
        `<div class="toolbar"><input id="q" type="search" placeholder="Cari template..." aria-label="Cari template">
        <select id="urut" aria-label="Urutkan"><option value="">Urutkan</option><option value="murah">Harga terendah</option><option value="mahal">Harga tertinggi</option><option value="nama">Nama A-Z</option></select></div>
        <p class="hasil" id="hasil"></p>`);

    const show = () => {
        const q = st.q.trim().toLowerCase();
        let r = list.filter(p => (!st.sub || p.sub === st.sub) && (!q || [p.nama, p.desk, p.cocok, p.sub].join(" ").toLowerCase().includes(q)));
        if (st.urut) r = [...r].sort(urutan[st.urut]);
        $("#hasil").textContent = `${r.length} template` + (st.sub ? ` di ${st.sub}` : "");
        grid.innerHTML = r.length
            ? r.map(card).join("")
            : `<div class="kosong"><h3>Template tidak ditemukan</h3><p>Coba kata kunci lain atau pilih kategori Semua.</p><button class="btn btn-ghost btn-sm" id="reset">Reset pencarian</button></div>`;
        sinkron();
    };

    const chips = $("#chips");
    const tandai = () => chips.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.s === st.sub));

    chips.innerHTML = ["Semua", ...k.sub].map((s, i) => `<button data-s="${i ? s : ""}">${s}</button>`).join("");
    chips.onclick = e => {
        if (e.target.dataset.s === undefined) return;
        st.sub = e.target.dataset.s;
        history.replaceState(null, "", "#" + encodeURIComponent(st.sub));
        tandai();
        show();
    };
    $("#q").oninput = e => { st.q = e.target.value; show(); };
    $("#urut").onchange = e => { st.urut = e.target.value; show(); };
    grid.addEventListener("click", e => {
        if (e.target.id !== "reset") return;
        st.sub = st.q = st.urut = "";
        $("#q").value = "";
        $("#urut").value = "";
        history.replaceState(null, "", "#");
        tandai();
        show();
    });

    tandai();
    show();
}

/* ====== HALAMAN DETAIL ====== */
const det = $("#detail");
if (det) {
    const p = P.find(x => x.id === new URLSearchParams(location.search).get("id"));

    if (!p) {
        det.innerHTML = `<div class="empty"><h1>Template tidak ditemukan</h1><p>Pilih template dari katalog.</p><br><a class="btn btn-pri" href="index.html#katalog">Ke Katalog</a></div>`;
    } else {
        const k = KAT[p.kat], balik = `${k.file}#${encodeURIComponent(p.sub)}`;
        document.title = p.nama + " | DigiKreatif";

        det.innerHTML =
            `<div><nav class="crumb"><a href="index.html">Beranda</a> / <a href="${balik}">${k.nama}</a> / ${p.nama}</nav><br>${thumb(p)}</div>
            <div><span class="count" style="margin:0">${p.sub}</span><h1>${p.nama}</h1><small class="kode">Kode produk: ${kode(p)}</small>
            <div class="price">${rp(p.harga)}</div><p style="margin-top:10px">${p.desk}</p>
            <div class="buy"><button class="btn btn-pri" data-add="${p.id}"></button><a class="btn btn-wa" href="${pesan(p)}" target="_blank" rel="noopener">Beli Sekarang via WhatsApp</a></div>
            <ul class="jamin"><li>File dikirim maksimal 1×24 jam setelah pembayaran terkonfirmasi</li><li>Lisensi untuk dipakai sendiri, tidak untuk dijual ulang</li><li>Bantuan mengedit lewat WhatsApp</li></ul>
            <h3>Yang kamu dapat</h3><ul>${k.isi.map(i => `<li>${i}</li>`).join("")}</ul>
            <h3>Cocok untuk</h3><p>${p.cocok}</p><h3>Cara mengedit</h3><p>${k.edit}</p><h3>Format file</h3><p>${k.fmt}</p>
            <div class="cta" style="margin-top:26px"><a class="btn btn-ghost" href="${balik}">Kembali ke ${p.sub}</a></div></div>`;

        $("#rel").innerHTML = P.filter(x => x.kat === p.kat && x.id !== p.id)
            .sort((a, b) => (b.sub === p.sub) - (a.sub === p.sub)).slice(0, 3).map(card).join("");
    }
}

document.querySelectorAll("[data-p]").forEach(e => {
    const p = P.find(x => x.id === e.dataset.p);
    if (p) e.innerHTML = svg(p);
});

sinkron();