# KAMI Tree

Website salasilah keluarga interaktif menggunakan HTML, CSS, dan JavaScript vanilla. Fokus utama projek ini ialah memudahkan ahli keluarga melihat hubungan, mencari nama, menjejak cabang keluarga, dan memahami susunan generasi dalam satu paparan.

## Status semasa
- Data semasa: 68 ahli keluarga dan 15 hubungan pasangan/keluarga dalam `data.json`.
- Semakan data asas: tiada ID pendua dan tiada rujukan ahli yang hilang dalam `unions`.
- Semakan teknikal asas: `app.js` lulus `node --check`.
- Server statik tempatan berjaya melayan `index.html`, `data.json`, `app.js`, dan `styles.css` di `http://localhost:5500`.
- Semakan browser penuh belum dibuat kerana tool browser automation tidak tersedia dalam environment semasa.

## Ciri sedia ada
- Paparan tree keluarga dengan zoom, fit screen, drag/pan, dan minimap.
- Carian nama dan fokus terus ke ahli keluarga.
- Statistik keluarga: jumlah ahli, pasangan, jantina, cucu, cicit, dan ulang tahun terdekat.
- Birthday page: kalendar bulan 1-12, tarikh birthday bertanda yang boleh buka/tutup, butang buka/tutup semua, senarai birthday ikut bulan, dan search nama.
- Timeline dengan penapis generasi, bulan lahir, jantina, dan susunan.
- Panel cerita/profil ahli keluarga.
- Salasilah individu dalam panel ahli: atok/nenek, mak/ayah, adik-beradik, pasangan, dan anak.
- Relationship Finder untuk pilih dua ahli dan cari hubungan keluarga asas.
- Tetapan paparan seperti tema, bahasa BM/EN, compact mode, saiz kad, minimap, drag, tarikh lahir, umur, dan tags.
- Eksport tree kepada JPEG/PDF.

## Apa yang tak kena / perlu diberi perhatian
- README lama menyebut import/eksport JSON, tetapi UI semasa hanya ada eksport JPEG/PDF. Kod untuk import/export JSON masih wujud dalam `app.js`, tetapi elemen HTML berkaitan tiada.
- Borang edit profil boleh mengubah data dalam memori, tetapi `storeData()` ialah `no-op`, jadi perubahan hilang selepas reload.
- Kata laluan edit masih hardcoded sebagai `1234`, tidak sesuai untuk kegunaan sebenar.
- Semua ahli keluarga belum ada gambar (`photo` kosong), jadi kad kurang mudah dikenali secara visual.
- Satu ahli tiada tarikh lahir. Tarikh meninggal kosong untuk kebanyakan ahli mungkin betul, tetapi perlu bezakan antara "masih hidup" dan "data belum lengkap".
- Ada beberapa hook JavaScript untuk elemen yang tiada dalam HTML: `export-json`, `import-json`, `validate-data`, `focus-elders`, `back-top`, `path-toggle`, `compact-toggle`, `settings-lines`, `settings-default-view`, `setting-clear-data`, dan `mobile-action`.
- Carian masih asas: hanya padanan nama secara substring. Belum ada carian ikut panggilan, cabang, ibu/bapa, pasangan, anak, generasi, atau hubungan antara dua ahli.
- Warna cabang keluarga bergantung pada ID tertentu (`p3`, `p5`, `p7`, `p9`). Jika struktur data berubah, warna/cabang boleh jadi kurang tepat.
- Paparan tree besar masih boleh jadi sukar dibaca pada mobile kerana pengguna perlu zoom, pan, dan faham kedudukan sendiri secara manual.
- Beberapa kandungan daripada data dimasukkan melalui `innerHTML`. Jika data nanti datang daripada pengguna luar, perlu sanitasi untuk elak risiko injection.

## Audit web view dan mobile view

