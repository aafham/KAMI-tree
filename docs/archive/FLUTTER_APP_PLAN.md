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
- Website sudah ada dua pengalaman utama:
  - Web/desktop view.
  - Mobile responsive view.
- UI website yang sudah dikemaskini perlu dijadikan rujukan visual utama untuk app.

## Status Website Semasa

Website KAMI Tree sekarang sudah ada fungsi besar berikut:

- Home page dengan stats keluarga.
- Tree salasilah interaktif.
- Tree mode:
  - Overview.
  - Detail.
  - Branch/family view.
- Tree controls:
  - Search & focus.
  - Zoom in/out.
  - Fit screen.
  - Reset.
  - Reset view.
  - Pilih diri saya.
  - Paparan umum.
  - Timeline.
  - Directory.
  - Download.
  - Tetapan.
- Tree UI sudah dipolish:
  - Toolbar lebih kemas.
  - Dark mode lebih konsisten.
  - Tree card spacing diperbaiki.
  - Panel profile tidak diganggu oleh mini zoom toolbar.
  - Connector line cabang diperbaiki supaya tidak hilang bila zoom out dan scroll kiri/kanan.
  - SVG line dan tree canvas sudah disamakan saiz supaya line maintain pada semua zoom.
- Klik individu buka profile/detail.
- Profile individu papar:
  - Nama.
  - Relation.
  - Tarikh lahir.
  - Umur ikut tahun.
  - Tarikh meninggal jika ada.
  - Notes.
  - Story.
  - Lineage path.
  - Salasilah individu.
  - Actions seperti focus in tree, find relationship, view this family, copy link.
- Bila klik individu, website boleh papar keluarga individu:
  - Atok/nenek.
  - Mak/ayah.
  - Adik-beradik.
  - Pasangan.
  - Anak/cucu.
- Search sudah diperluas:
  - Nama.
  - Nickname.
  - Relation.
  - Gender.
  - Status.
  - Branch keluarga.
  - Keyword BM.
- Relationship finder.
- Relationship finder sudah dipertingkat untuk keluarga dekat:
  - ayah/mak kepada anak
  - anak kepada ayah/mak
  - abang/kakak/adik ikut susunan anak dalam union
  - tok/nenek, cucu, moyang, cicit
  - pakcik/makcik, anak saudara, sepupu untuk cabang dekat
- Focus self menggunakan pilihan device/browser masing-masing.
- Website Settings > Tools sudah ada Data Health, export Data Health CSV, export JSON, import JSON dan reset data asal.
- URL website boleh simpan view semasa seperti tree, birthday, directory dan timeline.

## Status Flutter App Terkini

- Home, Tree, Directory, Birthday, Timeline dan Settings sudah tersedia.
- Favourite/pin ahli keluarga dan recent viewed sudah ada.
- Onboarding boleh pilih diri sendiri.
- Profile boleh set diri sendiri dan toggle favourite.
- Relationship helper sudah lebih spesifik untuk hubungan keluarga dekat.
- Data Health dalam Settings boleh dibuka untuk lihat ahli bermasalah.
- Data Health boleh beri cadangan ayah daripada nama selepas `bin`, `binti` atau `bt`.
- Backup JSON boleh share/copy.
- Import JSON boleh dibuat melalui paste backup dalam Settings > Data.
- Reset data custom kepada data asal app sudah ada.
- Tree minimap sudah ada viewport dan boleh ditekan untuk lompat lokasi.
- General view disediakan supaya pengguna tidak wajib pilih diri sendiri.
- Directory page sudah ada UI khusus.
- Directory boleh search/filter/sort ahli.
- Timeline page.
- Birthday page penuh.
- Settings/Tetapan.
- README sudah ada link live website dan penerangan fungsi website.

## Update UI Birthday Website Semasa

Birthday page sudah dipolish dan perlu dijadikan rujukan untuk mobile app:

- Featured card `Birthday Terdekat`.
- Summary chips:
  - Jumlah birthday.
  - Nama birthday terdekat.
  - Countdown.
- Button `Hari Ini` untuk scroll/focus ke tarikh semasa.
- Calendar 12 bulan.
- Legend calendar:
  - Hari ini.
  - Range menuju birthday terdekat.
  - Birthday terdekat.
  - Ada birthday.
  - Dipilih.
- Tarikh yang ada birthday ada indicator.
- Jika lebih dari seorang birthday pada tarikh sama, calendar tunjuk badge nombor.
- Tarikh birthday boleh buka/tutup bila ditekan.
- Button `Buka Semua`.
- Button `Tutup Semua`.
- Upcoming birthday auto buka.
- Jika upcoming berubah, auto-open berpindah ke birthday seterusnya.
- Search birthday sudah jadi card dengan:
  - Initial/avatar.
  - Nama.
  - Tarikh birthday.
  - Countdown.
  - Umur akan datang.
