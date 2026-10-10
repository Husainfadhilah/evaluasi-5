
const kedai = {
  nama: "Kedai Senja"
};

const menu = [
  { nama: "Kopi", harga: 15000, tersedia: true },
  { nama: "Latte", harga: 20000, tersedia: true },
  { nama: "Teh", harga: 10000, tersedia: true },
  { nama: "Roti", harga: 12000, tersedia: true },
  { nama: "Kentang", harga: 18000, tersedia: false },
  { nama: "Cokelat", harga: 17000, tersedia: true }
];

const transaksi1 = {
  pelanggan: "Andi",
  sudahMember: true,
  uangBayar: 100000,
  pesanan: [
    { indeksMenu: 0, jumlah: 2 },
    { indeksMenu: 1, jumlah: 1 }
  ]
};

const transaksi2 = {
  pelanggan: "Budi",
  sudahMember: false,
  uangBayar: 100000,
  pesanan: [
    { indeksMenu: 2, jumlah: 3 },
    { indeksMenu: 3, jumlah: 2 }
  ]
};

const transaksi3 = {
  pelanggan: "Citra",
  sudahMember: true,
  uangBayar: 150000,
  pesanan: [
    { indeksMenu: 4, jumlah: 2 },
    { indeksMenu: 5, jumlah: 3 }
  ]
};

// TRANSAKSI 1
let subtotal1 = 0;
let jumlahItem1 = 0;
let semuaMenuTersedia1 = true;

for (let p of transaksi1.pesanan) {
  subtotal1 += menu[p.indeksMenu].harga * p.jumlah;
  jumlahItem1 += p.jumlah;
  if (!menu[p.indeksMenu].tersedia) {
    semuaMenuTersedia1 = false;
  }
}

let potongan1 = transaksi1.sudahMember ? subtotal1 * 0.1 : 0;
let pajak1 = (subtotal1 - potongan1) * 0.11;
let totalBayar1 = subtotal1 - potongan1 + pajak1;
let kembalian1 = transaksi1.uangBayar - totalBayar1;
let uangCukup1 = kembalian1 >= 0;
let gratisAntar1 = subtotal1 >= 100000 || jumlahItem1 >= 5;
let sisa500001 = kembalian1 >= 0 ? kembalian1 % 50000 : 0;
let sisa200001 = kembalian1 >= 0 ? sisa500001 % 20000 : 0;

// TRANSAKSI 2
let subtotal2 = 0;
let jumlahItem2 = 0;
let semuaMenuTersedia2 = true;

for (let p of transaksi2.pesanan) {
  subtotal2 += menu[p.indeksMenu].harga * p.jumlah;
  jumlahItem2 += p.jumlah;
  if (!menu[p.indeksMenu].tersedia) {
    semuaMenuTersedia2 = false;
  }
}

let potongan2 = transaksi2.sudahMember ? subtotal2 * 0.1 : 0;
let pajak2 = (subtotal2 - potongan2) * 0.11;
let totalBayar2 = subtotal2 - potongan2 + pajak2;
let kembalian2 = transaksi2.uangBayar - totalBayar2;
let uangCukup2 = kembalian2 >= 0;
let gratisAntar2 = subtotal2 >= 100000 || jumlahItem2 >= 5;
let sisa500002 = kembalian2 >= 0 ? kembalian2 % 50000 : 0;
let sisa200002 = kembalian2 >= 0 ? sisa500002 % 20000 : 0;

// TRANSAKSI 3
let subtotal3 = 0;
let jumlahItem3 = 0;
let semuaMenuTersedia3 = true;

for (let p of transaksi3.pesanan) {
  subtotal3 += menu[p.indeksMenu].harga * p.jumlah;
  jumlahItem3 += p.jumlah;
  if (!menu[p.indeksMenu].tersedia) {
    semuaMenuTersedia3 = false;
  }
}

let potongan3 = transaksi3.sudahMember ? subtotal3 * 0.1 : 0;
let pajak3 = (subtotal3 - potongan3) * 0.11;
let totalBayar3 = subtotal3 - potongan3 + pajak3;
let kembalian3 = transaksi3.uangBayar - totalBayar3;
let uangCukup3 = kembalian3 >= 0;
let gratisAntar3 = subtotal3 >= 100000 || jumlahItem3 >= 5;
let sisa500003 = kembalian3 >= 0 ? kembalian3 % 50000 : 0;
let sisa200003 = kembalian3 >= 0 ? sisa500003 % 20000 : 0;

// LAPORAN HARIAN
let pendapatanHarian = 0;
let jumlahTransaksi = 0;

pendapatanHarian += totalBayar1;
jumlahTransaksi++;
pendapatanHarian += totalBayar2;
jumlahTransaksi++;
pendapatanHarian += totalBayar3;
jumlahTransaksi++;

let rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
let selisihTerbesar =
  Math.max(totalBayar1, totalBayar2, totalBayar3) -
  Math.min(totalBayar1, totalBayar2, totalBayar3);
