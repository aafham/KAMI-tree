# KAMI Tree Mobile App Plan

Dokumen ini ialah handoff plan untuk bina mobile app Flutter berdasarkan website KAMI Tree.

Jika buka chat baru, mula dengan ayat ini:

```text
Baca FLUTTER_APP_PLAN.md dalam repo KAMI-tree. Saya nak mula Flutter app ikut plan tu.
```

## Rujukan Utama

- Live website: https://kami-tree.vercel.app/
- Repo asal: KAMI-tree
- Data asal: `data.json`
- Website semasa: static HTML, CSS, JavaScript vanilla.
- Mobile app sasaran: Flutter native app.
- Mode awal app: read-only, belum perlu admin mode atau database.

## Matlamat App

Bina mobile app salasilah keluarga yang membawa semua fungsi penting dari website ke pengalaman mobile native.

App Flutter mesti:

- Kekalkan data dan struktur salasilah dari `data.json`.
- Kekalkan fungsi website semasa.
- Utamakan mobile UX, bukan copy layout desktop 100%.
- Buat tree lebih mudah dipakai di phone.
- Tambah home screen widget untuk upcoming birthday.

## Prinsip Penting

- Jangan mula dengan database/admin mode.
- Jangan buat login dulu.
- Jangan ubah struktur data besar-besaran pada fasa awal.
- Guna `data.json` sebagai single source of truth untuk Phase 1.
- Semua function website yang user sudah guna perlu ada versi mobile app.
- Tree mobile perlu ada beberapa cara view supaya user tidak sesat dalam tree besar.

## Cadangan Tech Stack

- Flutter
- Dart model classes untuk parse `data.json`
- State management: `Riverpod` atau `Provider`
- Routing: `go_router`
- Tree pan/zoom: `InteractiveViewer`
- Local preferences: `shared_preferences`
- Optional local cache: `hive` atau `isar` kemudian, bukan Phase 1 wajib
- Home screen widget: `home_widget`

## Data Strategy

### Phase 1

Guna `data.json` yang sama dari website.

Pilihan loading:

1. Bundle `data.json` dalam app asset.
2. Atau fetch dari URL hosted, contoh dari repo/Vercel, supaya data boleh update tanpa rebuild app.

Cadangan awal:

- Bundle `data.json` sebagai asset untuk app stabil.
- Kemudian tambah pilihan fetch remote bila app basic siap.

### Model Data Wajib

Flutter perlu parse:

- `people`
- `unions`
- `id`
- `name`
- `nickname`
- `gender`
- `status`
- `branchId`
- `relation`
- `birth`
- `death`
- `note`
- `story`
- partner/children dalam union

## Function Website Yang Wajib Ada Dalam App

### Tree Salasilah

- Papar tree keluarga.
- Zoom in/out.
- Pan/drag.
- Fit screen.
- Reset view.
- Overview mode.
- Detail mode.
- Branch/family view.
- Klik ahli untuk buka profile.
- Highlight ahli dipilih.
- Quick family filter:
  - Mak/Ayah
  - Adik-beradik
  - Anak/Cucu
  - Keluarga dekat
- Focus diri sendiri.
- Reset diri sendiri.

### Profile Individu

Bila tekan ahli keluarga, app perlu papar:

- Nama penuh.
- Relation.
- Tarikh lahir.
- Umur ikut tahun.
- Tarikh meninggal jika ada.
- Note.
- Story.
- Salasilah individu:
  - Atok/nenek
  - Mak/ayah
  - Adik-beradik
  - Pasangan
  - Anak
- Breadcrumb lineage.
- Actions:
  - Fokus dalam tree
  - Cari hubungan
  - Lihat keluarga ini
  - Copy/share link atau share profile

### Search

Search mesti sokong:

- Nama.
- Nickname.
- Relation.
- Gender.
- Status hidup/meninggal.
- Branch keluarga.
- Keyword Bahasa Melayu:
  - lelaki
  - perempuan
  - hidup
  - meninggal
  - mak
  - ayah
  - anak
  - cucu
  - cicit
  - menantu
  - adik beradik
  - cabang

### Relationship Finder

- Pilih dua ahli keluarga.
- Cari hubungan.
- Papar result hubungan.
- Papar path/laluan nama.
- Highlight dua ahli dan path dalam tree.

Hubungan minimum:

- Orang sama.
- Pasangan.
- Ibu/bapa dan anak.
- Anak dan ibu/bapa.
- Adik-beradik.
- Atok/nenek dan cucu.
- Cucu dan atok/nenek.
- Pakcik/makcik dan anak saudara.
- Anak saudara dan pakcik/makcik.

### Directory

- Senarai semua ahli.
- Search.
- Filter:
  - generasi
  - gender
  - status
  - bulan lahir
  - branch keluarga
  - relation
- Sort:
  - generasi
  - nama
  - umur
  - birthday terdekat

### Birthday

Wajib replicate birthday page website:

- Upcoming birthday.
- Calendar birthday.
- Bulatan pada tarikh yang ada birthday.
- Highlight hari ini.
- Highlight range dari hari ini ke next birthday.
- Highlight next birthday.
- List birthday ikut bulan Jan sampai Dec.
- Search nama birthday.
- Numbering list nama setiap bulan.
- Buka/tutup birthday pada tarikh calendar.
- Buka semua / tutup semua.
- Auto-open next upcoming birthday.

### Timeline

- Timeline keluarga.
- Filter:
  - generasi
  - bulan lahir
  - gender
- Sort timeline.
- Tap item timeline untuk buka profile.

### Settings

Wajib ada:

- Bahasa BM/EN.
- Light/Dark mode.
- Theme/preset jika mudah.
- Saiz card tree.
- Toggle minimap jika minimap dibuat.
- Toggle tarikh lahir.
- Toggle umur.
- Toggle tags.
- Reset diri saya.
- Clear local preferences/cache.

## Cadangan Screen Flutter

### 1. Home Screen

Tujuan:

- First screen yang ringkas dan cepat.
- Bukan landing page marketing.

Isi:

- Tajuk KAMI Tree / Salasilah Keluarga.
- Statistik:
  - jumlah ahli
  - jumlah pasangan
  - lelaki/perempuan
  - cucu/cicit
- Upcoming birthday card.
- Search quick.
- Shortcut:
  - Tree
  - Directory
  - Birthday
  - Timeline

### 2. Tree Screen

Mode:

- Overview
- Detail
- Branch

Controls:

- Search & focus.
- Fit screen.
- Reset view.
- Focus self.
- Minimap optional.

Nota:

- Jangan paksa tree desktop 100% masuk phone.
- Gunakan `InteractiveViewer`.
- Kad dalam overview boleh compact.
- Detail mode guna kad lebih besar.
- Branch mode fokus keluarga kecil.

### 3. Profile Screen / Bottom Sheet

Boleh buat sebagai:

- Full screen profile page, atau
- Draggable bottom sheet dari Tree.

Cadangan:

- Di phone, profile lebih sesuai full screen atau large bottom sheet.
- Jangan overlay kecil yang sempit.

Tabs:

- Info
- Salasilah
- Actions

### 4. Directory Screen

List semua ahli.

Komponen:

- Search bar.
- Filter chips.
- Sort dropdown.
- Person list cards.

### 5. Birthday Screen

Komponen:

- Upcoming birthday header.
- Calendar.
- Monthly lists Jan-Dec.
- Search.
- Open all / close all.

### 6. Timeline Screen

Komponen:

- Filter chips.
- Timeline grouped by year/generation.
- Tap to profile.

### 7. Settings Screen

Komponen:

- Bahasa.
- Theme.
- Display preferences.
- Reset self.
- Clear cache.
- About app/data version.

## Bottom Navigation Cadangan

Gunakan bottom nav:

- Home
- Tree
- Search/Directory
- Birthday
- Settings

Timeline boleh masuk:

- dalam Home shortcut, atau
- tab tambahan jika perlu.

Cadangan awal:

- Home
- Tree
- Directory
- Birthday
- Settings

Timeline letak dalam Home dan Directory/Profile actions dulu.

## Upcoming Birthday Home Screen Widget

Extra request user: buat widget untuk upcoming birthday.

### Widget 1: Small

Isi:

- Nama birthday terdekat.
- Tarikh.
- Berapa hari lagi.

Contoh:

```text
Next Birthday
Noor Aziah
13 hari lagi
```

### Widget 2: Medium

Isi:

- 3 sampai 5 upcoming birthday.
- Nama.
- Tarikh.
- Hari lagi.

