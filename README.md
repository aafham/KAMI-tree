# KAMI Tree

Website salasilah keluarga interaktif menggunakan HTML, CSS, dan JavaScript vanilla. Fokus utama projek ini ialah memudahkan ahli keluarga melihat tree, cari nama, faham hubungan, tengok birthday, dan view salasilah individu dengan mudah di web view dan mobile view.

README ini juga berfungsi sebagai checklist projek. Item bertanda `[x]` sudah dibuat. Item `[ ]` belum dibuat atau masih perlu dikemas.

## Status Semasa

- Live website utama: https://kami-tree.vercel.app/
- Data semasa: 68 ahli keluarga, 15 hubungan keluarga/pasangan, dan 67 tarikh birthday dalam `data.json`.
- Mode data semasa: view-only. Data utama dibaca daripada `data.json`.
- `storeData()` sengaja dibuat `no-op`, jadi perubahan edit tidak kekal selepas reload.
- Semakan asas terakhir: `app.js` lulus `node --check`.
- Semakan live utama dibuat melalui link Vercel. Local server hanya pilihan developer jika perlu debug.
- Website ada dua pengalaman utama: desktop/web view dan mobile view.
- README dikemas kini pada 2026-06-22.

## Link Website

Website utama untuk pengguna:

```text
https://kami-tree.vercel.app/
```

Semua penggunaan biasa dibuat melalui link Vercel di atas. Tak perlu run local kalau hanya mahu guna website.

## Cara Jalankan Local Untuk Developer

Local server hanya perlu kalau mahu debug atau test perubahan sebelum deploy.

1. Buka folder projek.
2. Jalankan static server:

```bash
python -m http.server 5500
```

3. Buka browser:

```text
http://localhost:5500
```

## Struktur Fail

- `index.html` - struktur UI utama.
- `styles.css` - styling, responsive layout, mobile view, dan visual state.
- `app.js` - logik aplikasi, render tree, birthday page, timeline, relationship finder, settings, dan interaksi.
- `data.json` - sumber data keluarga.
- `scripts/validate-data.js` - validator command line untuk semak struktur data salasilah.
- `audit-shots/` - screenshot audit jika ada.

## Fungsi Yang Sudah Ada

- Paparan tree salasilah keluarga.
- Zoom, fit screen, drag/pan, dan minimap.
- Search nama dan fokus terus ke ahli keluarga.
- Paparan umum untuk kembali ke root/permulaan keluarga.
- Pilih/Fokus Diri Saya per browser/device.
- Reset Diri Saya dalam settings.
- Statistik keluarga.
- Upcoming birthday card yang boleh ditekan untuk buka birthday page.
- Birthday page penuh bulan 1 sampai 12.
- Birthday calendar ada legend warna untuk hari ini, range ke birthday terdekat, dan birthday terdekat.
- Kalendar birthday dengan bulat pada tarikh yang ada birthday.
- Tarikh birthday dalam kalendar boleh buka/tutup bila ditekan.
- Button Buka Semua dan Tutup Semua untuk birthday calendar.
- Tarikh hari ini highlight warna khas.
- Range dari tarikh hari ini sampai birthday terdekat highlight merah lembut.
- Birthday terdekat highlight merah kuat.
- Birthday upcoming terdekat auto buka siap-siap.
- Bila upcoming berubah, tarikh auto-open lama akan tutup dan next birthday baru akan auto buka.
- Search nama dalam birthday page.
- List birthday setiap bulan dengan numbering.
- Timeline keluarga dengan filter generasi, bulan lahir, jantina, dan sort.
- Panel profil ahli keluarga.
- Button aksi dalam profil: fokus dalam tree, cari hubungan, lihat keluarga ini, dan copy link.
- Salasilah individu bila klik nama: atok/nenek, mak/ayah, adik-beradik, pasangan, dan anak.
- Breadcrumb salasilah dalam profil supaya laluan keluarga orang dipilih lebih jelas.
- Quick filter keluarga dalam tree untuk lihat mak/ayah, adik-beradik, anak/cucu, atau keluarga dekat orang dipilih.
- Focused Branch View asas untuk lihat keluarga terdekat individu yang dipilih.
- Relationship Finder asas untuk cari hubungan antara dua ahli.
- Highlight dua ahli yang dibandingkan dalam Relationship Finder.
- Relationship Finder papar laluan nama dan highlight path dalam tree dengan dim pada ahli lain.
- Family Directory untuk senarai semua ahli dengan search dan filter.
- Search sokong keyword Bahasa Melayu seperti `lelaki`, `perempuan`, `hidup`, `meninggal`, `cabang`, `mak`, `ayah`, dan `adik beradik`.
- Data ahli ada field standard `nickname`, `gender`, `status`, dan `branchId`.
- Mobile topbar ada akses cepat kepada Saya, Cari, Directory, Timeline, dan Settings.
- Mobile search overlay untuk cari ahli lebih cepat di phone.
- Homepage controls dipolish dengan search utama, relationship finder compact/collapsible, action row yang lebih minimal, tools tidak terasing, dan stats card yang lebih rendah.
- Tree desktop default/reset guna overview yang lebih usable supaya user tidak perlu cari tree sendiri selepas reset.
- Tree overview ada compact card mode bila zoom jauh, mini toolbar desktop di tepi, dan minimap desktop lebih discoverable.
- Tree ada toolbar ringkas, scroll guide, stats card clickable, dan label generasi yang lebih subtle.
- Layout tree sudah disemak untuk elak card individu bertindih ketika zoom normal, zoom in, zoom out, dan English label.
- Settings untuk tema, bahasa BM/EN, saiz kad, minimap, drag, tarikh lahir, umur, dan tags.
- Umur dikira ikut tahun sahaja, bukan ikut tarikh lahir penuh.
- Export tree kepada JPEG/PDF.

