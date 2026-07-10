# KAMI Tree

KAMI Tree ialah website salasilah keluarga interaktif. Ia membantu ahli keluarga melihat hubungan antara generasi, mencari individu, menyemak birthday, dan membuka profil keluarga dengan lebih mudah pada desktop atau telefon.

**Website:** https://kami-tree.vercel.app/

## Tujuan

- Simpan dan paparkan maklumat salasilah keluarga dalam satu tempat.
- Memudahkan ahli keluarga mengenal ibu bapa, pasangan, adik-beradik, anak, cucu, dan moyang.
- Menjadi rujukan keluarga yang mudah digunakan oleh pelbagai peringkat umur.
- Paparkan birthday serta perjalanan generasi secara visual.

## Status Semasa

- 68 ahli keluarga dan 15 hubungan pasangan dibaca daripada `data.json`.
- Paparan desktop dan mobile dioptimumkan secara berasingan.
- Bahasa Melayu dan English disokong.
- Light mode, dark mode, saiz kad, dan saiz tulisan boleh diubah dalam Tetapan.
- Pilihan peribadi seperti ahli disimpan, baru dibuka, tetapan, dan Diri Saya disimpan pada browser/peranti masing-masing.

## Navigasi

### Desktop

Navigation bar di atas menyediakan:

- `Home` - ringkasan dan pintu masuk cepat.
- `Tree` - paparan salasilah penuh.
- `Direktori` - senarai semua ahli keluarga.
- `Birthday` - kalendar dan senarai birthday.
- `Timeline` - susunan ahli mengikut tahun kelahiran.
- `Tetapan` - pilihan paparan, navigasi, tema, data, dan maklumat website.

### Mobile

Bottom navigation kekal mudah dicapai di bawah skrin dengan halaman yang sama: Home, Tree, Direktori, Birthday, Timeline, dan Tetapan.

## Fungsi Utama

### Home

- Ringkasan jumlah ahli, pasangan, jantina, keturunan, dan birthday terdekat.
- `Lihat Tree Keluarga` terus membuka tree.
- `Search Global` membuka carian semua ahli keluarga.
- Bahagian `Ahli Disimpan` memaparkan favourite yang disimpan.
- Bahagian `Baru Dibuka` memaparkan profil yang terkini dilihat.
- Kad birthday terdekat boleh ditekan untuk terus ke halaman Birthday.

### Tree Keluarga

- Drag/pan, zoom masuk, zoom keluar, reset, dan fit screen.
- Mod Overview, Detail, dan Branch.
- Minimap boleh dibuka atau dimatikan melalui Tetapan.
- Carian nama boleh fokus terus ke kad individu.
- Kad individu memaparkan maklumat asas, umur, jantina, dan hubungan mengikut tetapan.
- Tekan kad untuk membuka profil individu.

### Global Search

Carian global menyokong nama, nickname, hubungan, cabang keluarga, jantina, status hidup/meninggal, dan bulan birthday. Hasil carian boleh membuka profil atau fokus terus ke Tree.

### Family Directory

- Search kekal mudah dicapai ketika senarai discroll.
- Filter boleh dibuka atau ditutup untuk generasi, jantina, status, birthday, dan cabang keluarga.
- Kad ahli memaparkan avatar berwarna mengikut cabang, nama, dan maklumat penting.
- Tekan kad untuk membuka profil; butang tambahan boleh fokus Tree atau lihat keluarga.

### Birthday

- Kad birthday terdekat di bahagian atas.
- Carian nama birthday dan butang Hari Ini.
- Dua paparan: `12 Bulan` dan `Planner`.
- Kalendar menggunakan warna berbeza untuk hari ini, trail ke birthday terdekat, birthday terdekat, dan tarikh yang mempunyai birthday.
- Tarikh yang ada lebih daripada seorang ahli memaparkan indikator jumlah.
- Senarai birthday bulan boleh dibuka atau ditutup; hanya bulan yang dipilih dipaparkan dalam Planner.

### Timeline

- Susunan ahli mengikut tahun kelahiran.
- Tahun besar di sebelah kiri; avatar, nama, dan maklumat utama di sebelah kanan.
- Status meninggal dipaparkan dengan warna merah untuk lebih jelas.
- Filter timeline boleh dibuka atau ditutup.
- Tekan mana-mana kad untuk membuka profil individu.

### Profil Individu

- Nama penuh, avatar, hubungan, dan maklumat asas.
- Statistik bilangan anak, cucu, cicit, dan menantu.
- Grid maklumat individu yang mudah dibaca.
- Laluan salasilah daripada moyang kepada individu.
- Kumpulan keluarga: Moyang, Atok/Nenek, Mak/Ayah, Adik-beradik, Pasangan, Anak, Cucu, dan Cicit.
- Semua nama dalam kumpulan keluarga boleh ditekan untuk membuka profil individu tersebut.
- Action utama: Home, fokus ke Tree, lihat keluarga, buka Birthday pada bulan kelahiran, dan salin maklumat/link.
- Desktop menggunakan panel sisi; mobile menggunakan paparan profil penuh.

