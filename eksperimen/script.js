
/*
Nama: Husain
Tujuan: Eksperimen operator, tipe data, var, dan let.
*/

// ==================================================
// 5.1 EKSPERIMEN OPERATOR DAN TIPE DATA
// ==================================================

// Tebakan: Hasilnya "55" karena angka 5 digabung dengan string "5".
// Hasil asli: "55"
console.log(5 + "5");

// Tebakan: Hasilnya 6 karena string "10" diubah menjadi angka.
// Hasil asli: 6
console.log("10" - 4);

// Tebakan: Hasilnya 20 karena kedua string diubah menjadi angka.
// Hasil asli: 20
console.log("10" * "2");

// Tebakan: Hasilnya "string" karena hasil penjumlahan bertipe string.
// Hasil asli: "string"
console.log(typeof ("5" + 5));

// Tebakan: Hasilnya 1 karena sisa pembagian 9 dengan 4 adalah 1.
// Hasil asli: 1
console.log(9 % 4);

// Tebakan: Hasilnya 25 karena 2 + 3 dihitung dahulu, lalu dipangkatkan 2.
// Hasil asli: 25
console.log((2 + 3) ** 2);

// Tebakan: Hasilnya 2.5 karena 10 dibagi 4.
// Hasil asli: 2.5
console.log(10 / 4);

// Tebakan: Hasilnya Infinity karena angka positif dibagi 0.
// Hasil asli: Infinity
console.log(1 / 0);

// Tebakan: Hasilnya NaN karena "abc" tidak bisa dikalikan sebagai angka.
// Hasil asli: NaN
console.log("abc" * 2);

// Tebakan: Hasilnya "number" karena NaN termasuk tipe number.
// Hasil asli: "number"
console.log(typeof NaN);

// Tebakan: Hasilnya true karena kondisi terakhir bernilai true.
// Hasil asli: true
console.log((5 > 3 && 2 > 4) || 1 === 1);

// Tebakan: Hasilnya true karena false || true menghasilkan true.
// Hasil asli: true
console.log(!true || !false);

// Tebakan: Hasilnya true karena kedua perbandingan bernilai true.
// Hasil asli: true
console.log("5" == 5 && "5" !== 5);

// Tebakan: Hasilnya true karena array dan object sama-sama bertipe object.
// Hasil asli: true
console.log(typeof [] === typeof {});

// Tebakan: Hasilnya 50 karena 20 + 30 sama dengan 50.
// Hasil asli: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);


// ==================================================
// 5.2 EKSPERIMEN VAR DAN LET
// ==================================================

// A. var di dalam blok tetap bisa dibaca dari luar blok.

{
    var namaVarEksperimen = "Husain";
}

console.log(namaVarEksperimen);
// Hasil asli: Husain


// B. let di dalam blok tidak bisa dibaca dari luar blok.

{
    let namaLetEksperimen = "Amal";
}

// Tebakan: Terjadi ReferenceError karena namaLetEksperimen
// hanya bisa digunakan di dalam blok.
// Hasil asli jika dijalankan:
// ReferenceError: namaLetEksperimen is not defined

// console.log(namaLetEksperimen);


// C. var dengan nama yang sama bisa dideklarasikan dua kali.

var umurVarEksperimen = 20;
var umurVarEksperimen = 21;

console.log(umurVarEksperimen);
// Hasil asli: 21


// D. let dengan nama yang sama tidak bisa dideklarasikan
// dua kali dalam lingkup yang sama.

let umurLetEksperimen = 20;

// Tebakan: Terjadi SyntaxError karena variabel let
// dideklarasikan ulang dalam lingkup yang sama.
// Hasil asli jika kedua deklarasi diaktifkan:
// SyntaxError: Identifier 'umurLetEksperimen' has already been declared

// let umurLetEksperimen = 21;


// ==================================================
// 5.3 PENJELASAN
// ==================================================

// 1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
//
// 5 + "5" menghasilkan string "55" karena operator +
// menggabungkan angka dengan string.
//
// "10" - 4 menghasilkan angka 6 karena operator -
// mengubah string angka menjadi number untuk pengurangan.


// 2. Apa arti NaN dan kenapa tipenya number?
//
// NaN adalah singkatan dari Not-a-Number.
// NaN merupakan nilai khusus yang menunjukkan bahwa suatu
// operasi numerik tidak menghasilkan angka yang valid.
// Tipenya tetap number karena NaN merupakan bagian dari
// tipe data Number di JavaScript.


// 3. Urutan evaluasi:
// 5 > 3 menghasilkan true.
// 2 > 4 menghasilkan false.
// true && false menghasilkan false.
// 1 === 1 menghasilkan true.
// false || true menghasilkan true.
// Hasil akhirnya adalah true.


// 4. Bagaimana membedakan array dan object biasa?
//
// typeof [] dan typeof {} sama-sama menghasilkan "object".
// Gunakan Array.isArray() untuk memeriksa array.
//
// Array.isArray([10, 20, 30]) menghasilkan true.
// Array.isArray({ nama: "Husain" }) menghasilkan false.


// 5. Statement dan expression:
//
// let hasil = 5 + 10;
// Seluruh baris tersebut adalah declaration statement.
// Expression 5 + 10 menghasilkan nilai 15.
// Variabel hasil menyimpan nilai 15.
//
// console.log(hasil * 2);
// Expression hasil * 2 menghasilkan nilai 30.
// Pemanggilan console.log menampilkan angka 30.


// 6. Di mana eksperimen.js dijalankan?
//
// File JavaScript dapat dijalankan di browser melalui HTML
// yang memuat file JavaScript, atau melalui Node.js.
//
// Browser menjalankan JavaScript di lingkungan browser.
// Node.js menjalankan JavaScript di luar browser.
//
// let dan const digunakan karena memiliki lingkup blok.
// Keduanya membantu mengurangi kesalahan akibat deklarasi
// ulang atau penggunaan variabel di lingkup yang tidak tepat.


// 7. Hasil eksperimen var dan let:
//
// var yang dibuat di dalam blok masih bisa dibaca dari luar.
// let yang dibuat di dalam blok tidak bisa dibaca dari luar.
// var boleh dideklarasikan ulang dalam lingkup yang sama.
// let tidak boleh dideklarasikan ulang dalam lingkup yang sama.


// 8. Contoh bug dalam program besar:
//
// Misalnya, program kasir menggunakan var total di dalam
// blok untuk menghitung subtotal sementara.
//
// Karena var tidak dibatasi oleh blok, variabel tersebut
// bisa digunakan di luar blok dan tanpa sengaja mengubah
// nilai total yang dipakai bagian program lain.
//
// Jika var dideklarasikan ulang, nilai variabel sebelumnya
// juga bisa tertimpa sehingga hasil transaksi menjadi salah.