### Widget 3: Calendar

Isi:

- Mini calendar bulan semasa.
- Bulatan pada tarikh birthday upcoming.
- Highlight next birthday.
- Fokus upcoming sahaja, bukan semua birthday setahun penuh.

### Widget 4: Countdown

Isi:

- Satu birthday terdekat.
- Progress/ring countdown.
- Nama + hari lagi.

### Nota Widget

- Flutter package cadangan: `home_widget`.
- Android widget lebih mudah.
- iOS widget mungkin perlu native Swift extension.
- Data widget perlu disimpan dalam shared storage yang boleh dibaca widget.
- Widget update bila app dibuka atau ikut schedule platform.

## Migration Phase

### Phase 1: Flutter Read-only App

Target:

- App boleh buka.
- Load `data.json`.
- Home.
- Tree basic.
- Profile.
- Search.
- Directory.
- Birthday basic.

Tidak perlu:

- Admin mode.
- Login.
- Database.
- Widget dahulu jika belum stabil.

### Phase 2: Full Website Function Parity

Tambah:

- Relationship finder.
- Timeline.
- Full birthday calendar.
- Branch/detail/overview tree lengkap.
- Settings lengkap.
- BM/EN.
- Dark mode.

### Phase 3: Upcoming Birthday Widgets

Tambah:

- Small widget.
- Medium list widget.
- Calendar widget.
- Countdown widget.

### Phase 4: Sync / Admin / Database

Hanya buat bila app read-only sudah stabil.

Pilihan:

- Firebase
- Supabase
- Custom backend
- GitHub/raw JSON workflow

Admin mode perlu:

- Login sebenar.
- Role/admin.
- Audit perubahan data.
- Backup/export.

## Cadangan Folder Flutter

```text
lib/
  main.dart
  app.dart
  data/
    family_repository.dart
    family_json_loader.dart
  models/
    person.dart
    union.dart
    family_data.dart
  services/
    birthday_service.dart
    relationship_service.dart
    tree_layout_service.dart
    search_service.dart
    preferences_service.dart
  state/
    family_provider.dart
    settings_provider.dart
    selected_person_provider.dart
  screens/
    home_screen.dart
    tree_screen.dart
    directory_screen.dart
    birthday_screen.dart
    timeline_screen.dart
    settings_screen.dart
    profile_screen.dart
  widgets/
    person_card.dart
    tree_canvas.dart
    birthday_calendar.dart
    stat_card.dart
    search_bar.dart
    filter_chips.dart
assets/
  data.json
```

## Logic Yang Boleh Diport Dari Website

Daripada `app.js`, port logic ini ke Dart:

- Parse tarikh.
- Kira umur ikut tahun.
- Upcoming birthday.
- Birthday month list.
- Search terms dan aliases.
- Relationship finder.
- Get individual family:
  - grandparents
  - parents
  - siblings
  - spouses
  - children
- Focused family IDs.
- Branch IDs.
- Timeline grouping/filter.

## First Task Bila Mula Flutter

1. Create Flutter project:

```bash
flutter create kami_tree_mobile
```

2. Copy `data.json` ke:

```text
kami_tree_mobile/assets/data.json
```

3. Update `pubspec.yaml`:

```yaml
flutter:
  assets:
    - assets/data.json
```

4. Buat model:

- `Person`
- `FamilyUnion`
- `FamilyData`

5. Buat loader JSON.

6. Buat Home Screen dengan stats dan upcoming birthday.

7. Baru buat Tree Screen.

## Prompt Untuk Chat Baru

Guna prompt ini:

```text
Baca FLUTTER_APP_PLAN.md dalam repo KAMI-tree. Saya nak mula project Flutter untuk KAMI Tree Mobile.

Target awal:
1. Create Flutter project.
2. Copy data.json sebagai asset.
3. Buat model Person, FamilyUnion, FamilyData.
4. Buat loader JSON.
5. Buat Home screen dengan stats dan upcoming birthday.

Jangan buat admin mode/database dulu.
```

## Nota Keputusan Semasa

- Admin mode: skip dahulu.
- Database: skip dahulu.
- Fokus sekarang: Flutter read-only app dengan semua function website.
- Extra utama mobile app: upcoming birthday widgets.
- Mobile UX boleh berbeza daripada website jika lebih mudah digunakan.

