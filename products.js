// =====================================================
// DAFTAR PRODUK — cukup edit file ini untuk tambah/ubah produk
// =====================================================
//
// Cara nambah produk: copy satu blok { ... }, paste di bawahnya, lalu ganti isinya.
//
// kategori  : "kamar" | "dapur" | "perawatan" | "kerja"
// nama      : nama produk (singkat)
// cocok     : lanjutan dari "Cocok buat kamu kalau ..."
// harga     : tulis apa adanya, misal "Rp39.000"
// ig        : link post / reel IG kamu, paste apa adanya dari "Share → Copy link"
//             (contoh: "https://www.instagram.com/reel/ABC123xyz/?igsh=xxxx").
//             Kosongkan ("") kalau belum ada post → yang tampil foto di bawah.
// foto      : (opsional) cadangan kalau belum ada post IG.
//             Path di folder images/ (misal "images/rak-susun.jpg") atau URL foto.
// shopee    : link affiliate Shopee. Kosongkan ("") kalau tidak ada → tombolnya disembunyikan.
// tokopedia : link affiliate Tokopedia. Kosongkan ("") kalau tidak ada → tombolnya disembunyikan.
//
// SEMUA PRODUK DI BAWAH INI CONTOH. Ganti dengan produk asli kamu.

const PRODUCTS = [
  {
    kategori: "kamar",
    nama: "Vacuum bag pakaian",
    cocok: "lemari penuh sama jaket, selimut, dan baju yang jarang dipake",
    harga: "cek harga terbaru di Shopee",
    ig: "",
    foto: "images/vacuum-bag.jpg",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "kamar",
    nama: "[Contoh] Rak susun serbaguna",
    cocok: "barang di meja atau kolong kasur numpuk terus",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "kamar",
    nama: "[Contoh] Lampu tidur LED",
    cocok: "lampu kamar terlalu terang buat santai malam",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "dapur",
    nama: "[Contoh] Wadah bumbu set",
    cocok: "bumbu di dapur berantakan dan sering ketuker",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "dapur",
    nama: "[Contoh] Spatula silikon",
    cocok: "teflon kamu gampang baret",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "perawatan",
    nama: "[Contoh] Sunscreen basic",
    cocok: "kamu mau mulai skincare tapi gak mau ribet",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
  {
    kategori: "kerja",
    nama: "[Contoh] Stand laptop lipat",
    cocok: "leher pegel habis kerja seharian",
    harga: "Rp—",
    ig: "",
    foto: "",
    shopee: "",
    tokopedia: "",
  },
];