### Web view / desktop
- Desktop sudah nampak kemas untuk header, search, kawalan zoom, statistik, dan butang download/settings.
- Statistik 5 kad sesuai untuk skrin besar dan mudah scan.
- Isu utama desktop: bahagian tree awal nampak seperti ruang kosong kerana node keluarga sebenar tidak terus kelihatan dalam viewport pertama. Pengguna baru mungkin sangka tree belum load.
- Butang `Fit Skrin` penting, tetapi pengalaman awal lebih baik jika website auto-fit atau auto-focus kepada root/self selepas data selesai load.
- Minimap wujud tetapi collapsed di bawah kanan. Ia berguna, cuma boleh lebih jelas jika ada label kecil "Lokasi tree" atau auto buka sekejap selepas load pertama.
- Control panel desktop agak besar. Untuk family tree yang makin besar, pertimbangkan toolbar lebih ringkas/sticky: Search, Fit, Focus Self, Relationship Finder.

### Mobile view
- Mobile mempunyai topbar, bottom sheet, mobile quick zoom, dan view switch. Ini bagus kerana mobile memang perlukan navigasi berbeza daripada desktop.
- Search masih berada dalam panel bawah, jadi pengguna perlu buka panel untuk mencari. Untuk mobile, search patut jadi aksi utama yang terus mudah dicapai.
- Screenshot mobile headless menunjukkan kandungan boleh terasa melebar/terpotong pada viewport sempit. Perlu semak pada device sebenar atau DevTools mobile emulation untuk pastikan tiada horizontal overflow.
- Kad statistik 2 kolum membantu, tetapi pada mobile ia mengambil ruang tinggi sebelum pengguna nampak tree. Pertimbangkan ringkaskan statistik kepada satu bar ringkas atau carousel.
- Tree pada mobile masih memerlukan pan/zoom. Ini normal, tetapi perlu ada mode "Focused Branch" supaya pengguna tidak perlu jelajah keseluruhan tree.
- Bottom sheet `Buka Panel` bagus, tetapi apabila tertutup, pengguna masih perlukan akses cepat kepada `Search`, `Fit`, dan `Focus Self`.
- Timeline mobile elok, tetapi detail ahli perlu mudah kembali ke lokasi tree ahli tersebut.

### Cadangan khusus ikut view
- Desktop: auto-fit root tree selepas load, tambah toolbar relationship finder, dan jadikan minimap lebih discoverable.
- Mobile: jadikan search sebagai butang utama di topbar, tambah bottom nav `Tree / Search / Timeline / Saya`, dan tambah `Focused Branch View`.
- Desktop dan mobile: "Fokus Diri Saya" perlu guna pilihan per browser/device supaya setiap pengguna boleh pilih diri sendiri.
- Desktop dan mobile: bila klik ahli, panel profil sudah memaparkan salasilah individu; aksi seterusnya boleh tambah `Cari hubungan`, `Salin link`, dan `Fokus dalam tree`.
- Desktop dan mobile: tambah ujian manual untuk viewport `1440x1000`, `1024x768`, `768x1024`, `390x844`, dan `360x740`.

### Nota "Diri Saya"
- Website tidak menetapkan satu ahli keluarga sebagai "saya" untuk semua pengguna.
- Paparan asal website ialah `Paparan Umum`, iaitu bermula dari root/permulaan keluarga.
- Jika browser belum ada pilihan, butang akan menjadi `Pilih Diri Saya`.
- Pilihan diri sendiri disimpan dalam `localStorage` sebagai `familyTreeSelfId`, jadi ia hanya terpakai untuk browser/device itu.
- Laptop, phone, browser lain, atau pengguna lain perlu pilih diri sendiri masing-masing.
- Jika device dikongsi, pengguna boleh buka `Tetapan` dan tekan `Reset Diri Saya` sebelum orang lain pilih diri mereka.
- Butang `Paparan Umum` sentiasa boleh digunakan untuk kembali ke view salasilah biasa tanpa fokus kepada sesiapa.
- Untuk sokongan merentas device tanpa pilih semula, projek perlukan sistem login dan database.

## Cadangan penambahbaikan utama

