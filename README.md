# KAMI Tree

KAMI Tree ialah website salasilah keluarga interaktif untuk menyimpan, melihat dan memahami hubungan antara ahli keluarga dalam satu tempat.

**Website:** [kami-tree.vercel.app](https://kami-tree.vercel.app/)

> Audit dan housekeeping terakhir: **22 Julai 2026** · data semasa: **2026-09-05**

## Paparan Tarikh Lahir dan Umur — 6 September 2026

- [x] Tarikh lahir menggunakan nama bulan penuh dan titik: `21.November.1994`.
- [x] Umur berada pada baris di bawah: `Umur: 32 tahun` (English: `Age: 32 years`).
- [x] Diselaraskan pada panel profil Tree/carian, halaman profil, kad Tree,
  Direktori, Timeline, kad ahli dalam profil serta teks kongsi/cetak profil.
- [x] Jubin tarikh lahir pada panel profil menggunakan lebar penuh supaya tarikh
  panjang tidak bersesak dalam dua kolum. Warna dan tema sedia ada dikekalkan.
- [x] Umur kekal tahun semasa tolak tahun lahir; tiada tarikh atau rekod keluarga
  diubah. Rekod tahun sahaja tidak diberi hari/bulan rekaan. Paparan kematian,
  tarikh acara birthday berulang dan format export CSV dikekalkan.
- [x] `npm run check` lulus: sintaks, 69 ahli/16 pasangan dan **17/17 ujian**.
  Ujian meliputi BM/EN, bulan penuh, umur 0/1/32, tarikh kosong, tahun sahaja,
  keselamatan teks import serta susunan tarikh sebelum umur. Amaran lama `p45`
  tanpa tarikh lahir kekal. Tiada dakwaan ujian visual baharu pada telefon fizikal.
- URL versi CSS/JavaScript dikemas kini untuk menerima paparan baharu selepas refresh.

## Progress UI Website — Batch 1, 5 September 2026

Empat keutamaan daripada audit UI 5 September diselesaikan. Skop kekal pada
website; reka bentuk asas, hosting Vercel, data keluarga dan kedua-dua app tidak
diubah. Ini bukan tanda semua cadangan audit sudah selesai.

- [x] **Carian telefon:** panel muat dalam viewport, input kekal 52px, hasil tidak
  meregang apabila hanya seorang ditemui, dan senarai panjang scroll di dalam
  panel. Header dipadatkan apabila ruang menegak rendah.
- [x] **Kontras dark mode:** warna teks berasingan untuk permukaan primary cerah;
  butang, tab aktif dan penanda birthday menggunakan pasangan warna yang sesuai.
  Butang ghost, latar gelap dan hover profil dikekalkan mengikut permukaannya.
- [x] **Navigasi utama:** Home, Tree, Direktori, Birthday dan Timeline bermula di
  atas selepas dipilih; kad birthday Home turut dikemas kini. Tiada reset global
  dalam render yang mengganggu fokus ahli, pilihan tarikh atau Back profil.
- [x] **Tetapan:** butang Tutup/Close kekal kelihatan ketika panel discroll;
  klik label/ikon, backdrop dan Escape menggunakan laluan penutupan yang sama.
  Sorotan serta `aria-current` mengikut panel yang benar-benar aktif. Fokus
  dipulangkan kepada pembuka apabila ditutup, tanpa mencuri fokus ketika tukar menu.

### Pengesahan batch ini

- `npm run check`: semakan sintaks, data dan **10/10 ujian regresi navigasi/Tetapan**
  lulus. Ujian state menggunakan kod fungsi sebenar dengan DOM ringkas; bukan
  pengganti ujian browser.
- Browser Chromium: carian kosong/satu/banyak hasil, lima menu utama, Tutup/Escape,
  label BM/EN serta empat preset warna gelap diperiksa pada telefon, tablet dan desktop.
  Matriks lulus: **320×640, 390×844, 800×900, 1440×900, 390×360 dan 844×390**.
- Amaran data lama `p45` tiada tarikh lahir kekal. Tiada rekod keluarga diubah.
- URL versi CSS/JavaScript dinaikkan supaya browser mengambil pembaikan baharu.
- Tiada dakwaan ujian telefon fizikal, keyboard Android/iOS atau pematuhan WCAG
  menyeluruh. Bukti screenshot keluarga disimpan di luar repo.

### Baki audit UI — belum dibuat

- [ ] Minimap Tree tersembunyi dan saiz teks Overview terlalu kecil.
- [ ] Saiz tulisan yang konsisten serta label navigasi tablet yang aksesibel.
- [ ] Padatkan Home, toolbar Direktori/Birthday/Timeline dan tindakan profil.
- [ ] Selaraskan panel profil carian dengan halaman profil Direktori.
- [ ] Label umur/angka kosong profil, istilah BM/EN dan mesej awal carian.
- [ ] Fokus keyboard penuh, semantik penapis desktop dan fokus planner birthday.
- [ ] Housekeeping CSS berperingkat dan optimasi gambar web.

## Kemas Kini Data — 5 September 2026

- Pasangan **Umar Abdul Aziz bin Noor Azri** dalam cabang keluarga **Noor Azri** ditambah: **Nur Nabihah binti Yusnasri**, lahir **13 November 2005**.
- Rekod `p71` dihubungkan dengan Umar (`p59`) melalui pasangan `u16`; tiada anak atau tarikh perkahwinan ditambah kerana belum diberikan.
- Jumlah data kini **69 ahli dan 16 pasangan**. Rekod keluarga sedia ada dikekalkan.
- Perubahan ini untuk **website sahaja**; app KAMI Tree main dan KAMI 2.0 tidak diubah.
- Pengesahan: `npm run check` lulus; pautan pasangan dua hala, sambungan salasilah, birthday `13 Nov` dalam BM/EN dan pemeliharaan semua rekod lama disemak. Amaran lama `p45` tiada tarikh lahir masih kekal; tiada tarikh diteka.
- Selepas deployment, muat semula website ketika online untuk menerima data baharu; tidak perlu padam tetapan browser.

## Status Dan Progress

Jadual berikut ialah anggaran sejarah audit 22 Julai, bukan ukuran kelulusan UI
terkini. Progress UI semasa ditunjukkan dalam checklist di atas.

| Bahagian | Progress | Keadaan semasa | Baki utama |
| --- | ---: | --- | --- |
| Fungsi website keluarga | **100%** | Tree, profil, carian, direktori, birthday, timeline, tetapan dan export/import berfungsi; semakan kod/data lulus. | Ujian visual peranti sebenar selepas deployment. |
| Ketahanan data browser | **95%** | Import, cache dan reset data kini disahkan sebelum disimpan. | Sahkan tarikh lahir `p45` apabila keluarga mengesahkannya. |
| Housekeeping repository | **90%** | Dokumentasi, ignore rules dan arahan semakan dikemas kini. | Archive screenshot audit/foto lama di luar Git selepas backup privasi disahkan. |
| Privasi sebenar untuk public | **20%** | PIN mengunci UI sahaja. | Data contoh atau backend/log masuk diperlukan sebelum data keluarga boleh dianggap private secara teknikal. |

Butiran audit, risiko dan keputusan yang masih diperlukan ada di [docs/AUDIT_2026-07-22.md](docs/AUDIT_2026-07-22.md).

## Tujuan Website

- Memaparkan salasilah keluarga secara visual dari generasi awal hingga generasi terkini.
- Memudahkan ahli keluarga mencari seseorang, melihat maklumat asas dan memahami pertalian keluarga.
- Menjadi rujukan bersama untuk nama, tarikh lahir, pasangan, anak, cucu, cicit, catatan dan sejarah keluarga.
- Memudahkan semakan birthday sepanjang tahun.

## Maklumat Semasa

- Data keluarga dibaca daripada `data.json`.
- Paparan dioptimumkan untuk desktop dan telefon.
- Bahasa Melayu dan English disokong.
- Light mode dan dark mode tersedia.
- Pilihan pengguna seperti tema, saiz tulisan, ahli disimpan dan paparan Home disimpan pada browser/peranti sendiri.
- Home boleh dilihat tanpa log masuk; halaman dan maklumat keluarga lain dilindungi PIN keluarga.

## Akses Keluarga

Home kekal terbuka sebagai paparan ringkas. Untuk membuka `Tree`, `Direktori`, `Birthday`, `Timeline`, `Tetapan`, carian penuh atau profil ahli, pengguna perlu masukkan PIN keluarga empat digit.

- Paparan PIN menggunakan empat kotak nombor.
- Pada telefon, medan PIN membuka keyboard nombor sahaja.
- Selepas PIN betul dimasukkan, akses kekal aktif selama satu jam selagi pengguna masih berinteraksi dengan website.
- Selepas satu jam tanpa klik, sentuhan, scroll atau keypress, website terkunci semula dan kembali ke Home.
- PIN ialah kunci akses antaramuka untuk kegunaan keluarga. Website statik tidak menyediakan perlindungan server-side; jangan guna PIN ini sebagai pengganti sistem login jika data perlu dilindungi daripada pengguna teknikal.

## Navigasi

### Desktop

Navigation bar di atas menyediakan halaman berikut:

- `Home` - ringkasan keluarga dan pintu masuk cepat.
- `Tree` - salasilah keluarga interaktif.
- `Direktori` - senarai semua ahli keluarga.
- `Birthday` - kalendar birthday dan planner bulanan.
- `Timeline` - ahli keluarga mengikut tahun kelahiran.
- `Tetapan` - paparan, navigasi, tema, data dan maklumat website.

Ikon gambar selepas `Tetapan` pada desktop menutup atau memaparkan foto keluarga di Home.

### Mobile

Navigation berada tetap di bawah skrin:

`Home` · `Tree` · `Direktori` · `Birthday` · `Timeline` · `Tetapan`

Setiap item mempunyai kawasan sentuhan yang besar supaya mudah digunakan oleh pelbagai golongan umur. Pada mobile, navigation bawah kekal di tempatnya walaupun gambar keluarga dipaparkan.

## Halaman Dan Fungsi

### Home

Home memberi gambaran keseluruhan keluarga:

- Jumlah ahli keluarga.
- Jumlah pasangan.
- Jumlah lelaki dan perempuan.
- Jumlah cucu dan cicit.
- Birthday paling hampir.
- `Lihat Tree Keluarga` untuk terus masuk ke salasilah.
- `Search Global` untuk carian menyeluruh.
- `Ahli Disimpan` untuk favourite yang dipin.

#### Foto keluarga di Home

Foto keluarga dipaparkan sebagai latar Home pada desktop. Kad statistik dan butang Home menggunakan latar lut sinar supaya foto masih dapat dilihat.

Dalam `Tetapan > Paparan` ada slider `Butang Home jelas`:

- **Kiri / tutup:** kad lebih lut sinar, gambar keluarga lebih jelas.
- **Kanan / hidup:** kad dan butang lebih jelas, sesuai apabila mahu membaca dengan lebih mudah.

Pilihan ini hanya disimpan pada browser/peranti pengguna tersebut.

### Tree Keluarga

Tree ialah paparan salasilah utama.

- Drag atau scroll untuk bergerak ke cabang lain.
- `Zoom +` dan `Zoom -` untuk membesarkan atau mengecilkan tree.
- `Fit Skrin` untuk memasukkan tree pada ruang paparan.
- `Reset` mengembalikan zoom asal.
- `Reset View` mengembalikan kedudukan paparan tree.
- `Overview`, `Detail` dan `Branch` menukar tahap maklumat tree.
- `Buka Minimap` menunjukkan peta kecil kedudukan semasa dalam tree.
- Carian nama boleh fokus terus kepada ahli pada tree.
- `Cari hubungan keluarga` membandingkan dua individu berdasarkan data semasa.
- Kawalan generasi G1 hingga G4 boleh melipat atau membuka generasi.

Tekan kad ahli pada Tree untuk membuka panel sisi di desktop atau profil di mobile. Kad memaparkan nama paparan, jantina, umur mengikut tahun dan maklumat yang dipilih dalam Tetapan.

### Global Search

Global Search boleh dicapai daripada Home dan carian berkaitan pada website.

Carian menyokong:

- Nama penuh.
- Nama paparan atau nickname.
- Hubungan keluarga.
- Cabang keluarga.
- Jantina.
- Maklumat pemergian, jika direkodkan.
- Bulan birthday.

Setiap hasil boleh membuka profil atau fokus terus ke Tree.

### Family Directory

Direktori menyediakan senarai semua ahli keluarga dalam format kad.

- Cari menggunakan nama, nickname, cabang atau hubungan.
- Tapis mengikut generasi, jantina, bulan birthday, cabang, paparan ahli dan susunan.
- Paparan ahli menyediakan `Semua ahli`, `Dalam kenangan` dan `Data belum lengkap`.
- Tukar paparan grid atau senarai jika tersedia.
- Export `Directory CSV` untuk rujukan.
- Tekan kad ahli untuk buka profil.
- Butang pada kad membolehkan pengguna buka profil, fokus ke Tree atau lihat keluarga individu.

Avatar dan warna kad mengikuti cabang keluarga. Foto Aishah digunakan pada avatar bulat di bahagian yang menyokong gambar.

### Birthday

Halaman Birthday mempunyai dua jenis paparan:

- `12 Bulan` - semua bulan dengan tarikh yang mempunyai birthday.
- `Planner Bulan` - satu bulan besar untuk melihat tarikh dan senarai ahli pada bulan tersebut.

Fungsi Birthday:

- Kad birthday paling hampir di atas halaman.
- Search nama birthday.
- `Hari Ini` untuk kembali kepada tarikh dan bulan semasa.
- `Buka Semua` dan `Tutup Semua` untuk senarai birthday bulanan.
- `Birthday CSV` untuk export senarai birthday.
- Tekan tarikh untuk buka atau tutup nama ahli pada tarikh tersebut.
- Tarikh dengan lebih daripada seorang ahli mempunyai indikator jumlah.
- Planner memaparkan nama pada tarikh dan senarai penuh bulan yang dipilih.

Kod warna kalendar:

- Kuning: hari semasa atau laluan menuju birthday terdekat.
- Merah: birthday paling dekat.
- Hijau: tarikh lain yang mempunyai birthday.

Tekan butang `Birthday` dalam profil seseorang untuk terus membuka planner pada bulan kelahirannya.

### Timeline

Timeline menyusun ahli keluarga mengikut tahun kelahiran.

- Tahun besar dipaparkan di kiri.
- Avatar, nama, jantina, hubungan, generasi dan maklumat lahir dipaparkan pada kad.
- Ahli dalam kenangan mempunyai gaya visual berbeza untuk mudah dikenal pasti.
- Search dan filter mengikut generasi, bulan lahir, jantina serta susunan.
- `Tapis lagi` membuka pilihan tambahan.
- Tekan kad untuk buka profil individu.

### Profil Individu

Profil penuh memaparkan maklumat seseorang dengan lebih teratur.

- Nama penuh dan nama paparan.
- Gambar profil, jika disediakan.
- Hubungan, jantina, tarikh lahir, tarikh meninggal jika direkodkan, umur dan catatan.
- Penanda `Dalam kenangan` hanya dipaparkan bagi ahli yang mempunyai rekod pemergian.
- Statistik anak, cucu, cicit dan jumlah keturunan.
- Laluan salasilah.
- Mak/ayah, pasangan, adik-beradik, anak, cucu dan cicit.
- Bahagian Cucu dan Cicit boleh dibuka atau ditutup. Apabila tertutup, hanya bilangan dipaparkan.
- Setiap kad ahli keluarga boleh ditekan untuk membuka profil orang tersebut.

Tindakan profil:

- `Lihat dalam tree` - fokus kepada individu di Tree.
- `Birthday` - buka bulan birthday individu.
- `Salin` - salin pautan/maklumat profil.
- `Pin` - simpan atau buang daripada Ahli Disimpan.
- `Hubungan` - buka semakan hubungan.
- `Kongsi` - kongsi maklumat jika browser menyokongnya.
- `Cetak` - cetak profil.

Pada desktop, Tree masih menggunakan panel sisi apabila kad tree ditekan. Butang `Profil` membuka halaman profil penuh. Pada mobile, profil dibuka sebagai halaman penuh.

#### Gambar Aishah

Gambar Aishah dipaparkan pada semua avatar bulat yang berkaitan. Hanya gambar dalam profil penuh boleh ditekan untuk membuka paparan gambar besar. Tekan ruang gelap atau `X` untuk menutup gambar.

Border avatar bergambar:

- Light mode: hijau.
- Dark mode: putih.

### Tetapan

Tetapan mempunyai lima bahagian.

#### Paparan

- Saiz kad Tree.
- Saiz tulisan seluruh website.
- Compact Mode untuk memadatkan kad Tree.
- Papar atau sorok tarikh lahir.
- Papar atau sorok umur mengikut tahun.
- Papar atau sorok tag hubungan dan nota.
- `Butang Home jelas` untuk memilih kad Home jelas atau lebih lut sinar di atas foto keluarga.

#### Navigasi

- Hidup atau matikan minimap.
- Hidup atau matikan drag untuk pan Tree.
- Pilih paparan default Tree.

#### Tema

- Light mode atau dark mode.
- Preset warna Default, Heritage, Ocean dan Sunset.
- Bahasa Melayu atau English.

#### Data

- Data Health untuk mencari data yang perlu disemak.
- Export Data Health CSV.
- Export atau import JSON sementara dalam browser.
- Reset data import sementara.
- Reset tetapan.
- Reset pilihan `Diri Saya`.
- Clear Cache browser.

#### Tentang

Menerangkan tujuan KAMI Tree, fungsi utama dan versi data.

## Manual Pengguna

### 1. Lihat salasilah

1. Tekan `Tree`.
2. Drag atau scroll dalam kawasan tree.
3. Gunakan Zoom atau Fit Skrin jika perlu.
4. Tekan kad ahli untuk melihat ringkasan profil.
5. Tekan `Profil` untuk membuka halaman profil penuh.

### 2. Cari ahli keluarga

1. Tekan `Search Global` di Home, atau buka `Direktori`.
2. Tulis beberapa huruf nama atau kata kunci seperti `cucu`, `lelaki`, `menantu` atau nama cabang.
3. Pilih hasil untuk membuka profil atau fokus ke Tree.

### 3. Semak hubungan dua orang

1. Pada halaman Tree, buka `Cari hubungan keluarga`.
2. Pilih nama pertama dan nama kedua.
3. Tekan `Cari Hubungan`.
4. Website akan memaparkan hubungan yang boleh dikenal pasti daripada data semasa.

### 4. Simpan ahli kegemaran

1. Buka profil ahli.
2. Tekan `Pin`.
3. Ahli tersebut muncul di `Ahli Disimpan` pada Home.
4. Tekan Pin sekali lagi untuk buang daripada senarai.

### 5. Semak birthday

1. Tekan `Birthday`.
2. Gunakan `12 Bulan` untuk ringkasan semua bulan.
3. Gunakan `Planner Bulan` untuk satu bulan.
4. Tekan tarikh birthday untuk buka senarai ahli pada tarikh itu.
5. Gunakan `Hari Ini` untuk kembali ke bulan semasa.

### 6. Tukar tema, bahasa atau saiz tulisan

1. Tekan `Tetapan`.
2. Buka tab `Tema` untuk dark/light mode atau bahasa.
3. Buka tab `Paparan` untuk saiz kad, saiz tulisan dan pilihan Home.
4. Pilihan disimpan secara automatik pada browser tersebut.

### 7. Lihat gambar Aishah

1. Buka profil Aishah.
2. Tekan gambar bulat dalam bahagian profil utama.
3. Tekan ruang gelap atau `X` untuk menutup gambar besar.

## Data Dan Privasi Browser

- Data asal keluarga berada dalam `data.json`.
- Nilai teknikal `status` kekal sebagai `living` atau `deceased` untuk keserasian import, eksport dan validasi; paparan kepada pengguna hanya menunjukkan `Dalam kenangan` apabila berkaitan.
- Favourite, tema, bahasa, zoom, tetapan dan Diri Saya disimpan pada browser/peranti semasa sahaja.
- Peranti atau browser lain tidak berkongsi pilihan tersebut secara automatik.
- `Clear Cache` membuang pilihan tempatan, tetapi data asal daripada `data.json` kekal selepas reload.
- Import JSON ialah perubahan sementara pada browser sehingga data asal projek dikemas kini.

## Jalankan Secara Local

```powershell
python -m http.server 5500
```

Buka `http://localhost:5500`.

## Semakan Developer

```powershell
npm run check
```

## Struktur Projek

- `index.html` - struktur halaman dan komponen UI.
- `styles.css` - style asas, layout desktop/mobile dan tema.
- `final-fixes.css` - pembetulan akhir bagi mobile navigation, foto, dark mode dan kontras.
- `app.js` - Tree, profil, carian, birthday, timeline, direktori dan tetapan.
- `data.json` - sumber data keluarga.
- `IMG_7640.JPG` - foto keluarga untuk latar Home.
- `IMG_7626.jpg` - gambar Aishah pada profil dan avatar berkaitan.
- `scripts/validate-data.js` - validator data salasilah.
- `docs/STATUS.md` - status kerja dan penambahbaikan website.
- `docs/AUDIT_2026-07-22.md` - audit semasa, risiko dan baki tindakan.
- `docs/archive/` - dokumen handoff sejarah yang bukan arahan pembangunan semasa.
- `audit-shots/` - bukti visual audit lama; ia mengandungi paparan data keluarga dan tidak patut dijadikan bahan public.

## Deployment

Website dideploy melalui Vercel. Selepas push ke branch `main`, tunggu deployment selesai dan semak versi baharu di:

https://kami-tree.vercel.app/

Dokumentasi dikemas kini: 2026-09-05.
