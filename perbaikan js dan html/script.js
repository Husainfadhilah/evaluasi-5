
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

/*
CATATAN BUG

1. Komentar banyak baris tidak ditutup
   Jenis: Menghentikan program dengan error.
   Penyebab: Komentar pembuka /* tidak ditutup dengan * /.

2. Tipe data jumlahRoti salah
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Nilai "2" bertipe string sehingga penjumlahan dengan angka 3 menghasilkan "32", bukan 5.

3. Nama variabel jumlahkopi salah
   Jenis: Menghentikan program dengan error.
   Penyebab: JavaScript membedakan huruf besar dan kecil. Seharusnya jumlahKopi.

4. Rumus pajak salah
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Kurang tanda kurung sehingga pajak tidak dihitung dari subtotal setelah diskon.

5. Titik koma pada totalBayar tidak ada
   Jenis: Tidak error.
   Penyebab: JavaScript dapat menambahkan titik koma secara otomatis, tetapi penulisannya kurang rapi.

6. Operator perbandingan uangCukup salah
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Operator = memberikan nilai, bukan membandingkan apakah uang pembayaran cukup.

7. Rumus kembalian terbalik
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Total bayar dikurangi uang pembayaran, seharusnya uang pembayaran dikurangi total bayar.

8. Pengecekan bilangan genap salah
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Operator % 2 === 1 memeriksa bilangan ganjil, bukan genap.

9. Nilai transaksiSelesai tidak bertambah
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: transaksiSelesai + 1 tidak menyimpan hasil penjumlahan ke variabel.

10. Variabel namaKedai dideklarasikan ulang
    Jenis: Menghentikan program dengan error.
    Penyebab: Variabel yang sudah dideklarasikan dengan const tidak bisa dideklarasikan ulang menggunakan let dalam cakupan yang sama.

11. Nama kedai diubah padahal menggunakan const
    Jenis: Menghentikan program dengan error.
    Penyebab: Variabel const tidak dapat diberi nilai baru setelah deklarasi.

12. Tarif pajak diubah padahal menggunakan const
    Jenis: Menghentikan program dengan error.
    Penyebab: Variabel TARIF_PAJAK dideklarasikan dengan const sehingga nilainya tidak dapat diubah dari 0.11 menjadi 0.12.
*/