### Tetapan

Tetapan dibahagikan kepada lima bahagian:

- `Paparan` - saiz kad, saiz tulisan, compact mode, paparan umur, tarikh lahir, dan tag.
- `Navigasi` - minimap, drag untuk pan, serta paparan default Tree.
- `Tema` - light/dark, preset warna, dan pilihan bahasa Melayu atau English.
- `Data` - data health, eksport/import JSON, reset data browser, dan clear cache.
- `Tentang` - tujuan website dan maklumat versi data.

## Manual Pengguna

### 1. Melihat salasilah

1. Tekan `Tree` dari navigation.
2. Drag paparan untuk bergerak di dalam tree.
3. Gunakan `Zoom +`, `Zoom -`, atau `Fit Screen` untuk melaras paparan.
4. Tekan kad ahli untuk membuka profilnya.

### 2. Mencari ahli keluarga

1. Dari Home, tekan `Search Global`, atau gunakan carian pada Tree/Direktori.
2. Tulis sebahagian nama atau kata kunci seperti hubungan, jantina, cabang, atau bulan birthday.
3. Tekan hasil carian untuk membuka profil atau fokus pada Tree.

### 3. Menyemak hubungan dua individu

1. Pada halaman Tree, buka `Cari hubungan keluarga`.
2. Pilih dua nama.
3. Tekan `Cari Hubungan` untuk melihat hubungan yang dikenal pasti oleh data semasa.

### 4. Menggunakan profil individu

1. Tekan mana-mana kad ahli dari Tree, Direktori, Timeline, Birthday, atau Search.
2. Semak statistik, maklumat, dan laluan salasilah.
3. Tekan mana-mana nama dalam keluarga untuk berpindah terus ke profil orang tersebut.
4. Gunakan action bar untuk kembali Home, fokus ke Tree, lihat keluarga, buka Birthday, atau salin maklumat.

### 5. Menyemak birthday

1. Tekan `Birthday` pada navigation.
2. Gunakan `12 Bulan` untuk gambaran semua bulan atau `Planner` untuk satu bulan besar.
3. Tekan tarikh birthday untuk melihat nama ahli pada tarikh itu.
4. Dalam Planner, tukar bulan melalui anak panah atau pemilih bulan.

### 6. Menukar bahasa atau tema

1. Buka `Tetapan`.
2. Pada tab `Tema`, pilih Melayu/English, light/dark, atau preset warna.
3. Pada tab `Paparan`, laraskan saiz tulisan dan pilihan paparan kad.

### 7. Menyimpan ahli dan reset pilihan peribadi

1. Dalam profil, gunakan butang pin untuk menyimpan ahli sebagai favourite.
2. Favourite dan profil baru dibuka akan muncul pada Home.
3. Dalam Tetapan > Data, gunakan `Reset settings`, `Reset diri saya`, atau `Clear Cache` apabila perlu.

## Data Dan Privasi Browser

- Data keluarga utama berada dalam `data.json`.
- Favourite, recent viewed, bahasa, tema, zoom, dan pilihan Diri Saya disimpan dalam browser/peranti, bukan dikongsi kepada pengguna lain.
- Jika pengguna lain menggunakan browser atau peranti lain, mereka mempunyai pilihan sendiri.
- `Clear Cache` akan memadam pilihan browser/tempatan; data asal daripada `data.json` kekal tersedia selepas reload.
- Import JSON hanya digunakan untuk data sementara dalam browser sehingga data asal diganti secara rasmi dalam fail projek.

## Untuk Developer

### Jalankan local

```powershell
python -m http.server 5500
```

Buka `http://localhost:5500` dalam browser.

### Semak sintaks dan data

```powershell
node --check app.js
node scripts\validate-data.js data.json
```

## Struktur Projek

- `index.html` - struktur halaman dan komponen UI.
- `styles.css` - tema, layout desktop/mobile, responsive design, dan animasi ringan.
- `app.js` - render data, Tree, profil, carian, birthday, timeline, directory, dan tetapan.
- `data.json` - sumber data keluarga.
- `scripts/validate-data.js` - validator data salasilah.
- `CHECKLIST.md` - status kerja website semasa dan baki penambahbaikan.

## Nota Data

Validator semasa mengesan `p45` belum mempunyai tarikh lahir. Lengkapkan data ini dalam `data.json` apabila maklumat sudah disahkan.

## Deployment

Website dideploy melalui Vercel. Selepas perubahan dipush/deploy, semak semula desktop dan mobile pada link utama:

https://kami-tree.vercel.app/

Dokumentasi dikemas kini: 2026-07-10.