## Panduan Guna Website Dari Awal Sampai Habis

Bahagian ini menerangkan semua fungsi utama yang boleh dibuat dalam website dan cara guna satu per satu.

### 1. Buka Website

1. Buka link rasmi website:

```text
https://kami-tree.vercel.app/
```

2. Website akan load data daripada `data.json`.
3. Paparan awal ialah `Paparan Umum`, bukan fokus kepada seorang ahli tertentu.
4. Jika tree nampak jauh atau tidak terus nampak, tekan `Fit Skrin` atau `Reset View`.

### 2. Faham Paparan Utama

Pada paparan utama, pengguna akan nampak:

- Header website dengan tajuk salasilah.
- Panel kawalan untuk search, relationship finder, zoom, view, download, dan settings.
- Statistik keluarga.
- Tree salasilah keluarga.
- Minimap untuk tengok kedudukan semasa dalam tree.
- Story/profile panel yang akan keluar bila klik ahli keluarga.

### 3. Guna Tree Salasilah

1. Scroll atau drag kawasan tree untuk bergerak kiri, kanan, atas, dan bawah.
2. Tekan `Zoom +` untuk besarkan tree.
3. Tekan `Zoom -` untuk kecilkan tree.
4. Tekan `Reset` untuk kembali kepada zoom asal.
5. Tekan `Fit Skrin` untuk muatkan tree dalam skrin.
6. Tekan `Reset View` untuk reset paparan tree.
7. Klik mana-mana kad ahli keluarga untuk buka panel profil mereka.

Fungsi tree yang boleh dibuat:

- Lihat kedudukan ahli dalam salasilah.
- Lihat generasi keluarga.
- Lihat pasangan dan anak melalui susunan tree.
- Fokus kepada ahli tertentu melalui search atau klik nama.
- Gunakan minimap untuk faham lokasi dalam tree besar.

### 4. Guna Minimap

1. Tekan `Buka Minimap` jika minimap tertutup.
2. Kotak putih dalam minimap menunjukkan kawasan tree yang sedang dilihat.
3. Klik kawasan dalam minimap untuk lompat ke lokasi tree tersebut.
4. Tekan `x` pada minimap untuk tutup.
5. Minimap juga boleh dihidupkan atau dimatikan dalam `Settings`.

### 5. Search Nama Ahli Keluarga

1. Pergi ke bahagian `Carian nama`.
2. Taip nama ahli keluarga.
3. Result akan keluar berdasarkan padanan nama.
4. Klik result nama untuk fokus ke ahli itu.
5. Atau tekan `Cari & Fokus` selepas menaip.

Contoh search:

- `afham` untuk cari nama.
- `lelaki` atau `perempuan` untuk cari ikut jantina.
- `hidup` atau `meninggal` untuk cari ikut status.
- `menantu`, `cucu`, `anak`, `mak`, `ayah`, atau `adik beradik` untuk cari ikut relation/keyword keluarga.
- `cabang hamidun` atau nama cabang untuk cari ikut branch keluarga.

Nota:

- Search sudah sokong nama, nickname, relation, gender, status, cabang, dan beberapa keyword Bahasa Melayu. Search belum lagi sokong fuzzy search untuk salah ejaan kecil.
- Jika nama tidak keluar, semak ejaan nama dalam `data.json`.

### 6. Guna Paparan Umum

1. Tekan `Paparan Umum`.
2. Website akan kembali kepada view salasilah biasa.
3. Fungsi ini sesuai jika pengguna sudah fokus kepada seseorang dan mahu kembali tengok tree secara umum.

### 7. Guna Pilih/Fokus Diri Saya

Fungsi ini untuk setiap pengguna pilih diri sendiri dalam browser/device masing-masing.

Cara guna kali pertama:

1. Tekan `Pilih Diri Saya` atau `Fokus Diri Saya`.
2. Pilih nama sendiri daripada senarai/search yang tersedia.
3. Website akan simpan pilihan itu dalam browser semasa.
4. Selepas itu, tekan `Fokus Diri Saya` untuk terus lompat ke diri sendiri dalam tree.

Jika salah pilih atau device dikongsi:

1. Buka `Settings`.
2. Tekan `Reset Diri Saya`.
3. Pilih semula nama yang betul.

Nota penting:

- Pilihan ini disimpan dalam browser/device itu sahaja.
- Jika buka di phone lain atau browser lain, kena pilih semula.
- Default website masih `Paparan Umum`, bukan fokus kepada `p16` atau mana-mana orang.

### 8. Guna Button Aksi Dalam Profil

Bila klik ahli keluarga, dalam panel profil ada beberapa button aksi:

- `Fokus dalam tree` untuk scroll/fokus semula kepada ahli itu dalam tree.
- `Cari hubungan` untuk masukkan ahli itu sebagai orang pertama dalam Relationship Finder.
- `Lihat keluarga ini` untuk buka Focused Branch View.
- `Copy link` untuk salin link terus kepada ahli tersebut.

Cara guna:

1. Klik mana-mana ahli dalam tree.
2. Panel profil akan terbuka.
3. Tekan aksi yang diperlukan.
4. Jika tekan `Lihat keluarga ini`, tree akan tapis kepada keluarga terdekat ahli itu.

### 9. Guna Focused Branch View

Focused Branch View memudahkan pengguna lihat keluarga kecil seseorang tanpa perlu tengok seluruh tree.

Cara guna:

1. Klik ahli keluarga.
2. Tekan `Lihat keluarga ini`.
3. Tree akan fokus kepada ahli itu bersama keluarga terdekat:
   - atok/nenek
   - mak/ayah
   - adik-beradik
   - pasangan
   - anak
4. Bar `Family view` akan muncul di atas tree bersama guide ringkas.
5. Tekan `Tunjuk Semua` untuk keluar daripada Focused Branch View.

### 10. Guna Relationship Finder

Relationship Finder digunakan untuk cari hubungan antara dua ahli keluarga.

Cara guna:

1. Cari bahagian `Cari hubungan keluarga`.
2. Pilih orang pertama dalam dropdown pertama.
3. Pilih orang kedua dalam dropdown kedua.
4. Tekan `Cari Hubungan`.
5. Website akan tulis hubungan yang dijumpai.
6. Website akan papar laluan nama hubungan.
7. Dua ahli utama dan ahli dalam laluan hubungan akan di-highlight dalam tree.

Hubungan yang boleh dikesan sekarang:

- Orang yang sama.
- Pasangan.
- Ibu/bapa dan anak.
- Anak dan ibu/bapa.
- Adik-beradik.
- Atok/nenek dan cucu.
- Cucu dan atok/nenek.
- Pakcik/makcik dan anak saudara.
- Anak saudara dan pakcik/makcik.
- Sepupu asas.

Limitasi semasa:

- Hubungan ipar, biras, menantu kompleks, moyang jauh, dan hubungan berlapis masih belum lengkap.

### 11. Klik Ahli Dan View Profil

1. Klik mana-mana kad ahli dalam tree.
2. Panel profil akan terbuka.
3. Dalam panel ini pengguna boleh tengok maklumat ahli.

Maklumat yang boleh dipaparkan:

- Nama ahli.
- Relation/generasi jika ada.
- Tarikh lahir jika setting dihidupkan.
- Umur ikut tahun.
- Note ringkas jika ada.
- Story/catatan panjang jika ada.
- Salasilah individu.

Salasilah individu yang dipaparkan:

- Atok/nenek.
- Mak/ayah.
- Adik-beradik.
- Pasangan.
- Anak.

Nama dalam salasilah individu boleh ditekan untuk lompat ke ahli tersebut.

### 12. Edit Profil

Dalam panel profil ada flow edit dalam UI/kod, tetapi projek semasa dianggap `view-only`.

Perkara penting:

- Perubahan edit tidak kekal selepas reload.
- `storeData()` sekarang ialah `no-op`.
- Data sebenar masih datang daripada `data.json`.
- Jika mahu edit kekal, perlu update sistem simpan data dahulu.
- Untuk kegunaan public, lebih baik hide atau buang flow edit sehingga admin mode siap.

### 13. Guna Statistik Keluarga

Bahagian statistik memaparkan:

- Jumlah ahli keluarga.
- Jumlah pasangan/hubungan keluarga.
- Bilangan lelaki dan perempuan.
- Bilangan cucu dan cicit.
- Ulang tahun terdekat.

Kad `Ulang Tahun Terdekat` boleh ditekan untuk buka birthday page.

### 14. Guna Birthday Page

Cara buka birthday page:

1. Tekan kad `Ulang Tahun Terdekat`.
2. Website akan masuk ke page `Semua Birthday`.
3. Tekan `Back ke Home` untuk kembali ke paparan utama.

Apa yang ada dalam birthday page:

- Search nama birthday.
- Button `Buka Semua`.
- Button `Tutup Semua`.
- Kalendar Januari sampai Disember.
- List birthday ikut bulan.
- Numbering sebelah nama dalam list bulanan.

Cara guna kalendar birthday:

1. Cari bulan yang ingin dilihat.
2. Tarikh yang ada birthday akan ada tanda/badge.
3. Tekan tarikh tersebut untuk buka nama ahli yang birthday.
4. Tekan tarikh sama sekali lagi untuk tutup.
5. Tekan beberapa tarikh jika mahu buka banyak birthday serentak.
6. Tekan `Buka Semua` untuk buka semua tarikh birthday.
7. Tekan `Tutup Semua` untuk tutup semua tarikh birthday.

Maksud warna pada kalendar:

- Tarikh hari ini ada highlight warna khas.
- Range dari hari ini sampai birthday terdekat ada highlight merah lembut.
- Birthday terdekat ada highlight merah kuat.
- Birthday upcoming terdekat akan auto terbuka bila page dibuka.
- Bila birthday terdekat sudah lepas, auto-open akan pindah kepada birthday seterusnya.

Cara search birthday:

1. Taip nama dalam input `Cari nama birthday`.
2. Result akan keluar terus semasa menaip.
3. Klik nama dalam result untuk buka/fokus ahli tersebut.

### 15. Guna List Birthday Ikut Bulan

1. Scroll bawah birthday calendar.
2. Setiap bulan ada kad list sendiri.
3. Nama dalam bulan disusun dengan numbering bermula daripada `1`.
4. Klik nama untuk buka/fokus ahli tersebut.

Contoh:

