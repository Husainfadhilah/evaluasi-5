
// Program hitung transaksi Kedai Senja

// FIX 1: Menutup komentar banyak baris agar kode dapat dijalankan.
const namaKedaiAwal = "Kedai Senja";

const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;

let jumlahKopi = 3;

// FIX 2: Mengubah string "2" menjadi angka 2.
let jumlahRoti = 2;

let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
// FIX 3: Menjumlahkan angka agar hasilnya 5.
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
// FIX 4: Memperbaiki nama variabel jumlahKopi.
// FIX 5: Menggunakan perkalian dan penjumlahan yang benar.
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% setelah dipotong diskon 10000.
// Seharusnya: 8140
// FIX 6: Menghitung pajak dari subtotal setelah dikurangi diskon.
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX 7: Mengakhiri pernyataan dengan titik koma.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;

// FIX 8: Menggunakan operator perbandingan, bukan operator penugasan.
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX 9: Menghitung kembalian dari uang yang dibayar dikurangi total.
let kembalian = uangBayar - totalBayar;

// Jumlah item genap? Seharusnya: false
// FIX 10: Memeriksa sisa bagi 2 sama dengan 0 untuk bilangan genap.
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX 11: Menambahkan 1 ke variabel transaksiSelesai.
transaksiSelesai++;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// FIX 12: Menggunakan let agar namaKedai bisa diubah.
let namaKedai = "Kedai Senja";
namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK tetap menggunakan const dan tidak diubah.

// Menampilkan hasil akhir.
console.log(
    namaKedai,
    jumlahItem,
    subtotal,
    pajak,
    totalBayar,
    uangCukup,
    kembalian,
    itemGenap,
    transaksiSelesai
);
