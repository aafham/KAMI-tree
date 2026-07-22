# KAMI Tree Website Checklist

Status dikemas kini pada 2026-07-22. Fokus checklist ini ialah website; Flutter app diurus dalam projek berasingan. Rujuk [audit semasa](AUDIT_2026-07-22.md) untuk risiko privasi dan housekeeping.

## Navigasi Dan Home

- [x] Desktop navigation: Home, Tree, Direktori, Birthday, Timeline, Tetapan.
- [x] Mobile bottom navigation dengan enam halaman yang sama.
- [x] Home mempunyai pintu masuk Lihat Tree Keluarga dan Search Global.
- [x] Home memaparkan ahli disimpan dan baru dibuka.
- [x] Kad birthday terdekat boleh membuka halaman Birthday.

## Tree

- [x] Zoom, fit screen, reset, drag/pan, mod Overview/Detail/Branch.
- [x] Minimap boleh dibuka dan dikawal melalui Tetapan.
- [x] Search dan focus individu pada Tree.
- [x] Kad individu boleh membuka profil.
- [x] Kandungan dan susunan utama Tree dikekalkan semasa UI halaman lain dikemas kini.

## Directory Dan Search

- [x] Global Search menyokong nama, nickname, hubungan, cabang, jantina, status, dan bulan birthday.
- [x] Directory mempunyai search yang mudah dicapai.
- [x] Filter Directory boleh dibuka/tutup.
- [x] Kad Directory menggunakan avatar/cabang keluarga dan membuka profil.
- [x] Search/hasil boleh fokus ke Tree atau membuka profil.

## Birthday Dan Timeline

- [x] Birthday mempunyai header birthday terdekat dan butang Hari Ini.
- [x] Switch 12 Bulan/Planner tersedia.
- [x] Kalendar mempunyai legend serta warna hari ini, trail, birthday terdekat, dan tarikh birthday.
- [x] Senarai birthday bulanan boleh dibuka/tutup.
- [x] Timeline menggunakan tahun besar, avatar, maklumat ringkas, dan status meninggal merah.
- [x] Filter Timeline boleh dibuka/tutup.
- [x] Kad Timeline membuka profil individu.

## Profil Dan Tetapan

- [x] Profil mempunyai nama penuh, avatar, hubungan, dan statistik keturunan.
- [x] Profil memaparkan Moyang, Atok/Nenek, Mak/Ayah, Adik-beradik, Pasangan, Anak, Cucu, dan Cicit.
- [x] Semua chip nama keluarga boleh ditekan untuk membuka profil seterusnya.
- [x] Action profil: Home, Tree, Family, Birthday, Copy, pin, relationship, share, dan print.
- [x] Desktop profile menggunakan panel sisi; mobile menggunakan profil penuh.
- [x] Tetapan mempunyai Paparan, Navigasi, Tema, Data, dan Tentang.
- [x] Saiz tulisan, saiz kad, bahasa, tema, dark mode, umur, tarikh lahir, dan tag boleh dikawal.
- [x] Data health boleh membawa pengguna kepada rekod bermasalah.

## Kualiti UI

- [x] Font Fraunces dan Source Sans 3 digunakan konsisten.
- [x] Branch palette diseragamkan untuk avatar/kad yang berkaitan.
- [x] Ikon Lucide digunakan bagi action utama.
- [x] Animasi ringan mematuhi `prefers-reduced-motion`.
- [x] Sasaran sentuhan utama sekurang-kurangnya 44px pada mobile.
- [x] Light mode, dark mode, Melayu, dan English tersedia.

## Semakan Dan Baki

- [x] `node --check app.js` lulus.
- [x] `node scripts/validate-data.js data.json` lulus dengan amaran data.
- [x] Import, cache dan reset JSON disahkan sebelum data browser diganti.
- [x] `dataVersion` dikemas kini kepada `2026-07-22`.
- [x] Dokumentasi aktif kini berada dalam folder `docs/` dan semakan standard boleh dijalankan dengan `npm run check`.
- [ ] Lengkapkan tarikh lahir `p45` apabila disahkan keluarga.
- [ ] Semak visual deployment Vercel pada desktop, Android Chrome, dan iPhone Safari selepas deploy terakhir.
- [ ] Pertimbangkan sistem admin/database apabila data mula diubah oleh lebih daripada seorang penyelenggara.