```text
1  Ahmad
2  Fatimah
3  Afham
```

Numbering reset untuk setiap bulan.

### 16. Guna Timeline

Cara buka timeline:

1. Tekan `Lihat Timeline`.
2. Website akan tukar dari tree view kepada timeline view.
3. Tekan `Lihat Tree` untuk kembali ke tree.

Filter timeline yang tersedia:

- Bulan lahir.
- Jantina.
- Sort ikut tahun.
- Sort ikut umur.
- Sort ikut abjad.
- Sort ikut bulan.
- Sort ikut jantina.
- Sort ikut ibu bapa.
- Generasi melalui `Tapis lagi`.

Cara guna:

1. Pilih filter yang mahu digunakan.
2. Timeline akan update ikut pilihan.
3. Active filter akan dipaparkan.
4. Tekan `Reset` untuk kosongkan filter.

### 17. Guna Generation Collapse/Expand

1. Cari bahagian `Generasi (Collapse/Expand)`.
2. Tekan generasi yang mahu disorok atau dibuka.
3. Ini membantu bila tree terlalu besar.

Nota:

- Fungsi ini bergantung kepada struktur generasi yang dibina dalam tree.
- Jika data berubah, semak semula sama ada generasi masih tepat.

### 18. Guna Family Directory

Family Directory ialah senarai semua ahli keluarga dalam bentuk kad/list.

Cara buka:

1. Tekan button `Directory` pada view switch.
2. Senarai ahli keluarga akan dipaparkan.
3. Taip nama dalam search untuk tapis senarai.
4. Pilih generasi untuk lihat generasi tertentu.
5. Pilih jantina untuk tapis lelaki/perempuan.
6. Pilih bulan birthday untuk tapis ahli yang lahir pada bulan tertentu.
7. Pilih cabang keluarga untuk tapis ikut cabang.
8. Pilih status untuk lihat ahli masih hidup, meninggal, atau data belum lengkap.
9. Pilih sort untuk susun ikut generasi, nama, umur, atau birthday.
10. Tekan `Reset` untuk kosongkan filter.
11. Klik mana-mana nama untuk kembali ke tree dan fokus kepada ahli itu.

Directory sesuai digunakan bila user tidak mahu cari dalam tree besar.

### 19. Guna Download / Export

Cara export:

1. Tekan `Download`.
2. Pilih `Image (JPEG)` untuk simpan gambar tree.
3. Pilih `File (PDF)` untuk simpan sebagai PDF.

Nota:

- Export yang aktif sekarang ialah JPEG dan PDF.
- Import/export JSON belum lengkap dalam UI semasa.
- Jika mahu backup data, edit terus `data.json` atau tambah semula UI backup JSON nanti.

### 20. Guna Settings

Cara buka:

1. Tekan `Settings`.
2. Modal settings akan terbuka.
3. Ubah pilihan yang diperlukan.
4. Tekan `Tutup` atau klik luar modal untuk tutup.

Setting paparan:

- `Saiz Kad` untuk kecilkan atau besarkan kad ahli.
- `Tema` untuk pilih Default, Heritage, Ocean, atau Sunset.
- `Light / Dark` untuk tukar mode cerah/gelap.
- `BM / EN` untuk tukar bahasa.
- `Compact Mode` untuk ringkaskan paparan.
- `Show Birthdate` untuk papar/sembunyi tarikh lahir.
- `Show Age` untuk papar/sembunyi umur.
- `Show Tags` untuk papar/sembunyi tags.

Setting navigation:

- `Minimap` untuk hidup/matikan minimap.
- `Drag to Pan` untuk hidup/matikan drag tree.

Tools dalam settings:

- `Reset Settings` untuk reset preference paparan.
- `Reset Diri Saya` untuk buang pilihan diri sendiri dalam browser itu.
- `Clear Cache` untuk clear cache/data sementara website.

### 21. Guna Mobile View

Pada phone/mobile, website ada susun atur khas.

Fungsi mobile:

- Topbar dengan button `Saya`.
- Topbar dengan button `Cari`.
- Topbar dengan button `Directory`.
- Topbar dengan button `Timeline`.
- Button `Cari` membuka search overlay khas mobile.
- Button settings.
- Button `Buka Panel`.
- Mobile quick actions untuk zoom dan fit screen.
- Tree masih boleh pan/zoom.
- Birthday page responsive.
- Timeline boleh dibuka melalui view switch.

Cara guna mobile:

1. Guna `Cari` untuk buka search overlay dan cari nama ahli.
2. Guna `Directory` untuk buka senarai semua ahli.
3. Guna `Timeline` untuk buka timeline keluarga.
4. Tekan `Buka Panel` jika mahu buka controls penuh.
5. Guna `Saya` untuk fokus diri sendiri jika sudah dipilih.
6. Guna `Zoom +`, `Zoom -`, dan `Fit Skrin` untuk kawal tree.
7. Klik kad ahli untuk buka profil.
8. Tekan birthday card untuk buka birthday page.
9. Tekan settings icon untuk ubah paparan.

Nota mobile:

- Tree besar memang perlu pan/zoom.
- Focused Branch View asas sudah ada dan boleh bantu kecilkan paparan kepada keluarga terdekat.
- Search mobile sudah ada overlay khas, tetapi keyboard navigation boleh ditambah kemudian.

### 22. Clear Cache / Reset

Gunakan reset jika website nampak pelik selepas banyak setting:

1. Buka `Settings`.
2. Tekan `Reset Settings` untuk reset paparan.
3. Tekan `Reset Diri Saya` jika mahu buang pilihan diri sendiri.
4. Tekan `Clear Cache` jika perlu clear cache/data sementara.
5. Reload browser.

### 23. Aliran Guna Yang Dicadangkan Untuk User Baru

1. Buka website.
2. Tekan `Fit Skrin`.
3. Tengok statistik keluarga.
4. Cari nama sendiri melalui search.
5. Pilih diri sendiri jika mahu guna `Fokus Diri Saya`.
6. Klik nama sendiri dan lihat salasilah individu.
7. Tekan `Lihat keluarga ini` untuk cuba Focused Branch View.
8. Cuba Relationship Finder untuk cari hubungan dengan ahli lain.
9. Buka birthday page melalui kad `Ulang Tahun Terdekat`.
10. Buka `Directory` untuk cari ahli melalui senarai.
11. Semak timeline untuk lihat susunan umur/tahun.
12. Ubah settings jika paparan terlalu kecil atau besar.

## Nota Penting Tentang "Diri Saya"

- Website tidak menetapkan satu orang sebagai diri semua pengguna.
- Default website ialah `Paparan Umum`.
- Jika pengguna mahu fokus kepada diri sendiri, pengguna perlu pilih diri sendiri dahulu.
- Pilihan diri sendiri disimpan dalam `localStorage` browser sebagai `familyTreeSelfId`.
- Maksudnya pilihan itu hanya untuk browser/device itu sahaja.
- Jika buka di laptop lain, phone lain, atau browser lain, perlu pilih semula.
- Jika device dikongsi ramai orang, tekan `Reset Diri Saya` dahulu sebelum pengguna lain pilih diri mereka.
- Untuk simpan pilihan merentas semua device, projek perlukan login dan database.

## Isu Semasa Yang Perlu Perhatian

- Edit profil masih boleh wujud dalam UI/kod, tetapi perubahan tidak disimpan kekal kerana mode semasa view-only.
- Kod import/export JSON masih ada, tetapi UI import/export JSON tidak lengkap dalam HTML semasa.
- Hook JavaScript lama untuk elemen HTML yang sudah tiada telah dibersihkan. Jika UI lama mahu dihidupkan semula, tambah semula HTML dan event handler dengan jelas.
- Password edit masih hardcoded sebagai `1234` jika flow edit digunakan.
- Banyak ahli belum ada gambar/avatar.
- Satu ahli belum ada tarikh lahir.
- Tarikh meninggal kosong untuk kebanyakan ahli. Perlu beza antara "masih hidup" dan "data belum lengkap".
- Data sudah ada field explicit seperti `gender`, `nickname`, `branchId`, dan `status`.
- Branch color masih bergantung kepada ID tertentu.
- Relationship Finder masih asas, belum ada path penuh atau semua jenis hubungan kompleks.
- Belum ada automated browser test untuk sahkan desktop dan mobile view secara konsisten.
- Jika data nanti datang daripada input pengguna luar, semua text perlu sanitasi penuh sebelum masuk ke `innerHTML`.

## Full Checklist Website

### 1. Asas Projek

- [x] Website boleh jalan sebagai static site.
- [x] Data keluarga dibaca daripada `data.json`.
- [x] Struktur asas `people` dan `unions` digunakan.
- [x] README menerangkan cara jalankan website.
- [x] README ada status semasa projek.
- [x] README ada checklist penuh.
- [x] Tambah link live Vercel sebagai website utama.
- [ ] Tambah arahan deploy semula ke Vercel jika proses deploy perlu didokumenkan.
- [ ] Tambah changelog ringkas untuk rekod update besar.
- [ ] Tambah versi projek seperti `v0.1`, `v0.2`, dan seterusnya.

### 2. Data Keluarga

- [x] Data semasa ada 68 ahli.
- [x] Data semasa ada 15 union keluarga/pasangan.
- [x] Majoriti ahli ada tarikh lahir.
- [x] ID ahli digunakan untuk hubungkan parent, spouse, dan children.
- [x] Tambah `nickname` untuk nama panggilan.
- [x] Tambah `gender` explicit supaya tidak perlu agak daripada nama.
- [x] Tambah `branchId` untuk cabang keluarga.
- [x] Tambah `status` seperti `living`, `deceased`, atau `unknown`.
- [ ] Tambah `photo` sebenar untuk ahli keluarga.
- [ ] Tambah `placeOfBirth`, `currentLocation`, atau tempat tinggal jika perlu.
- [ ] Tambah nota data untuk bezakan "tiada data" dan "tidak berkaitan".
- [ ] Semak semua tarikh lahir yang kosong atau tidak lengkap.
- [x] Buat script validator data yang check ID pendua, union rosak, child tanpa parent, dan tarikh pelik.
- [ ] Buat Data Completeness Dashboard untuk senarai data yang belum lengkap.

### 3. Tree Salasilah