let persentaseTransaksiPertama = totalBayar1 / pendapatanHarian * 100;
let hargaKopiTigaBulan = menu[0].harga * 1.05 ** 3;

// CETAK LAPORAN
console.log(`
TRANSAKSI 1 - ${transaksi1.pelanggan}
Subtotal: Rp${subtotal1}
Potongan: Rp${potongan1}
Pajak: Rp${pajak1}
Total bayar: Rp${totalBayar1.toFixed(2)}
Kembalian: Rp${kembalian1.toFixed(2)}
Uang cukup: ${uangCukup1}
Gratis antar: ${gratisAntar1}
Semua menu tersedia: ${semuaMenuTersedia1}
Sisa setelah 50000: ${sisa500001}
Sisa berikutnya setelah 20000: ${sisa200001}

TRANSAKSI 2 - ${transaksi2.pelanggan}
Subtotal: Rp${subtotal2}
Potongan: Rp${potongan2}
Pajak: Rp${pajak2}
Total bayar: Rp${totalBayar2.toFixed(2)}
Kembalian: Rp${kembalian2.toFixed(2)}
Uang cukup: ${uangCukup2}
Gratis antar: ${gratisAntar2}
Semua menu tersedia: ${semuaMenuTersedia2}
Sisa setelah 50000: ${sisa500002}
Sisa berikutnya setelah 20000: ${sisa200002}

TRANSAKSI 3 - ${transaksi3.pelanggan}
Subtotal: Rp${subtotal3}
Potongan: Rp${potongan3}
Pajak: Rp${pajak3}
Total bayar: Rp${totalBayar3.toFixed(2)}
Kembalian: Rp${kembalian3.toFixed(2)}
Uang cukup: ${uangCukup3}
Gratis antar: ${gratisAntar3}
Semua menu tersedia: ${semuaMenuTersedia3}
Sisa setelah 50000: ${sisa500003}
Sisa berikutnya setelah 20000: ${sisa200003}


Pendapatan harian: Rp${pendapatanHarian.toFixed(2)}
Jumlah transaksi: ${jumlahTransaksi}
Rata-rata pendapatan: Rp${rataRataPendapatan.toFixed(2)}
Selisih terbesar: Rp${selisihTerbesar.toFixed(2)}
Persentase transaksi pertama: ${persentaseTransaksiPertama.toFixed(2)}%
Harga kopi setelah 3 bulan: Rp${hargaKopiTigaBulan.toFixed(2)}
`);

// JAWABAN ANE :

// 1. Perhitungan manual transaksi 1:
// Subtotal = (2 x 15.000) + (1 x 20.000) = Rp50.000
// Potongan = 10% x 50.000 = Rp5.000
// Pajak = 11% x (50.000 - 5.000) = Rp4.950
// Total bayar = 50.000 - 5.000 + 4.950 = Rp49.950
// Kembalian = 100.000 - 49.950 = Rp50.050
// Hasil perhitungan manual sama dengan hasil program.

// 2. Sebelum menggunakan ||, gratisAntar1 bernilai false.
// Sesudah menggunakan &&, gratisAntar1 tetap false.
// Karena subtotal Rp50.000 dan jumlah item 3, kedua kondisi salah.
// || membutuhkan minimal satu kondisi benar, sedangkan && membutuhkan
// kedua kondisi benar. Pada transaksi ini hasilnya tetap sama.

// 3. Dengan tanda kurung:
// (50000 - 5000) * 0.11 = 4950
// Tanpa tanda kurung:
// 50000 - 5000 * 0.11 = 49450
// Hasil berbeda karena perkalian dikerjakan lebih dahulu.

// 4. Variabel const:
// kedai, karena object kedai tidak perlu ditugaskan ulang.
// menu, karena variabel menu tidak perlu ditugaskan ulang.
// transaksi1, karena data transaksi tidak perlu ditugaskan ulang.
//
// Variabel let:
// subtotal1, karena nilainya bertambah selama perulangan.
// pendapatanHarian, karena nilainya ditambah menggunakan +=.
// jumlahTransaksi, karena nilainya bertambah menggunakan ++.

// 5. hargaKopiTigaBulan menggunakan harga * 1.05 ** 3 karena
// harga naik 5% secara berturut-turut selama tiga bulan.
// 1.05 ** 3 = 1.157625, yaitu faktor kenaikan selama tiga bulan.
// 1.05 * 3 = 3.15, yaitu perkalian biasa, bukan kenaikan majemuk.

// 6. Hasil yang sudah tercetak di Console tidak berubah otomatis.
// Perhitungan harus dijalankan kembali setelah harga diubah.
//
// Contoh:
// const menuBukti = [{ nama: "Kopi", harga: 15000 }];

// let hargaAwal = menuBukti[0].harga * 1.05 ** 3;
// console.log("Harga awal:", hargaAwal);

// menuBukti[0].harga = 20000;

// let hargaBaru = menuBukti[0].harga * 1.05 ** 3;
// console.log("Harga baru:", hargaBaru);

// Harga awal = 17364.375
// Harga baru = 23152.5
// Hasil berubah karena harga baru dihitung ulang setelah data diubah.