- List birthday ikut bulan sudah jadi accordion.
- Bulan semasa dan bulan upcoming birthday default terbuka.
- Setiap bulan ada count birthday.
- Mobile layout dan dark mode untuk birthday page sudah dipolish.

## Update UI Directory Website Semasa

Family Directory sudah dipolish dan perlu ada dalam app:

- Search directory.
- Filter chips/tools.
- Sort.
- Card senarai ahli.
- Summary/filter state.
- Branch/family information.
- Directory menjadi cara alternatif untuk cari ahli tanpa perlu navigate tree besar.

## Update Tree Website Semasa

Tree sekarang perlu dianggap sebagai rujukan utama untuk app:

- Jangan hilangkan connector line semasa zoom.
- Connector line mesti maintain walaupun zoom out max.
- Tree canvas dan line layer mesti sama saiz.
- Kalau guna Flutter, jangan lukis line sebagai widget yang clipped oleh viewport sahaja.
- Line patut dilukis dalam canvas/painter yang cover full tree coordinate.
- Card perlu berada atas line.
- Line perlu responsive terhadap pan/zoom.
- Overview mode boleh compact.
- Detail mode boleh lebih besar.
- Branch mode fokus keluarga kecil.
- Jika screen kecil, app perlu bantu user masuk ke branch/focus, bukan paksa seluruh tree besar.

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

Wajib replicate birthday page website semasa:

- Upcoming birthday.
- Featured upcoming birthday card.
- Summary birthday:
  - jumlah birthday
  - nama birthday terdekat
  - countdown
- Calendar birthday.
- Bulatan pada tarikh yang ada birthday.
- Badge nombor jika satu tarikh ada ramai birthday.
- Highlight hari ini.
- Highlight range dari hari ini ke next birthday.
- Highlight next birthday.
- Legend calendar lengkap.
- Button Hari Ini.
- List birthday ikut bulan Jan sampai Dec.
- Month list sebagai accordion.
- Default buka bulan semasa dan bulan upcoming birthday.
- Count birthday setiap bulan.
- Search nama birthday.
- Search result sebagai card dengan avatar/initial, nama, tarikh, countdown, dan umur akan datang.
- Numbering list nama setiap bulan.
- Buka/tutup birthday pada tarikh calendar.
- Buka semua / tutup semua.
- Auto-open next upcoming birthday.
- Auto-open pindah ke next birthday bila birthday lama sudah lepas.
- Mobile layout yang selesa untuk calendar dan list.

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
- About/data version.
- Link live website jika perlu.

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
- Guna custom layout coordinate, bukan nested list biasa.
- Guna `CustomPainter` untuk connector line.
- `CustomPainter` perlu cover full tree bounds, bukan hanya viewport.
- Painter line dan card layer mesti guna transform pan/zoom yang sama.
- Card layer berada atas line layer.
- Jangan clip line pada viewport kecil.
- Bila zoom out, stroke line perlu maintain readable.
- Jika pakai `InteractiveViewer`, gunakan `boundaryMargin` besar supaya user boleh pan tree luas.
- Simpan transform/controller state untuk reset, fit, focus person.
- Fit screen perlu kira bounds semua visible node, bukan hanya rendered card.
- Branch mode perlu kira bounds keluarga branch dan fit pada viewport.

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

- Featured upcoming birthday card.
- Summary chips.
- Search birthday.
- Today button.
- Calendar 12 bulan.
- Calendar legend.
- Monthly lists Jan-Dec sebagai accordion.
- Search.
- Open all / close all.
- Badge bilangan birthday pada tarikh.
- Countdown dan umur akan datang.

Cadangan layout mobile:

1. Top bar dengan back/home.
2. Featured upcoming card.
3. Summary chips.
4. Search field.
5. Button row:
   - Hari Ini
   - Buka Semua
   - Tutup Semua
6. Legend.
7. Calendar bulan.
8. Accordion list Jan-Dec.

Nota:

- Calendar boleh dibuat vertical list bulan supaya mudah scroll.
- Jangan paksa 12 bulan dalam satu grid kecil di phone.
- Search result boleh muncul terus bawah search.
- Jika user tekan tarikh, buka/tutup list nama di bawah bulan tersebut.
- Jika ramai birthday pada satu tarikh, paparkan semua nama dalam bottom sheet atau inline list.

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
- Stats home.
- Upcoming birthday card.
- Search quick.
- Directory basic.
- Profile basic.
- Birthday basic.

Tidak perlu:

- Admin mode.
- Login.
- Database.
- Widget dahulu jika belum stabil.

### Phase 2: Tree + Profile Parity

Tambah:

- Tree overview.
- Tree detail.
- Tree branch mode.
- Pan/zoom/fit/reset.
- Search & focus in tree.
- Connector lines guna custom painter.
- Profile full screen/bottom sheet.
- Individual lineage.
- View this family.
- Focus in tree.

### Phase 3: Full Website Function Parity

Tambah:

- Relationship finder.
- Timeline.
- Full birthday calendar.
- Settings lengkap.
- BM/EN.
- Dark mode.
- Directory filters/sort lengkap.
- Birthday featured card.
- Birthday accordion.
- Birthday search card.
- Birthday today button.

### Phase 4: Upcoming Birthday Widgets

Tambah:

- Small widget.
- Medium list widget.
- Calendar widget.
- Countdown widget.

### Phase 5: Sync / Admin / Database

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
    tree_painter_service.dart
    search_service.dart
    preferences_service.dart
    directory_service.dart
    timeline_service.dart
  state/
    family_provider.dart
    settings_provider.dart
    selected_person_provider.dart
    self_person_provider.dart
    tree_view_provider.dart
    birthday_provider.dart
    directory_filter_provider.dart
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
    tree_connector_painter.dart
    profile_lineage_section.dart
    relationship_result_card.dart
    birthday_calendar.dart
    birthday_featured_card.dart
    birthday_month_accordion.dart
    stat_card.dart
    search_bar.dart
    filter_chips.dart
    app_bottom_nav.dart
assets/
  data.json