- [x] Tree utama boleh render ahli keluarga.
- [x] Kad ahli boleh ditekan untuk buka panel profil.
- [x] Zoom in, zoom out, reset zoom, dan fit screen tersedia.
- [x] `Reset View` kembali kepada overview yang usable, bukan zoom-in tepi.
- [x] Drag/pan tersedia.
- [x] Minimap tersedia.
- [x] Auto-focus root/general view selepas load.
- [x] Default/reset tree desktop guna overview/fit yang lebih mudah dilihat.
- [x] Ada `Paparan Umum`.
- [x] Ada `Pilih/Fokus Diri Saya`.
- [x] Pilihan diri sendiri disimpan per browser/device.
- [x] Ada reset pilihan diri sendiri.
- [x] Tambah Focused Branch View asas untuk lihat keluarga kecil sahaja.
- [ ] Tambah collapse/dim cabang lain bila fokus satu cabang.
- [ ] Tambah label generasi yang lebih jelas seperti Generasi 1, 2, 3, 4.
- [x] Tambah breadcrumb salasilah untuk orang dipilih.
- [x] Tambah button `Fokus dalam tree` dalam panel profil.
- [x] Tambah button `Lihat keluarga ini` dalam panel profil.
- [x] Tambah button `Cari hubungan` dalam panel profil.
- [x] Tambah button `Copy link` dalam panel profil.
- [x] Tambah quick filter `Mak/Ayah`, `Adik-beradik`, `Anak/Cucu`, dan `Keluarga dekat`.
- [ ] Tambah button khusus `Lihat pasangan` dalam profil jika masih perlu.
- [ ] Tambah branch overview untuk setiap anak utama.
- [ ] Pastikan tree masih selesa bila data bertambah lebih 100 ahli.

### 4. Search Dan Navigasi

- [x] Search nama asas tersedia.
- [x] Search boleh fokus terus ke ahli dalam tree.
- [x] Search ada pada desktop controls.
- [x] Mobile ada akses search melalui panel/action.
- [x] Jadikan search lebih jelas sebagai aksi utama di mobile melalui overlay.
- [x] Search ikut nickname.
- [x] Search ikut cabang.
- [x] Search ikut status/gender/relation.
- [x] Search faham keyword Bahasa Melayu seperti `lelaki`, `perempuan`, `hidup`, `meninggal`, `mak`, `ayah`, dan `adik beradik`.
- [ ] Tambah fuzzy search untuk salah ejaan kecil.
- [ ] Search ikut generasi.
- [ ] Search ikut ibu/bapa, contoh "anak Noor Azizan".
- [ ] Search ikut pasangan.
- [x] Search ikut relation seperti cucu, cicit, menantu.
- [ ] Papar result search dalam kategori.
- [ ] Tambah keyboard navigation untuk result search.

### 5. Profil Individu

- [x] Panel profil buka bila klik ahli.
- [x] Profil papar nama, relation, tarikh lahir, note, dan story jika ada.
- [x] Profil papar salasilah individu.
- [x] Profil papar breadcrumb salasilah ringkas.
- [x] Salasilah individu papar atok/nenek.
- [x] Salasilah individu papar mak/ayah.
- [x] Salasilah individu papar adik-beradik.
- [x] Salasilah individu papar pasangan.
- [x] Salasilah individu papar anak.
- [x] Nama dalam salasilah individu boleh ditekan.
- [x] Profil ada button aksi untuk fokus tree, cari hubungan, family view, dan copy link.
- [ ] Tambah avatar/gambar dalam panel profil.
- [ ] Tambah nama panggilan.
- [ ] Tambah tempat tinggal atau lokasi semasa jika sesuai.
- [ ] Tambah pekerjaan atau info ringkas.
- [ ] Tambah status data lengkap/tidak lengkap.
- [x] Tambah copy link direct kepada ahli tertentu.
- [ ] Tambah print profile individu.

### 6. Relationship Finder

- [x] Pilih dua ahli keluarga.
- [x] Cari hubungan asas.
- [x] Detect pasangan.
- [x] Detect parent/child.
- [x] Detect adik-beradik.
- [x] Detect atok/nenek dan cucu.
- [x] Detect pakcik/makcik dan anak saudara.
- [x] Detect sepupu asas.
- [x] Highlight ahli yang dibandingkan.
- [x] Highlight laluan penuh antara dua ahli dalam tree.
- [x] Dim ahli lain bila path hubungan aktif supaya laluan lebih jelas.
- [x] Papar laluan nama hubungan, contoh A -> ibu -> nenek -> cucu.
- [ ] Sokong hubungan menantu/ipar/biras dengan lebih tepat.
- [ ] Sokong hubungan generasi jauh seperti moyang dan cicit jauh.
- [ ] Tambah button cepat `Cari hubungan dengan orang ini` dalam profil.
- [ ] Tambah share result hubungan.

### 7. Birthday Page

- [x] Upcoming birthday card boleh ditekan.
- [x] Birthday page ada button back ke home.
- [x] Birthday page ada search nama.
- [x] Kalendar birthday papar bulan Januari sampai Disember.
- [x] Tarikh yang ada birthday ada tanda bulat/badge.
- [x] Bila tekan tarikh birthday, nama orang birthday dipaparkan.
- [x] Bila tekan tarikh sama sekali lagi, detail tutup.
- [x] Boleh buka banyak tarikh serentak.
- [x] Ada button Buka Semua.
- [x] Ada button Tutup Semua.
- [x] List birthday ikut bulan tersedia.
- [x] List nama dalam bulan ada numbering.
- [x] Tarikh hari ini highlight warna lain.
- [x] Range dari hari ini ke birthday terdekat highlight merah lembut.
- [x] Birthday terdekat highlight merah kuat.
- [x] Birthday upcoming terdekat auto terbuka.
- [x] Bila upcoming berubah, auto-open pindah ke birthday seterusnya.
- [x] Tambah legend kecil untuk warna hari ini, range, dan next birthday.
- [ ] Tambah filter birthday ikut bulan.
- [ ] Tambah sort birthday ikut nama atau tarikh.
- [ ] Tambah umur akan datang pada birthday, contoh "jadi 25 tahun".
- [ ] Tambah export birthday list ke PDF/CSV.
- [ ] Tambah reminder atau copy calendar event jika perlu.

