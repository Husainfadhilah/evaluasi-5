
// Program hitung transaksi Kedai Senja

// FIX 1: Komentar sudah ditutup dengan benar.

// Menggunakan let agar nama kedai bisa diubah.
let namaKedai = "Kedai Senja";

const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;

let jumlahKopi = 3;

// FIX 2: Jumlah roti menggunakan tipe data number.
let jumlahRoti = 2;

let transaksiSelesai = 0;

// FIX 3: Menghitung jumlah seluruh item.
let jumlahItem = jumlahKopi + jumlahRoti;

// FIX 4: Menghitung subtotal dengan benar.
let subtotal =
    HARGA_KOPI * jumlahKopi +
    HARGA_ROTI * jumlahRoti;

// FIX 5: Menghitung pajak setelah diskon Rp10.000.
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// FIX 6: Menghitung total bayar.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar Rp100.000.
let uangBayar = 100000;

// FIX 7: Memeriksa apakah uang pelanggan cukup.
let uangCukup = uangBayar >= totalBayar;

// FIX 8: Menghitung kembalian.
let kembalian = uangBayar - totalBayar;

// FIX 9: Memeriksa apakah jumlah item genap.
let itemGenap = jumlahItem % 2 === 0;

// FIX 10: Menambah jumlah transaksi selesai.
transaksiSelesai++;

// FIX 11: Mengubah nama kedai.
namaKedai = "Kedai Senja Baru";

// FIX 12: TARIF_PAJAK tetap 0.11 dan tidak diubah.

// Menampilkan hasil transaksi.
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