### 1. Jadikan tree mudah difahami
- Tambah "You are here" berdasarkan pilihan diri sendiri yang disimpan dalam browser, dengan highlight kekal dan butang fokus kepada diri sendiri.
- Tambah breadcrumb keluarga apabila klik ahli: `Wan/Tok > Anak > Cucu > Cicit`.
- Tambah mode "Laluan hubungan" yang highlight laluan dari seorang ahli ke seorang ahli lain.
- Tambah butang "Lihat ibu bapa", "Lihat pasangan", "Lihat anak", dan "Lihat adik-beradik" dalam panel profil.
- Tambah pilihan "Collapse cabang lain" supaya bila pengguna pilih satu cabang, cabang lain dimalapkan atau dilipat.
- Tambah label generasi yang lebih mesra seperti `Generasi 1: Wan/Tok`, `Generasi 2: Anak`, `Generasi 3: Cucu`, `Generasi 4: Cicit`.
- Tambah mini overview untuk cabang: jumlah ahli, pasangan utama, dan anak-anak utama bagi setiap cabang.

### 2. Naik taraf carian keluarga
- Carian fuzzy: taip `hafizi`, `fizi`, atau salah ejaan kecil masih jumpa nama.
- Carian ikut hubungan: contoh `cucu`, `cicit`, `menantu`, `anak kedua`.
- Carian ikut ibu/bapa: contoh cari "anak Noor Azizan".
- Carian dua orang: pilih `Orang A` dan `Orang B`, kemudian paparkan hubungan seperti "sepupu", "anak saudara", "datuk", atau "menantu".
- Papar keputusan carian dalam kategori: nama, cabang, generasi, pasangan, anak.
- Tambah keyboard navigation untuk hasil carian: arrow up/down dan Enter.

### 3. Jadikan profil ahli lebih berguna
- Paparkan kad ringkas: nama penuh, nama panggilan, umur, tarikh lahir, status, pasangan, anak, ibu/bapa.
- Tambah ruangan "nama panggilan" supaya ahli keluarga mudah dicari walaupun nama penuh panjang.
- Tambah gambar/avatar untuk setiap ahli. Jika tiada gambar, gunakan avatar initials yang konsisten.
- Tambah nota sejarah keluarga, tempat lahir, tempat tinggal, pekerjaan, dan kenangan ringkas.
- Tambah "copy link to this person" supaya mudah kongsi terus kepada ahli tertentu melalui parameter seperti `?focus=p1`.

### 4. Data dan penyelenggaraan
- Putuskan sama ada website ini view-only atau boleh edit.
- Jika view-only, buang/hide fungsi edit supaya pengguna tidak keliru.
- Jika boleh edit, simpan perubahan ke `localStorage`, eksport JSON, atau backend sebenar.
- Tambah `gender`, `nickname`, `status`, `branchId`, dan `parentNotes` secara explicit dalam `data.json`.
- Tambah validator data dalam UI atau skrip CLI untuk semak ID pendua, union rosak, child tanpa parent, tarikh pelik, dan nama kosong.
- Tambah panduan cara tambah ahli baru dalam README.

### 5. Mobile dan aksesibiliti
- Jadikan search sebagai aksi utama di mobile, bukan tersembunyi di panel.
- Tambah bottom navigation ringkas: Tree, Search, Timeline, Settings.
- Tambah "Fit cabang ini" apabila pengguna buka profil ahli.
- Pastikan semua butang icon ada label/tooltip yang jelas.
- Tambah state kosong yang jelas bila tiada hasil carian atau data belum lengkap.

## Idea fitur tambahan
- Relationship Finder: cari hubungan antara dua ahli keluarga.
- Branch Explorer: paparan ringkas setiap cabang anak utama.
- Birthday Calendar: kalendar ulang tahun bulanan.
- Family Directory: senarai ahli dengan filter generasi/cabang/status.
- Print Mode: layout khas untuk cetak A4/A3.
- Share Link: URL yang menyimpan fokus ahli, view mode, dan zoom/cabang.
- Data Completeness Dashboard: senarai ahli yang belum ada gambar, tarikh lahir, pasangan, atau nota.
- Admin Mode: tambah/edit ahli dengan validation sebelum simpan.
- Backup/Restore JSON: muat turun data dan import semula.
- Privacy Mode: sembunyikan tarikh lahir penuh untuk ahli hidup, hanya papar umur/bulan.