### 8. Timeline

- [x] Timeline view tersedia.
- [x] Filter generasi tersedia.
- [x] Filter bulan lahir tersedia.
- [x] Filter jantina tersedia.
- [x] Sort timeline tersedia.
- [x] Active filter chip tersedia.
- [ ] Tambah search dalam timeline.
- [ ] Tambah grouping timeline ikut dekad.
- [ ] Tambah event selain birth/death seperti kahwin, pindah, atau milestone.
- [ ] Tambah link dari timeline terus fokus ke tree.

### 8A. Family Directory

- [x] Tambah page Family Directory.
- [x] Directory papar semua ahli keluarga dalam bentuk kad/list.
- [x] Directory ada search nama/relation.
- [x] Directory ada filter generasi.
- [x] Directory ada filter jantina.
- [x] Directory ada filter birthday month.
- [x] Directory ada filter cabang.
- [x] Directory ada filter status/data belum lengkap.
- [x] Directory ada sort ikut generasi, nama, umur, atau birthday.
- [x] Directory ada reset filter.
- [x] Klik ahli dalam Directory akan kembali ke tree dan fokus orang itu.
- [ ] Tambah export Directory ke CSV/PDF.

### 9. Web View / Desktop

- [x] Header, controls, stats, dan tree tersedia.
- [x] Layout desktop boleh digunakan untuk scan tree besar.
- [x] Relationship Finder berada di controls.
- [x] Relationship Finder boleh dibuka/tutup supaya homepage kurang semak.
- [x] Relationship Finder dibuat compact bila tertutup.
- [x] Settings tersedia.
- [x] Export JPEG/PDF tersedia.
- [x] Jadikan toolbar lebih ringkas untuk desktop.
- [x] Bezakan action utama, view action, dan zoom/tool action.
- [x] Kemaskan `Download` dan `Tetapan` supaya tidak terasing di bawah kanan.
- [x] Rendahkan stats card supaya tree lebih cepat muncul.
- [x] Smoothkan dark mode header transition.
- [x] Kurangkan ruang kosong tree dan tambah padding bawah supaya mini toolbar tidak tindih kad.
- [x] Jadikan minimap lebih discoverable di desktop.
- [x] Pindahkan mini toolbar desktop ke tepi supaya tidak menutup kad bawah.
- [x] Tambah compact card mode bila tree di zoom jauh.
- [x] Semak dan baiki jarak generasi supaya kad individu tidak overlap ketika zoom dan ketika UI English aktif.
- [x] Tambah tree toolbar atas tree untuk Fit, Reset View, dan Minimap.
- [x] Tambah horizontal scroll guide untuk tree besar.
- [x] Jadikan stats card boleh ditekan untuk buka Directory/Birthday.
- [x] Polish label generasi supaya lebih subtle.
- [ ] Tambah sticky quick actions untuk Search, Fit, Paparan Umum, dan Relationship Finder.
- [ ] Buat visual QA desktop untuk viewport 1440x1000.
- [ ] Buat visual QA desktop untuk viewport 1024x768.

### 10. Mobile View

- [x] Mobile view ada topbar.
- [x] Mobile view ada bottom sheet/panel.
- [x] Mobile search overlay tersedia.
- [x] Mobile quick zoom tersedia.
- [x] Mobile boleh tukar Tree/Timeline/Birthday melalui flow sedia ada.
- [x] Mobile topbar ada akses cepat ke Directory dan Timeline.
- [x] Birthday page responsive.
- [x] List birthday mobile disusun grid/responsive.
- [x] Jadikan search sebagai aksi utama mobile.
- [ ] Tambah bottom nav ringkas penuh: Tree, Search, Birthday, Timeline, Settings.
- [ ] Ringkaskan statistik mobile supaya tree cepat nampak.
- [x] Focused Branch View asas boleh digunakan di mobile.
- [ ] Tambah Focused Branch View khas mobile yang lebih ringkas.
- [ ] Kurangkan keperluan pan/zoom untuk user baru.
- [ ] Buat visual QA mobile untuk viewport 390x844.
- [ ] Buat visual QA mobile untuk viewport 360x740.
- [ ] Semak semula horizontal overflow pada device sebenar.

### 11. Settings Dan Preference

- [x] Bahasa BM/EN tersedia.
- [x] Tema tersedia.
- [x] Saiz kad boleh diubah.
- [x] Minimap boleh dikawal.
- [x] Drag/pan boleh dikawal.
- [x] Tarikh lahir boleh dipapar/sembunyi.
- [x] Umur boleh dipapar/sembunyi.
- [x] Tags boleh dipapar/sembunyi.
- [x] Reset Diri Saya tersedia.
- [ ] Tambah reset semua preference.
- [ ] Pastikan semua setting yang ada dalam JS juga ada UI sebenar, atau buang hook lama.
- [ ] Tambah tooltip pendek untuk setting yang kurang jelas.

### 12. Export, Import, Dan Backup