```

## Service Cadangan

### `family_repository.dart`

Tanggungjawab:

- Load `data.json`.
- Parse kepada model Dart.
- Expose `FamilyData`.
- Nanti boleh tukar kepada remote fetch tanpa ubah UI besar-besaran.

### `tree_layout_service.dart`

Tanggungjawab:

- Bina node tree.
- Kira x/y setiap node.
- Kira bounds setiap mode:
  - overview
  - detail
  - branch
- Kira focused family IDs.
- Kira individual lineage.

### `tree_connector_painter.dart`

Tanggungjawab:

- Lukis line hubungan.
- Lukis partner line.
- Lukis parent-child connector.
- Pastikan line maintain bila zoom.
- Jangan clip line bila scroll/pan.

### `birthday_service.dart`

Tanggungjawab:

- Get birthday entries.
- Kira next birthday.
- Kira countdown.
- Kira umur akan datang.
- Group by month.
- Group by date.
- Determine current date key.
- Determine range hari ini ke next birthday.

### `search_service.dart`

Tanggungjawab:

- Search nama/nickname/relation/status/gender/branch.
- Support BM keyword aliases.
- Return ranked results.

### `relationship_service.dart`

Tanggungjawab:

- Cari path antara dua orang.
- Label hubungan.
- Support hubungan asas website.

### `directory_service.dart`

Tanggungjawab:

- Filter directory.
- Sort directory.
- Build directory summaries/chips.

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

## Checklist Mobile App

### Setup Project

- [ ] Create Flutter project `kami_tree_mobile`.
- [ ] Copy `data.json` ke `assets/data.json`.
- [ ] Register asset dalam `pubspec.yaml`.
- [ ] Setup routing.
- [ ] Setup state management.
- [ ] Setup theme light/dark.
- [ ] Setup BM/EN text structure.

### Data & Model

- [ ] Model `Person`.
- [ ] Model `FamilyUnion`.
- [ ] Model `FamilyData`.
- [ ] JSON loader.
- [ ] Date parser.
- [ ] Age helper ikut tahun.
- [ ] Branch helper.
- [ ] Generation helper.
- [ ] Data validation basic.

### Home

- [ ] Home screen.
- [ ] Stats jumlah ahli.
- [ ] Stats pasangan.
- [ ] Stats gender.
- [ ] Stats keturunan.
- [ ] Upcoming birthday card.
- [ ] Quick search.
- [ ] Shortcut Tree.
- [ ] Shortcut Directory.
- [ ] Shortcut Birthday.
- [ ] Shortcut Timeline.

### Tree

- [ ] Tree layout service.
- [ ] Tree canvas.
- [ ] Person card compact.
- [ ] Person card detail.
- [ ] Connector painter.
- [ ] Pan/zoom.
- [ ] Fit screen.
- [ ] Reset view.
- [ ] Overview mode.
- [ ] Detail mode.
- [ ] Branch mode.
- [ ] Focus person.
- [ ] Focus self.
- [ ] General view.
- [ ] Minimap optional.
- [ ] Fix line supaya tidak hilang bila zoom out.
- [ ] Test kiri/tengah/kanan tree pada zoom out.

### Profile

- [ ] Profile full screen atau bottom sheet.
- [ ] Info tab.
- [ ] Salasilah tab.
- [ ] Actions tab.
- [ ] Grandparents.
- [ ] Parents.
- [ ] Siblings.
- [ ] Spouse.
- [ ] Children.
- [ ] Lineage path.
- [ ] Focus in tree action.
- [ ] Find relationship action.
- [ ] View this family action.
- [ ] Share/copy profile action.

### Directory

- [ ] Directory screen.
- [ ] Search.
- [ ] Filter generation.
- [ ] Filter gender.
- [ ] Filter status.
- [ ] Filter birthday month.
- [ ] Filter branch.
- [ ] Sort generation.
- [ ] Sort name.
- [ ] Sort age.
- [ ] Sort birthday.
- [ ] Directory card UI.
- [ ] Empty state.

### Birthday

- [ ] Birthday screen.
- [ ] Featured upcoming card.
- [ ] Summary chips.
- [ ] Today button.
- [ ] Calendar 12 bulan.
- [ ] Legend calendar.
- [ ] Birthday date indicator.
- [ ] Badge count jika ramai birthday satu tarikh.
- [ ] Highlight hari ini.
- [ ] Highlight range ke next birthday.
- [ ] Highlight next birthday.
- [ ] Tap date buka/tutup.
- [ ] Open all.
- [ ] Close all.
- [ ] Auto-open next birthday.
- [ ] Search birthday.
- [ ] Search result card.
- [ ] Month accordion.
- [ ] Month count.
- [ ] Numbering list nama.
- [ ] Countdown.
- [ ] Umur akan datang.

### Relationship

- [ ] Person picker 1.
- [ ] Person picker 2.
- [ ] Relationship result.
- [ ] Relationship path.
- [ ] Highlight result dalam tree.
- [ ] Support pasangan.
- [ ] Support parent/child.
- [ ] Support siblings.
- [ ] Support grandparents/grandchildren.
- [ ] Support uncle/aunt/nephew/niece.

### Timeline

- [ ] Timeline screen.
- [ ] Filter generation.
- [ ] Filter month.
- [ ] Filter gender.
- [ ] Sort timeline.
- [ ] Tap timeline item buka profile.

### Settings

- [ ] Bahasa BM/EN.
- [ ] Light/dark mode.
- [ ] Card size.
- [ ] Toggle birthdate.
- [ ] Toggle age.
- [ ] Toggle tags.
- [ ] Toggle minimap.
- [ ] Reset self.
- [ ] Clear preferences/cache.
- [ ] About/data version.

### Widgets

- [ ] Prepare birthday widget data.
- [ ] Small upcoming widget.
- [ ] Medium upcoming list widget.
- [ ] Calendar upcoming widget.
- [ ] Countdown widget.
- [ ] Android widget update.
- [ ] iOS widget research/extension.

## Prompt Untuk Chat Baru

Guna prompt ini:

```text
Baca FLUTTER_APP_PLAN.md dalam repo KAMI-tree.
Saya nak mula project Flutter untuk KAMI Tree Mobile ikut plan terbaru.

Rujukan:
- Live website: https://kami-tree.vercel.app/
- Data: data.json

Target awal:
1. Create Flutter project.
2. Copy data.json sebagai asset.
3. Buat model Person, FamilyUnion, FamilyData.
4. Buat loader JSON.
5. Buat Home screen dengan stats dan upcoming birthday.
6. Buat Birthday service asas sebab widget birthday penting kemudian.

Jangan buat admin mode/database/login dulu.
App awal read-only.
Pastikan tree nanti guna CustomPainter untuk connector supaya line tidak hilang bila zoom out.
```

## Nota Keputusan Semasa

- Admin mode: skip dahulu.
- Database: skip dahulu.
- Fokus sekarang: Flutter read-only app dengan semua function website.
- Extra utama mobile app: upcoming birthday widgets.
- Mobile UX boleh berbeza daripada website jika lebih mudah digunakan.
- Website live menjadi rujukan visual dan behavior.
- Jangan replicate bug website lama:
  - Line tree tidak boleh hilang bila zoom out.
  - Profile panel tidak boleh diganggu toolbar zoom.
  - User tidak wajib pilih diri sendiri untuk guna app.
  - Mesti ada general view.
- Jika satu device digunakan ramai orang, `Pilih Diri Saya` mesti boleh tukar/reset.
- Simpan pilihan diri sendiri sebagai preference device, bukan global semua user.
- App read-only Phase 1 masih boleh simpan preference local:
  - theme
  - language
  - self person
  - display toggles
  - last view mode