## Checklist kerja seterusnya

### Keutamaan tinggi
- [ ] Putuskan mode sebenar: view-only atau editable.
- [ ] Selaraskan README, UI, dan kod untuk import/export JSON.
- [ ] Baiki fungsi edit supaya sama ada disimpan dengan jelas atau dilumpuhkan.
- [ ] Ganti password hardcoded `1234` dengan mekanisme lebih selamat, atau buang edit untuk public view.
- [x] Semak dan baiki kemungkinan horizontal overflow pada mobile view.
- [x] Auto-focus root selepas tree selesai load.
- [x] Tambah butang "Pilih/Fokus Diri Saya" yang simpan pilihan per browser/device.
- [x] Tambah relationship finder asas untuk cari hubungan antara dua ahli.
- [ ] Tambah carian lanjutan ikut nama, nama panggilan, hubungan, cabang, dan generasi.

### Keutamaan sederhana
- [ ] Tambah `nickname`, `gender`, `branchId`, dan `status` dalam struktur data.
- [ ] Tambah gambar/avatar ahli keluarga.
- [ ] Tambah Branch Explorer untuk anak utama dan keturunan masing-masing.
- [ ] Tambah mobile bottom nav untuk `Tree`, `Search`, `Timeline`, dan `Saya`.
- [ ] Ringkaskan statistik mobile supaya tree lebih cepat kelihatan.
- [ ] Tambah Data Completeness Dashboard.
- [ ] Tambah copy/share link untuk ahli tertentu.
- [ ] Tambah print-friendly view.
- [ ] Bersihkan kod untuk elemen HTML yang sudah tiada atau kembalikan UI yang berkaitan.

### Keutamaan rendah
- [ ] Tambah animasi halus bila fokus ahli atau buka cabang.
- [ ] Tambah tema khas keluarga/heritage yang lebih konsisten.
- [ ] Tambah sokongan eksport CSV untuk senarai ahli.
- [ ] Tambah sokongan multi-root family jika ada lebih daripada satu keluarga utama.
- [ ] Tambah ujian automatik untuk validator data dan fungsi relationship.

## Cadangan UX khusus untuk tree salasilah
Cara paling mudah untuk pengguna cari hubungan antara family ialah gabungan 3 benda:

1. Search yang kuat.
   Pengguna taip nama, nickname, atau hubungan. Keputusan terus tunjuk nama, cabang, generasi, pasangan, dan anak ringkas.

2. Relationship Finder.
   Pengguna pilih dua ahli keluarga. Website highlight laluan dalam tree dan tulis hubungan dalam bahasa mudah, contohnya "A ialah sepupu kepada B" atau "A ialah anak saudara kepada B".

3. Focused Branch View.
   Bila klik ahli atau cabang, paparan boleh fokus kepada keluarga kecil itu sahaja: ibu/bapa, pasangan, anak, adik-beradik, dan keturunan. Cabang lain boleh dimalapkan supaya tree tidak terasa terlalu besar.

## Struktur fail
- `index.html` - struktur UI utama.
- `styles.css` - gaya dan responsive layout.
- `app.js` - logik aplikasi, render tree, statistik, timeline, settings, dan interaksi.
- `data.json` - sumber data keluarga.

## Cara jalankan
1. Buka folder projek ini.
2. Jalankan server statik:

```bash
python -m http.server 5500
```

3. Buka:

```text
http://localhost:5500
```

## Format data ringkas
Data disimpan dalam `data.json` dengan dua bahagian utama:
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

## Cadangan format data masa depan
Untuk menjadikan carian dan relationship finder lebih tepat, setiap ahli elok ada medan tambahan:

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

## Nota pembangunan
- Buat semakan selepas ubah data:

```bash
node --check app.js
node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('data.json','utf8')); console.log('data.json OK')"
```

- Jika tambah fitur relationship finder, bina dahulu helper data seperti parent map, spouse map, children map, dan ancestor map.
- Jika website dibuka kepada ramai pengguna, sanitasi semua teks sebelum dimasukkan ke `innerHTML`.