- [x] Export JPEG tersedia.
- [x] Export PDF tersedia.
- [ ] Putuskan sama ada import/export JSON mahu disokong dalam UI.
- [ ] Jika mahu view-only, buang kod import/export JSON yang tidak digunakan.
- [ ] Jika mahu editable, tambah UI backup JSON.
- [ ] Tambah restore/import JSON dengan validation.
- [ ] Tambah export CSV untuk birthday list.
- [ ] Tambah export CSV untuk directory ahli.

### 13. Edit/Admin

- [x] Mode semasa jelas sebagai view-only dalam README.
- [x] `storeData()` tidak menyimpan perubahan kerana guna `data.json` sebagai sumber utama.
- [ ] Putuskan sama ada website ini public view-only atau ada admin mode.
- [ ] Jika view-only, sembunyikan/buang semua flow edit.
- [ ] Jika admin mode, ganti password hardcoded `1234`.
- [ ] Jika admin mode, tambah login sebenar.
- [ ] Jika admin mode, simpan data ke backend atau export JSON dengan jelas.
- [ ] Tambah validation sebelum simpan ahli baru atau edit ahli.
- [ ] Tambah audit log perubahan data jika ramai admin.

### 14. Privacy Dan Keselamatan

- [x] Data sekarang static dan local.
- [ ] Tentukan data mana boleh public.
- [ ] Privacy mode untuk sembunyikan tarikh lahir penuh ahli hidup.
- [ ] Papar hanya umur atau bulan lahir untuk public view jika perlu.
- [ ] Sanitasi semua data sebelum masuk HTML.
- [ ] Buang password hardcoded jika edit/admin digunakan.
- [ ] Tambah nota privasi dalam README atau halaman website.

### 15. Testing Dan Quality Check

- [x] `node --check app.js` digunakan untuk semak syntax.
- [x] `data.json` boleh parse sebagai JSON.
- [x] `git diff --check` digunakan untuk semak whitespace.
- [ ] Tambah script `npm` atau command tetap untuk test.
- [x] Tambah data validator command line.
- [ ] Tambah unit test untuk relationship helper.
- [ ] Tambah unit test untuk birthday helper.
- [ ] Tambah visual test desktop.
- [ ] Tambah visual test mobile.
- [ ] Tambah checklist manual sebelum deploy.

## Keutamaan Kerja Seterusnya

### Paling penting

1. Putuskan mode sebenar: view-only atau admin/editable.
2. Bersihkan kod lama yang refer elemen HTML yang sudah tiada.
3. Kembangkan Focused Branch View supaya boleh pilih jenis keluarga yang mahu dilihat.
4. Baiki warning data yang tinggal seperti ahli tanpa tarikh lahir.
5. Tambah gambar/avatar ahli keluarga.

### Penting selepas itu

1. Tambah gambar/avatar ahli.
2. Tambah share/copy link untuk ahli tertentu.
3. Tambah hubungan ipar/biras/menantu yang lebih tepat.
4. Tambah export Directory ke CSV/PDF.
5. Buat QA desktop dan mobile dengan viewport tetap.

### Boleh buat kemudian

1. Export birthday list ke CSV/PDF.
2. Print mode A4/A3.
3. Data Completeness Dashboard.
4. Admin mode dengan login dan backend.
5. Privacy mode untuk public sharing.

## Cadangan UX Tree Supaya Mudah Cari Family

Cara paling mudah untuk pengguna salasilah keluarga:

1. Search kuat.
   Pengguna boleh cari nama penuh, nama panggilan, relation, cabang, ibu/bapa, pasangan, atau generasi.

2. Klik ahli dan terus nampak keluarga terdekat.
   Panel individu perlu terus papar atok/nenek, mak/ayah, adik-beradik, pasangan, dan anak. Ini sudah dibuat sebagai asas.

3. Focused Branch View.
   Bila klik seseorang, website boleh fokus kepada keluarga kecil orang itu sahaja. Asas fungsi ini sudah dibuat; update seterusnya boleh tambah pilihan jenis keluarga dan paparan mobile yang lebih ringkas.

4. Relationship Finder.
   Pengguna pilih dua orang, website tulis hubungan dalam bahasa mudah dan highlight laluan dalam tree.

5. Birthday dan directory.
   Selain tree, pengguna boleh cari ahli melalui birthday page atau directory senarai nama.

## Format Data Ringkas

Data utama ada dua bahagian:

- `people`: senarai ahli keluarga.
- `unions`: senarai pasangan dan anak.

Contoh minimum:

```json
{
  "people": [
    { "id": "p1", "name": "Ali", "birth": "1980-02-16" },
    { "id": "p2", "name": "Aisyah", "birth": "1982-05-03" },
    { "id": "p3", "name": "Anak", "birth": "2010-01-10" }
  ],
  "unions": [
    { "id": "u1", "partner1": "p1", "partner2": "p2", "children": ["p3"] }
  ]
}
```

Cadangan format data masa depan:

```json
{
  "id": "p1",
  "name": "Ali Bin Abu",
  "nickname": "Ali",
  "gender": "male",
  "birth": "1984-12-29",
  "death": "",
  "status": "living",
  "relation": "Menantu",
  "branchId": "p5",
  "photo": "",
  "note": "",
  "story": ""
}
```

## Command Semakan

Semak JavaScript:

```bash
node --check app.js
```

Semak JSON:

```bash
node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('data.json','utf8')); console.log('data.json OK')"
```

Semak struktur salasilah:

```bash
node scripts/validate-data.js data.json
```

Semak whitespace dalam diff:

```bash
git diff --check
```
