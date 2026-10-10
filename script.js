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
console.log("jawaban no 2 :");
console.log("");



// N0.2 DAFTAR PRODUK

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
console.log("jawaban no 3 :");
console.log("");




// NO.3 ARRAY
let transaksi =[
   {nama : "001",
    pesanan :"kopi",
    jumlah : "20000",
    sudahMember : true,
    catatan : "sangat enak",
   },
   {nama :"002",
    pesanan : "cemilan",
    jumlah : 10000,
    sudahMember : false,
    catatan : "lezat wok",
   },
   {nama : "003",
    pesanan : "makanan",
    jumlah : "15000",
    sudahMember : true,
    catatan : false,
   }
];
console.log(
    "nama :",transaksi[0].nama,
    "pesanan :",transaksi[0].pesanan,
    "jumlah :",transaksi[0].jumlah,
    "member :", transaksi[0],"ada",
    "catatan :", transaksi[0],
);
console.log(
    "nama :",transaksi[1].nama,
    "pesanan :",transaksi[1].pesanan,
    "jumlah :",transaksi[1].jumlah,
    "member :", transaksi[1],"tidak ada",
    "catatan :", transaksi[1],
);
console.log(
    "nama :",transaksi[2].nama,
    "pesanan :",transaksi[2].pesanan,
    "jumlah :",transaksi[2].jumlah,
    "member :", transaksi[0],"ada",
    "catatan :", transaksi[2],
);
console.log("catatan kasir");

let catatanKasir = {
    pelanggan1:"enak banget mbak",
    pelanggan2 : "enak wok ",
    pelanggan3 :"bikin nagih",
};
console.log("masukan :",catatanKasir.pelanggan1);
console.log("masukan :", catatanKasir.pelanggan2);
console.log("masukan :",catatanKasir.pelanggan3);

// JAWABAN BAGIAN 2
// 1. nomorWhatsApp disimpan sebagai string karena nomor WhatsApp bukan untuk perhitungan matematika.
//    String juga bisa menyimpan angka 0 di depan nomor.

// 2. website diisi null karena belum memiliki nilai atau belum tersedia.
//    catatanKasir dibiarkan tanpa nilai karena propertinya belum diberi nilai.

// 3. Jika menu berisi 6 item, hasil menu[6] adalah undefined.
//    Karena indeks array dimulai dari 0, jadi 6 item memiliki indeks 0 sampai 5.

// 4. Hasil typeof menu adalah "object".
//    Karena dalam JavaScript, array termasuk jenis object.

// 5. menu dibuat sebagai array karena menyimpan daftar item menu yang berurutan.
//    kedai dibuat sebagai object karena menyimpan data kedai dalam bentuk pasangan properti dan nilai.




