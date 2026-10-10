# evaluasi-5

# Evaluasi 5 — Eksperimen JavaScript

## 1. Deskripsi Proyek

Proyek ini merupakan latihan untuk memahami JavaScript serta penggunaan Git dan GitHub, termasuk pengelolaan file, branch, commit, dan penyelesaian konflik.

## Cara Menjalankan

1. Buka folder proyek menggunakan Visual Studio Code.
2. Buka file `index.html` menggunakan browser atau ekstensi Live Server.
3. Jika ingin memeriksa hasil JavaScript, buka Developer Tools pada browser dan lihat bagian Console.

## Teknologi yang Digunakan

* HTML
* JavaScript
* Git
* GitHub

## Penulis

Husain Amal

## 2. Hasil `git log --oneline --graph`
*   189c174 (HEAD -> docs/tebak-jelaskan, origin/docs/tebak-jelaskan) Merge main dan selesaikan konflik dokumentasi
|\  
| *   f58ecf6 (origin/main, origin/HEAD, main) Merge main dan selesaikan konflik pada konflik.txt
| |\  
| | * dba90bd Mengubah isi file dari branch main
| * | ad949ed Mengubah isi file dari branch simulasi
| * | dfbf7d8 (origin/Fix/perbaikan-kode, Fix/perbaikan-kode) feat: menambahkan catatan bug
| * | 9b905bc fix : memperbaiki bug html
| * | 2113539 menambahkan jawaban perbaikan js
* | | d001d9e Delete script.js
* | | 19c4e18 Delete README.md
* | | 35be072 Delete .gitignore
* | | cdaef04 Delete index.html
:
*   189c174 (HEAD -> docs/tebak-jelaskan, origin/docs/tebak-jelaskan) Merge main dan selesaikan konflik dokumentasi
|\  
| *   f58ecf6 (origin/main, origin/HEAD, main) Merge main dan selesaikan konflik pada konflik.txt
| |\  
| | * dba90bd Mengubah isi file dari branch main
| * | ad949ed Mengubah isi file dari branch simulasi
| * | dfbf7d8 (origin/Fix/perbaikan-kode, Fix/perbaikan-kode) feat: menambahkan catatan bug
| * | 9b905bc fix : memperbaiki bug html
| * | 2113539 menambahkan jawaban perbaikan js
* | | d001d9e Delete script.js
* | | 19c4e18 Delete README.md
* | | 35be072 Delete .gitignore
* | | cdaef04 Delete index.html
  
## Hasil `git blame` pada Baris `<title>`

Baris yang diperiksa: `<title>Document</title>`

* Penulis: husain amal
* Commit: `470dbab`
* Tanggal: 10 Oktober 2026


## 4. Jawaban Pertanyaan

### A. Apa beda `git add` dan `git commit`?

`git add` digunakan untuk memilih perubahan yang akan dimasukkan ke tahap persiapan commit. Sementara itu, `git commit` menyimpan perubahan yang sudah dipersiapkan ke dalam riwayat Git.

### B. Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?

Konflik terjadi karena terdapat perubahan yang bertabrakan antara dua branch sehingga Git tidak dapat menggabungkannya secara otomatis. Saya memeriksa bagian yang konflik, menentukan perubahan yang dipertahankan, kemudian menyelesaikan konflik dan membuat commit merge.

### C. Apa beda `fork` dan `clone`? Apa gunanya Pull Request?

`Fork` membuat salinan repositori ke akun GitHub saya sendiri. `Clone` menyalin repositori ke komputer lokal agar bisa dikerjakan. Pull Request digunakan untuk mengusulkan perubahan agar bisa ditinjau sebelum digabungkan ke branch tujuan.
