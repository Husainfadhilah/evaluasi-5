// NAMA HUSAIN FADHILAH
// TANGGAL 10 / 10 / 2026

// PROJECT MENJELASKAN SYSTEM KERJA KEDAI DENGAN BERBAGAI MACAM PENCATATAN BERUPA MENU TRANSAKSI DLS

let dataKedai = {
    pemilik : "Husain",
    namaKedai: "kopi senja",
    alamat : "Bantul",
    tahunBerdiri : 2010,
    nomorWa : "08337388819",
    website : false,
}
const JAM_OPERASIONAL = {
    buka : "08:00",
    tutup : "21:00",
}
console.log (dataKedai);
console.log(JAM_OPERASIONAL);

let daftarKopi = [
    "kopi tubruk","kopi arabica", "kopi robusta"
]
let kategori = [
   "mahal","murah", 
]
let haragaProduk =[
    "24000","30000","25000"
]
let stokBarang = [
    true, false
]

console.log("jenis kopi :", daftarKopi[0] );
console.log("kategori :",kategori[0]);
console.log("harga kopi :",haragaProduk[1]);
console.log("stok :", stokBarang[0]);

console.log("jenis kopi :", daftarKopi[1] );
console.log("kategori :",kategori[1]);
console.log("harga kopi :",haragaProduk[0]);
console.log("stok :", stokBarang[1] ,"kosong");



