const treeWrap = document.getElementById("tree-wrap");
const treeZoom = document.getElementById("tree-zoom");
const treeCanvas = document.getElementById("tree-canvas");
const treeStatus = document.getElementById("tree-status");
const treeLines = document.getElementById("tree-lines");
const minimapCanvas = document.getElementById("minimap-canvas");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");
const searchGoBtn = document.getElementById("search-go");
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const zoomResetBtn = document.getElementById("zoom-reset");
const resetViewBtn = document.getElementById("reset-view");
const generalViewBtn = document.getElementById("general-view");
const focusSelfBtn = document.getElementById("focus-self");
const toggleThemeBtn = document.getElementById("toggle-theme");
const exportPngBtn = document.getElementById("export-png");
const exportPdfBtn = document.getElementById("export-pdf");
const exportBranchCsvBtn = document.getElementById("export-branch-csv");
const exportMenuBtn = document.getElementById("export-menu-btn");
const exportMenu = document.getElementById("export-menu");
const modal = document.getElementById("person-modal");
const modalBody = document.getElementById("modal-body");
const app = document.getElementById("app");
const controlsToggleBtn = document.getElementById("controls-toggle");
const mobilePanelBtn = document.getElementById("mobile-panel-btn");
const generationControls = document.getElementById("generation-controls");
const branchFilter = document.getElementById("branch-filter");
const relationshipPersonA = document.getElementById("relationship-person-a");
const relationshipPersonB = document.getElementById("relationship-person-b");
const relationshipFindBtn = document.getElementById("relationship-find");
const relationshipOutput = document.getElementById("relationship-output");
const viewToggle = document.getElementById("view-toggle");
const directoryToggle = document.getElementById("directory-toggle");
const storyPanel = document.getElementById("story-panel");
const storyTitle = document.getElementById("story-title");
const storyBody = document.getElementById("story-body");
const storyContent = document.getElementById("story-content");
const panelEditBtn = document.getElementById("panel-edit");
const panelCloseBtn = document.getElementById("panel-close");
const panelEditForm = document.getElementById("panel-edit-form");
const panelCancelBtn = document.getElementById("panel-cancel");
const panelEditName = document.getElementById("panel-edit-name");
const panelEditFirst = document.getElementById("panel-edit-first");
const panelEditLast = document.getElementById("panel-edit-last");
const panelGenderInputs = document.querySelectorAll('input[name="panel-gender"]');
const panelEditRelation = document.getElementById("panel-edit-relation");
const panelEditBirth = document.getElementById("panel-edit-birth");
const panelEditDeath = document.getElementById("panel-edit-death");
const panelEditPhoto = document.getElementById("panel-edit-photo");
const panelEditPhotoFile = document.getElementById("panel-edit-photo-file");
const panelEditNote = document.getElementById("panel-edit-note");
const panelEditStory = document.getElementById("panel-edit-story");
const timelineSection = document.getElementById("timeline-section");
const timelineList = document.getElementById("timeline-list");
const birthdaySection = document.getElementById("birthday-section");
const birthdayBackBtn = document.getElementById("birthday-back");
const birthdaySearchInput = document.getElementById("birthday-search");
const birthdayOpenAllBtn = document.getElementById("birthday-open-all");
const birthdayCloseAllBtn = document.getElementById("birthday-close-all");
const birthdayTodayBtn = document.getElementById("birthday-today");
const birthdayExportCsvBtn = document.getElementById("birthday-export-csv");
const birthdayFeatured = document.getElementById("birthday-featured");
const birthdaySummary = document.getElementById("birthday-summary");
const birthdaySearchResults = document.getElementById("birthday-search-results");
const birthdayCalendar = document.getElementById("birthday-calendar");
const birthdayPlanner = document.getElementById("birthday-planner");
const birthdayMonthLists = document.getElementById("birthday-month-lists");
const profilePage = document.getElementById("profile-page");
const profilePageContent = document.getElementById("profile-page-content");
const profilePageTitle = document.getElementById("profile-page-title");
const profilePageSubtitle = document.getElementById("profile-page-subtitle");
const profilePageBackBtn = document.getElementById("profile-page-back");
const profilePhotoLightbox = document.getElementById("profile-photo-lightbox");
const profilePhotoLightboxImage = document.getElementById("profile-photo-lightbox-image");
const birthdayViewYearBtn = document.getElementById("birthday-view-year");
const birthdayViewPlannerBtn = document.getElementById("birthday-view-planner");
const zoomFitBtn = document.getElementById("zoom-fit");
const langToggleBtn = document.getElementById("lang-toggle");
const clearCacheBtn = document.getElementById("clear-cache");
const mobileQuickZoomIn = document.getElementById("m-zoom-in");
const mobileQuickZoomOut = document.getElementById("m-zoom-out");
const mobileQuickZoomFit = document.getElementById("m-zoom-fit");
const mobileQuickFocusSelf = document.getElementById("m-focus-self");
const mobileSettingsBtn = document.getElementById("mobile-settings-btn");
const mobileSearchBtn = document.getElementById("mobile-search-btn");
const mobileSelfBtn = document.getElementById("mobile-self-btn");
const mobileDirectoryBtn = document.getElementById("mobile-directory-btn");
const mobileTimelineBtn = document.getElementById("mobile-timeline-btn");
const mobileSearchOverlay = document.getElementById("mobile-search-overlay");
const mobileSearchBackdrop = document.getElementById("mobile-search-backdrop");
const mobileSearchClose = document.getElementById("mobile-search-close");
const mobileSearchInput = document.getElementById("mobile-search-input");
const mobileSearchResults = document.getElementById("mobile-search-results");
const bottomSheetHandle = document.getElementById("sheet-handle");
const miniToolbar = document.getElementById("mini-toolbar");
const miniSearchBtn = document.getElementById("mini-search");
const miniZoomInBtn = document.getElementById("mini-zoom-in");
const miniZoomOutBtn = document.getElementById("mini-zoom-out");
const miniZoomFitBtn = document.getElementById("mini-zoom-fit");
const settingsBtn = document.getElementById("settings-btn");
const bottomSheet = document.getElementById("bottom-sheet");
const settingsModal = document.getElementById("settings-modal");
const settingsCompact = document.getElementById("settings-compact");
const settingsCardScale = document.getElementById("setting-card-scale");
const settingsFontScale = document.getElementById("setting-font-scale");
const settingsMinimap = document.getElementById("settings-minimap");
const settingsDrag = document.getElementById("settings-drag");
const settingsReset = document.getElementById("setting-reset-settings");
const settingsResetSelf = document.getElementById("setting-reset-self");
const settingsShowBirthdate = document.getElementById("setting-show-birthdate");
const settingsShowAge = document.getElementById("setting-show-age");
const settingsShowTags = document.getElementById("setting-show-tags");
const settingsDataVersion = document.getElementById("settings-data-version");
const dataHealthPanel = document.getElementById("data-health-panel");
const dataHealthExportCsvBtn = document.getElementById("data-health-export-csv");
const exportJsonDataBtn = document.getElementById("export-json-data");
const importJsonDataBtn = document.getElementById("import-json-data");
const resetJsonDataBtn = document.getElementById("reset-json-data");
const statPeople = document.getElementById("stat-people");
const statCouples = document.getElementById("stat-couples");
const statMale = document.getElementById("stat-male");
const statFemale = document.getElementById("stat-female");
const statCucu = document.getElementById("stat-cucu");
const statCicit = document.getElementById("stat-cicit");
const birthdayCard = document.getElementById("birthday-card");
const homeHero = document.querySelector(".home-hero");
const homeTopbar = document.querySelector(".topbar");
const homeFamilyPhotoToggle = document.getElementById("home-family-photo-toggle");
const statUpcomingName = document.getElementById("stat-upcoming-name");
const statUpcomingMeta = document.getElementById("stat-upcoming-meta");
const quickPeopleSection = document.getElementById("quick-people");
const favoritePeopleCard = document.getElementById("favorite-people-card");
const favoritePeopleList = document.getElementById("favorite-people-list");
const recentPeopleCard = document.getElementById("recent-people-card");
const recentPeopleList = document.getElementById("recent-people-list");
const themePresetSelect = document.getElementById("theme-preset");
const timelineGenSelect = document.getElementById("timeline-gen");
const timelineSearchInput = document.getElementById("timeline-search");
const timelineMonthSelect = document.getElementById("timeline-month");
const timelineGenderSelect = document.getElementById("timeline-gender");
const timelineSortSelect = document.getElementById("timeline-sort");
const timelineClearBtn = document.getElementById("timeline-clear");
const viewTreeBtn = document.getElementById("view-tree-btn");
const viewTimelineBtn = document.getElementById("view-timeline-btn");
const timelineMoreBtn = document.getElementById("timeline-more-btn");
const timelineMorePanel = document.getElementById("timeline-more-panel");
const timelineActiveFilters = document.getElementById("timeline-active-filters");
const viewDirectoryBtn = document.getElementById("view-directory-btn");
const directorySection = document.getElementById("directory-section");
const directoryBackBtn = document.getElementById("directory-back");
const directorySearchInput = document.getElementById("directory-search");
const directoryGenerationSelect = document.getElementById("directory-generation");
const directoryGenderSelect = document.getElementById("directory-gender");
const directoryBirthdayMonthSelect = document.getElementById("directory-birthday-month");
const directoryBranchSelect = document.getElementById("directory-branch");
const directoryStatusSelect = document.getElementById("directory-status");
const directorySortSelect = document.getElementById("directory-sort");
const directoryClearBtn = document.getElementById("directory-clear");
const directoryExportCsvBtn = document.getElementById("directory-export-csv");
const directoryLayoutToggle = document.getElementById("directory-layout-toggle");
const directorySummary = document.getElementById("directory-summary");
const directoryList = document.getElementById("directory-list");
const directoryMoreBtn = document.getElementById("directory-more-btn");
const directoryMorePanel = document.getElementById("directory-more-panel");
const directoryActiveFilters = document.getElementById("directory-active-filters");
const focusedBranchBar = document.getElementById("focused-branch-bar");
const focusedBranchLabel = document.getElementById("focused-branch-label");
const focusedBranchClearBtn = document.getElementById("focused-branch-clear");
const quickFamilyFilter = document.getElementById("quick-family-filter");
const quickFamilyLabel = document.getElementById("quick-family-label");
const treeViewModeBtns = document.querySelectorAll("[data-tree-view-mode]");
const webNavButtons = document.querySelectorAll("[data-web-nav]");
const webNavItems = document.querySelector(".web-nav-items");
const homeOpenTreeBtn = document.getElementById("home-open-tree");
const homeGlobalSearchBtn = document.getElementById("home-global-search");


function on(el, event, handler, options) {
  if (!el) return;
  el.addEventListener(event, handler, options);
}

function refreshIcons(root = document) {
  if (!window.lucide?.createIcons) return;
  window.lucide.createIcons({ root });
}

const layoutConfig = {
  cardWidth: 220,
  cardGap: 16,
  hGap: 40,
  vGap: 248,
  topPadding: 0,
  leftPadding: 20,
  labelColumnWidth: 120
};

const branchPalette = ["#4f8a6a", "#8bb8d4", "#c49b6c", "#c47a7a", "#6f8ac4", "#8a6cc4", "#6cc4a1"];
const BRANCH_FILTER_ENABLED = false;
const GENERATION_FILTER_ENABLED = true;
const SOFT_PEACH_ROOT_ID = "p3";
const SOFT_PEACH_COLOR = "var(--soft-peach)";
const BABY_BLUE_ROOT_ID = "p5";
const BABY_BLUE_COLOR = "var(--baby-blue)";
const MINT_GREEN_ROOT_ID = "p7";
const MINT_GREEN_COLOR = "var(--mint-green)";
const LAVENDER_ROOT_ID = "p9";
const LAVENDER_COLOR = "var(--lavender)";
const VIRTUALIZE_THRESHOLD = 1000000;
const STORAGE_KEY = "familyTreePrefs";
const DATA_KEY = "familyTreeData";
const SELF_STORAGE_KEY = "familyTreeSelfId";
const FAVORITES_STORAGE_KEY = "familyTreeFavoriteIds";
const RECENT_STORAGE_KEY = "familyTreeRecentIds";
const PREFS_SCHEMA_VERSION = "2026-07-10b";
const FORCE_RESET = false;
const MOBILE_CONTROLS_KEY = "ft_controls_collapsed";

const isMobileView = () => window.matchMedia("(max-width: 720px)").matches;

let treeData = null;
let peopleById = new Map();
let layoutRoot = null;
let nodesList = [];
let maxDepth = 0;
let scale = 1;
let baseSize = { width: 0, height: 0 };
let elementByPersonId = new Map();
let elementByNodeId = new Map();
let nodeByPersonId = new Map();
let hiddenGenerations = new Set();
let virtualizationEnabled = false;
let renderQueued = false;
let lastSearchResults = [];
let selectedPersonId = "";
let viewMode = "tree";
let branchFilterValue = "all";
let softPeachPeople = new Set();
let babyBluePeople = new Set();
let mintGreenPeople = new Set();
let lavenderPeople = new Set();
let forceFreshData = false;
let recoveryAttempted = false;
let lang = "ms";
let compactMode = false;
let pathMode = false;
let controlsCollapsed = false;
let favoritePersonIds = new Set();
let recentPersonIds = [];
let themePreset = "default";
let showLines = true;
let cardScale = 1;
let fontScale = 1;
let minimapEnabled = true;
let dragToPan = true;
let defaultView = "tree";
let showBirthdate = true;
let showAge = true;
let showTags = true;
let timelineFilters = {
  query: "",
  generation: "all",
  month: "all",
  gender: "all",
  sort: "year"
};
let timelineMoreOpen = false;
let initialFocusDone = false;
let openBirthdayDates = new Set();
let autoOpenedBirthdayKey = "";
let birthdayCalendarView = "year";
let birthdayPlannerMonth = new Date().getMonth();
let birthdaySearchExpanded = false;
let focusedBranchPersonId = "";
let focusedBranchPeople = new Set();
let activeQuickFamilyFilter = "";
let quickFamilyPeople = new Set();
let activeRelationshipTargets = [];
let activeRelationshipPath = [];
let minimapAutoPeekDone = false;
let treeDisplayMode = "overview";
let directoryFilters = {
  query: "",
  generation: "all",
  gender: "all",
  birthdayMonth: "all",
  branch: "all",
  status: "all",
  sort: "generation"
};
let directoryMoreOpen = false;
let directoryLayout = "grid";
let quickFavoritesExpanded = false;
let quickRecentExpanded = false;
let selectedDataHealthIssue = "all";
let navSurface = "home";
let profilePagePersonId = "";
let profilePageReturnView = "tree";

const prefs = loadPrefs();
const i18n = {
  ms: {
    appKicker: "Salasilah Keluarga",
    appTitle: "Paparan Generasi Keluarga",
    appSubtitle: "Semua ahli keluarga dalam satu pandangan yang jelas, mudah, dan mesra.",
    navHome: "Home",
    navTree: "Tree",
    navDirectory: "Direktori",
    navBirthday: "Birthday",
    navTimeline: "Timeline",
    navSettings: "Tetapan",
    homeViewTreeTitle: "Lihat Tree Keluarga",
    homeViewTreeHint: "Buka salasilah penuh dengan zoom dan profile.",
    homeGlobalSearchTitle: "Search Global",
    homeGlobalSearchHint: "Cari nama, relation, cabang dan birthday.",
    globalSearchKicker: "Carian Keluarga",
    globalSearchTitle: "Cari Apa Saja",
    globalSearchSubtitle: "Cari nama, nickname, relation, cabang, jantina, status atau birthday.",
    directorySubtitle: "Cari dan buka maklumat ahli keluarga dengan cepat.",
    timelineKicker: "Sejarah Keluarga",
    timelineSubtitle: "Ahli keluarga disusun mengikut tahun dan pilihan timeline.",
    searchLabel: "Carian nama",
    searchGo: "Cari & Fokus",
    searchShort: "Cari",
    generalView: "Paparan Umum",
    focusSelf: "Fokus Diri Saya",
    focusSelfShort: "Saya",
    chooseSelf: "Pilih Diri Saya",
    chooseSelfShort: "Pilih Saya",
    chooseSelfPrompt: "Taip nama anda dalam family tree:",
    chooseSelfNotFound: "Nama tidak ditemui. Cuba taip nama penuh atau sebahagian nama.",
    chooseSelfSaved: "Diri saya diset kepada {name} untuk browser ini.",
    resetSelf: "Reset Diri Saya",
    resetSelfConfirm: "Padam pilihan diri saya untuk browser ini?",
    resetSelfDone: "Pilihan diri saya telah dipadam untuk browser ini.",
    viewTimeline: "Lihat Timeline",
    viewTimelineShort: "Timeline",
    viewTree: "Lihat Tree",
    treeToolbarTitle: "Tree Keluarga",
    treeToolbarHint: "Drag atau scroll untuk lihat cabang lain.",
    treeModeOverview: "Overview",
    treeModeDetail: "Detail",
    treeModeBranch: "Branch",
    treeScrollGuide: "← Drag / scroll untuk lihat cabang keluarga lain →",
    compactOn: "Mode Penuh",
    compactOff: "Mode Ringkas",
    fit: "Fit Skrin",
    zoomIn: "Zoom +",
    zoomOut: "Zoom -",
    zoomReset: "Reset",
    themeToggle: "Cerah / Gelap",
    themeToggleHint: "Tukar tema cerah atau gelap.",
    langToggle: "BM / EN",
    langToggleHint: "Tukar bahasa paparan.",
    exportPng: "Image (JPEG)",
    exportPdf: "File (PDF)",
    branchLabel: "Tapis cabang",
    relationshipTitle: "Cari hubungan keluarga",
    relationshipSummaryHint: "Pilih dua nama untuk lihat hubungan.",
    relationshipFind: "Cari Hubungan",
    relationshipPick: "Pilih nama...",
    relationshipSame: "Pilih dua orang yang berbeza.",
    relationshipNoData: "Hubungan belum dapat dikenal pasti daripada data semasa.",
    relationshipSelf: "{a} ialah orang yang sama dengan {b}.",
    relationshipSpouse: "{a} ialah pasangan kepada {b}.",
    relationshipParent: "{a} ialah ibu/bapa kepada {b}.",
    relationshipChild: "{a} ialah anak kepada {b}.",
    relationshipSibling: "{a} ialah adik-beradik kepada {b}.",
    relationshipOlderBrother: "{a} ialah abang kepada {b}.",
    relationshipOlderSister: "{a} ialah kakak kepada {b}.",
    relationshipYoungerSibling: "{a} ialah adik kepada {b}.",
    relationshipFather: "{a} ialah ayah kepada {b}.",
    relationshipMother: "{a} ialah mak kepada {b}.",
    relationshipGrandfather: "{a} ialah tok kepada {b}.",
    relationshipGrandmother: "{a} ialah nenek kepada {b}.",
    relationshipGreatGrandparent: "{a} ialah moyang kepada {b}.",
    relationshipGrandparent: "{a} ialah atok/nenek kepada {b}.",
    relationshipGrandchild: "{a} ialah cucu kepada {b}.",
    relationshipUncleAunt: "{a} ialah pakcik/makcik kepada {b}.",
    relationshipNephewNiece: "{a} ialah anak saudara kepada {b}.",
    relationshipCousin: "{a} ialah sepupu kepada {b}.",
    relationshipPathLabel: "Laluan hubungan",
    birthdayBack: "Back ke Home",
    birthdayKicker: "Kalendar Keluarga",
    birthdayTitle: "Semua Birthday",
    birthdaySearchLabel: "Cari nama birthday",
    birthdaySearchPlaceholder: "Cari nama...",
    birthdayNoSearch: "Tiada nama ditemui.",
    birthdayNoDate: "Tiada birthday direkodkan.",
    birthdayOpenAll: "Buka Semua",
    birthdayCloseAll: "Tutup Semua",
    birthdayLegendToday: "Hari ini",
    birthdayLegendRange: "Menuju birthday terdekat",
    birthdayLegendNext: "Birthday terdekat",
    viewDirectory: "Directory",
    directoryBack: "Back ke Home",
    directoryKicker: "Senarai Keluarga",
    directoryTitle: "Family Directory",
    directorySearchLabel: "Cari ahli",
    directorySearchPlaceholder: "Cari nama, nickname, cabang, relation...",
    directoryGeneration: "Generasi",
    directoryGender: "Jantina",
    directoryBirthdayMonth: "Bulan Birthday",
    directoryAllBirthdayMonths: "Semua bulan",
    directoryBranch: "Cabang",
    directoryAllBranches: "Semua cabang",
    directoryRootBranch: "Root / Generasi asal",
    directoryBranchLabel: "Cabang {name}",
    directoryStatus: "Status",
    directoryAllStatuses: "Semua status",
    directoryLiving: "Masih hidup",
    directoryDeceased: "Meninggal",
    directoryIncomplete: "Data belum lengkap",
    directorySort: "Susun",
    directorySortGeneration: "Ikut Generasi",
    directorySortName: "Ikut Nama",
    directorySortAge: "Ikut Umur",
    directorySortBirthday: "Ikut Birthday",
    directoryAllGenerations: "Semua generasi",
    directorySummary: "{count} ahli dipaparkan",
    directoryGridView: "Paparan grid",
    directoryListView: "Paparan senarai",
    directoryProfile: "Profil",
    mobileSearchTitle: "Cari Ahli Keluarga",
    homeSavedKicker: "Disimpan",
    homeSavedMembers: "Ahli Disimpan",
    homeRecentKicker: "Sejarah",
    homeRecentMembers: "Baru Dibuka",
    profileFocusTree: "Fokus dalam tree",
    profileFocusTreeShort: "Tree",
    profileOpen: "Profil",
    profileBack: "Kembali",
    profilePageKicker: "Profil Ahli",
    profileFindRelation: "Cari hubungan",
    profileFamilyView: "Lihat keluarga ini",
    profileFamilyShort: "Keluarga",
    profilePin: "Pin",
    profileRelationShort: "Hubungan",
    profileShareShort: "Kongsi",
    profilePrintShort: "Cetak",
    profileCopyShort: "Salin",
    profilePinned: "Pinned",
    profileCopyLink: "Copy link",
    profileShareText: "Share text",
    profilePrint: "Print",
    profileHome: "Home",
    profileBirthday: "Birthday",
    profileMore: "Tindakan lain",
    profileViewTree: "Lihat dalam tree",
    profileOverview: "Ringkasan",
    profileFamilySection: "Keluarga terdekat",
    profileAncestorsSection: "Moyang dan ibu bapa",
    profileDescendantsSection: "Keturunan",
    profileInformationSection: "Maklumat ahli",
    profileSpouses: "Pasangan",
    profileParents: "Mak / Ayah",
    profileSiblings: "Adik-beradik",
    profileChildren: "Anak",
    profileGrandparents: "Atok / Nenek",
    profileGreatGrandparents: "Moyang",
    profileBranchDescendants: "keturunan",
    profileFurtherDescendants: "keturunan seterusnya",
    profileNoAncestors: "Maklumat moyang belum direkodkan.",
    profileNoDescendants: "Tiada keturunan direkodkan.",
    profileNoFamily: "Maklumat keluarga belum direkodkan.",
    profileBornDied: "Lahir {birth} — Meninggal {death}",
    profileBorn: "Lahir {birth}",
    profileDied: "Meninggal {death}",
    profileLifespan: "Jangka hayat: {age} tahun",
    profileTotalDescendants: "Jumlah keturunan",
    profileLinkCopied: "Link ahli telah disalin.",
    profileLinkCopyFail: "Tak dapat copy link. URL sudah dikemas kini di address bar.",
    profileFamilyStats: "Ringkasan keluarga",
    profileChildrenCount: "Anak",
    profileGrandchildrenCount: "Cucu",
    profileGreatGrandchildrenCount: "Cicit",
    profileInlawsCount: "Menantu",
    focusedBranchClear: "Tunjuk Semua",
    focusedBranchActive: "Family view: {name}",
    focusedBranchHint: "Paparan ini hanya tunjuk keluarga terdekat.",
    quickFamilyLabel: "Tapis keluarga dipilih",
    quickFamilyParents: "Mak/Ayah",
    quickFamilySiblings: "Adik-beradik",
    quickFamilyDescendants: "Anak/Cucu",
    quickFamilyClose: "Keluarga dekat",
    quickFamilyClear: "Reset",
    lineageBreadcrumb: "Laluan salasilah",
    generationLabel: "Generasi (Lipat/Buka)",
    legendParentChild: "Garis sambungan ibu bapa \u2192 anak",
    legendCouple: "Pasangan ditunjukkan secara selari",
    storyTitle: "Cerita Keluarga",
    storyEmpty: "Klik pada mana-mana ahli keluarga untuk melihat catatan panjang.",
    spouseHusband: "Suami",
    spouseWife: "Isteri",
    timelineTitle: "Timeline Keluarga",
    timelineSearch: "Cari timeline",
    timelineSearchPlaceholder: "Cari nama, relation, nota...",
    modalClose: "Tutup",
    modalEdit: "Edit",
    modalRelation: "Hubungan",
    modalBirth: "Tarikh lahir",
    modalDeath: "Tarikh meninggal",
    modalNote: "Catatan",
    modalStory: "Cerita",
    lineageTitle: "Salasilah Individu",
    lineageGreatGrandparents: "Moyang",
    lineageGrandparents: "Atok / Nenek",
    lineageParents: "Mak / Ayah",
    lineageSiblings: "Adik-beradik",
    lineageSpouses: "Pasangan",
    lineageChildren: "Anak",
    lineageGrandchildren: "Cucu",
    lineageGreatGrandchildren: "Cicit",
    lineageNone: "Tiada data",
    modalFullName: "Nama penuh",
    modalImage: "URL gambar",
    modalShortNote: "Nota ringkas",
    modalLongStory: "Cerita panjang",
    modalCancel: "Batal",
    modalSave: "Simpan",
    modalDelete: "Padam",
    modalDeleteConfirm: "Padam ahli ini? Tindakan ini akan buang hubungan pasangan/anak.",
    legendGeneration: "Generasi",
    branchAll: "Semua cabang",
    branchName: "Cabang {n}",
    parentNone: "Tiada (jadi root)",
    genAll: "Tunjuk Semua",
    searchNone: "Tiada nama ditemui",
    datesUnknown: "Tarikh tidak dinyatakan",
    bornPrefix: "Lahir: ",
    diedPrefix: "Meninggal: ",
    loadFail: "Gagal memuatkan data keluarga.",
    exportDate: "Tarikh eksport: {date}",
    exportPngFail: "Gagal export PNG: library tidak tersedia.",
    exportPdfFail: "Gagal export PDF: library tidak tersedia.",
    exportDirectoryCsv: "Directory CSV",
    exportBirthdayCsv: "Birthday CSV",
    exportBranchCsv: "Branch CSV",
    exportCsvDone: "CSV telah dimuat turun.",
    ageLabel: "Umur",
    minimapTitle: "Minimap",
    minimapHint: "Klik pada kotak kecil untuk lompat lokasi. Kotak putih menunjukkan kawasan semasa.",
    minimapShow: "Buka Minimap",
    firstNameLabel: "Nama pertama",
    lastNameLabel: "Nama akhir",
    genderLabel: "Jantina",
    genderMale: "Lelaki",
    genderFemale: "Perempuan",
    genderUnknown: "Tidak pasti",
    controlsToggleOpen: "Buka Panel",
    controlsToggleClose: "Tutup Panel",
    resetView: "Reset View",
    loading: "Memuatkan data...",
    clearCache: "Clear Cache",
    clearCacheConfirm: "Padam cache untuk laman ini? Data tersimpan di pelayar akan dipadam.",
    okBtn: "OK",
    errStructure: "Struktur utama mesti ada `people` dan `unions`.",
    errPersonNoId: "Ada ahli tanpa id.",
    errDuplicateId: "ID berulang: {id}",
    errUnionNoId: "Ada union tanpa id.",
    errPartner1Missing: "Partner1 tidak wujud: {id}",
    errPartner2Missing: "Partner2 tidak wujud: {id}",
    errChildMissing: "Anak tidak wujud: {id}",
    errChildMultiple: "Anak {id} terikat pada lebih satu union ({unions}).",
    validateOk: "Data sah. Tiada ralat ditemui.",
    validateErr: "Ralat data ditemui:",
    searchPlaceholder: "Cari nama ahli keluarga...",
    statsPeople: "Jumlah Ahli",
    statsCouples: "Jumlah Pasangan",
    statsGender: "Jantina",
    statsDescendants: "Keturunan",
    statsCucu: "Cucu",
    statsCicit: "Cicit",
    statsMale: "Lelaki",
    statsFemale: "Perempuan",
    statsUpcoming: "Ulang Tahun Terdekat",
    statsUpcomingEmpty: "Tiada data",
    statsUpcomingToday: "Hari ini",
    timelineGenLabel: "Generasi",
    timelineMonth: "Bulan Lahir",
    timelineGender: "Jantina",
    timelineGenderAll: "Semua",
    timelineGenderMale: "Lelaki",
    timelineGenderFemale: "Perempuan",
    timelineSort: "Susun",
    timelineSortYear: "Ikut Tahun",
    timelineSortAge: "Ikut Umur",
    timelineSortAlpha: "Ikut Abjad",
    timelineSortMonth: "Ikut Bulan",
    timelineSortGender: "Ikut Jantina",
    timelineSortParent: "Ikut Ibu Bapa",
    timelineClear: "Reset",
    timelineMore: "Tapis lagi",
    timelineLess: "Tutup tapis",
    timelineResetAll: "Reset semua",
    themePreset: "Tema",
    themeDefault: "Default",
    themeHeritage: "Heritage",
    themeOcean: "Ocean",
    themeSunset: "Sunset",
    exportMenu: "Download",
    settingsTitle: "Tetapan",
    settingsKicker: "Tetapan App",
    settingsSubtitle: "Ubah paparan, navigasi, bahasa, tema dan data website.",
    settingsDisplay: "Paparan",
    settingsNav: "Navigasi",
    settingsTools: "Alat",
    settingsDataTab: "Data",
    settingsAbout: "Tentang",
    aboutFamilyTreeTitle: "Salasilah Keluarga",
    aboutFamilyTreeBody: "Simpan nama, hubungan dan generasi keluarga sebagai rujukan bersama.",
    aboutPurposeTitle: "Untuk semua ahli keluarga",
    aboutPurposeBody: "Direka supaya pelbagai golongan umur boleh mencari dan memahami hubungan keluarga.",
    aboutFeaturesTitle: "Apa yang boleh dibuat",
    aboutFeaturesBody: "Lihat tree, buka profil, cari ahli, semak hubungan, birthday, direktori dan timeline.",
    aboutDataTitle: "Data keluarga",
    aboutDataBody: "Maklumat digunakan sebagai rujukan keluarga. Semak dan kemas kini data apabila ada pembetulan.",
    settingsCompact: "Compact Mode",
    settingsCompactHint: "Padatkan kad tree untuk lihat lebih banyak ahli.",
    settingsCardSize: "Saiz Kad",
    settingsFontSize: "Saiz Tulisan",
    settingsSizeSmall: "Kecil",
    settingsSizeNormal: "Normal",
    settingsSizeLarge: "Besar",
    settingsMinimap: "Minimap",
    settingsMinimapHint: "Tunjuk peta kecil lokasi tree.",
    settingsDrag: "Drag untuk Pan",
    settingsDragHint: "Benarkan drag untuk gerakkan tree.",
    settingsViewTree: "Tree",
    settingsViewTimeline: "Timeline",
    settingsReset: "Reset tetapan",
    settingsShowBirthdate: "Tarikh Lahir",
    settingsShowBirthdateHint: "Papar atau sorok tarikh lahir pada kad.",
    settingsShowAge: "Umur",
    settingsShowAgeHint: "Papar umur kiraan tahun.",
    settingsShowTags: "Tag/Nota",
    settingsShowTagsHint: "Papar tag relation dan nota ringkas.",
    settingsDataVersion: "Versi data",
    settingsClose: "Tutup",
    settingsDangerTitle: "Data sementara",
    settingsDangerHint: "Clear cache akan buang pilihan dan data sementara browser.",
    dataHealthTitle: "Semakan data",
    dataHealthOk: "Tiada isu besar dikesan.",
    dataHealthReview: "{count} perkara perlu disemak.",
    dataHealthMissingBirth: "Tarikh lahir kosong",
    dataHealthMissingGender: "Jantina belum jelas",
    dataHealthMissingParents: "Mak / ayah kosong",
    dataHealthDuplicateName: "Nama display sama",
    dataHealthShowAll: "Semua",
    dataHealthOpen: "Buka profil",
    quickViewAll: "Lihat semua",
    quickShowLess: "Ringkas",
    quickClear: "Kosongkan"
  },
  en: {
    appKicker: "Family Lineage",
    appTitle: "Family Generation View",
    appSubtitle: "All family members in one clear, simple, friendly view.",
    navHome: "Home",
    navTree: "Tree",
    navDirectory: "Directory",
    navBirthday: "Birthday",
    navTimeline: "Timeline",
    navSettings: "Settings",
    homeViewTreeTitle: "View Family Tree",
    homeViewTreeHint: "Open the full family tree with zoom and profiles.",
    homeGlobalSearchTitle: "Global Search",
    homeGlobalSearchHint: "Search names, relations, branches and birthdays.",
    globalSearchKicker: "Family Search",
    globalSearchTitle: "Search Everything",
    globalSearchSubtitle: "Search names, nicknames, relations, branches, gender, status or birthdays.",
    directorySubtitle: "Find and open family member details quickly.",
    timelineKicker: "Family History",
    timelineSubtitle: "Family members arranged by year and timeline filters.",
    searchLabel: "Name search",
    searchGo: "Search & Focus",
    searchShort: "Search",
    generalView: "General View",
    focusSelf: "Focus Me",
    focusSelfShort: "Me",
    chooseSelf: "Choose Me",
    chooseSelfShort: "Choose Me",
    chooseSelfPrompt: "Type your name in the family tree:",
    chooseSelfNotFound: "Name not found. Try a full or partial name.",
    chooseSelfSaved: "Me is set to {name} for this browser.",
    resetSelf: "Reset Me",
    resetSelfConfirm: "Clear the selected person for this browser?",
    resetSelfDone: "Your selected person has been cleared for this browser.",
    viewTimeline: "Timeline View",
    viewTimelineShort: "Timeline",
    viewTree: "Tree View",
    treeToolbarTitle: "Family Tree",
    treeToolbarHint: "Drag or scroll to view other branches.",
    treeModeOverview: "Overview",
    treeModeDetail: "Detail",
    treeModeBranch: "Branch",
    treeScrollGuide: "← Drag / scroll to view other family branches →",
    compactOn: "Full Mode",
    compactOff: "Compact Mode",
    pathOn: "Hide Path",
    pathOff: "My Lineage",
    fit: "Fit Screen",
    zoomIn: "Zoom +",
    zoomOut: "Zoom -",
    zoomReset: "Reset",
    themeToggle: "Light / Dark",
    themeToggleHint: "Switch between light and dark mode.",
    langToggle: "EN / BM",
    langToggleHint: "Change the display language.",
    exportPng: "Image (JPEG)",
    exportPdf: "File (PDF)",
    branchLabel: "Filter branch",
    relationshipTitle: "Find family relationship",
    relationshipSummaryHint: "Choose two names to view the relationship.",
    relationshipFind: "Find Relationship",
    relationshipPick: "Choose a name...",
    relationshipSame: "Choose two different people.",
    relationshipNoData: "The relationship could not be identified from the current data.",
    relationshipSelf: "{a} is the same person as {b}.",
    relationshipSpouse: "{a} is the spouse of {b}.",
    relationshipParent: "{a} is a parent of {b}.",
    relationshipChild: "{a} is a child of {b}.",
    relationshipSibling: "{a} is a sibling of {b}.",
    relationshipOlderBrother: "{a} is an older brother of {b}.",
    relationshipOlderSister: "{a} is an older sister of {b}.",
    relationshipYoungerSibling: "{a} is a younger sibling of {b}.",
    relationshipFather: "{a} is the father of {b}.",
    relationshipMother: "{a} is the mother of {b}.",
    relationshipGrandfather: "{a} is the grandfather of {b}.",
    relationshipGrandmother: "{a} is the grandmother of {b}.",
    relationshipGreatGrandparent: "{a} is a great-grandparent of {b}.",
    relationshipGrandparent: "{a} is a grandparent of {b}.",
    relationshipGrandchild: "{a} is a grandchild of {b}.",
    relationshipUncleAunt: "{a} is an uncle/aunt of {b}.",
    relationshipNephewNiece: "{a} is a nephew/niece of {b}.",
    relationshipCousin: "{a} is a cousin of {b}.",
    relationshipPathLabel: "Relationship path",
    birthdayBack: "Back to Home",
    birthdayKicker: "Family Calendar",
    birthdayTitle: "All Birthdays",
    birthdaySearchLabel: "Search birthdays",
    birthdaySearchPlaceholder: "Search name...",
    birthdayNoSearch: "No names found.",
    birthdayNoDate: "No birthdays recorded.",
    birthdayOpenAll: "Open All",
    birthdayCloseAll: "Close All",
    birthdayLegendToday: "Today",
    birthdayLegendRange: "Toward next birthday",
    birthdayLegendNext: "Next birthday",
    viewDirectory: "Directory",
    directoryBack: "Back to Home",
    directoryKicker: "Family List",
    directoryTitle: "Family Directory",
    directorySearchLabel: "Search members",
    directorySearchPlaceholder: "Search name, nickname, branch, relation...",
    directoryGeneration: "Generation",
    directoryGender: "Gender",
    directoryBirthdayMonth: "Birthday Month",
    directoryAllBirthdayMonths: "All months",
    directoryBranch: "Branch",
    directoryAllBranches: "All branches",
    directoryRootBranch: "Root / Original generation",
    directoryBranchLabel: "{name} branch",
    directoryStatus: "Status",
    directoryAllStatuses: "All statuses",
    directoryLiving: "Living",
    directoryDeceased: "Deceased",
    directoryIncomplete: "Incomplete data",
    directorySort: "Sort",
    directorySortGeneration: "By Generation",
    directorySortName: "By Name",
    directorySortAge: "By Age",
    directorySortBirthday: "By Birthday",
    directoryAllGenerations: "All generations",
    directorySummary: "{count} members shown",
    directoryGridView: "Grid view",
    directoryListView: "List view",
    directoryProfile: "Profile",
    mobileSearchTitle: "Search Family Members",
    homeSavedKicker: "Saved",
    homeSavedMembers: "Saved Members",
    homeRecentKicker: "History",
    homeRecentMembers: "Recently Viewed",
    profileFocusTree: "Focus in tree",
    profileFocusTreeShort: "Tree",
    profileOpen: "Profile",
    profileBack: "Back",
    profilePageKicker: "Member Profile",
    profileFindRelation: "Find relationship",
    profileFamilyView: "View this family",
    profileFamilyShort: "Family",
    profilePin: "Pin",
    profileRelationShort: "Relation",
    profileShareShort: "Share",
    profilePrintShort: "Print",
    profileCopyShort: "Copy",
    profilePinned: "Pinned",
    profileCopyLink: "Copy link",
    profileShareText: "Share text",
    profilePrint: "Print",
    profileHome: "Home",
    profileBirthday: "Birthday",
    profileMore: "More actions",
    profileViewTree: "View in family tree",
    profileOverview: "Overview",
    profileFamilySection: "Immediate family",
    profileAncestorsSection: "Ancestors",
    profileDescendantsSection: "Descendants",
    profileInformationSection: "Member information",
    profileSpouses: "Spouse",
    profileParents: "Parents",
    profileSiblings: "Siblings",
    profileChildren: "Children",
    profileGrandparents: "Grandparents",
    profileGreatGrandparents: "Great-grandparents",
    profileBranchDescendants: "descendants",
    profileFurtherDescendants: "further descendants",
    profileNoAncestors: "Ancestor information has not been recorded.",
    profileNoDescendants: "No descendants have been recorded.",
    profileNoFamily: "Family information has not been recorded.",
    profileBornDied: "Born {birth} — Died {death}",
    profileBorn: "Born {birth}",
    profileDied: "Died {death}",
    profileLifespan: "Lifespan: {age} years",
    profileTotalDescendants: "Total descendants",
    profileLinkCopied: "Person link copied.",
    profileLinkCopyFail: "Could not copy the link. The URL was updated in the address bar.",
    profileFamilyStats: "Family summary",
    profileChildrenCount: "Children",
    profileGrandchildrenCount: "Grandchildren",
    profileGreatGrandchildrenCount: "Great-grandchildren",
    profileInlawsCount: "In-laws",
    focusedBranchClear: "Show All",
    focusedBranchActive: "Family view: {name}",
    focusedBranchHint: "This view only shows close family.",
    quickFamilyLabel: "Filter selected family",
    quickFamilyParents: "Parents",
    quickFamilySiblings: "Siblings",
    quickFamilyDescendants: "Children/Grandkids",
    quickFamilyClose: "Close family",
    quickFamilyClear: "Reset",
    lineageBreadcrumb: "Lineage path",
    generationLabel: "Generation (Collapse/Expand)",
    legendParentChild: "Parent \u2192 child connection",
    legendCouple: "Partners shown side by side",
    storyTitle: "Family Story",
    storyEmpty: "Tap any family member to see detailed notes.",
    spouseHusband: "Husband",
    spouseWife: "Wife",
    timelineTitle: "Family Timeline",
    timelineSearch: "Search timeline",
    timelineSearchPlaceholder: "Search name, relation, notes...",
    modalClose: "Close",
    modalEdit: "Edit",
    modalRelation: "Relation",
    modalBirth: "Birth date",
    modalDeath: "Death date",
    modalNote: "Notes",
    modalStory: "Story",
    lineageTitle: "Individual Lineage",
    lineageGreatGrandparents: "Great-grandparents",
    lineageGrandparents: "Grandparents",
    lineageParents: "Parents",
    lineageSiblings: "Siblings",
    lineageSpouses: "Spouses",
    lineageChildren: "Children",
    lineageGrandchildren: "Grandchildren",
    lineageGreatGrandchildren: "Great-grandchildren",
    lineageNone: "No data",
    modalFullName: "Full name",
    modalImage: "Image URL",
    modalShortNote: "Short note",
    modalLongStory: "Long story",
    modalCancel: "Cancel",
    modalSave: "Save",
    modalDelete: "Delete",
    modalDeleteConfirm: "Delete this person? This will remove partner/child links.",
    legendGeneration: "Generation",
    branchAll: "All branches",
    branchName: "Branch {n}",
    parentNone: "None (as root)",
    genAll: "Show All",
    searchNone: "No names found",
    datesUnknown: "Date not specified",
    bornPrefix: "Born: ",
    diedPrefix: "Died: ",
    loadFail: "Failed to load family data.",
    exportDate: "Export date: {date}",
    exportPngFail: "PNG export failed: library not available.",
    exportPdfFail: "PDF export failed: library not available.",
    exportDirectoryCsv: "Directory CSV",
    exportBirthdayCsv: "Birthday CSV",
    exportBranchCsv: "Branch CSV",
    exportCsvDone: "CSV downloaded.",
    ageLabel: "Age",
    minimapTitle: "Minimap",
    minimapHint: "Tap the minimap to jump. The white box shows your current view.",
    minimapShow: "Show Minimap",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderUnknown: "Unknown",
    controlsToggleOpen: "Show Panel",
    controlsToggleClose: "Hide Panel",
    resetView: "Reset View",
    loading: "Loading data...",
    clearCache: "Clear Cache",
    clearCacheConfirm: "Clear cache for this site? This will remove data stored in your browser.",
    okBtn: "OK",
    errStructure: "Root structure must include `people` and `unions`.",
    errPersonNoId: "A person is missing an id.",
    errDuplicateId: "Duplicate ID: {id}",
    errUnionNoId: "A union is missing an id.",
    errPartner1Missing: "Partner1 not found: {id}",
    errPartner2Missing: "Partner2 not found: {id}",
    errChildMissing: "Child not found: {id}",
    errChildMultiple: "Child {id} is linked to multiple unions ({unions}).",
    validateOk: "Data is valid. No issues found.",
    validateErr: "Data issues found:",
    searchPlaceholder: "Search family member...",
    statsPeople: "Total People",
    statsCouples: "Couples",
    statsGender: "Gender",
    statsDescendants: "Descendants",
    statsCucu: "Grandkids",
    statsCicit: "Great-grandkids",
    statsMale: "Male",
    statsFemale: "Female",
    statsUpcoming: "Upcoming Birthday",
    statsUpcomingEmpty: "No data",
    statsUpcomingToday: "Today",
    timelineGenLabel: "Generation",
    timelineMonth: "Birth Month",
    timelineGender: "Gender",
    timelineGenderAll: "All",
    timelineGenderMale: "Male",
    timelineGenderFemale: "Female",
    timelineSort: "Sort",
    timelineSortYear: "By Year",
    timelineSortAge: "By Age",
    timelineSortAlpha: "Alphabetical",
    timelineSortMonth: "By Month",
    timelineSortGender: "By Gender",
    timelineSortParent: "By Parent",
    timelineClear: "Reset",
    timelineMore: "More filters",
    timelineLess: "Less filters",
    timelineResetAll: "Reset all",
    themePreset: "Theme",
    themeDefault: "Default",
    themeHeritage: "Heritage",
    themeOcean: "Ocean",
    themeSunset: "Sunset",
    exportMenu: "Download",
    settingsTitle: "Settings",
    settingsKicker: "App Settings",
    settingsSubtitle: "Change display, navigation, language, theme and website data.",
    settingsDisplay: "Display",
    settingsNav: "Navigation",
    settingsTools: "Tools",
    settingsDataTab: "Data",
    settingsAbout: "About",
    aboutFamilyTreeTitle: "Family Tree",
    aboutFamilyTreeBody: "Keep family names, relationships and generations together as a shared reference.",
    aboutPurposeTitle: "For every family member",
    aboutPurposeBody: "Designed so people of different ages can find and understand family relationships.",
    aboutFeaturesTitle: "What you can do",
    aboutFeaturesBody: "View the tree, open profiles, search members, check relationships, birthdays, directory and timeline.",
    aboutDataTitle: "Family data",
    aboutDataBody: "Information is used as a family reference. Review and update data whenever corrections are needed.",
    settingsCompact: "Compact Mode",
    settingsCompactHint: "Tighten tree cards to show more family members.",
    settingsCardSize: "Card Size",
    settingsFontSize: "Text Size",
    settingsSizeSmall: "Small",
    settingsSizeNormal: "Normal",
    settingsSizeLarge: "Large",
    settingsMinimap: "Minimap",
    settingsMinimapHint: "Show the small map for tree location.",
    settingsDrag: "Drag to Pan",
    settingsDragHint: "Allow dragging to move around the tree.",
    settingsViewTree: "Tree",
    settingsViewTimeline: "Timeline",
    settingsReset: "Reset settings",
    settingsShowBirthdate: "Show Birthdate",
    settingsShowBirthdateHint: "Show or hide birth dates on cards.",
    settingsShowAge: "Show Age",
    settingsShowAgeHint: "Show age calculated by year.",
    settingsShowTags: "Show Tags",
    settingsShowTagsHint: "Show relation tags and short notes.",
    settingsDataVersion: "Data version",
    settingsClose: "Close",
    settingsDangerTitle: "Temporary data",
    settingsDangerHint: "Clear cache removes browser choices and temporary data.",
    dataHealthTitle: "Data health check",
    dataHealthOk: "No major issue detected.",
    dataHealthReview: "{count} items need review.",
    dataHealthMissingBirth: "Missing birth dates",
    dataHealthMissingGender: "Missing gender",
    dataHealthMissingParents: "Missing parents",
    dataHealthDuplicateName: "Duplicate display names",
    dataHealthShowAll: "All",
    dataHealthOpen: "Open profile",
    quickViewAll: "View all",
    quickShowLess: "Show less",
    quickClear: "Clear"
  }
};

function formatText(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] !== undefined ? vars[key] : ""));
}

function csvEscape(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function downloadTextFile(filename, text, type = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadCsv(filename, headers, rows) {
  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))
  ].join("\n");
  downloadTextFile(filename, csv, "text/csv;charset=utf-8");
}

function setTreeStatus(message = "", isError = false) {
  if (!treeStatus) return;
  treeStatus.textContent = message;
  treeStatus.hidden = !message;
  treeStatus.classList.toggle("is-error", isError);
}

async function clearSiteCache() {
  const t = i18n[lang] || i18n.ms;
  if (!confirm(t.clearCacheConfirm)) return;
  try {
    localStorage.clear();
  } catch {
    // ignore storage errors
  }
  try {
    sessionStorage.clear();
  } catch {
    // ignore storage errors
  }
  window.location.reload();
}


function applyThemePreset() {
  if (!document.body || !app) return;
  if (!themePreset || themePreset === "default") {
    document.body.removeAttribute("data-preset");
    app.removeAttribute("data-preset");
    return;
  }
  document.body.dataset.preset = themePreset;
  app.dataset.preset = themePreset;
}

function applyCardScale() {
  const next = Math.min(1.15, Math.max(0.85, Number(cardScale) || 1));
  cardScale = next;
  document.body.style.setProperty("--card-scale", String(next));
  layoutConfig.cardWidth = Math.round(220 * next);
  layoutConfig.cardGap = Math.round(16 * next);
  if (app) {
    app.style.setProperty("--card-width", `${layoutConfig.cardWidth}px`);
    app.style.setProperty("--card-gap", `${layoutConfig.cardGap}px`);
  }
}

function applyMinimapState() {
  if (!document.body) return;
  document.body.classList.toggle("minimap-disabled", !minimapEnabled);
  if (!minimapEnabled) return;
  updateMinimap();
}

function applyDragToPanState() {
  if (!treeWrap) return;
  treeWrap.classList.toggle("drag-disabled", !dragToPan);
}

function applyLinesState() {
  if (!showLines) {
    if (treeLines) treeLines.innerHTML = "";
    return;
  }
  scheduleRender();
}

function applyDetailsVisibility() {
  document.body.classList.toggle("hide-birthdate", !showBirthdate);
  document.body.classList.toggle("hide-age", !showAge);
  document.body.classList.toggle("hide-tags", !showTags);
}

function openSettingsModal() {
  if (!settingsModal) return;
  settingsModal.classList.add("is-open");
  settingsModal.setAttribute("aria-hidden", "false");
  webNavButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.webNav === "settings"));
  refreshIcons(settingsModal);
}

function closeSettingsModal() {
  if (!settingsModal) return;
  settingsModal.classList.remove("is-open");
  settingsModal.setAttribute("aria-hidden", "true");
  updateViewSwitch();
}

function toggleControlsCollapsed(nextState) {
  const target = typeof nextState === "boolean" ? nextState : !controlsCollapsed;
  controlsCollapsed = target;
  document.body.classList.toggle("controls-collapsed", controlsCollapsed);
  applyLanguage();
  if (isMobileView()) {
    localStorage.setItem(MOBILE_CONTROLS_KEY, controlsCollapsed ? "1" : "0");
  }
  updateSheetHandleState();
  updateMiniToolbarVisibility();
  savePrefs();
}

function updateSheetHandleState() {
  if (!bottomSheetHandle) return;
  bottomSheetHandle.setAttribute("aria-expanded", (!controlsCollapsed).toString());
}

function ensureTreeVisible() {
  if (viewMode !== "tree") return;
  if (!treeCanvas || !treeData?.people?.length) return;
  if (treeCanvas.children.length > 0) return;
  scale = 1;
  hiddenGenerations.clear();
  branchFilterValue = "all";
  viewMode = "tree";
  buildLayout();
  applyViewMode();
  renderScene();
  applyZoom();
  if (treeWrap) treeWrap.scrollTo({ left: 0, top: 0 });
  setTreeStatus("");
}

function updateStats() {
  if (!treeData) return;
  const t = i18n[lang] || i18n.ms;
  const peopleCount = treeData.people.length;
  const couplesCount = treeData.unions.length;
  let maleCount = 0;
  let femaleCount = 0;
  let cucuCount = 0;
  let cicitCount = 0;
  treeData.people.forEach((person) => {
    const gender = getPersonGender(person);
    if (gender === "male") maleCount += 1;
    if (gender === "female") femaleCount += 1;
    if (person.relation === "Cucu") cucuCount += 1;
    if (person.relation === "Cicit") cicitCount += 1;
  });
  if (statPeople) statPeople.textContent = String(peopleCount);
  if (statCouples) statCouples.textContent = String(couplesCount);
  if (statMale) statMale.textContent = String(maleCount);
  if (statFemale) statFemale.textContent = String(femaleCount);
  if (statCucu) statCucu.textContent = String(cucuCount);
  if (statCicit) statCicit.textContent = String(cicitCount);

  if (statUpcomingName || statUpcomingMeta) {
    const today = new Date();
    const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let bestDiff = Number.POSITIVE_INFINITY;
    const bestMatches = [];
    treeData.people.forEach((person) => {
      const birthDate = parseDateValue(person.birth);
      if (!birthDate) return;
      const next = new Date(todayMid.getFullYear(), birthDate.getMonth(), birthDate.getDate());
      if (next < todayMid) next.setFullYear(next.getFullYear() + 1);
      const diff = next.getTime() - todayMid.getTime();
      const upcomingName = getShortDisplayName(person.name);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestMatches.length = 0;
        bestMatches.push({ person, birthDate, next, diff, name: upcomingName });
      } else if (diff === bestDiff) {
        bestMatches.push({ person, birthDate, next, diff, name: upcomingName });
      }
    });

    if (!bestMatches.length) {
      if (statUpcomingName) statUpcomingName.textContent = t.statsUpcomingEmpty || "-";
      if (statUpcomingMeta) statUpcomingMeta.textContent = "";
    } else {
      bestMatches.sort((a, b) => a.name.localeCompare(b.name, lang === "en" ? "en" : "ms"));
      const first = bestMatches[0];
      const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"];
      const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthLabels = lang === "en" ? monthsEn : monthsMs;
      const day = first.next.getDate();
      const monthLabel = monthLabels[first.next.getMonth()];
      const age = bestMatches.length === 1 ? calcAge(first.birthDate, todayMid) : null;
      const daysAway = Math.round((first.next.getTime() - todayMid.getTime()) / 86400000);
      let meta = `${day} ${monthLabel}`;
      if (bestMatches.length > 1) {
        meta += ` | ${bestMatches.length} ${lang === "en" ? "people" : "orang"}`;
      }
      if (age !== null) {
        meta += ` | ${age} ${lang === "en" ? "yrs" : "thn"}`;
      }
      if (daysAway === 0) {
        meta += ` | ${t.statsUpcomingToday}`;
      } else if (daysAway > 0) {
        meta += ` | ${daysAway} ${lang === "en" ? "days" : "hari"} ${lang === "en" ? "to go" : "lagi"}`;
      }
      if (statUpcomingName) statUpcomingName.textContent = bestMatches.map((item) => item.name).join("\n") || "-";
      if (statUpcomingMeta) statUpcomingMeta.textContent = meta;
    }
  }
}

function applyFontScale() {
  const next = Math.min(1.2, Math.max(0.9, Number(fontScale) || 1));
  fontScale = next;
  document.documentElement.style.setProperty("--ui-font-scale", String(next));
  document.documentElement.style.fontSize = `${16 * next}px`;
}

function populateTimelineFilters() {
  if (!timelineGenSelect) return;
  const t = i18n[lang] || i18n.ms;
  const current = timelineFilters.generation;
  timelineGenSelect.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = t.genAll;
  timelineGenSelect.appendChild(optAll);
  for (let i = 1; i <= maxDepth; i += 1) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `G${i}`;
    timelineGenSelect.appendChild(opt);
  }
  timelineGenSelect.value = current && (current === "all" || Number(current) <= maxDepth) ? current : "all";
  populateTimelineMonths();
}

function populateTimelineMonths() {
  if (!timelineMonthSelect) return;
  const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthLabels = lang === "en" ? monthsEn : monthsMs;
  timelineMonthSelect.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = lang === "en" ? "All months" : "Semua bulan";
  timelineMonthSelect.appendChild(optAll);
  monthLabels.forEach((label, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx + 1);
    opt.textContent = label;
    timelineMonthSelect.appendChild(opt);
  });
  timelineMonthSelect.value = timelineFilters.month || "all";
}

function updateTimelineActiveFilters() {
  if (!timelineActiveFilters) return;
  const t = i18n[lang] || i18n.ms;
  const defaults = { query: "", generation: "all", month: "all", gender: "all", sort: "year" };
  const chips = [];

  const labelMap = {
    query: t.timelineSearch,
    generation: t.timelineGenLabel,
    month: t.timelineMonth,
    gender: t.timelineGender,
    sort: t.timelineSort
  };

  const getSelectText = (select, value) => {
    if (!select) return value;
    const opt = select.querySelector(`option[value="${value}"]`);
    return opt ? opt.textContent : value;
  };

  if ((timelineFilters.query || "") !== defaults.query) {
    chips.push({
      key: "query",
      text: `${labelMap.query}: ${timelineFilters.query} ✕`
    });
  }
  if (timelineFilters.generation !== defaults.generation) {
    chips.push({
      key: "generation",
      text: `${labelMap.generation}: ${getSelectText(timelineGenSelect, timelineFilters.generation)} ✕`
    });
  }
  if (timelineFilters.month !== defaults.month) {
    chips.push({
      key: "month",
      text: `${labelMap.month}: ${getSelectText(timelineMonthSelect, timelineFilters.month)} ✕`
    });
  }
  if (timelineFilters.gender !== defaults.gender) {
    chips.push({
      key: "gender",
      text: `${labelMap.gender}: ${getSelectText(timelineGenderSelect, timelineFilters.gender)} ✕`
    });
  }
  if (timelineFilters.sort !== defaults.sort) {
    chips.push({
      key: "sort",
      text: `${labelMap.sort}: ${getSelectText(timelineSortSelect, timelineFilters.sort)} ✕`
    });
  }

  timelineActiveFilters.innerHTML = "";
  if (!chips.length) {
    timelineActiveFilters.hidden = true;
    return;
  }
  timelineActiveFilters.hidden = false;
  chips.forEach((chip) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.dataset.filter = chip.key;
    btn.textContent = chip.text;
    btn.addEventListener("click", () => {
      if (chip.key === "query") {
        timelineFilters.query = defaults.query;
        if (timelineSearchInput) timelineSearchInput.value = defaults.query;
      }
      if (chip.key === "generation") {
        timelineFilters.generation = defaults.generation;
        if (timelineGenSelect) timelineGenSelect.value = defaults.generation;
      }
      if (chip.key === "month") {
        timelineFilters.month = defaults.month;
        if (timelineMonthSelect) timelineMonthSelect.value = defaults.month;
      }
      if (chip.key === "gender") {
        timelineFilters.gender = defaults.gender;
        if (timelineGenderSelect) timelineGenderSelect.value = defaults.gender;
      }
      if (chip.key === "sort") {
        timelineFilters.sort = defaults.sort;
        if (timelineSortSelect) timelineSortSelect.value = defaults.sort;
      }
      renderTimeline();
      updateTimelineActiveFilters();
    });
    timelineActiveFilters.appendChild(btn);
  });

  const resetAll = document.createElement("button");
  resetAll.type = "button";
  resetAll.className = "chip reset-all";
  resetAll.textContent = t.timelineResetAll;
  resetAll.addEventListener("click", () => {
    timelineFilters = { query: "", generation: "all", month: "all", gender: "all", sort: "year" };
    if (timelineSearchInput) timelineSearchInput.value = "";
    if (timelineGenSelect) timelineGenSelect.value = "all";
    if (timelineMonthSelect) timelineMonthSelect.value = "all";
    if (timelineGenderSelect) timelineGenderSelect.value = "all";
    if (timelineSortSelect) timelineSortSelect.value = "year";
    renderTimeline();
    updateTimelineActiveFilters();
  });
  timelineActiveFilters.appendChild(resetAll);
}

function updateTimelineMoreState(nextState) {
  if (!timelineMoreBtn || !timelineMorePanel) return;
  const t = i18n[lang] || i18n.ms;
  if (typeof nextState === "boolean") timelineMoreOpen = nextState;
  timelineMorePanel.classList.toggle("is-open", timelineMoreOpen);
  timelineMorePanel.setAttribute("aria-hidden", timelineMoreOpen ? "false" : "true");
  timelineMoreBtn.setAttribute("aria-expanded", timelineMoreOpen ? "true" : "false");
  timelineMoreBtn.textContent = timelineMoreOpen ? t.timelineLess : t.timelineMore;
}

function updateViewSwitch() {
  if (viewTreeBtn) viewTreeBtn.classList.toggle("is-active", viewMode === "tree");
  if (viewTimelineBtn) viewTimelineBtn.classList.toggle("is-active", viewMode === "timeline");
  if (viewDirectoryBtn) viewDirectoryBtn.classList.toggle("is-active", viewMode === "directory");
  if (directoryToggle) directoryToggle.classList.toggle("is-active", viewMode === "directory");
  if (mobileDirectoryBtn) mobileDirectoryBtn.classList.toggle("is-active", viewMode === "directory");
  if (mobileTimelineBtn) mobileTimelineBtn.classList.toggle("is-active", viewMode === "timeline");
  const activeView = viewMode === "tree" || viewMode === "profile" ? navSurface : viewMode;
  document.body.dataset.navSurface = activeView;
  webNavButtons.forEach((button) => {
    const isActive = button.dataset.webNav === activeView;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function populateRelationshipFinder() {
  if (!relationshipPersonA || !relationshipPersonB || !treeData?.people) return;
  const t = i18n[lang] || i18n.ms;
  const currentA = relationshipPersonA.value;
  const currentB = relationshipPersonB.value;
  const people = [...treeData.people].sort((a, b) => formatDisplayName(a.name).localeCompare(formatDisplayName(b.name)));

  const fill = (select, current) => {
    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = t.relationshipPick;
    select.appendChild(placeholder);
    people.forEach((person) => {
      const option = document.createElement("option");
      option.value = person.id;
      option.textContent = formatDisplayName(person.name);
      select.appendChild(option);
    });
    if (current && peopleById.has(current)) select.value = current;
  };

  fill(relationshipPersonA, currentA);
  fill(relationshipPersonB, currentB);
}

function getParentIds(personId) {
  const union = getParentUnion(personId);
  return union ? [union.partner1, union.partner2].filter(Boolean) : [];
}

function getSiblingIds(personId) {
  const union = getParentUnion(personId);
  return union ? (union.children || []).filter((id) => id !== personId) : [];
}

function getSiblingOrder(personId) {
  const union = getParentUnion(personId);
  return union ? (union.children || []).indexOf(personId) : -1;
}

function getSpouseIds(personId) {
  const result = [];
  (treeData?.unions || []).forEach((union) => {
    if (union.partner1 === personId && union.partner2) result.push(union.partner2);
    if (union.partner2 === personId && union.partner1) result.push(union.partner1);
  });
  return [...new Set(result)];
}

function getChildIds(personId) {
  const result = [];
  (treeData?.unions || []).forEach((union) => {
    if (union.partner1 === personId || union.partner2 === personId) {
      (union.children || []).forEach((childId) => result.push(childId));
    }
  });
  return [...new Set(result)];
}

function getGrandparentIds(personId) {
  const result = [];
  getParentIds(personId).forEach((parentId) => {
    getParentIds(parentId).forEach((grandparentId) => result.push(grandparentId));
  });
  return [...new Set(result)];
}

function getGrandchildIds(personId) {
  const result = [];
  getChildIds(personId).forEach((childId) => {
    getChildIds(childId).forEach((grandchildId) => result.push(grandchildId));
  });
  return [...new Set(result)];
}

function getUncleAuntIds(personId) {
  const result = [];
  getParentIds(personId).forEach((parentId) => {
    getSiblingIds(parentId).forEach((siblingId) => result.push(siblingId));
  });
  return [...new Set(result)];
}

function getNephewNieceIds(personId) {
  const result = [];
  getSiblingIds(personId).forEach((siblingId) => {
    getChildIds(siblingId).forEach((childId) => result.push(childId));
  });
  return [...new Set(result)];
}

function getCousinIds(personId) {
  const result = [];
  getUncleAuntIds(personId).forEach((uncleAuntId) => {
    getChildIds(uncleAuntId).forEach((childId) => result.push(childId));
  });
  return [...new Set(result)];
}

function describeRelationship(aId, bId) {
  return describeRelationshipResult(aId, bId).text;
}

function describeRelationshipResult(aId, bId) {
  const t = i18n[lang] || i18n.ms;
  const a = peopleById.get(aId);
  const b = peopleById.get(bId);
  if (!a || !b) return { text: "", path: [] };
  const vars = { a: formatDisplayName(a.name), b: formatDisplayName(b.name) };
  const path = findRelationshipPath(aId, bId);
  if (aId === bId) return { text: formatText(t.relationshipSelf, vars), path: [aId] };
  if (getSpouseIds(aId).includes(bId)) return { text: formatText(t.relationshipSpouse, vars), path };
  if (getChildIds(aId).includes(bId)) {
    const key = getPersonGender(a) === "female" ? "relationshipMother" : "relationshipFather";
    return { text: formatText(t[key] || t.relationshipParent, vars), path };
  }
  if (getParentIds(aId).includes(bId)) return { text: formatText(t.relationshipChild, vars), path };
  if (getSiblingIds(aId).includes(bId)) {
    const aOrder = getSiblingOrder(aId);
    const bOrder = getSiblingOrder(bId);
    const older = aOrder >= 0 && bOrder >= 0 && aOrder < bOrder;
    const key = older
      ? (getPersonGender(a) === "female" ? "relationshipOlderSister" : "relationshipOlderBrother")
      : "relationshipYoungerSibling";
    return { text: formatText(t[key] || t.relationshipSibling, vars), path };
  }
  if (getGrandchildIds(aId).includes(bId)) {
    const key = getPersonGender(a) === "female" ? "relationshipGrandmother" : "relationshipGrandfather";
    return { text: formatText(t[key] || t.relationshipGrandparent, vars), path };
  }
  if (getGrandparentIds(aId).includes(bId)) return { text: formatText(t.relationshipGrandchild, vars), path };
  const greatGrandchildIds = [];
  getGrandchildIds(aId).forEach((grandchildId) => {
    getChildIds(grandchildId).forEach((childId) => greatGrandchildIds.push(childId));
  });
  if ([...new Set(greatGrandchildIds)].includes(bId)) return { text: formatText(t.relationshipGreatGrandparent, vars), path };
  if (getNephewNieceIds(aId).includes(bId)) return { text: formatText(t.relationshipUncleAunt, vars), path };
  if (getUncleAuntIds(aId).includes(bId)) return { text: formatText(t.relationshipNephewNiece, vars), path };
  if (getCousinIds(aId).includes(bId)) return { text: formatText(t.relationshipCousin, vars), path };
  return { text: t.relationshipNoData, path };
}

function buildRelationshipGraph() {
  const graph = new Map();
  const addEdge = (from, to) => {
    if (!from || !to) return;
    if (!graph.has(from)) graph.set(from, new Set());
    if (!graph.has(to)) graph.set(to, new Set());
    graph.get(from).add(to);
    graph.get(to).add(from);
  };
  (treeData?.people || []).forEach((person) => {
    if (!graph.has(person.id)) graph.set(person.id, new Set());
  });
  (treeData?.unions || []).forEach((union) => {
    addEdge(union.partner1, union.partner2);
    (union.children || []).forEach((childId) => {
      addEdge(union.partner1, childId);
      addEdge(union.partner2, childId);
    });
  });
  return graph;
}

function findRelationshipPath(startId, endId) {
  if (!startId || !endId) return [];
  if (startId === endId) return [startId];
  const graph = buildRelationshipGraph();
  const queue = [[startId]];
  const seen = new Set([startId]);
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    const nextIds = [...(graph.get(current) || [])].sort((a, b) => {
      return formatDisplayName(peopleById.get(a)?.name || "").localeCompare(formatDisplayName(peopleById.get(b)?.name || ""));
    });
    for (const nextId of nextIds) {
      if (seen.has(nextId)) continue;
      const nextPath = [...path, nextId];
      if (nextId === endId) return nextPath;
      seen.add(nextId);
      queue.push(nextPath);
    }
  }
  return [];
}

function renderRelationshipResult(result) {
  const t = i18n[lang] || i18n.ms;
  const text = escapeHtml(result.text || "");
  const path = result.path || [];
  if (path.length <= 1) return text;
  const names = path
    .map((id) => peopleById.get(id))
    .filter(Boolean)
    .map((person) => escapeHtml(formatDisplayName(person.name)));
  return `
    <div>${text}</div>
    <div class="relationship-path">
      <strong>${escapeHtml(t.relationshipPathLabel)}:</strong>
      <span>${names.join(" &rarr; ")}</span>
    </div>
  `;
}

function clearRelationshipHighlight() {
  activeRelationshipTargets = [];
  activeRelationshipPath = [];
  treeCanvas?.classList.remove("has-relationship-path");
  treeLines?.classList.remove("has-relationship-path");
  document.querySelectorAll(".person-card.is-relationship-target")
    .forEach((el) => el.classList.remove("is-relationship-target"));
  document.querySelectorAll(".person-card.is-relationship-path")
    .forEach((el) => el.classList.remove("is-relationship-path"));
}

function applyRelationshipHighlight(ids, pathIds = []) {
  clearRelationshipHighlight();
  activeRelationshipTargets = [...ids];
  activeRelationshipPath = [...pathIds];
  if (pathIds.length > 1) {
    treeCanvas?.classList.add("has-relationship-path");
    treeLines?.classList.add("has-relationship-path");
  }
  pathIds.forEach((id) => {
    const group = elementByPersonId.get(id);
    if (!group) return;
    const card = group.querySelector(`.person-card[data-person-id="${id}"]`);
    if (card) card.classList.add("is-relationship-path");
  });
  ids.forEach((id) => {
    const group = elementByPersonId.get(id);
    if (!group) return;
    const card = group.querySelector(`.person-card[data-person-id="${id}"]`);
    if (card) card.classList.add("is-relationship-target");
  });
}

function restoreRelationshipHighlight() {
  if (!activeRelationshipTargets.length && !activeRelationshipPath.length) return;
  const targets = [...activeRelationshipTargets];
  const path = [...activeRelationshipPath];
  activeRelationshipTargets = [];
  activeRelationshipPath = [];
  applyRelationshipHighlight(targets, path);
}

function getPersonDepthMap() {
  const map = new Map();
  nodesList.forEach((node) => {
    if (node.type === "person") map.set(node.personId, node.depth);
    if (node.type === "union") {
      if (node.partner1) map.set(node.partner1, node.depth);
      if (node.partner2) map.set(node.partner2, node.depth);
    }
  });
  return map;
}

function clearSelectionHighlight() {
  document.querySelectorAll(".person-card.is-selected, .person-card.is-parent, .person-card.is-child, .person-card.is-partner")
    .forEach((el) => el.classList.remove("is-selected", "is-parent", "is-child", "is-partner"));
}

function applySelectionHighlight(personId) {
  if (!personId) {
    clearSelectionHighlight();
    return;
  }
  clearSelectionHighlight();
  const parents = new Set();
  const partners = new Set();
  const children = new Set();

  const parentUnion = treeData.unions.find((u) => (u.children || []).includes(personId));
  if (parentUnion) {
    if (parentUnion.partner1) parents.add(parentUnion.partner1);
    if (parentUnion.partner2) parents.add(parentUnion.partner2);
  }

  treeData.unions.forEach((u) => {
    if (u.partner1 === personId || u.partner2 === personId) {
      if (u.partner1 && u.partner1 !== personId) partners.add(u.partner1);
      if (u.partner2 && u.partner2 !== personId) partners.add(u.partner2);
      (u.children || []).forEach((cid) => children.add(cid));
    }
  });

  const selectedGroup = elementByPersonId.get(personId);
  if (selectedGroup) {
    const selectedCard = selectedGroup.querySelector(`.person-card[data-person-id="${personId}"]`);
    if (selectedCard) selectedCard.classList.add("is-selected");
  }

  const applyClass = (ids, className) => {
    ids.forEach((id) => {
      const group = elementByPersonId.get(id);
      if (!group) return;
      const card = group.querySelector(`.person-card[data-person-id="${id}"]`);
      if (card) card.classList.add(className);
    });
  };

  applyClass(parents, "is-parent");
  applyClass(children, "is-child");
  applyClass(partners, "is-partner");
}



function initFromData(data) {
  treeData = data;
  peopleById = new Map(treeData.people.map((p) => [p.id, p]));
  loadPersonalLists();
  softPeachPeople = computeBranchPeople(SOFT_PEACH_ROOT_ID);
  babyBluePeople = computeBranchPeople(BABY_BLUE_ROOT_ID);
  mintGreenPeople = computeBranchPeople(MINT_GREEN_ROOT_ID);
  lavenderPeople = computeBranchPeople(LAVENDER_ROOT_ID);
  if (storyPanel) storyPanel.hidden = true;
  if (app) app.classList.remove("story-open");

  if (prefs.theme) {
    app.dataset.theme = prefs.theme;
    document.body.dataset.theme = prefs.theme;
  } else {
    document.body.dataset.theme = app.dataset.theme || "light";
  }

  if (Number.isFinite(Number(prefs.scale))) {
    scale = Math.max(0.6, Math.min(2.2, Number(prefs.scale)));
  }
  hiddenGenerations.clear();
  if (prefs.branchFilter) branchFilterValue = prefs.branchFilter;
  if (prefs.lang) lang = prefs.lang;
  if (prefs.compactMode) compactMode = true;
  if (prefs.pathMode) pathMode = true;
  if (isMobileView()) {
    const storedCollapse = localStorage.getItem(MOBILE_CONTROLS_KEY);
    if (storedCollapse === null) {
      controlsCollapsed = true;
      localStorage.setItem(MOBILE_CONTROLS_KEY, "1");
    } else {
      controlsCollapsed = storedCollapse === "1";
    }
  } else {
    const hasControlsPref = Object.prototype.hasOwnProperty.call(prefs, "controlsCollapsed");
    controlsCollapsed = hasControlsPref ? Boolean(prefs.controlsCollapsed) : false;
  }
  if (prefs.themePreset) themePreset = prefs.themePreset;
  if (prefs.showLines !== undefined) showLines = Boolean(prefs.showLines);
  if (prefs.cardScale) cardScale = Number(prefs.cardScale) || 1;
  if (prefs.fontScale) fontScale = Number(prefs.fontScale) || 1;
  if (prefs.minimapEnabled !== undefined) minimapEnabled = Boolean(prefs.minimapEnabled);
  if (prefs.dragToPan !== undefined) dragToPan = Boolean(prefs.dragToPan);
  if (prefs.showBirthdate !== undefined) showBirthdate = Boolean(prefs.showBirthdate);
  if (prefs.showAge !== undefined) showAge = Boolean(prefs.showAge);
  if (prefs.showTags !== undefined) showTags = Boolean(prefs.showTags);
  if (prefs.defaultView) defaultView = prefs.defaultView;
  if (prefs.treeDisplayMode) treeDisplayMode = prefs.treeDisplayMode;
  if (!["overview", "detail", "branch"].includes(treeDisplayMode)) treeDisplayMode = "overview";
  if (!BRANCH_FILTER_ENABLED) branchFilterValue = "all";
  if (!GENERATION_FILTER_ENABLED) hiddenGenerations.clear();

  applyCardScale();
  applyFontScale();
  buildLayout();
  updateStats();
  renderQuickPeople();
  populateTimelineFilters();
  if (nodesList.length === 0) {
    forceFreshData = true;
  }
  if (branchFilterValue !== "all") {
    const maxBranch = layoutRoot?.children?.length || 0;
    if (Number(branchFilterValue) >= maxBranch) {
      branchFilterValue = "all";
      savePrefs();
    }
  }
  if (hiddenGenerations.size >= maxDepth) {
    hiddenGenerations.clear();
    savePrefs();
  }
  buildGenerationControls();
  buildBranchFilter();
  if (defaultView) viewMode = defaultView;
  applyLanguage();
  applyThemePreset();
  applyMinimapState();
  applyDragToPanState();
  applyLinesState();
  applyDetailsVisibility();
  if (themePresetSelect) themePresetSelect.value = themePreset;
  if (settingsCardScale) settingsCardScale.value = String(cardScale);
  if (settingsFontScale) settingsFontScale.value = String(fontScale);
  if (settingsResetSelf) settingsResetSelf.textContent = (i18n[lang] || i18n.ms).resetSelf;
  if (settingsCompact) settingsCompact.checked = compactMode;
  if (settingsMinimap) settingsMinimap.checked = minimapEnabled;
  if (settingsDrag) settingsDrag.checked = dragToPan;
  if (settingsShowBirthdate) settingsShowBirthdate.checked = showBirthdate;
  if (settingsShowAge) settingsShowAge.checked = showAge;
  if (settingsShowTags) settingsShowTags.checked = showTags;
  if (settingsDataVersion) settingsDataVersion.textContent = treeData?.dataVersion || "-";
  document.body.classList.toggle("compact", compactMode);
  document.body.classList.toggle("controls-collapsed", controlsCollapsed);
  updateSheetHandleState();
  if (!timelineSection) viewMode = "tree";
  restoreFromUrl();
  applyViewMode();
  renderScene();
  applyZoom();
  if (viewMode === "tree") treeWrap.scrollTo({ left: 0, top: 0 });
  setTreeStatus("");
  if (viewMode === "tree") ensureTreeVisible();
  if (viewMode === "tree" && !hasUrlFocus()) {
    requestAnimationFrame(focusInitialTree);
  }
  if (pathMode) applyLineageHighlight();
  if (viewMode === "tree" && treeCanvas && treeCanvas.children.length === 0) {
    recoverEmptyView();
    recoverEmptyViewAsync();
  }
  return treeCanvas && treeCanvas.children.length > 0;
}

function recoverEmptyView() {
  hiddenGenerations.clear();
  branchFilterValue = "all";
  viewMode = "tree";
  scale = 1;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DATA_KEY);
  } catch {
    // ignore storage errors
  }
  applyViewMode();
  renderScene();
  applyZoom();
  if (treeCanvas && treeCanvas.children.length === 0) {
    const t = i18n[lang] || i18n.ms;
    treeCanvas.textContent = t.loadFail;
    setTreeStatus(t.loadFail, true);
  }
}

async function recoverEmptyViewAsync() {
  if (recoveryAttempted) return;
  recoveryAttempted = true;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DATA_KEY);
  } catch {
    // ignore storage errors
  }
  try {
    const res = await fetch(`data.json?ts=${Date.now()}`);
    const data = await res.json();
    treeData = data;
    storeData();
    initFromData(data);
  } catch {
    // ignore fetch errors
  }
}

let stored = null;
let cachedStored = loadStoredData();
if (FORCE_RESET) {
  localStorage.removeItem(DATA_KEY);
  localStorage.removeItem(STORAGE_KEY);
  cachedStored = null;
  hiddenGenerations.clear();
  branchFilterValue = "all";
}

if (!treeCanvas || !treeCanvas.children.length) {
  setTreeStatus("");
}

fetch(`data.json?v=${Date.now()}`, { cache: "no-store" })
  .then((res) => res.json())
  .then((data) => {
    treeCanvas.textContent = "";
    treeData = data;
    storeData();
    stored = data;
    initFromData(data);
    ensureTreeVisible();
    if (!treeCanvas.children.length) {
      treeData = data;
      storeData();
      initFromData(data);
      return;
    }
  })
  .catch((err) => {
    const errors = cachedStored ? validateTreeData(cachedStored) : ["No cached data"];
    if (cachedStored && errors.length === 0 && cachedStored.people.length > 0) {
      stored = cachedStored;
      initFromData(cachedStored);
      return;
    }
    if (!stored) {
      const t = i18n[lang] || i18n.ms;
      treeCanvas.textContent = t.loadFail;
      setTreeStatus(t.loadFail, true);
    }
    console.error(err);
  });

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    if (parsed.schemaVersion !== PREFS_SCHEMA_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return parsed;
  } catch (err) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage cleanup errors
    }
    return {};
  }
}

function savePrefs() {
  const payload = {
    schemaVersion: PREFS_SCHEMA_VERSION,
    theme: app.dataset.theme,
    scale,
    branchFilter: branchFilterValue,
    lang,
    compactMode,
    pathMode,
    controlsCollapsed,
    themePreset,
    showLines,
    cardScale,
    fontScale,
    minimapEnabled,
    dragToPan,
    showBirthdate,
    showAge,
    showTags,
    defaultView,
    treeDisplayMode
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function readStoredIdList(key) {
  try {
    const raw = localStorage.getItem(key);
    const value = raw ? JSON.parse(raw) : [];
    return Array.isArray(value) ? value.filter((id) => typeof id === "string") : [];
  } catch (err) {
    return [];
  }
}

function saveStoredIdList(key, ids) {
  localStorage.setItem(key, JSON.stringify(ids));
}

function loadPersonalLists() {
  favoritePersonIds = new Set(readStoredIdList(FAVORITES_STORAGE_KEY));
  recentPersonIds = readStoredIdList(RECENT_STORAGE_KEY);
}

function getPeopleFromIds(ids) {
  return ids.map((id) => peopleById.get(id)).filter(Boolean);
}

function saveFavoritePeople() {
  saveStoredIdList(FAVORITES_STORAGE_KEY, Array.from(favoritePersonIds));
}

function saveRecentPeople() {
  saveStoredIdList(RECENT_STORAGE_KEY, recentPersonIds);
}

function addRecentPerson(personId) {
  if (!personId || !peopleById.has(personId)) return;
  recentPersonIds = [personId, ...recentPersonIds.filter((id) => id !== personId)].slice(0, 20);
  saveRecentPeople();
  renderQuickPeople();
}

function toggleFavoritePerson(personId) {
  if (!personId || !peopleById.has(personId)) return;
  if (favoritePersonIds.has(personId)) {
    favoritePersonIds.delete(personId);
  } else {
    favoritePersonIds.add(personId);
  }
  saveFavoritePeople();
  renderQuickPeople();
}

function renderQuickPersonChip(person) {
  const shortName = getShortDisplayName(person.name);
  const avatarText = initials(shortName || person.name || "");
  const accent = generationColor(person.generation || 1);
  const name = getShortDisplayName(person.name);
  return `
    <button class="quick-person-chip" type="button" data-person-link="${escapeHtml(person.id)}">
      <span class="quick-person-avatar" style="--chip-accent: ${escapeHtml(accent)}">${escapeHtml(avatarText)}</span>
      <span>${escapeHtml(name)}</span>
    </button>
  `;
}

function renderQuickPeople() {
  if (!quickPeopleSection) return;
  const t = i18n[lang] || i18n.ms;
  const favoritePeople = getPeopleFromIds(Array.from(favoritePersonIds));
  const recentAll = getPeopleFromIds(recentPersonIds).filter((person) => !favoritePersonIds.has(person.id));
  const visibleFavoritePeople = quickFavoritesExpanded ? favoritePeople : favoritePeople.slice(0, 8);
  const visibleRecentPeople = quickRecentExpanded ? recentAll : recentAll.slice(0, 8);
  const renderQuickToolbar = (type, total, expanded) => total > 8 || total > 0
    ? `<div class="quick-people-actions">
        ${total > 8 ? `<button class="btn ghost small" type="button" data-quick-list="${type}" data-quick-action="toggle">${escapeHtml(expanded ? t.quickShowLess : t.quickViewAll)}</button>` : ""}
        <button class="btn ghost small" type="button" data-quick-list="${type}" data-quick-action="clear">${escapeHtml(t.quickClear)}</button>
      </div>`
    : "";

  if (favoritePeopleCard && favoritePeopleList) {
    favoritePeopleCard.hidden = favoritePeople.length === 0;
    favoritePeopleList.innerHTML = `${renderQuickToolbar("favorites", favoritePeople.length, quickFavoritesExpanded)}${visibleFavoritePeople.map(renderQuickPersonChip).join("")}`;
    bindPersonLinkClicks(favoritePeopleList);
  }

  if (recentPeopleCard && recentPeopleList) {
    recentPeopleCard.hidden = recentAll.length === 0;
    recentPeopleList.innerHTML = `${renderQuickToolbar("recent", recentAll.length, quickRecentExpanded)}${visibleRecentPeople.map(renderQuickPersonChip).join("")}`;
    bindPersonLinkClicks(recentPeopleList);
  }

  quickPeopleSection.querySelectorAll("[data-quick-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const list = btn.dataset.quickList;
      const action = btn.dataset.quickAction;
      if (action === "toggle" && list === "favorites") quickFavoritesExpanded = !quickFavoritesExpanded;
      if (action === "toggle" && list === "recent") quickRecentExpanded = !quickRecentExpanded;
      if (action === "clear" && list === "favorites") {
        favoritePersonIds.clear();
        saveFavoritePeople();
      }
      if (action === "clear" && list === "recent") {
        recentPersonIds = [];
        saveRecentPeople();
      }
      renderQuickPeople();
    });
  });

  quickPeopleSection.hidden = favoritePeople.length === 0 && recentAll.length === 0;
}

function getDataHealthIssues() {
  const t = i18n[lang] || i18n.ms;
  if (!treeData?.people) return [];
  const displayCounts = new Map();
  treeData.people.forEach((person) => {
    const key = getShortDisplayName(person.name).toLowerCase();
    displayCounts.set(key, (displayCounts.get(key) || 0) + 1);
  });
  const depthMap = getPersonDepthMap();
  return [
    {
      key: "birth",
      title: t.dataHealthMissingBirth,
      people: treeData.people.filter((person) => !parseDateValue(person.birth))
    },
    {
      key: "gender",
      title: t.dataHealthMissingGender,
      people: treeData.people.filter((person) => !["male", "female"].includes(getPersonGender(person)))
    },
    {
      key: "parents",
      title: t.dataHealthMissingParents,
      people: treeData.people.filter((person) => Number(depthMap.get(person.id) || 1) > 1 && !getParentUnion(person.id))
    },
    {
      key: "duplicate",
      title: t.dataHealthDuplicateName,
      people: treeData.people.filter((person) => (displayCounts.get(getShortDisplayName(person.name).toLowerCase()) || 0) > 1)
    }
  ];
}

function getFatherNameFromFullName(name) {
  const parts = String(name || "").trim().split(/\s+/);
  const stopIndex = parts.findIndex((part) => ["bin", "binti", "bt"].includes(part.toLowerCase()));
  if (stopIndex < 0 || stopIndex + 1 >= parts.length) return "";
  return parts.slice(stopIndex + 1).join(" ").trim();
}

function getDataHealthSuggestion(issue, person) {
  if (!issue || !person) return "";
  if (issue.key === "parents") {
    const fatherName = getFatherNameFromFullName(person.name);
    if (fatherName) return `${lang === "en" ? "Suggested father" : "Cadangan ayah"}: ${fatherName}`;
  }
  if (issue.key === "duplicate") {
    return lang === "en" ? "Consider adding nickname or full-name display." : "Pertimbang tambah nickname atau papar nama penuh.";
  }
  return "";
}

function exportDataHealthCsv() {
  const issues = getDataHealthIssues();
  const rows = [];
  issues.forEach((issue) => {
    issue.people.forEach((person) => {
      rows.push({
        issue: issue.title,
        id: person.id,
        displayName: getShortDisplayName(person.name),
        fullName: formatDisplayName(person.name),
        suggestion: getDataHealthSuggestion(issue, person)
      });
    });
  });
  downloadCsv("kami-tree-data-health.csv", ["issue", "id", "displayName", "fullName", "suggestion"], rows);
}

function exportJsonData() {
  if (!treeData) return;
  downloadTextFile(
    "kami-tree-data.json",
    JSON.stringify(treeData, null, 2),
    "application/json;charset=utf-8"
  );
}

function importJsonData() {
  const t = i18n[lang] || i18n.ms;
  const raw = prompt(lang === "en" ? "Paste KAMI Tree JSON backup here:" : "Paste backup JSON KAMI Tree di sini:");
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data.people) || !Array.isArray(data.unions)) {
      throw new Error("Invalid data shape");
    }
    treeData = data;
    storeData();
    initFromData(data);
    alert(lang === "en" ? "Data imported." : "Data berjaya diimport.");
  } catch {
    alert(lang === "en" ? "Invalid JSON backup." : "Backup JSON tidak sah.");
  }
}

async function resetJsonData() {
  localStorage.removeItem(DATA_KEY);
  const res = await fetch(`data.json?ts=${Date.now()}`);
  const data = await res.json();
  treeData = data;
  storeData();
  initFromData(data);
  alert(lang === "en" ? "Original data restored." : "Data asal digunakan semula.");
}

function renderDataHealthPanel() {
  if (!dataHealthPanel || !treeData?.people) return;
  const t = i18n[lang] || i18n.ms;
  const issues = getDataHealthIssues();
  const issueCount = issues.reduce((total, issue) => total + issue.people.length, 0);
  const selectedIssue = selectedDataHealthIssue === "all"
    ? null
    : issues.find((issue) => issue.key === selectedDataHealthIssue);
  const visibleIssues = selectedIssue ? [selectedIssue] : issues;
  dataHealthPanel.innerHTML = `
    <div class="data-health-head">
      <div>
        <strong>${escapeHtml(t.dataHealthTitle)}</strong>
        <span>${escapeHtml(issueCount ? formatText(t.dataHealthReview, { count: issueCount }) : t.dataHealthOk)}</span>
      </div>
    </div>
    <div class="data-health-chips">
      <button class="chip ${selectedDataHealthIssue === "all" ? "is-active" : ""}" type="button" data-data-health-filter="all">${escapeHtml(t.dataHealthShowAll)}</button>
      ${issues.map((issue) => `<button class="chip ${selectedDataHealthIssue === issue.key ? "is-active" : ""}" type="button" data-data-health-filter="${escapeHtml(issue.key)}">${escapeHtml(issue.title)} (${issue.people.length})</button>`).join("")}
    </div>
    <div class="data-health-list">
      ${visibleIssues.map((issue) => `
        <section class="data-health-issue">
          <div>
            <strong>${escapeHtml(issue.title)}</strong>
            <span>${issue.people.length}</span>
          </div>
          ${issue.people.length ? `
            <div class="data-health-people">
              ${issue.people.slice(0, 14).map((person) => `
                <button class="quick-person-chip" type="button" data-person-link="${escapeHtml(person.id)}">
                  <span class="quick-person-avatar">${escapeHtml(initials(getShortDisplayName(person.name)))}</span>
                  <span>
                    ${escapeHtml(getShortDisplayName(person.name))}
                    ${getDataHealthSuggestion(issue, person) ? `<small>${escapeHtml(getDataHealthSuggestion(issue, person))}</small>` : ""}
                  </span>
                </button>
              `).join("")}
            </div>
          ` : `<p>${escapeHtml(t.dataHealthOk)}</p>`}
        </section>
      `).join("")}
    </div>
  `;
  dataHealthPanel.querySelectorAll("[data-data-health-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedDataHealthIssue = btn.dataset.dataHealthFilter || "all";
      renderDataHealthPanel();
    });
  });
  bindPersonLinkClicks(dataHealthPanel);
}

function loadStoredData() {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!Array.isArray(data.people) || !Array.isArray(data.unions)) return null;
    return data;
  } catch {
    return null;
  }
}

function storeData() {
  if (!treeData?.people || !treeData?.unions) return;
  localStorage.setItem(DATA_KEY, JSON.stringify(treeData));
}

function buildLayout() {
  const unionsById = new Map(treeData.unions.map((u) => [u.id, u]));
  const unionsByPartner = new Map();
  const parentUnionByChild = new Map();

  treeData.unions.forEach((union) => {
    [union.partner1, union.partner2].forEach((pid) => {
      if (!pid) return;
      if (!unionsByPartner.has(pid)) unionsByPartner.set(pid, []);
      unionsByPartner.get(pid).push(union.id);
    });
    union.children.forEach((childId) => parentUnionByChild.set(childId, union.id));
  });

  const unionNodes = new Map();

  function buildUnionNode(unionId, trail = new Set()) {
    if (trail.has(unionId)) return null;
    if (unionNodes.has(unionId)) return unionNodes.get(unionId);
    const union = unionsById.get(unionId);
    if (!union) return null;
    const node = {
      id: unionId,
      type: "union",
      partner1: union.partner1,
      partner2: union.partner2,
      children: []
    };
    unionNodes.set(unionId, node);
    const nextTrail = new Set(trail);
    nextTrail.add(unionId);
    union.children.forEach((childId) => {
      const childUnions = (unionsByPartner.get(childId) || []).filter((id) => id !== unionId);
      if (childUnions.length > 0) {
        childUnions.forEach((childUnionId) => {
          const childUnionNode = buildUnionNode(childUnionId, nextTrail);
          if (childUnionNode) node.children.push(childUnionNode);
        });
      } else {
        node.children.push({ id: childId, type: "person", personId: childId, children: [] });
      }
    });
    return node;
  }

  const root = { id: "root", type: "root", children: [] };

  const rootUnions = treeData.unions.filter((u) => {
    const p1Parent = u.partner1 && parentUnionByChild.has(u.partner1);
    const p2Parent = u.partner2 && parentUnionByChild.has(u.partner2);
    return !p1Parent && !p2Parent;
  });

  rootUnions.forEach((u) => {
    const node = buildUnionNode(u.id);
    if (node) root.children.push(node);
  });

  treeData.people.forEach((person) => {
    const isChild = parentUnionByChild.has(person.id);
    const isPartner = unionsByPartner.has(person.id);
    if (!isChild && !isPartner) {
      root.children.push({ id: person.id, type: "person", personId: person.id, children: [] });
    }
  });

  function measure(node) {
    if (node.type === "root") {
      const childWidths = node.children.map((child) => measure(child));
      const total = childWidths.reduce((sum, w) => sum + w, 0) + layoutConfig.hGap * Math.max(0, childWidths.length - 1);
      node.width = total;
      node.ownWidth = 0;
      return node.width;
    }

    const ownWidth = node.type === "union" && node.partner2
      ? layoutConfig.cardWidth * 2 + layoutConfig.cardGap
      : layoutConfig.cardWidth;

    const childWidths = node.children.map((child) => measure(child));
    const childrenTotal = childWidths.reduce((sum, w) => sum + w, 0) + layoutConfig.hGap * Math.max(0, childWidths.length - 1);
    node.width = Math.max(ownWidth, childrenTotal || 0);
    node.ownWidth = ownWidth;
    return node.width;
  }

  function layout(node, x, y, depth = 0, branchId = 0) {
    node.depth = depth;
    node.branchId = branchId;
    if (node.type !== "root") {
      node.x = x + (node.width - node.ownWidth) / 2;
      node.y = y;
    }
    const childWidths = node.children.map((child) => child.width);
    const total = childWidths.reduce((sum, w) => sum + w, 0) + layoutConfig.hGap * Math.max(0, childWidths.length - 1);
    let startX = x + (node.width - total) / 2;
    node.children.forEach((child) => {
      layout(child, startX, y + layoutConfig.vGap, depth + 1, branchId);
      startX += child.width + layoutConfig.hGap;
    });
  }

  measure(root);
  root.children.forEach((child, index) => {
    const branchId = index % branchPalette.length;
    layout(child, layoutConfig.leftPadding + layoutConfig.labelColumnWidth, layoutConfig.topPadding, 1, branchId);
  });

  nodesList = [];
  maxDepth = 0;

  function collect(node) {
    if (node.type !== "root") {
      nodesList.push(node);
      maxDepth = Math.max(maxDepth, node.depth);
    }
    node.children.forEach(collect);
  }

  collect(root);
  layoutRoot = root;

  let maxX = 0;
  let maxY = 0;
  nodesList.forEach((node) => {
    const width = node.ownWidth || layoutConfig.cardWidth;
    maxX = Math.max(maxX, node.x + width);
    maxY = Math.max(maxY, node.y + layoutConfig.vGap);
  });

  baseSize = {
    width: maxX + layoutConfig.leftPadding,
    height: maxY + layoutConfig.vGap
  };

  virtualizationEnabled = nodesList.length > VIRTUALIZE_THRESHOLD;
}

function buildGenerationControls() {
  if (!generationControls || !GENERATION_FILTER_ENABLED) return;
  const t = i18n[lang] || i18n.ms;
  generationControls.innerHTML = "";
  for (let depth = 1; depth <= maxDepth; depth += 1) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "gen-chip";
    chip.dataset.depth = depth;
    chip.textContent = `G${depth}`;
    if (hiddenGenerations.has(depth)) chip.classList.add("inactive");
    chip.addEventListener("click", () => {
      if (hiddenGenerations.has(depth)) {
        hiddenGenerations.delete(depth);
        chip.classList.remove("inactive");
      } else {
        hiddenGenerations.add(depth);
        chip.classList.add("inactive");
      }
      savePrefs();
      scheduleRender();
      updateUrlState();
    });
    generationControls.appendChild(chip);
  }

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "gen-chip";
  reset.textContent = t.genAll;
  reset.dataset.reset = "true";
  reset.addEventListener("click", () => {
    hiddenGenerations.clear();
    generationControls.querySelectorAll(".gen-chip").forEach((chip) => {
      if (!chip.dataset.reset) chip.classList.remove("inactive");
    });
    savePrefs();
    scheduleRender();
    updateUrlState();
  });
  generationControls.appendChild(reset);
}

function buildBranchFilter() {
  if (!branchFilter || !BRANCH_FILTER_ENABLED) return;
  const t = i18n[lang] || i18n.ms;
  branchFilter.innerHTML = "";
  const optionAll = document.createElement("option");
  optionAll.value = "all";
  optionAll.textContent = t.branchAll;
  branchFilter.appendChild(optionAll);

  layoutRoot.children.forEach((child, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = formatText(t.branchName, { n: index + 1 });
    branchFilter.appendChild(option);
  });

  branchFilter.value = branchFilterValue;
  branchFilter.addEventListener("change", () => {
    branchFilterValue = branchFilter.value;
    savePrefs();
    scheduleRender();
    updateUrlState();
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function rebuildFromData() {
  peopleById = new Map(treeData.people.map((p) => [p.id, p]));
  softPeachPeople = computeBranchPeople(SOFT_PEACH_ROOT_ID);
  babyBluePeople = computeBranchPeople(BABY_BLUE_ROOT_ID);
  mintGreenPeople = computeBranchPeople(MINT_GREEN_ROOT_ID);
  lavenderPeople = computeBranchPeople(LAVENDER_ROOT_ID);
  applyCardScale();
  buildLayout();
  updateStats();
  populateTimelineFilters();
  populateRelationshipFinder();
  populateDirectoryFilters();
  buildGenerationControls();
  buildBranchFilter();
  renderScene();
  applyLanguage();
  if (pathMode) applyLineageHighlight();
}

function computeBranchPeople(rootId) {
  if (!treeData?.unions || !treeData?.people) return new Set();
  if (!treeData.people.some((p) => p.id === rootId)) return new Set();
  const unionsByPartner = new Map();
  treeData.unions.forEach((union) => {
    [union.partner1, union.partner2].forEach((pid) => {
      if (!pid) return;
      if (!unionsByPartner.has(pid)) unionsByPartner.set(pid, []);
      unionsByPartner.get(pid).push(union);
    });
  });

  const result = new Set();
  const queue = [rootId];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || result.has(current)) continue;
    result.add(current);
    const unions = unionsByPartner.get(current) || [];
    unions.forEach((union) => {
      if (union.partner1) queue.push(union.partner1);
      if (union.partner2) queue.push(union.partner2);
      (union.children || []).forEach((childId) => queue.push(childId));
    });
  }
  return result;
}

function generateId() {
  let idx = treeData.people.length + 1;
  let id = `p${idx}`;
  while (peopleById.has(id)) {
    idx += 1;
    id = `p${idx}`;
  }
  return id;
}

function generateUnionId() {
  const used = new Set(treeData.unions.map((u) => u.id));
  let idx = treeData.unions.length + 1;
  let id = `u${idx}`;
  while (used.has(id)) {
    idx += 1;
    id = `u${idx}`;
  }
  return id;
}

function applyViewMode() {
  if (!timelineSection) {
    viewMode = "tree";
    if (treeWrap) treeWrap.hidden = false;
    document.body.dataset.view = "tree";
    return;
  }
  if (viewMode !== "tree") {
    clearQuickFamilyFilter(false);
  }
  if (viewMode === "birthday") {
    document.body.dataset.view = "birthday";
    if (timelineSection) timelineSection.hidden = true;
    if (birthdaySection) birthdaySection.hidden = false;
    if (directorySection) directorySection.hidden = true;
    if (profilePage) profilePage.hidden = true;
    if (treeWrap) treeWrap.hidden = true;
    if (storyPanel) storyPanel.hidden = true;
    setStoryPanelOpen(false);
    renderBirthdayPage();
  } else if (viewMode === "directory") {
    document.body.dataset.view = "directory";
    if (timelineSection) timelineSection.hidden = true;
    if (birthdaySection) birthdaySection.hidden = true;
    if (profilePage) profilePage.hidden = true;
    if (directorySection) directorySection.hidden = false;
    if (treeWrap) treeWrap.hidden = true;
    if (storyPanel) storyPanel.hidden = true;
    setStoryPanelOpen(false);
    renderDirectoryPage();
  } else if (viewMode === "timeline") {
    document.body.dataset.view = "timeline";
    if (timelineSection) timelineSection.hidden = false;
    if (birthdaySection) birthdaySection.hidden = true;
    if (directorySection) directorySection.hidden = true;
    if (profilePage) profilePage.hidden = true;
    if (treeWrap) treeWrap.hidden = true;
    renderTimeline();
  } else if (viewMode === "profile") {
    document.body.dataset.view = "profile";
    if (timelineSection) timelineSection.hidden = true;
    if (birthdaySection) birthdaySection.hidden = true;
    if (directorySection) directorySection.hidden = true;
    if (treeWrap) treeWrap.hidden = true;
    if (storyPanel) storyPanel.hidden = true;
    setStoryPanelOpen(false);
    if (profilePage) profilePage.hidden = false;
    renderProfilePage();
  } else {
    document.body.dataset.view = "tree";
    if (timelineSection) timelineSection.hidden = true;
    if (birthdaySection) birthdaySection.hidden = true;
    if (directorySection) directorySection.hidden = true;
    if (profilePage) profilePage.hidden = true;
    if (treeWrap) treeWrap.hidden = false;
  }
  applyLanguage();
}

function scheduleRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    renderScene();
  });
}

function renderScene() {
  if (viewMode === "birthday") {
    renderBirthdayPage();
    return;
  }
  if (viewMode === "directory") {
    renderDirectoryPage();
    return;
  }
  if (viewMode === "timeline") {
    if (!timelineSection) {
      viewMode = "tree";
    } else {
      renderTimeline();
      return;
    }
  }
  if (viewMode === "profile") {
    renderProfilePage();
    return;
  }

  treeCanvas.innerHTML = "";
  treeLines.innerHTML = "";
  elementByPersonId.clear();
  elementByNodeId.clear();
  nodeByPersonId.clear();

  treeCanvas.style.width = `${baseSize.width}px`;
  treeCanvas.style.height = `${baseSize.height}px`;
  treeLines.setAttribute("width", baseSize.width);
  treeLines.setAttribute("height", baseSize.height);
  treeLines.style.width = `${baseSize.width}px`;
  treeLines.style.height = `${baseSize.height}px`;

  renderGenerationLabels();

  let visibleNodes = getVisibleNodes();
  if (visibleNodes.length === 0) {
    let changed = false;
    if (hiddenGenerations.size > 0) {
      hiddenGenerations.clear();
      changed = true;
    }
    if (branchFilterValue !== "all") {
      branchFilterValue = "all";
      changed = true;
    }
    if (changed) {
      savePrefs();
      visibleNodes = getVisibleNodes();
    }
    if (visibleNodes.length === 0 && treeData?.people?.length) {
      hiddenGenerations.clear();
      branchFilterValue = "all";
      viewMode = "tree";
      localStorage.removeItem(STORAGE_KEY);
      visibleNodes = getVisibleNodes();
    }
  }
  visibleNodes.forEach((node) => renderNode(node));

  drawLines(layoutRoot, visibleNodes);
  applyZoom();
  updateMinimap();
  if (pathMode) applyLineageHighlight();
  if (selectedPersonId) applySelectionHighlight(selectedPersonId);
  restoreRelationshipHighlight();
  if (treeCanvas && treeCanvas.children.length > 0) {
    setTreeStatus("");
  }
  updateFocusedBranchBar();
  updateQuickFamilyFilterBar();
}

function renderGenerationLabels() {
  const labelOffset = 20;
  const depthMap = new Map();
  nodesList.forEach((node) => {
    if (!nodeVisible(node)) return;
    if (!depthMap.has(node.depth)) depthMap.set(node.depth, node.y);
  });

  depthMap.forEach((y, depth) => {
    const divider = document.createElement("div");
    divider.className = "generation-divider";
    divider.style.top = `${y - 24}px`;
    treeCanvas.appendChild(divider);

    const label = document.createElement("div");
    label.className = "generation-label";
    label.textContent = `${i18n[lang].legendGeneration} ${depth}`;
    label.style.top = `${y + labelOffset}px`;
    label.style.left = "16px";
    treeCanvas.appendChild(label);
  });
}

function nodeVisible(node) {
  if (hiddenGenerations.has(node.depth)) return false;
  if (branchFilterValue !== "all" && String(node.branchId) !== branchFilterValue) return false;
  if (focusedBranchPeople.size > 0) {
    const ids = getNodePersonIds(node);
    if (!ids.some((id) => focusedBranchPeople.has(id))) return false;
  }
  if (quickFamilyPeople.size > 0) {
    const ids = getNodePersonIds(node);
    if (!ids.some((id) => quickFamilyPeople.has(id))) return false;
  }
  return true;
}

function getNodePersonIds(node) {
  if (!node) return [];
  if (node.type === "person") return [node.personId].filter(Boolean);
  if (node.type === "union") {
    return [node.partner1, node.partner2, ...(node.children || []).map((child) => child.personId)].filter(Boolean);
  }
  return [];
}

function getVisibleNodes() {
  const nodes = nodesList.filter((node) => nodeVisible(node));
  if (!virtualizationEnabled) return nodes;

  const padding = 300;
  const viewX = treeWrap.scrollLeft / scale - padding;
  const viewY = treeWrap.scrollTop / scale - padding;
  const viewW = treeWrap.clientWidth / scale + padding * 2;
  const viewH = treeWrap.clientHeight / scale + padding * 2;

  return nodes.filter((node) => {
    const width = node.ownWidth || layoutConfig.cardWidth;
    const height = 120;
    return node.x + width >= viewX && node.x <= viewX + viewW && node.y + height >= viewY && node.y <= viewY + viewH;
  });
}

function renderNode(node) {
  if (node.type === "person") {
    const person = peopleById.get(node.personId);
    const group = document.createElement("div");
    group.className = "node-group";
    group.style.left = `${node.x}px`;
    group.style.top = `${node.y}px`;
    group.dataset.nodeId = node.id;
    group.dataset.depth = node.depth;
    group.style.setProperty("--branch-color", branchPalette[node.branchId]);
    const card = createPersonCard(person, node.depth);
    const isMenantu = (person?.relation || "").toLowerCase().includes("menantu");
    if (!isMenantu && node.depth >= 2 && node.depth <= 4 && softPeachPeople.has(node.personId)) {
      card.classList.add("soft-peach");
      card.style.setProperty("--card-fill", SOFT_PEACH_COLOR);
    }
    if (!isMenantu && node.depth >= 2 && node.depth <= 4 && babyBluePeople.has(node.personId)) {
      card.classList.add("baby-blue");
      card.style.setProperty("--card-fill", BABY_BLUE_COLOR);
    }
    if (!isMenantu && node.depth >= 2 && node.depth <= 4 && mintGreenPeople.has(node.personId)) {
      card.classList.add("mint-green");
      card.style.setProperty("--card-fill", MINT_GREEN_COLOR);
    }
    if (!isMenantu && node.depth >= 2 && node.depth <= 4 && lavenderPeople.has(node.personId)) {
      card.classList.add("lavender");
      card.style.setProperty("--card-fill", LAVENDER_COLOR);
    }
    group.appendChild(card);
    treeCanvas.appendChild(group);
    elementByPersonId.set(person.id, group);
    nodeByPersonId.set(person.id, node);
    elementByNodeId.set(node.id, group);
  }

  if (node.type === "union") {
    const group = document.createElement("div");
    group.className = "node-group";
    group.style.left = `${node.x}px`;
    group.style.top = `${node.y}px`;
    group.dataset.nodeId = node.id;
    group.dataset.depth = node.depth;
    group.style.setProperty("--branch-color", branchPalette[node.branchId]);
    const partner1 = peopleById.get(node.partner1);
    const partner2 = node.partner2 ? peopleById.get(node.partner2) : null;
    if (partner1) {
      const card1 = createPersonCard(partner1, node.depth);
      card1.dataset.partner = "left";
      const isMenantu1 = (partner1?.relation || "").toLowerCase().includes("menantu");
      if (!isMenantu1 && node.depth >= 2 && node.depth <= 4 && softPeachPeople.has(node.partner1)) {
        card1.classList.add("soft-peach");
        card1.style.setProperty("--card-fill", SOFT_PEACH_COLOR);
      }
      if (!isMenantu1 && node.depth >= 2 && node.depth <= 4 && babyBluePeople.has(node.partner1)) {
        card1.classList.add("baby-blue");
        card1.style.setProperty("--card-fill", BABY_BLUE_COLOR);
      }
      if (!isMenantu1 && node.depth >= 2 && node.depth <= 4 && mintGreenPeople.has(node.partner1)) {
        card1.classList.add("mint-green");
        card1.style.setProperty("--card-fill", MINT_GREEN_COLOR);
      }
      if (!isMenantu1 && node.depth >= 2 && node.depth <= 4 && lavenderPeople.has(node.partner1)) {
        card1.classList.add("lavender");
        card1.style.setProperty("--card-fill", LAVENDER_COLOR);
      }
      group.appendChild(card1);
      elementByPersonId.set(partner1.id, group);
      nodeByPersonId.set(partner1.id, node);
    }
    if (partner2) {
      const card2 = createPersonCard(partner2, node.depth);
      card2.dataset.partner = "right";
      const isMenantu2 = (partner2?.relation || "").toLowerCase().includes("menantu");
      if (!isMenantu2 && node.depth >= 2 && node.depth <= 4 && softPeachPeople.has(node.partner2)) {
        card2.classList.add("soft-peach");
        card2.style.setProperty("--card-fill", SOFT_PEACH_COLOR);
      }
      if (!isMenantu2 && node.depth >= 2 && node.depth <= 4 && babyBluePeople.has(node.partner2)) {
        card2.classList.add("baby-blue");
        card2.style.setProperty("--card-fill", BABY_BLUE_COLOR);
      }
      if (!isMenantu2 && node.depth >= 2 && node.depth <= 4 && mintGreenPeople.has(node.partner2)) {
        card2.classList.add("mint-green");
        card2.style.setProperty("--card-fill", MINT_GREEN_COLOR);
      }
      if (!isMenantu2 && node.depth >= 2 && node.depth <= 4 && lavenderPeople.has(node.partner2)) {
        card2.classList.add("lavender");
        card2.style.setProperty("--card-fill", LAVENDER_COLOR);
      }
      group.appendChild(card2);
      elementByPersonId.set(partner2.id, group);
      nodeByPersonId.set(partner2.id, node);
    }
    treeCanvas.appendChild(group);
    elementByNodeId.set(node.id, group);
  }
}

function createPersonCard(person, depth) {
  const displayName = formatDisplayName(person.name);
  const card = document.createElement("div");
  card.className = "person-card";
  card.dataset.personId = person.id;
  card.dataset.depth = depth;
  card.style.setProperty("--enter-delay", `${Math.min(420, depth * 55)}ms`);
  card.tabIndex = 0;
  if ((person.relation || "").toLowerCase().includes("menantu")) {
    card.classList.add("is-menantu");
  }

  if (person.death) card.classList.add("deceased");

  const header = document.createElement("div");
  header.className = "person-header";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.setProperty("--gen-ring", generationColor(depth));
  if (person.photo) {
    const img = document.createElement("img");
    img.src = person.photo;
    img.alt = displayName || person.name || "";
    avatar.appendChild(img);
  } else {
    avatar.textContent = initials(displayName || person.name || "");
  }

  const nameWrap = document.createElement("div");
  const name = document.createElement("div");
  name.className = "person-name";
  const firstName = formatDisplayName(person.firstName || getShortDisplayName(displayName || person.name || "") || person.name || "");
  name.textContent = firstName || displayName || person.name || "";
  const gender = getPersonGender(person);
  const genderPill = document.createElement("div");
  genderPill.className = "person-gender-pill";
  genderPill.dataset.gender = gender || "unknown";
  genderPill.textContent = getGenderLabel(person);
  const meta = document.createElement("div");
  meta.className = "person-meta";
  const birthLine = document.createElement("div");
  birthLine.className = "person-birth";
  if (person.birth) {
    const birthDate = parseDateValue(person.birth);
    const age = !person.death ? calcAge(birthDate) : null;
    birthLine.textContent = `${i18n[lang].bornPrefix}${formatDateDisplay(person.birth)}`;
    if (age !== null) {
      const ageLine = document.createElement("div");
      ageLine.className = "person-age";
      ageLine.textContent = `${i18n[lang].ageLabel}: ${age}`;
      meta.appendChild(ageLine);
    }
  } else {
    birthLine.textContent = "";
  }
  const deathLine = document.createElement("div");
  deathLine.textContent = person.death ? `${i18n[lang].diedPrefix}${formatDateDisplay(person.death)}` : "";
  if (birthLine.textContent) meta.appendChild(birthLine);
  if (deathLine.textContent) meta.appendChild(deathLine);
  nameWrap.appendChild(name);
  nameWrap.appendChild(genderPill);
  nameWrap.appendChild(meta);

  header.appendChild(avatar);
  header.appendChild(nameWrap);

  const tags = document.createElement("div");
  tags.className = "person-tags";
  const relationText = localizeTagText(person.relation || "", lang);
  const noteText = localizeTagText(person.note || "", lang);
  const tagsQueue = [];
  if (noteText) tagsQueue.push(noteText);
  if (relationText && relationText !== noteText) tagsQueue.push(relationText);
  tagsQueue.forEach((text) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    tags.appendChild(tag);
  });
  if (isPartnered(person.id)) {
    const spouseLabel = gender === "male" ? i18n[lang].spouseHusband : gender === "female" ? i18n[lang].spouseWife : "";
    const existingText = tagsQueue.join(" ").toLowerCase();
    const spouseLower = spouseLabel.toLowerCase();
    const hasSpouseAlready = existingText.includes(spouseLower) || existingText.includes("suami") || existingText.includes("isteri") || existingText.includes("husband") || existingText.includes("wife");
    if (spouseLabel && !hasSpouseAlready) {
      const spouseTag = document.createElement("span");
      spouseTag.className = "tag";
      spouseTag.textContent = spouseLabel;
      tags.appendChild(spouseTag);
    }
  }
  // No Bin/Binti tag on card

  card.appendChild(header);
  card.appendChild(tags);

  card.addEventListener("click", (e) => {
    e.stopPropagation();
    if (selectedPersonId && selectedPersonId !== person.id && quickFamilyPeople.size > 0) {
      clearQuickFamilyFilter(false);
    }
    openModal(person);
    updateStoryPanel(person);
    selectedPersonId = person.id;
    applySelectionHighlight(person.id);
    updateQuickFamilyFilterBar();
    updateUrlState();
  });

  return card;
}

function getTreeLineStrokeWidth() {
  const safeScale = Math.max(0.35, Number.isFinite(scale) ? scale : 1);
  return Math.max(1.1, Math.min(5.6, 2.4 / safeScale));
}

function applyTreeLineStrokeStyle(lineEl, stroke) {
  lineEl.setAttribute("stroke", stroke);
  lineEl.setAttribute("stroke-width", getTreeLineStrokeWidth().toFixed(2));
  lineEl.setAttribute("stroke-linecap", "round");
  lineEl.setAttribute("vector-effect", "non-scaling-stroke");
}

function refreshTreeLineStrokeWidths() {
  if (!treeLines) return;
  const strokeWidth = getTreeLineStrokeWidth().toFixed(2);
  treeLines.querySelectorAll("path, line").forEach((lineEl) => {
    lineEl.setAttribute("stroke-width", strokeWidth);
    lineEl.setAttribute("vector-effect", "non-scaling-stroke");
  });
}

function drawLines(root, visibleNodes) {
  if (!showLines) {
    treeLines.innerHTML = "";
    return;
  }
  const visibleSet = new Set(visibleNodes.map((node) => node.id));
  treeLines.innerHTML = "";
  if (!treeCanvas) return;

  function drawNodeEdges(node) {
    if (node.type === "union") {
      if (!visibleSet.has(node.id)) return;
      const parentEl = elementByNodeId.get(node.id);
      if (!parentEl) return;
      const parentCenterX = parentEl.offsetLeft + parentEl.offsetWidth / 2;
      const parentBottomY = parentEl.offsetTop + parentEl.offsetHeight;
      const childPoints = [];
      node.children.forEach((child) => {
        if (!nodeVisible(child)) return;
        if (!visibleSet.has(child.id)) return;
        const childEl = elementByNodeId.get(child.id);
        if (!childEl) return;
        childPoints.push({
          x: childEl.offsetLeft + childEl.offsetWidth / 2,
          y: childEl.offsetTop
        });
      });

      if (childPoints.length > 0) {
        const midY = (parentBottomY + Math.min(...childPoints.map((p) => p.y))) / 2;
        const stroke = `${branchPalette[node.branchId] || "#7a8a80"}D8`;

        childPoints.forEach((point) => {
          const branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
          branch.setAttribute("d", `M ${parentCenterX} ${parentBottomY} V ${midY} H ${point.x} V ${point.y}`);
          branch.setAttribute("fill", "none");
          applyTreeLineStrokeStyle(branch, stroke);
          branch.setAttribute("stroke-linejoin", "round");
          treeLines.appendChild(branch);
        });
      }

      const partnerCards = parentEl.querySelectorAll(".person-card");
      if (partnerCards.length === 2) {
        const leftCard = partnerCards[0];
        const rightCard = partnerCards[1];
        const y = parentEl.offsetTop + leftCard.offsetTop + leftCard.offsetHeight / 2;
        const x1 = parentEl.offsetLeft + leftCard.offsetLeft + leftCard.offsetWidth;
        const x2 = parentEl.offsetLeft + rightCard.offsetLeft;
        if (x2 - x1 <= 4) return;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1 + 2);
        line.setAttribute("y1", y);
        line.setAttribute("x2", x2 - 2);
        line.setAttribute("y2", y);
        applyTreeLineStrokeStyle(line, `${branchPalette[node.branchId] || "#7a8a80"}D8`);
        treeLines.appendChild(line);
      }
    }

    node.children.forEach(drawNodeEdges);
  }

  drawNodeEdges(root);
}

function renderTimeline() {
  if (!timelineSection) return;
  timelineList.innerHTML = "";
  const depthMap = getPersonDepthMap();
  const parentKeyByChild = new Map();
  treeData.unions.forEach((union) => {
    const parents = [union.partner1, union.partner2].filter(Boolean).sort().join("|") || "unknown";
    union.children.forEach((childId) => {
      if (!parentKeyByChild.has(childId)) parentKeyByChild.set(childId, parents);
    });
  });
    const entries = treeData.people.map((person) => {
      const birth = parseYear(person.birth);
      const birthDate = parseDateValue(person.birth);
      const birthMonth = birthDate ? birthDate.getMonth() + 1 : null;
      const birthDay = birthDate ? birthDate.getDate() : null;
      const birthTime = birthDate ? birthDate.getTime() : null;
      const order = birthTime ?? Number.POSITIVE_INFINITY;
      const gender = getPersonGender(person) || "unknown";
      const nameSort = formatDisplayName(person.name).toLowerCase();
      const parentKey = parentKeyByChild.get(person.id) || "zzzz";
      return { person, birth, birthMonth, birthDay, birthTime, order, gender, nameSort, parentKey };
    });

  const queryTerms = expandSearchTerms(timelineFilters.query || "");
  const filtered = entries.filter(({ person, birth, birthMonth, gender }) => {
    if (queryTerms.length && !queryTerms.some((term) => getPersonSearchText(person).includes(term))) return false;
    if (timelineFilters.generation !== "all") {
      const depth = depthMap.get(person.id);
      if (!depth || String(depth) !== String(timelineFilters.generation)) return false;
    }
    if (timelineFilters.month !== "all") {
      if (!birthMonth || String(birthMonth) !== String(timelineFilters.month)) return false;
    }
    if (timelineFilters.gender !== "all" && gender !== timelineFilters.gender) return false;
    return true;
  });

  const genderOrder = { male: 1, female: 2, unknown: 3 };
  const sortMode = timelineFilters.sort || "year";
    filtered.sort((a, b) => {
      if (sortMode === "year") {
        const ay = a.birth ?? 9999;
        const by = b.birth ?? 9999;
        if (ay !== by) return ay - by;
        const am = a.birthMonth ?? 99;
        const bm = b.birthMonth ?? 99;
        if (am !== bm) return am - bm;
        const ad = a.birthDay ?? 99;
        const bd = b.birthDay ?? 99;
        if (ad !== bd) return ad - bd;
        return a.nameSort.localeCompare(b.nameSort);
      }
      if (sortMode === "age") {
        const at = a.birthTime ?? Number.POSITIVE_INFINITY;
        const bt = b.birthTime ?? Number.POSITIVE_INFINITY;
        if (at !== bt) return at - bt;
      return a.nameSort.localeCompare(b.nameSort);
    }
    if (sortMode === "alpha") {
      return a.nameSort.localeCompare(b.nameSort);
    }
    if (sortMode === "month") {
      const am = a.birthMonth ?? 99;
      const bm = b.birthMonth ?? 99;
      if (am !== bm) return am - bm;
      const ad = a.birthDay ?? 99;
      const bd = b.birthDay ?? 99;
      if (ad !== bd) return ad - bd;
      return a.nameSort.localeCompare(b.nameSort);
    }
    if (sortMode === "gender") {
      const ag = genderOrder[a.gender] ?? 9;
      const bg = genderOrder[b.gender] ?? 9;
      if (ag !== bg) return ag - bg;
      return a.nameSort.localeCompare(b.nameSort);
    }
    if (sortMode === "parent") {
      if (a.parentKey !== b.parentKey) return a.parentKey.localeCompare(b.parentKey);
      if (a.order !== b.order) return a.order - b.order;
      return a.nameSort.localeCompare(b.nameSort);
    }
    return a.order - b.order;
  });

  const t = i18n[lang] || i18n.ms;
  filtered.forEach(({ person }) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    if (person.death) item.classList.add("deceased");
    const depth = depthMap.get(person.id);
    item.classList.add("timeline-branch");
    item.style.setProperty("--branch-color", getFamilyBranchColor(person, depth));
    const birthDate = parseDateValue(person.birth);
    const age = !person.death ? calcAge(birthDate) : null;
    const hasBirth = Boolean(person.birth);
    const hasDeath = Boolean(person.death);
    const displayName = formatDisplayName(person.name);
    const shortName = getShortDisplayName(displayName);
    item.setAttribute("aria-label", `${t.profileOpen}: ${shortName || displayName}`);
    const birthYear = parseYear(person.birth);
    const yearLabel = birthYear || "----";
    const genderLabel = getGenderLabel(person);
    const relationLabel = localizeTagText(person.relation || "", lang);
    const birthMeta = hasBirth ? `${t.bornPrefix}${formatDateDisplay(person.birth)}` : t.datesUnknown;
    const ageMeta = age !== null ? `${age} ${lang === "en" ? "years old" : "tahun"}` : "";
    const generationMeta = depth ? `Gen ${depth}` : "";
    const metaParts = [birthMeta, ageMeta, genderLabel, relationLabel, generationMeta].filter(Boolean);
    const deathLine = hasDeath ? `${t.diedPrefix}${formatDateDisplay(person.death)}` : "";
    const noteLine = localizeTagText(person.note || "", lang);
    item.innerHTML = `
      <div class="timeline-year-rail">
        <strong>${escapeHtml(String(yearLabel))}</strong>
        <span aria-hidden="true"></span>
      </div>
      <div class="timeline-avatar">${escapeHtml(initials(shortName || displayName))}</div>
      <div class="timeline-body">
        <div class="timeline-name">${escapeHtml(shortName || displayName)}</div>
        <div class="timeline-meta">${metaParts.map(escapeHtml).join(" | ")}</div>
        ${deathLine ? `<div class="timeline-death">${escapeHtml(deathLine)}</div>` : ""}
        ${noteLine ? `<div class="timeline-relation">${escapeHtml(noteLine)}</div>` : ""}
      </div>
      <div class="timeline-arrow" aria-hidden="true">›</div>
    `;
    const openTimelineProfile = () => openProfilePage(person.id, "timeline");
    item.addEventListener("click", openTimelineProfile);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openTimelineProfile();
      }
    });
    timelineList.appendChild(item);
  });
  updateTimelineActiveFilters();
}

function renderBirthdayPage() {
  if (!birthdayCalendar || !birthdayMonthLists) return;
  const t = i18n[lang] || i18n.ms;
  const entries = getBirthdayEntries();
  const months = getMonthLabels();
  const byMonth = Array.from({ length: 12 }, () => []);
  const byDate = new Map();
  const today = new Date();
  const currentDateKey = `${today.getMonth()}-${today.getDate()}`;
  const nextBirthdayKey = getNextBirthdayKey(entries, today);
  syncAutoOpenBirthday(nextBirthdayKey);
  if (birthdayTodayBtn) birthdayTodayBtn.textContent = lang === "en" ? "Today" : "Hari Ini";

  entries.forEach((entry) => {
    byMonth[entry.month].push(entry);
    const key = `${entry.month}-${entry.day}`;
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key).push(entry);
  });

  birthdayCalendar.innerHTML = "";
  if (birthdayPlanner) birthdayPlanner.innerHTML = "";
  birthdayMonthLists.innerHTML = "";
  renderBirthdaySummary(entries, byDate, nextBirthdayKey, today);
  renderBirthdayFeatured(entries, byDate, nextBirthdayKey, today);
  updateBirthdayViewSwitch();

  months.forEach((monthName, monthIndex) => {
    const monthCard = document.createElement("section");
    monthCard.className = "birthday-month-card";
    const daysInMonth = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    const dayButtons = [];
    for (let day = 1; day <= daysInMonth; day += 1) {
      const dayEntries = byDate.get(`${monthIndex}-${day}`) || [];
      const key = `${monthIndex}-${day}`;
      const isOpen = openBirthdayDates.has(key);
      const dayClasses = [
        "birthday-day",
        dayEntries.length ? "has-birthday" : "",
        key === currentDateKey ? "is-today" : "",
        isBirthdayDateInRange(key, currentDateKey, nextBirthdayKey) ? "is-upcoming-range" : "",
        key === nextBirthdayKey ? "is-next-birthday" : "",
        isOpen ? "is-open" : ""
      ].filter(Boolean).join(" ");
      dayButtons.push(`
        <button class="${dayClasses}" type="button" data-birthday-date="${key}" ${dayEntries.length ? "" : "disabled"} aria-expanded="${isOpen ? "true" : "false"}">
          <span>${day}</span>
          ${dayEntries.length > 1 ? `<i>${dayEntries.length}</i>` : ""}
        </button>
      `);
    }
    monthCard.innerHTML = `
      <h3>${escapeHtml(monthName)}</h3>
      <div class="birthday-days">${dayButtons.join("")}</div>
      <div class="birthday-day-detail" data-birthday-detail="${monthIndex}"></div>
    `;
    birthdayCalendar.appendChild(monthCard);
    renderBirthdayMonthDetail(monthIndex, byDate);
  });

  birthdayCalendar.querySelectorAll("[data-birthday-date]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.birthdayDate;
      const [monthStr] = key.split("-");
      if (openBirthdayDates.has(key)) {
        openBirthdayDates.delete(key);
      } else {
        openBirthdayDates.add(key);
      }
      btn.classList.toggle("is-open", openBirthdayDates.has(key));
      btn.setAttribute("aria-expanded", openBirthdayDates.has(key) ? "true" : "false");
      renderBirthdayMonthDetail(Number(monthStr), byDate);
    });
  });

  renderBirthdayPlanner(byMonth, byDate, currentDateKey, nextBirthdayKey, today);
  renderBirthdaySearchResults();
}

function renderBirthdaySummary(entries, byDate, nextBirthdayKey, today) {
  if (!birthdaySummary) return;
  const nextEntries = byDate.get(nextBirthdayKey) || [];
  const nextName = nextEntries.length ? getShortDisplayName(nextEntries[0].person.name) : "-";
  const nextMeta = nextEntries.length ? formatBirthdayCountdown(nextEntries[0], today) : (lang === "en" ? "No birthday recorded" : "Tiada birthday direkodkan");
  birthdaySummary.innerHTML = `
    <span>${entries.length} ${lang === "en" ? "birthdays" : "birthday"}</span>
    <span>${lang === "en" ? "Next" : "Terdekat"}: ${escapeHtml(nextName)}</span>
    <span>${escapeHtml(nextMeta)}</span>
  `;
}

function renderBirthdayFeatured(entries, byDate, nextBirthdayKey, today) {
  if (!birthdayFeatured) return;
  const nextEntries = byDate.get(nextBirthdayKey) || [];
  if (!entries.length || !nextEntries.length) {
    birthdayFeatured.innerHTML = `<div class="birthday-empty">${escapeHtml((i18n[lang] || i18n.ms).birthdayNoDate)}</div>`;
    return;
  }
  const first = nextEntries[0];
  const names = nextEntries.map((entry) => getShortDisplayName(entry.person.name));
  const nameText = names.length > 1 ? `${names[0]} +${names.length - 1}` : names[0];
  const fullNameText = formatDisplayName(first.person.name);
  birthdayFeatured.innerHTML = `
    <div class="birthday-featured-main">
      <span class="birthday-featured-label">${lang === "en" ? "Next Birthday" : "Birthday Terdekat"}</span>
      <strong>${escapeHtml(nameText)}</strong>
      <small>${escapeHtml(fullNameText)}</small>
      <span>${escapeHtml(formatBirthdayDate(first))} · ${escapeHtml(formatBirthdayCountdown(first, today))}</span>
    </div>
    <div class="birthday-featured-actions">
      ${nextEntries.slice(0, 3).map((entry) => `
        <button class="birthday-mini-person" type="button" data-person-link="${escapeHtml(entry.person.id)}">
          <span class="birthday-mini-avatar">${escapeHtml(initials(getShortDisplayName(entry.person.name)))}</span>
          <span>${escapeHtml(getShortDisplayName(entry.person.name))}</span>
        </button>
      `).join("")}
      <button class="btn small" type="button" data-birthday-jump="${escapeHtml(nextBirthdayKey)}">${lang === "en" ? "View in calendar" : "Lihat dalam kalendar"}</button>
    </div>
  `;
  bindPersonLinkClicks(birthdayFeatured);
  birthdayFeatured.querySelector("[data-birthday-jump]")?.addEventListener("click", () => {
    openBirthdayDates.add(nextBirthdayKey);
    renderBirthdayPage();
    scrollToBirthdayDate(nextBirthdayKey);
  });
}

function shouldOpenBirthdayMonth(monthIndex, today, nextBirthdayKey, monthEntries) {
  if (monthIndex === today.getMonth()) return true;
  if (nextBirthdayKey?.startsWith(`${monthIndex}-`)) return true;
  return monthEntries.some((entry) => openBirthdayDates.has(`${entry.month}-${entry.day}`));
}

function updateBirthdayViewSwitch() {
  const isPlanner = birthdayCalendarView === "planner";
  if (birthdayCalendar) birthdayCalendar.hidden = isPlanner;
  if (birthdayPlanner) birthdayPlanner.hidden = !isPlanner;
  birthdayViewYearBtn?.classList.toggle("is-active", !isPlanner);
  birthdayViewYearBtn?.classList.toggle("ghost", isPlanner);
  birthdayViewYearBtn?.setAttribute("aria-pressed", (!isPlanner).toString());
  birthdayViewPlannerBtn?.classList.toggle("is-active", isPlanner);
  birthdayViewPlannerBtn?.classList.toggle("ghost", !isPlanner);
  birthdayViewPlannerBtn?.setAttribute("aria-pressed", isPlanner.toString());
  if (birthdayViewYearBtn) birthdayViewYearBtn.textContent = lang === "en" ? "12 Months" : "12 Bulan";
  if (birthdayViewPlannerBtn) birthdayViewPlannerBtn.textContent = lang === "en" ? "Month Planner" : "Planner Bulan";
}

function renderBirthdayPlanner(byMonth, byDate, currentDateKey, nextBirthdayKey, today) {
  if (!birthdayPlanner) return;
  const months = getMonthLabels();
  const monthIndex = Math.max(0, Math.min(11, birthdayPlannerMonth));
  const monthName = months[monthIndex];
  const year = today.getFullYear();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const weekLabels = lang === "en" ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : ["Ahad", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"];
  const monthEntries = byMonth[monthIndex] || [];
  const panelTitle = `${monthName} ${year}`;
  const panelSubtitle = `${monthEntries.length} ${lang === "en" ? "birthday this month" : "birthday bulan ini"}`;
  const emptyCells = Array.from({ length: firstDay }, () => `<span class="planner-day planner-day--empty"></span>`).join("");
  const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const key = `${monthIndex}-${day}`;
    const dayEntries = byDate.get(key) || [];
    const isOpen = openBirthdayDates.has(key);
    const classes = [
      "planner-day",
      dayEntries.length ? "has-birthday" : "",
      key === currentDateKey ? "is-today" : "",
      isBirthdayDateInRange(key, currentDateKey, nextBirthdayKey) ? "is-upcoming-range" : "",
      key === nextBirthdayKey ? "is-next-birthday" : "",
      isOpen ? "is-open" : ""
    ].filter(Boolean).join(" ");
    return `
      <button class="${classes}" type="button" data-planner-date="${key}" ${dayEntries.length ? "" : "disabled"} aria-expanded="${isOpen ? "true" : "false"}">
        <span class="planner-day-number">${day}</span>
        ${dayEntries.length ? `<span class="planner-day-count">${dayEntries.length}</span>` : ""}
        ${dayEntries.slice(0, 2).map((entry) => `<em>${escapeHtml(getShortDisplayName(entry.person.name))}</em>`).join("")}
      </button>
    `;
  }).join("");

  birthdayPlanner.innerHTML = `
    <section class="birthday-planner-card">
      <div class="birthday-planner-head">
        <button class="btn ghost small" type="button" data-planner-prev aria-label="${lang === "en" ? "Previous month" : "Bulan lepas"}">‹</button>
        <div>
          <p class="kicker">${lang === "en" ? "Birthday Planner" : "Planner Birthday"}</p>
          <h3>${escapeHtml(monthName)} ${year}</h3>
        </div>
        <button class="btn ghost small" type="button" data-planner-next aria-label="${lang === "en" ? "Next month" : "Bulan depan"}">›</button>
        <label class="planner-month-jump">
          <span>${lang === "en" ? "Jump to" : "Lompat ke"}</span>
          <select class="select" data-planner-month>
            ${months.map((month, index) => `<option value="${index}" ${index === monthIndex ? "selected" : ""}>${escapeHtml(month)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="planner-quick-actions">
        <button class="btn ghost small" type="button" data-planner-current>${lang === "en" ? "This month" : "Bulan ini"}</button>
        <button class="btn ghost small" type="button" data-planner-next-birthday>${lang === "en" ? "Next birthday" : "Birthday terdekat"}</button>
      </div>
      <div class="planner-weekdays">
        ${weekLabels.map((day) => `<span>${escapeHtml(day)}</span>`).join("")}
      </div>
      <div class="planner-grid">
        ${emptyCells}${dayCells}
      </div>
    </section>
    <aside class="birthday-planner-panel">
      <div class="planner-panel-card">
        <h3>${escapeHtml(panelTitle)}</h3>
        <p>${escapeHtml(panelSubtitle)}</p>
        <div class="birthday-list">
          ${monthEntries.length ? monthEntries.map((entry, index) => {
            const isUpcoming = `${entry.month}-${entry.day}` === nextBirthdayKey;
            return `
            <button class="birthday-person birthday-person--numbered${isUpcoming ? " is-upcoming-person" : ""}" type="button" data-person-link="${escapeHtml(entry.person.id)}">
              <span class="birthday-number">${index + 1}</span>
              <span class="birthday-person-main">
                <strong>${escapeHtml(getShortDisplayName(entry.person.name))}</strong>
                <span>${escapeHtml(formatBirthdayDate(entry))} · ${escapeHtml(formatBirthdayCountdown(entry, today))}</span>
              </span>
            </button>
          `;
          }).join("") : `<div class="birthday-empty">${escapeHtml((i18n[lang] || i18n.ms).birthdayNoDate)}</div>`}
        </div>
      </div>
    </aside>
  `;

  birthdayPlanner.querySelector("[data-planner-prev]")?.addEventListener("click", () => {
    birthdayPlannerMonth = (birthdayPlannerMonth + 11) % 12;
    renderBirthdayPage();
  });
  birthdayPlanner.querySelector("[data-planner-next]")?.addEventListener("click", () => {
    birthdayPlannerMonth = (birthdayPlannerMonth + 1) % 12;
    renderBirthdayPage();
  });
  birthdayPlanner.querySelector("[data-planner-month]")?.addEventListener("change", (event) => {
    birthdayPlannerMonth = Number(event.target.value) || 0;
    renderBirthdayPage();
  });
  birthdayPlanner.querySelector("[data-planner-current]")?.addEventListener("click", () => {
    birthdayPlannerMonth = today.getMonth();
    renderBirthdayPage();
    scrollToBirthdayDate(`${today.getMonth()}-${today.getDate()}`);
  });
  birthdayPlanner.querySelector("[data-planner-next-birthday]")?.addEventListener("click", () => {
    if (!nextBirthdayKey) return;
    birthdayPlannerMonth = Number(nextBirthdayKey.split("-")[0]);
    openBirthdayDates.add(nextBirthdayKey);
    renderBirthdayPage();
    scrollToBirthdayDate(nextBirthdayKey);
  });
  birthdayPlanner.querySelectorAll("[data-planner-date]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.plannerDate;
      if (openBirthdayDates.has(key)) {
        openBirthdayDates.delete(key);
      } else {
        openBirthdayDates.add(key);
      }
      renderBirthdayPage();
      if (birthdayCalendarView === "planner") {
        requestAnimationFrame(() => scrollToBirthdayDate(key));
      }
    });
  });
  bindPersonLinkClicks(birthdayPlanner);
}

function renderBirthdayMonthDetail(monthIndex, byDate) {
  if (!birthdayCalendar) return;
  const detail = birthdayCalendar.querySelector(`[data-birthday-detail="${monthIndex}"]`);
  if (!detail) return;
  const keys = [...openBirthdayDates]
    .filter((key) => key.startsWith(`${monthIndex}-`))
    .sort((a, b) => Number(a.split("-")[1]) - Number(b.split("-")[1]));
  detail.innerHTML = keys.map((key) => {
    const dayEntries = byDate.get(key) || [];
    return dayEntries.map((entry) => `
      <button class="birthday-person compact" type="button" data-person-link="${escapeHtml(entry.person.id)}">
        <strong>${escapeHtml(getShortDisplayName(entry.person.name))}</strong>
        <span>${escapeHtml(formatBirthdayDate(entry))} · ${escapeHtml(formatBirthdayCountdown(entry))}</span>
      </button>
    `).join("");
  }).join("");
  bindPersonLinkClicks(detail);
}

function renderBirthdaySearchResults() {
  if (!birthdaySearchInput || !birthdaySearchResults) return;
  const t = i18n[lang] || i18n.ms;
  const query = birthdaySearchInput.value.trim().toLowerCase();
  birthdaySearchResults.innerHTML = "";
  if (!query) return;
  const matches = getBirthdayEntries().filter((entry) => {
    return formatDisplayName(entry.person.name).toLowerCase().includes(query)
      || String(entry.person.name || "").toLowerCase().includes(query);
  });
  if (!matches.length) {
    birthdaySearchResults.innerHTML = `<div class="birthday-empty">${escapeHtml(t.birthdayNoSearch)}</div>`;
    return;
  }
  const visibleMatches = birthdaySearchExpanded ? matches : matches.slice(0, 6);
  const resultLabel = lang === "en" ? `${matches.length} results found` : `${matches.length} hasil ditemui`;
  birthdaySearchResults.innerHTML = `
    <div class="birthday-search-result-head">
      <strong>${escapeHtml(resultLabel)}</strong>
      ${matches.length > 6 ? `<button class="btn ghost small" type="button" data-birthday-search-toggle>${birthdaySearchExpanded ? (lang === "en" ? "Show less" : "Tutup") : (lang === "en" ? "View all" : "Lihat semua")}</button>` : ""}
    </div>
    ${visibleMatches.map((entry) => `
    <button class="birthday-person birthday-person--search" type="button" data-person-link="${escapeHtml(entry.person.id)}">
      <span class="birthday-search-avatar">${escapeHtml(initials(getShortDisplayName(entry.person.name)))}</span>
      <span class="birthday-person-main">
        <strong>${escapeHtml(getShortDisplayName(entry.person.name))}</strong>
        <small>${escapeHtml(formatDisplayName(entry.person.name))}</small>
        <span>${escapeHtml(formatBirthdayDate(entry))} · ${escapeHtml(formatBirthdayCountdown(entry))}</span>
      </span>
    </button>
  `).join("")}`;
  birthdaySearchResults.querySelector("[data-birthday-search-toggle]")?.addEventListener("click", () => {
    birthdaySearchExpanded = !birthdaySearchExpanded;
    renderBirthdaySearchResults();
  });
  bindPersonLinkClicks(birthdaySearchResults);
}

function populateDirectoryFilters() {
  const t = i18n[lang] || i18n.ms;
  if (directoryGenerationSelect) {
    const current = directoryFilters.generation || directoryGenerationSelect.value || "all";
    directoryGenerationSelect.innerHTML = "";
    const all = document.createElement("option");
    all.value = "all";
    all.textContent = t.directoryAllGenerations;
    directoryGenerationSelect.appendChild(all);
    for (let depth = 1; depth <= maxDepth; depth += 1) {
      const option = document.createElement("option");
      option.value = String(depth);
      option.textContent = `${t.legendGeneration} ${depth}`;
      directoryGenerationSelect.appendChild(option);
    }
    directoryGenerationSelect.value = [...directoryGenerationSelect.options].some((option) => option.value === current) ? current : "all";
    directoryFilters.generation = directoryGenerationSelect.value;
  }
  if (directoryBirthdayMonthSelect) {
    const currentMonth = directoryFilters.birthdayMonth || directoryBirthdayMonthSelect.value || "all";
    directoryBirthdayMonthSelect.innerHTML = "";
    const allMonths = document.createElement("option");
    allMonths.value = "all";
    allMonths.textContent = t.directoryAllBirthdayMonths;
    directoryBirthdayMonthSelect.appendChild(allMonths);
    getMonthLabels().forEach((month, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = month;
      directoryBirthdayMonthSelect.appendChild(option);
    });
    directoryBirthdayMonthSelect.value = [...directoryBirthdayMonthSelect.options].some((option) => option.value === currentMonth) ? currentMonth : "all";
    directoryFilters.birthdayMonth = directoryBirthdayMonthSelect.value;
  }
  if (directoryBranchSelect) {
    const currentBranch = directoryFilters.branch || directoryBranchSelect.value || "all";
    const branchIds = [...new Set((treeData?.people || []).map((person) => person.branchId || "root"))]
      .sort((a, b) => getBranchName(a).localeCompare(getBranchName(b), lang === "en" ? "en" : "ms"));
    directoryBranchSelect.innerHTML = "";
    const allBranches = document.createElement("option");
    allBranches.value = "all";
    allBranches.textContent = t.directoryAllBranches;
    directoryBranchSelect.appendChild(allBranches);
    branchIds.forEach((branchId) => {
      const option = document.createElement("option");
      option.value = branchId;
      option.textContent = getBranchName(branchId);
      directoryBranchSelect.appendChild(option);
    });
    directoryBranchSelect.value = [...directoryBranchSelect.options].some((option) => option.value === currentBranch) ? currentBranch : "all";
    directoryFilters.branch = directoryBranchSelect.value;
  }
}

function getDirectorySelectText(select, value) {
  if (!select) return value;
  const option = select.querySelector(`option[value="${CSS.escape(String(value))}"]`);
  return option ? option.textContent : value;
}

function updateDirectoryMoreState(nextState) {
  if (!directoryMoreBtn || !directoryMorePanel) return;
  const t = i18n[lang] || i18n.ms;
  if (typeof nextState === "boolean") directoryMoreOpen = nextState;
  directoryMorePanel.classList.toggle("is-open", directoryMoreOpen);
  directoryMorePanel.setAttribute("aria-hidden", directoryMoreOpen ? "false" : "true");
  directoryMoreBtn.setAttribute("aria-expanded", directoryMoreOpen ? "true" : "false");
  directoryMoreBtn.textContent = directoryMoreOpen ? t.timelineLess : t.timelineMore;
}

function updateDirectoryActiveFilters() {
  if (!directoryActiveFilters) return;
  const t = i18n[lang] || i18n.ms;
  const defaults = {
    generation: "all",
    gender: "all",
    birthdayMonth: "all",
    branch: "all",
    status: "all",
    sort: "generation"
  };
  const chips = [];
  const addChip = (key, label, value, select) => {
    if (!value || value === defaults[key]) return;
    chips.push({ key, text: `${label}: ${getDirectorySelectText(select, value)} x` });
  };

  addChip("generation", t.directoryGeneration, directoryFilters.generation, directoryGenerationSelect);
  addChip("gender", t.directoryGender, directoryFilters.gender, directoryGenderSelect);
  addChip("birthdayMonth", t.directoryBirthdayMonth, directoryFilters.birthdayMonth, directoryBirthdayMonthSelect);
  addChip("branch", t.directoryBranch, directoryFilters.branch, directoryBranchSelect);
  addChip("status", t.directoryStatus, directoryFilters.status, directoryStatusSelect);
  addChip("sort", t.directorySort, directoryFilters.sort, directorySortSelect);

  directoryActiveFilters.innerHTML = "";
  if (!chips.length) {
    directoryActiveFilters.hidden = true;
    return;
  }

  directoryActiveFilters.hidden = false;
  chips.forEach((chip) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = chip.text;
    btn.addEventListener("click", () => {
      const resetValue = defaults[chip.key];
      directoryFilters[chip.key] = resetValue;
      const selectMap = {
        generation: directoryGenerationSelect,
        gender: directoryGenderSelect,
        birthdayMonth: directoryBirthdayMonthSelect,
        branch: directoryBranchSelect,
        status: directoryStatusSelect,
        sort: directorySortSelect
      };
      if (selectMap[chip.key]) selectMap[chip.key].value = resetValue;
      renderDirectoryPage();
    });
    directoryActiveFilters.appendChild(btn);
  });

  const resetAll = document.createElement("button");
  resetAll.type = "button";
  resetAll.className = "chip reset-all";
  resetAll.textContent = t.timelineResetAll;
  resetAll.addEventListener("click", resetDirectoryFilters);
  directoryActiveFilters.appendChild(resetAll);
}

function resetDirectoryFilters() {
  directoryFilters = { query: "", generation: "all", gender: "all", birthdayMonth: "all", branch: "all", status: "all", sort: "generation" };
  if (directorySearchInput) directorySearchInput.value = "";
  if (directoryGenerationSelect) directoryGenerationSelect.value = "all";
  if (directoryGenderSelect) directoryGenderSelect.value = "all";
  if (directoryBirthdayMonthSelect) directoryBirthdayMonthSelect.value = "all";
  if (directoryBranchSelect) directoryBranchSelect.value = "all";
  if (directoryStatusSelect) directoryStatusSelect.value = "all";
  if (directorySortSelect) directorySortSelect.value = "generation";
  renderDirectoryPage();
}

function getPersonDepth(personId) {
  const node = nodesList.find((item) => {
    if (item.type === "person") return item.personId === personId;
    if (item.type === "union") return item.partner1 === personId || item.partner2 === personId;
    return false;
  });
  return node?.depth || "";
}

function getFamilyBranchColor(person, depth = "") {
  const branchKey = person?.branchId || "root";
  if (branchKey === "root") return branchPalette[0] || generationColor(Number(depth) || 1);
  const branchKeys = [...new Set((treeData?.people || [])
    .map((member) => member.branchId || "root")
    .filter((key) => key !== "root"))].sort();
  const branchIndex = Math.max(0, branchKeys.indexOf(branchKey));
  return branchPalette[(branchIndex + 1) % branchPalette.length] || generationColor(Number(depth) || 1);
}

function renderDirectoryPage() {
  if (!directoryList || !directorySummary || !treeData?.people) return;
  const t = i18n[lang] || i18n.ms;
  populateDirectoryFilters();
  updateDirectoryMoreState();
  const queryTerms = expandSearchTerms(directoryFilters.query || "");
  const generation = directoryFilters.generation || "all";
  const gender = directoryFilters.gender || "all";
  const birthdayMonth = directoryFilters.birthdayMonth || "all";
  const branch = directoryFilters.branch || "all";
  const status = directoryFilters.status || "all";
  const sort = directoryFilters.sort || "generation";
  const people = treeData.people
    .map((person) => {
      const birthDate = parseDateValue(person.birth);
      return {
        person,
        depth: getPersonDepth(person.id),
        gender: getPersonGender(person),
        status: getPersonStatus(person),
        branchId: person.branchId || "root",
        birthDate,
        birthMonth: birthDate ? birthDate.getMonth() : "",
        incomplete: isPersonDataIncomplete(person)
      };
    })
    .filter((entry) => {
      if (queryTerms.length && !queryTerms.some((term) => getPersonSearchText(entry.person).includes(term))) return false;
      if (generation !== "all" && String(entry.depth) !== generation) return false;
      if (gender !== "all" && entry.gender !== gender) return false;
      if (birthdayMonth !== "all" && String(entry.birthMonth) !== birthdayMonth) return false;
      if (branch !== "all" && entry.branchId !== branch) return false;
      if (status === "incomplete" && !entry.incomplete) return false;
      if (status !== "all" && status !== "incomplete" && entry.status !== status) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "name") {
        return formatDisplayName(a.person.name).localeCompare(formatDisplayName(b.person.name), lang === "en" ? "en" : "ms");
      }
      if (sort === "age") {
        const aYear = parseYear(a.person.birth) || 9999;
        const bYear = parseYear(b.person.birth) || 9999;
        if (aYear !== bYear) return aYear - bYear;
      }
      if (sort === "birthday") {
        const aMonth = a.birthMonth === "" ? 99 : a.birthMonth;
        const bMonth = b.birthMonth === "" ? 99 : b.birthMonth;
        if (aMonth !== bMonth) return aMonth - bMonth;
        const aDay = a.birthDate ? a.birthDate.getDate() : 99;
        const bDay = b.birthDate ? b.birthDate.getDate() : 99;
        if (aDay !== bDay) return aDay - bDay;
      }
      const depthDiff = Number(a.depth || 999) - Number(b.depth || 999);
      if (depthDiff !== 0) return depthDiff;
      return formatDisplayName(a.person.name).localeCompare(formatDisplayName(b.person.name), lang === "en" ? "en" : "ms");
    });

  directorySummary.textContent = formatText(t.directorySummary, { count: people.length });
  directoryList.classList.toggle("is-list-view", directoryLayout === "list");
  if (directoryLayoutToggle) {
    directoryLayoutToggle.textContent = directoryLayout === "grid" ? t.directoryListView : t.directoryGridView;
    directoryLayoutToggle.setAttribute("aria-pressed", directoryLayout === "list" ? "true" : "false");
  }
  updateDirectoryActiveFilters();
  if (!people.length) {
    directoryList.innerHTML = `
      <div class="directory-empty">
        <strong>${escapeHtml(t.searchNone)}</strong>
        <button class="btn ghost small" type="button" data-directory-action="reset">${escapeHtml(t.timelineResetAll)}</button>
      </div>
    `;
    bindDirectoryActions(directoryList);
    return;
  }
  directoryList.innerHTML = people.map(({ person, depth, gender }) => {
    const shortName = getShortDisplayName(person.name);
    const fullName = formatDisplayName(person.name);
    const branchColor = getFamilyBranchColor(person, depth);
    const birthDate = parseDateValue(person.birth);
    const age = birthDate && !person.death ? calcAge(birthDate) : null;
    const badges = [
      depth ? `${t.legendGeneration} ${depth}` : "",
      gender === "male" ? t.genderMale : gender === "female" ? t.genderFemale : "",
      person.birth ? `${t.modalBirth}: ${formatDateDisplay(person.birth)}` : "",
      age !== null ? `${t.ageLabel}: ${age}` : "",
      person.relation || "",
      getBranchName(person.branchId),
      getPersonStatus(person) === "deceased" ? t.directoryDeceased : t.directoryLiving
    ].filter(Boolean);
    return `
      <article class="directory-card" style="--branch-color: ${escapeHtml(branchColor)}">
        <button class="directory-person" type="button" data-person-link="${escapeHtml(person.id)}">
          <span class="directory-avatar">${escapeHtml(initials(shortName))}</span>
          <span class="directory-main">
            <strong>${escapeHtml(fullName || shortName)}</strong>
            ${shortName && fullName !== shortName ? `<small>${escapeHtml(shortName)}</small>` : ""}
            ${person.nickname && person.nickname !== shortName ? `<small>${escapeHtml(person.nickname)}</small>` : ""}
            <span class="directory-badges">
              ${badges.map((badge) => `<span class="directory-badge">${escapeHtml(badge)}</span>`).join("")}
            </span>
          </span>
        </button>
        <div class="directory-card-actions">
          <button class="btn ghost small" type="button" data-directory-action="profile" data-person-id="${escapeHtml(person.id)}" title="${escapeHtml(t.directoryProfile)}"><i data-lucide="contact-round"></i><span>${escapeHtml(t.directoryProfile)}</span></button>
          <button class="btn ghost small" type="button" data-directory-action="focus" data-person-id="${escapeHtml(person.id)}" title="${escapeHtml(t.profileFocusTree)}"><i data-lucide="scan-search"></i><span>${escapeHtml(t.profileFocusTreeShort)}</span></button>
          <button class="btn small" type="button" data-directory-action="family" data-person-id="${escapeHtml(person.id)}" title="${escapeHtml(t.profileFamilyView)}"><i data-lucide="network"></i><span>${escapeHtml(t.profileFamilyShort)}</span></button>
        </div>
      </article>
    `;
  }).join("");
  bindPersonLinkClicks(directoryList);
  bindDirectoryActions(directoryList);
  refreshIcons(directoryList);
}

function parseYear(value) {
  if (!value) return null;
  const match = String(value).match(/(\d{4})/);
  return match ? Number(match[1]) : null;
}

function parseDateValue(value) {
  if (!value) return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  const str = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  const dmMatch = str.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
  if (dmMatch) {
    const d = Number(dmMatch[1]);
    const m = Number(dmMatch[2]);
    const y = Number(dmMatch[3]);
    return new Date(y, m - 1, d);
  }
  if (/^\d{4}$/.test(str)) {
    return new Date(Number(str), 0, 1);
  }
  const dt = new Date(str);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

function getMonthLabels() {
  const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return lang === "en" ? monthsEn : monthsMs;
}

function getBirthdayEntries() {
  if (!treeData?.people) return [];
  return treeData.people
    .map((person) => {
      const birthDate = parseDateValue(person.birth);
      if (!birthDate) return null;
      return {
        person,
        month: birthDate.getMonth(),
        day: birthDate.getDate(),
        date: birthDate
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.month - b.month || a.day - b.day || formatDisplayName(a.person.name).localeCompare(formatDisplayName(b.person.name)));
}

function formatBirthdayDate(entry) {
  const months = getMonthLabels();
  return `${entry.day} ${months[entry.month]}`;
}

function getNextBirthdayInfo(entry, today = new Date()) {
  if (!entry) return null;
  const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const next = new Date(todayMid.getFullYear(), entry.month, entry.day);
  if (next < todayMid) next.setFullYear(next.getFullYear() + 1);
  const diff = Math.round((next - todayMid) / 86400000);
  return { date: next, diff };
}

function formatBirthdayCountdown(entry, today = new Date()) {
  const info = getNextBirthdayInfo(entry, today);
  if (!info) return "";
  const nextAge = calcAge(entry.date, today);
  if (info.diff === 0) {
    return lang === "en" ? `today · turns ${nextAge}` : `hari ini · jadi ${nextAge} tahun`;
  }
  if (info.diff === 1) {
    return lang === "en" ? `tomorrow · turns ${nextAge}` : `esok · jadi ${nextAge} tahun`;
  }
  return lang === "en" ? `${info.diff} days left · turns ${nextAge}` : `${info.diff} hari lagi · jadi ${nextAge} tahun`;
}

function personCsvRow(person, extra = {}) {
  const depth = getPersonDepthMap().get(person.id) || "";
  const birthDate = parseDateValue(person.birth);
  const age = birthDate && !person.death ? calcAge(birthDate) : "";
  return {
    id: person.id,
    displayName: getShortDisplayName(person.name),
    fullName: formatDisplayName(person.name),
    relation: person.relation || "",
    generation: depth,
    gender: getPersonGender(person) || "",
    birth: formatDateDisplay(person.birth) || "",
    age,
    death: formatDateDisplay(person.death) || "",
    status: getPersonStatus(person),
    branch: getBranchName(person.branchId),
    note: person.note || "",
    ...extra
  };
}

function exportDirectoryCsv() {
  const headers = ["id", "displayName", "fullName", "relation", "generation", "gender", "birth", "age", "death", "status", "branch", "note"];
  const queryTerms = expandSearchTerms(directoryFilters.query || "");
  const rows = (treeData?.people || [])
    .filter((person) => !queryTerms.length || queryTerms.some((term) => getPersonSearchText(person).includes(term)))
    .map((person) => personCsvRow(person));
  downloadCsv("kami-tree-directory.csv", headers, rows);
}

function exportBirthdayCsv() {
  const headers = ["id", "displayName", "fullName", "birthday", "countdown", "age", "relation", "generation", "gender", "branch"];
  const rows = getBirthdayEntries().map((entry) => personCsvRow(entry.person, {
    birthday: formatBirthdayDate(entry),
    countdown: formatBirthdayCountdown(entry),
    age: calcAge(entry.date)
  }));
  downloadCsv("kami-tree-birthday.csv", headers, rows);
}

function exportBranchCsv() {
  const headers = ["id", "displayName", "fullName", "relation", "generation", "gender", "birth", "age", "death", "status", "branch", "note"];
  let people = treeData?.people || [];
  if (focusedBranchPersonId) {
    const ids = getFocusedFamilyIds(focusedBranchPersonId);
    people = people.filter((person) => ids.has(person.id));
  }
  downloadCsv("kami-tree-branch.csv", headers, people.map((person) => personCsvRow(person)));
}

function scrollToBirthdayDate(key) {
  if (!key) return;
  const target = birthdayCalendarView === "planner"
    ? birthdayPlanner?.querySelector(`[data-planner-date="${CSS.escape(key)}"]`)
    : birthdayCalendar?.querySelector(`[data-birthday-date="${CSS.escape(key)}"]`);
  target?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

function getNextBirthdayKey(entries, today = new Date()) {
  if (!entries.length) return null;
  const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let best = null;
  entries.forEach((entry) => {
    const next = new Date(todayMid.getFullYear(), entry.month, entry.day);
    if (next < todayMid) next.setFullYear(next.getFullYear() + 1);
    if (!best || next < best.date) {
      best = { date: next, key: `${entry.month}-${entry.day}` };
    }
  });
  return best?.key || null;
}

function syncAutoOpenBirthday(nextBirthdayKey) {
  if (autoOpenedBirthdayKey && autoOpenedBirthdayKey !== nextBirthdayKey) {
    openBirthdayDates.delete(autoOpenedBirthdayKey);
    autoOpenedBirthdayKey = "";
  }
  if (nextBirthdayKey && autoOpenedBirthdayKey !== nextBirthdayKey) {
    openBirthdayDates.add(nextBirthdayKey);
    autoOpenedBirthdayKey = nextBirthdayKey;
  }
}

function isBirthdayDateInRange(key, startKey, endKey) {
  if (!endKey) return false;
  const currentDay = birthdayKeyToDayOfYear(key);
  const startDay = birthdayKeyToDayOfYear(startKey);
  const endDay = birthdayKeyToDayOfYear(endKey);
  if (startDay <= endDay) {
    return currentDay >= startDay && currentDay <= endDay;
  }
  return currentDay >= startDay || currentDay <= endDay;
}

function birthdayKeyToDayOfYear(key) {
  const [month, day] = key.split("-").map(Number);
  return new Date(2024, month, day).getTime();
}

function formatDateDisplay(value) {
  if (!value) return "";
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const d = String(value.getDate()).padStart(2, "0");
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const y = value.getFullYear();
    return `${d}/${m}/${y}`;
  }
  const str = String(value).trim();
  if (!str) return "";
  if (/^\d{4}$/.test(str)) return str;
  const parsed = parseDateValue(str);
  if (parsed) {
    const d = String(parsed.getDate()).padStart(2, "0");
    const m = String(parsed.getMonth() + 1).padStart(2, "0");
    const y = parsed.getFullYear();
    return `${d}/${m}/${y}`;
  }
  return str;
}

function splitNameByBin(fullName) {
  const name = String(fullName || "").trim();
  if (!name) return { first: "", last: "" };
  const parts = name.split(/\s+/);
  const idx = parts.findIndex((p) => /^(bin|binti|bt|bte|ibn)$/i.test(p.replace(/\./g, "")));
  if (idx > 0 && idx < parts.length - 1) {
    return {
      first: parts.slice(0, idx).join(" "),
      last: parts.slice(idx + 1).join(" ")
    };
  }
  return {
    first: parts[0],
    last: parts.slice(1).join(" ")
  };
}

function getShortDisplayName(value) {
  const displayName = formatDisplayName(value);
  if (!displayName) return "";
  const split = splitNameByBin(displayName);
  return split.first || displayName;
}

function detectGenderFromName(fullName) {
  const name = String(fullName || "").toLowerCase();
  if (name.includes(" binti ") || name.includes(" bt ")) return "female";
  if (name.includes(" bin ")) return "male";
  return "";
}

function getPersonGender(person) {
  return person?.gender && person.gender !== "unknown" ? person.gender : detectGenderFromName(person?.name);
}

function getGenderLabel(person) {
  const t = i18n[lang] || i18n.ms;
  const gender = getPersonGender(person);
  if (gender === "male") return t.genderMale;
  if (gender === "female") return t.genderFemale;
  return t.genderUnknown;
}

function getPersonStatus(person) {
  if (!person) return "unknown";
  if (person.status) return person.status;
  return person.death ? "deceased" : "living";
}

function isPersonDataIncomplete(person) {
  if (!person) return true;
  return !person.birth || !person.nickname || !person.gender || person.gender === "unknown" || !person.branchId || !person.status;
}

function getBranchName(branchId) {
  const t = i18n[lang] || i18n.ms;
  if (!branchId || branchId === "root") return t.directoryRootBranch;
  const person = peopleById.get(branchId);
  if (!person) return branchId;
  return formatText(t.directoryBranchLabel, { name: formatDisplayName(person.nickname || person.name) });
}

function isPartnered(personId) {
  if (!treeData?.unions) return false;
  return treeData.unions.some((u) => u.partner1 === personId || u.partner2 === personId);
}

function localizeTagText(text, langCode) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  if (langCode !== "en") return raw;
  const map = {
    "anak sulung": "First child",
    "anak pertama": "First child",
    "anak kedua": "Second child",
    "anak ketiga": "Third child",
    "anak keempat": "Fourth child",
    "anak kelima": "Fifth child",
    "anak keenam": "Sixth child",
    "anak ketujuh": "Seventh child",
    "anak kelapan": "Eighth child",
    "anak kesembilan": "Ninth child",
    "anak kesepuluh": "Tenth child",
    "cucu": "Grandchild",
    "cicit": "Great-grandchild",
    "menantu": "In-law",
    "tok": "Grandmother",
    "wan": "Grandfather",
    "isteri": "Wife",
    "suami": "Husband"
  };
  const lower = raw.toLowerCase();
  if (map[lower]) return map[lower];
  const match = lower.match(/^anak ke-(\d+)$/);
  if (match) return `Child #${match[1]}`;
  return raw;
}

function calcAge(birthDate, refDate = new Date()) {
  if (!birthDate) return null;
  const age = refDate.getFullYear() - birthDate.getFullYear();
  return age >= 0 ? age : null;
}

function generationColor(depth) {
  const index = (depth - 1) % branchPalette.length;
  return branchPalette[index];
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatDisplayName(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const isAllUpper = raw === raw.toUpperCase();
  if (!isAllUpper) return raw;
  return raw
    .toLowerCase()
    .split(/\s+/)
    .map((part) => {
      if (!part) return "";
      if (part === "bin" || part === "binti" || part === "bt") return part;
      return part
        .split("-")
        .map((chunk) => (chunk ? chunk[0].toUpperCase() + chunk.slice(1) : ""))
        .join("-");
    })
    .join(" ");
}

function formatDates(birth, death) {
  const t = i18n[lang] || i18n.ms;
  if (!birth && !death) return t.datesUnknown;
  if (birth && death) return `${formatDateDisplay(birth)} - ${formatDateDisplay(death)}`;
  if (birth) {
    const birthDate = parseDateValue(birth);
    const age = !death ? calcAge(birthDate) : null;
    const ageText = age !== null ? ` (${t.ageLabel}: ${age})` : "";
    return `${t.bornPrefix}${formatDateDisplay(birth)}${ageText}`;
  }
  return `${t.diedPrefix}${formatDateDisplay(death)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function uniquePeople(ids) {
  const seen = new Set();
  return ids
    .filter(Boolean)
    .filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    })
    .map((id) => peopleById.get(id))
    .filter(Boolean);
}

function getParentUnion(personId) {
  if (!treeData?.unions) return null;
  return treeData.unions.find((union) => (union.children || []).includes(personId)) || null;
}

function getIndividualFamily(personId) {
  const parentUnion = getParentUnion(personId);
  const parentIds = parentUnion ? [parentUnion.partner1, parentUnion.partner2].filter(Boolean) : [];
  const siblingIds = parentUnion ? (parentUnion.children || []).filter((id) => id !== personId) : [];
  const grandparentIds = [];

  parentIds.forEach((parentId) => {
    const grandUnion = getParentUnion(parentId);
    if (!grandUnion) return;
    if (grandUnion.partner1) grandparentIds.push(grandUnion.partner1);
    if (grandUnion.partner2) grandparentIds.push(grandUnion.partner2);
  });

  const greatGrandparentIds = [];
  grandparentIds.forEach((grandparentId) => {
    const greatGrandUnion = getParentUnion(grandparentId);
    if (!greatGrandUnion) return;
    if (greatGrandUnion.partner1) greatGrandparentIds.push(greatGrandUnion.partner1);
    if (greatGrandUnion.partner2) greatGrandparentIds.push(greatGrandUnion.partner2);
  });

  const spouseIds = [];
  const childIds = [];
  (treeData?.unions || []).forEach((union) => {
    if (union.partner1 !== personId && union.partner2 !== personId) return;
    if (union.partner1 && union.partner1 !== personId) spouseIds.push(union.partner1);
    if (union.partner2 && union.partner2 !== personId) spouseIds.push(union.partner2);
    (union.children || []).forEach((childId) => childIds.push(childId));
  });

  const grandchildIds = childIds.flatMap((childId) => getChildIds(childId));
  const greatGrandchildIds = grandchildIds.flatMap((grandchildId) => getChildIds(grandchildId));

  return {
    greatGrandparents: uniquePeople(greatGrandparentIds),
    grandparents: uniquePeople(grandparentIds),
    parents: uniquePeople(parentIds),
    siblings: uniquePeople(siblingIds),
    spouses: uniquePeople(spouseIds),
    children: uniquePeople(childIds),
    grandchildren: uniquePeople(grandchildIds),
    greatGrandchildren: uniquePeople(greatGrandchildIds)
  };
}

function getFocusedFamilyIds(personId) {
  const family = getIndividualFamily(personId);
  return new Set([
    personId,
    ...family.grandparents.map((person) => person.id),
    ...family.parents.map((person) => person.id),
    ...family.siblings.map((person) => person.id),
    ...family.spouses.map((person) => person.id),
    ...family.children.map((person) => person.id)
  ].filter(Boolean));
}

function getDescendantIds(personId) {
  const result = new Set();
  const queue = [...getChildIds(personId)];
  while (queue.length) {
    const id = queue.shift();
    if (!id || result.has(id)) continue;
    result.add(id);
    queue.push(...getChildIds(id));
  }
  return [...result];
}

function getFamilyCountSummary(personId) {
  const childIds = new Set(getChildIds(personId).filter((id) => peopleById.has(id)));
  const grandchildIds = new Set();
  const greatGrandchildIds = new Set();
  const inlawIds = new Set();

  childIds.forEach((childId) => {
    getChildIds(childId).forEach((grandchildId) => {
      if (peopleById.has(grandchildId)) grandchildIds.add(grandchildId);
    });
  });

  grandchildIds.forEach((grandchildId) => {
    getChildIds(grandchildId).forEach((greatGrandchildId) => {
      if (peopleById.has(greatGrandchildId)) greatGrandchildIds.add(greatGrandchildId);
    });
  });

  (treeData?.unions || []).forEach((union) => {
    const partner1IsChild = childIds.has(union.partner1);
    const partner2IsChild = childIds.has(union.partner2);
    if (partner1IsChild && union.partner2 && peopleById.has(union.partner2)) inlawIds.add(union.partner2);
    if (partner2IsChild && union.partner1 && peopleById.has(union.partner1)) inlawIds.add(union.partner1);
  });

  childIds.forEach((childId) => inlawIds.delete(childId));

  return {
    children: childIds.size,
    grandchildren: grandchildIds.size,
    greatGrandchildren: greatGrandchildIds.size,
    inlaws: inlawIds.size
  };
}

function renderFamilyCountSummary(person) {
  const t = i18n[lang] || i18n.ms;
  const stats = getFamilyCountSummary(person.id);
  const items = [
    ["children", t.profileChildrenCount],
    ["grandchildren", t.profileGrandchildrenCount],
    ["greatGrandchildren", t.profileGreatGrandchildrenCount],
    ["inlaws", t.profileInlawsCount]
  ];

  return `
    <section class="profile-family-stats" aria-label="${escapeHtml(t.profileFamilyStats)}">
      <strong>${escapeHtml(t.profileFamilyStats)}</strong>
      <div>
        ${items.map(([key, label]) => `
          <span>
            <b>${stats[key] || "-"}</b>
            ${escapeHtml(label)}
          </span>
        `).join("")}
      </div>
    </section>
  `;
}

function getQuickFamilyIds(personId, mode) {
  if (!personId || !peopleById.has(personId)) return new Set();
  const family = getIndividualFamily(personId);
  if (mode === "parents") {
    return new Set([personId, ...family.parents.map((person) => person.id)]);
  }
  if (mode === "siblings") {
    return new Set([personId, ...family.parents.map((person) => person.id), ...family.siblings.map((person) => person.id)]);
  }
  if (mode === "descendants") {
    return new Set([personId, ...getDescendantIds(personId)]);
  }
  if (mode === "close") {
    return getFocusedFamilyIds(personId);
  }
  return new Set();
}

function clearQuickFamilyFilter(render = true) {
  activeQuickFamilyFilter = "";
  quickFamilyPeople.clear();
  updateQuickFamilyFilterBar();
  if (render) {
    renderScene();
    applyZoom();
  }
}

function setQuickFamilyFilter(mode) {
  if (!selectedPersonId || !peopleById.has(selectedPersonId)) return;
  if (mode === "clear") {
    clearQuickFamilyFilter();
    return;
  }
  activeQuickFamilyFilter = mode;
  quickFamilyPeople = getQuickFamilyIds(selectedPersonId, mode);
  hiddenGenerations.clear();
  branchFilterValue = "all";
  updateQuickFamilyFilterBar();
  renderScene();
  applyZoom();
  focusPerson(selectedPersonId, false, true);
}

function setFocusedBranch(personId, openProfile = true) {
  const person = peopleById.get(personId);
  if (!person) return;
  clearQuickFamilyFilter(false);
  focusedBranchPersonId = personId;
  focusedBranchPeople = getFocusedFamilyIds(personId);
  hiddenGenerations.clear();
  branchFilterValue = "all";
  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    updateViewSwitch();
  }
  renderScene();
  applyZoom();
  updateFocusedBranchBar();
  focusPerson(personId, openProfile, true);
}

function clearFocusedBranch(render = true) {
  focusedBranchPersonId = "";
  focusedBranchPeople.clear();
  updateFocusedBranchBar();
  if (render) {
    renderScene();
    applyZoom();
  }
}

function updateQuickFamilyFilterBar() {
  if (!quickFamilyFilter) return;
  const person = peopleById.get(selectedPersonId);
  quickFamilyFilter.hidden = !person || viewMode !== "tree";
  if (person && quickFamilyLabel) {
    const t = i18n[lang] || i18n.ms;
    quickFamilyLabel.textContent = `${t.quickFamilyLabel}: ${formatDisplayName(person.name)}`;
  }
  quickFamilyFilter.querySelectorAll("[data-quick-family]").forEach((btn) => {
    btn.classList.toggle("is-active", activeQuickFamilyFilter && btn.dataset.quickFamily === activeQuickFamilyFilter);
  });
}

function updateFocusedBranchBar() {
  if (!focusedBranchBar) return;
  const person = peopleById.get(focusedBranchPersonId);
  focusedBranchBar.hidden = !person;
  if (person && focusedBranchLabel) {
    const t = i18n[lang] || i18n.ms;
    focusedBranchLabel.textContent = formatText(t.focusedBranchActive, { name: formatDisplayName(person.name) });
  }
}

function renderPersonChips(people) {
  const t = i18n[lang] || i18n.ms;
  if (!people.length) return `<span class="lineage-empty">${escapeHtml(t.lineageNone)}</span>`;
  return people.map((person) => `
    <button class="lineage-chip" type="button" data-person-link="${escapeHtml(person.id)}">
      <span>${escapeHtml(initials(getShortDisplayName(person.name)))}</span>
      ${escapeHtml(getShortDisplayName(person.name))}
    </button>
  `).join("");
}

function getAncestorLevels(personId) {
  const levels = [];
  let currentIds = [personId];
  const seen = new Set([personId]);
  let guard = 0;
  while (guard < 8) {
    guard += 1;
    const parentIds = [...new Set(currentIds.flatMap((id) => getParentIds(id)))].filter((id) => !seen.has(id));
    if (!parentIds.length) break;
    parentIds.forEach((id) => seen.add(id));
    levels.unshift(parentIds);
    currentIds = parentIds;
  }
  return levels;
}

function renderLineageBreadcrumb(person) {
  const t = i18n[lang] || i18n.ms;
  const ancestorLevels = getAncestorLevels(person.id);
  const groups = [
    ...ancestorLevels.map((ids) => ids.map((id) => peopleById.get(id)).filter(Boolean)),
    [person]
  ].filter((group) => group.length);
  if (groups.length <= 1) return "";
  const groupHtml = groups.map((group) => `
    <span class="breadcrumb-group">
      ${group.map((member) => `
        <button class="breadcrumb-chip" type="button" data-person-link="${escapeHtml(member.id)}">
          ${escapeHtml(formatDisplayName(member.nickname || member.name))}
        </button>
      `).join('<span class="breadcrumb-plus">+</span>')}
    </span>
  `).join('<span class="breadcrumb-separator">&gt;</span>');
  return `
    <section class="lineage-breadcrumb" aria-label="${escapeHtml(t.lineageBreadcrumb)}">
      <strong>${escapeHtml(t.lineageBreadcrumb)}</strong>
      <div>${groupHtml}</div>
    </section>
  `;
}

function renderIndividualLineage(person) {
  const t = i18n[lang] || i18n.ms;
  const family = getIndividualFamily(person.id);
  return `
    <section class="lineage-section">
      <h3>${escapeHtml(t.lineageTitle)}</h3>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageGreatGrandparents)}</strong>
        <div class="lineage-list">${renderPersonChips(family.greatGrandparents)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageGrandparents)}</strong>
        <div class="lineage-list">${renderPersonChips(family.grandparents)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageParents)}</strong>
        <div class="lineage-list">${renderPersonChips(family.parents)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageSiblings)}</strong>
        <div class="lineage-list">${renderPersonChips(family.siblings)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageSpouses)}</strong>
        <div class="lineage-list">${renderPersonChips(family.spouses)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageChildren)}</strong>
        <div class="lineage-list">${renderPersonChips(family.children)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageGrandchildren)}</strong>
        <div class="lineage-list">${renderPersonChips(family.grandchildren)}</div>
      </div>
      <div class="lineage-row">
        <strong>${escapeHtml(t.lineageGreatGrandchildren)}</strong>
        <div class="lineage-list">${renderPersonChips(family.greatGrandchildren)}</div>
      </div>
    </section>
  `;
}

function renderProfileActions(person, { fullPage = false } = {}) {
  const t = i18n[lang] || i18n.ms;
  const id = escapeHtml(person.id);
  const isPinned = favoritePersonIds.has(person.id);
  const primaryActions = fullPage
    ? `
        <button class="btn ghost small" type="button" data-profile-action="home" data-person-id="${id}"><i data-lucide="home"></i><span>${escapeHtml(t.profileHome)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="focus" data-person-id="${id}" title="${escapeHtml(t.profileFocusTree)}"><i data-lucide="scan-search"></i><span>${escapeHtml(t.profileFocusTreeShort)}</span></button>
        <button class="btn small" type="button" data-profile-action="family" data-person-id="${id}" title="${escapeHtml(t.profileFamilyView)}"><i data-lucide="network"></i><span>${escapeHtml(t.profileFamilyShort)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="birthday" data-person-id="${id}"><i data-lucide="cake-slice"></i><span>${escapeHtml(t.profileBirthday)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="copy" data-person-id="${id}" title="${escapeHtml(t.profileCopyLink)}"><i data-lucide="copy"></i><span>${escapeHtml(t.profileCopyShort)}</span></button>
      `
    : `
        <button class="btn ghost small" type="button" data-profile-action="profile" data-person-id="${id}"><i data-lucide="contact-round"></i><span>${escapeHtml(t.profileOpen)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="focus" data-person-id="${id}" title="${escapeHtml(t.profileFocusTree)}"><i data-lucide="scan-search"></i><span>${escapeHtml(t.profileFocusTreeShort)}</span></button>
        <button class="btn small" type="button" data-profile-action="family" data-person-id="${id}" title="${escapeHtml(t.profileFamilyView)}"><i data-lucide="network"></i><span>${escapeHtml(t.profileFamilyShort)}</span></button>
      `;
  return `
    <div class="profile-actions${fullPage ? " profile-actions--page" : ""}" data-profile-person="${id}">
      <div class="profile-primary-actions">
        ${primaryActions}
      </div>
      <div class="profile-secondary-actions">
        <button class="btn ghost small" type="button" data-profile-action="pin" data-person-id="${id}" title="${escapeHtml(isPinned ? t.profilePinned : t.profilePin)}"><i data-lucide="pin"></i><span>${escapeHtml(isPinned ? t.profilePinned : t.profilePin)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="relationship" data-person-id="${id}" title="${escapeHtml(t.profileFindRelation)}"><i data-lucide="route"></i><span>${escapeHtml(t.profileRelationShort)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="share" data-person-id="${id}" title="${escapeHtml(t.profileShareText)}"><i data-lucide="share-2"></i><span>${escapeHtml(t.profileShareShort)}</span></button>
        <button class="btn ghost small" type="button" data-profile-action="print" data-person-id="${id}" title="${escapeHtml(t.profilePrint)}"><i data-lucide="printer"></i><span>${escapeHtml(t.profilePrintShort)}</span></button>
      </div>
    </div>
  `;
}

function getProfileShareText(person) {
  const t = i18n[lang] || i18n.ms;
  const birthDate = parseDateValue(person.birth);
  const age = birthDate && !person.death ? calcAge(birthDate) : "";
  return [
    formatDisplayName(person.name),
    person.relation ? `${t.modalRelation}: ${person.relation}` : "",
    person.birth ? `${t.modalBirth}: ${formatDateDisplay(person.birth)}` : "",
    age !== "" ? `${t.ageLabel}: ${age}` : "",
    person.death ? `${t.modalDeath}: ${formatDateDisplay(person.death)}` : "",
    person.note ? `${t.modalNote}: ${person.note}` : ""
  ].filter(Boolean).join("\n");
}

async function sharePersonProfile(person) {
  const text = getProfileShareText(person);
  if (navigator.share) {
    await navigator.share({ title: formatDisplayName(person.name), text });
    return;
  }
  await navigator.clipboard.writeText(text);
  alert(i18n[lang].profileLinkCopied);
}

function printPersonProfile(person) {
  const summary = getFamilyCountSummary(person.id);
  const html = `
    <!doctype html>
    <html>
    <head>
      <title>${escapeHtml(formatDisplayName(person.name))}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 32px; color: #1f2a24; }
        h1 { margin-bottom: 4px; }
        .meta { color: #56635d; margin-bottom: 24px; }
        .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .box { border: 1px solid #d8e5dd; border-radius: 14px; padding: 14px; }
        strong { display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1.4px; color: #4f8a6a; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(formatDisplayName(person.name))}</h1>
      <div class="meta">${escapeHtml(person.relation || "")}</div>
      <div class="grid">
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).modalBirth)}</strong>${escapeHtml(formatDateDisplay(person.birth) || "-")}</div>
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).modalDeath)}</strong>${escapeHtml(formatDateDisplay(person.death) || "-")}</div>
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).profileChildrenCount)}</strong>${summary.children || "-"}</div>
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).profileGrandchildrenCount)}</strong>${summary.grandchildren || "-"}</div>
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).profileGreatGrandchildrenCount)}</strong>${summary.greatGrandchildren || "-"}</div>
        <div class="box"><strong>${escapeHtml((i18n[lang] || i18n.ms).profileInlawsCount)}</strong>${summary.inlaws || "-"}</div>
      </div>
      <p>${escapeHtml(person.note || "")}</p>
    </body>
    </html>
  `;
  const printWindow = window.open("", "_blank", "width=800,height=900");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function bindProfileActionClicks(container) {
  if (!container) return;
  container.querySelectorAll("[data-profile-action]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const personId = btn.dataset.personId;
      const action = btn.dataset.profileAction;
      if (!personId || !action) return;
      if (action === "profile") {
        openProfilePage(personId, viewMode);
        return;
      }
      if (action === "home") {
        openHomeSurface();
        return;
      }
      if (action === "pin") {
        toggleFavoritePerson(personId);
        const person = peopleById.get(personId);
        if (person) {
          updateStoryPanel(person);
          if (modal?.classList.contains("active")) openModal(person);
        }
        return;
      }
      if (action === "focus") {
        if (viewMode === "profile") {
          navSurface = "tree";
          viewMode = "tree";
          applyViewMode();
          updateViewSwitch();
        }
        focusPerson(personId, false, true);
        return;
      }
      if (action === "relationship") {
        if (relationshipPersonA) relationshipPersonA.value = personId;
        if (relationshipPersonB && relationshipPersonB.value === personId) relationshipPersonB.value = "";
        if (viewMode !== "tree") {
          viewMode = "tree";
          applyViewMode();
          updateViewSwitch();
        }
        focusPerson(personId, false, true);
        relationshipPersonA?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (action === "family") {
        if (viewMode === "profile") {
          navSurface = "tree";
          viewMode = "tree";
          applyViewMode();
          updateViewSwitch();
        }
        setFocusedBranch(personId);
        return;
      }
      if (action === "birthday") {
        const person = peopleById.get(personId);
        const birth = parseDateValue(person?.birth);
        if (!birth) return;
        closeStoryPanel();
        navSurface = "birthday";
        birthdayCalendarView = "planner";
        birthdayPlannerMonth = birth.getMonth();
        viewMode = "birthday";
        applyViewMode();
        updateViewSwitch();
        savePrefs();
        updateUrlState();
        requestAnimationFrame(() => birthdayPlanner?.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
      if (action === "copy") {
        selectedPersonId = personId;
        updateUrlState();
        const t = i18n[lang] || i18n.ms;
        const url = window.location.href;
        try {
          await navigator.clipboard.writeText(url);
          alert(t.profileLinkCopied);
        } catch {
          alert(t.profileLinkCopyFail);
        }
      }
      if (action === "share") {
        const person = peopleById.get(personId);
        if (person) {
          try {
            await sharePersonProfile(person);
          } catch (err) {
            console.warn("Share failed", err);
          }
        }
      }
      if (action === "print") {
        const person = peopleById.get(personId);
        if (person) printPersonProfile(person);
      }
    });
  });
}

function renderProfileMemberCard(person, relationship = "") {
  const displayName = formatDisplayName(person.name);
  const birthYear = parseYear(person.birth);
  const age = !person.death ? calcAge(parseDateValue(person.birth)) : null;
  const yearsLabel = lang === "en" ? "years" : "tahun";
  const diedLabel = lang === "en" ? "Died" : "Meninggal";
  const meta = person.death
    ? `${diedLabel} ${formatDateDisplay(person.death)}`
    : birthYear ? `${birthYear}${age !== null ? ` · ${age} ${yearsLabel}` : ""}` : "";
  const relation = relationship || person.relation || "";
  const color = getFamilyBranchColor(person);
  return `
    <button class="profile-member-card" type="button" data-person-link="${escapeHtml(person.id)}" style="--member-branch: ${escapeHtml(color)}">
      <span class="profile-member-avatar">${escapeHtml(initials(getShortDisplayName(displayName)))}</span>
      <span class="profile-member-copy">
        <strong>${escapeHtml(displayName)}</strong>
        <small>${escapeHtml([relation, meta].filter(Boolean).join(" · ") || "-")}</small>
      </span>
      <i data-lucide="arrow-up-right" aria-hidden="true"></i>
    </button>
  `;
}

function renderProfileFamilyGroup(title, people, relationship = "", collapsible = false) {
  if (!people.length) return "";
  if (collapsible) {
    return `
      <details class="profile-family-group profile-family-group--collapsible">
        <summary><span>${escapeHtml(title)}</span><span class="profile-family-group-count">${people.length}<i data-lucide="chevron-down"></i></span></summary>
        <div class="profile-member-grid">
          ${people.map((person) => renderProfileMemberCard(person, relationship)).join("")}
        </div>
      </details>
    `;
  }
  return `
    <section class="profile-family-group">
      <h4>${escapeHtml(title)} <span>${people.length}</span></h4>
      <div class="profile-member-grid">
        ${people.map((person) => renderProfileMemberCard(person, relationship)).join("")}
      </div>
    </section>
  `;
}

function renderProfilePageActions(person) {
  const t = i18n[lang] || i18n.ms;
  const id = escapeHtml(person.id);
  const pinned = favoritePersonIds.has(person.id);
  return `
    <div class="profile-page-actions">
      <button class="btn profile-page-tree-action" type="button" data-profile-action="focus" data-person-id="${id}">
        <i data-lucide="scan-search"></i><span>${escapeHtml(t.profileViewTree)}</span>
      </button>
      <button class="btn ghost small" type="button" data-profile-action="birthday" data-person-id="${id}"><i data-lucide="cake-slice"></i><span>${escapeHtml(t.profileBirthday)}</span></button>
      <button class="btn ghost small" type="button" data-profile-action="copy" data-person-id="${id}"><i data-lucide="copy"></i><span>${escapeHtml(t.profileCopyShort)}</span></button>
      <button class="btn ghost small" type="button" data-profile-action="pin" data-person-id="${id}"><i data-lucide="pin"></i><span>${escapeHtml(pinned ? t.profilePinned : t.profilePin)}</span></button>
      <button class="btn ghost small" type="button" data-profile-action="relationship" data-person-id="${id}"><i data-lucide="route"></i><span>${escapeHtml(t.profileRelationShort)}</span></button>
      <button class="btn ghost small" type="button" data-profile-action="share" data-person-id="${id}"><i data-lucide="share-2"></i><span>${escapeHtml(t.profileShareShort)}</span></button>
      <button class="btn ghost small" type="button" data-profile-action="print" data-person-id="${id}"><i data-lucide="printer"></i><span>${escapeHtml(t.profilePrintShort)}</span></button>
    </div>
  `;
}

function renderProfilePage() {
  if (!profilePageContent) return;
  const person = peopleById.get(profilePagePersonId);
  if (!person) {
    profilePageContent.innerHTML = "";
    return;
  }
  const t = i18n[lang] || i18n.ms;
  const fullName = formatDisplayName(person.name);
  const displayName = getShortDisplayName(fullName);
  const profilePhoto = person.id === "p1" ? "IMG_7626.jpg" : (person.photo || "");
  const birthDate = parseDateValue(person.birth);
  const deathDate = parseDateValue(person.death);
  const age = birthDate ? calcAge(birthDate, deathDate || new Date()) : null;
  const statusText = person.death ? (lang === "en" ? "Deceased" : "Meninggal") : (lang === "en" ? "Living" : "Masih hidup");
  const family = getIndividualFamily(person.id);
  const stats = getFamilyCountSummary(person.id);
  const totalDescendants = stats.children + stats.grandchildren + stats.greatGrandchildren;
  const dateLine = person.birth && person.death
    ? formatText(t.profileBornDied, { birth: formatDateDisplay(person.birth), death: formatDateDisplay(person.death) })
    : person.birth
      ? formatText(t.profileBorn, { birth: formatDateDisplay(person.birth) })
      : person.death ? formatText(t.profileDied, { death: formatDateDisplay(person.death) }) : "";
  if (profilePageTitle) profilePageTitle.textContent = t.profilePageKicker;
  if (profilePageSubtitle) profilePageSubtitle.textContent = "";
  profilePageContent.innerHTML = `
    <section class="profile-identity" id="profile-overview">
      <div class="profile-identity-avatar${profilePhoto ? " has-profile-photo" : ""}"${profilePhoto ? ` role="button" tabindex="0" aria-label="Lihat gambar ${escapeHtml(displayName || fullName)}"` : ""}>
        ${profilePhoto ? `<img src="${escapeHtml(profilePhoto)}" alt="${escapeHtml(fullName || displayName)}" loading="lazy" />` : ""}
        <span>${escapeHtml(initials(displayName || fullName))}</span>
      </div>
      <div class="profile-identity-copy">
        <p class="kicker">${escapeHtml(t.profilePageKicker)}</p>
        <h1>${escapeHtml(fullName || displayName || t.profileOpen)}</h1>
        <p class="profile-identity-role">${escapeHtml(person.relation || "-")}</p>
        <p class="profile-identity-dates">${escapeHtml(dateLine || t.datesUnknown)}${age !== null ? ` · ${escapeHtml(formatText(t.profileLifespan, { age }))}` : ""}</p>
        <span class="profile-status ${person.death ? "is-deceased" : "is-living"}">${escapeHtml(statusText)}</span>
      </div>
    </section>
    <section class="profile-summary-strip" aria-label="${escapeHtml(t.profileFamilyStats)}">
      <div><strong>${stats.children || "-"}</strong><span>${escapeHtml(t.profileChildrenCount)}</span></div>
      <div><strong>${stats.grandchildren || "-"}</strong><span>${escapeHtml(t.profileGrandchildrenCount)}</span></div>
      <div><strong>${stats.greatGrandchildren || "-"}</strong><span>${escapeHtml(t.profileGreatGrandchildrenCount)}</span></div>
      <div><strong>${totalDescendants || "-"}</strong><span>${escapeHtml(t.profileTotalDescendants)}</span></div>
    </section>
    ${renderProfilePageActions(person)}
    <nav class="profile-section-nav" aria-label="${escapeHtml(t.profileOverview)}">
      <a href="#profile-overview">${escapeHtml(t.profileOverview)}</a>
      <a href="#profile-family">${escapeHtml(t.profileFamilySection)}</a>
      <a href="#profile-ancestors">${escapeHtml(t.profileAncestorsSection)}</a>
      <a href="#profile-descendants">${escapeHtml(t.profileDescendantsSection)}</a>
      <a href="#profile-information">${escapeHtml(t.profileInformationSection)}</a>
    </nav>
    <div class="profile-page-columns">
      <main class="profile-page-main">
        <section class="profile-content-section" id="profile-family">
          <div class="profile-section-heading"><p class="kicker">${escapeHtml(t.profileFamilySection)}</p><h2>${escapeHtml(t.profileFamilySection)}</h2></div>
          <div class="profile-family-groups">
            ${renderProfileFamilyGroup(t.profileSpouses, family.spouses)}
            ${renderProfileFamilyGroup(t.profileParents, family.parents)}
            ${renderProfileFamilyGroup(t.profileSiblings, family.siblings)}
            ${renderProfileFamilyGroup(t.profileChildren, family.children)}
            ${renderProfileFamilyGroup(t.profileGrandchildrenCount, family.grandchildren, t.profileChildren, true)}
            ${renderProfileFamilyGroup(t.profileGreatGrandchildrenCount, family.greatGrandchildren, t.profileGrandchildrenCount, true)}
          </div>
          ${!family.spouses.length && !family.parents.length && !family.siblings.length && !family.children.length ? `<p class="profile-empty-state">${escapeHtml(t.profileNoFamily)}</p>` : ""}
        </section>
        <section class="profile-content-section" id="profile-ancestors">
          <div class="profile-section-heading"><p class="kicker">${escapeHtml(t.profileAncestorsSection)}</p><h2>${escapeHtml(t.profileAncestorsSection)}</h2></div>
          <div class="profile-family-groups">
            ${renderProfileFamilyGroup(t.profileParents, family.parents)}
            ${renderProfileFamilyGroup(t.profileGrandparents, family.grandparents)}
            ${renderProfileFamilyGroup(t.profileGreatGrandparents, family.greatGrandparents)}
          </div>
          ${!family.parents.length && !family.grandparents.length && !family.greatGrandparents.length ? `<p class="profile-empty-state">${escapeHtml(t.profileNoAncestors)}</p>` : ""}
        </section>
        <section class="profile-content-section" id="profile-descendants">
          <div class="profile-section-heading"><p class="kicker">${escapeHtml(t.profileDescendantsSection)}</p><h2>${escapeHtml(t.profileDescendantsSection)}</h2></div>
          <div class="profile-descendant-branches">
            ${family.children.map((child) => {
              const children = uniquePeople(getChildIds(child.id));
              const further = children.reduce((sum, member) => sum + getDescendantIds(member.id).length, 0);
              return `<details class="profile-descendant-branch"><summary><span class="profile-branch-summary"><strong>${escapeHtml(formatDisplayName(child.name))}</strong><small>${children.length} ${escapeHtml(t.profileBranchDescendants)}${further ? ` · ${further} ${escapeHtml(t.profileFurtherDescendants)}` : ""}</small></span><i data-lucide="chevron-down"></i></summary><div class="profile-branch-content"><div class="profile-member-grid">${children.map((member) => renderProfileMemberCard(member, t.profileChildren)).join("")}</div></div></details>`;
            }).join("")}
          </div>
          ${!family.children.length ? `<p class="profile-empty-state">${escapeHtml(t.profileNoDescendants)}</p>` : ""}
        </section>
      </main>
      <aside class="profile-page-sidebar">
        <section class="profile-information-panel" id="profile-information">
          <div class="profile-section-heading"><p class="kicker">${escapeHtml(t.profileInformationSection)}</p><h2>${escapeHtml(t.profileInformationSection)}</h2></div>
          <dl class="profile-definition-list">
            <div><dt>${escapeHtml(t.modalFullName)}</dt><dd>${escapeHtml(fullName || "-")}</dd></div>
            <div><dt>${escapeHtml(t.firstNameLabel)}</dt><dd>${escapeHtml(displayName || "-")}</dd></div>
            <div><dt>${escapeHtml(t.genderLabel)}</dt><dd>${escapeHtml(getGenderLabel(person))}</dd></div>
            <div><dt>${escapeHtml(t.modalRelation)}</dt><dd>${escapeHtml(person.relation || "-")}</dd></div>
            <div><dt>${escapeHtml(t.modalBirth)}</dt><dd>${escapeHtml(formatDateDisplay(person.birth) || "-")}</dd></div>
            ${person.death ? `<div><dt>${escapeHtml(t.modalDeath)}</dt><dd>${escapeHtml(formatDateDisplay(person.death))}</dd></div>` : ""}
            <div><dt>Status</dt><dd>${escapeHtml(statusText)}</dd></div>
            ${age !== null ? `<div><dt>${escapeHtml(t.ageLabel)}</dt><dd>${age} ${escapeHtml(lang === "en" ? "years" : "tahun")}</dd></div>` : ""}
          </dl>
        </section>
        ${renderLineageBreadcrumb(person)}
        ${person.note ? `<section class="profile-note-panel"><h2>${escapeHtml(t.modalNote)}</h2><p>${escapeHtml(person.note)}</p></section>` : ""}
        ${person.story ? `<section class="profile-note-panel"><h2>${escapeHtml(t.modalStory)}</h2><p>${escapeHtml(person.story)}</p></section>` : ""}
      </aside>
    </div>
  `;
  bindPersonLinkClicks(profilePageContent);
  bindProfileActionClicks(profilePageContent);
  const profilePhotoButton = profilePageContent.querySelector(".profile-identity-avatar.has-profile-photo");
  if (profilePhotoButton && profilePhoto) {
    const showPhoto = () => openProfilePhoto(profilePhoto, fullName || displayName);
    profilePhotoButton.addEventListener("click", showPhoto);
    profilePhotoButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showPhoto();
      }
    });
  }
  refreshIcons(profilePageContent);
}

function openProfilePage(personId, returnView = viewMode) {
  const person = peopleById.get(personId);
  if (!person) return;
  profilePagePersonId = personId;
  profilePageReturnView = returnView === "profile" ? "tree" : returnView;
  navSurface = profilePageReturnView === "tree" ? "tree" : profilePageReturnView;
  viewMode = "profile";
  applyViewMode();
  updateViewSwitch();
  updateUrlState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProfilePage() {
  const returnView = profilePageReturnView || "tree";
  const personId = profilePagePersonId;
  profilePagePersonId = "";
  navSurface = returnView === "tree" ? "tree" : returnView;
  viewMode = returnView;
  applyViewMode();
  updateViewSwitch();
  updateUrlState();
  if (returnView === "tree" && personId) {
    requestAnimationFrame(() => focusPerson(personId, true, true));
  }
}

if (profilePageBackBtn) {
  profilePageBackBtn.addEventListener("click", closeProfilePage);
}

function bindPersonLinkClicks(container) {
  if (!container) return;
  container.querySelectorAll("[data-person-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const personId = btn.dataset.personLink;
      if (personId) focusPerson(personId, true);
    });
  });
}

function bindDirectoryActions(container) {
  if (!container) return;
  container.querySelectorAll("[data-directory-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.directoryAction;
      const personId = btn.dataset.personId;
      if (action === "reset") {
        resetDirectoryFilters();
        return;
      }
      if (!personId) return;
      if (action === "profile") {
        openProfilePage(personId, "directory");
        return;
      }
      if (action === "focus") {
        focusPerson(personId, false);
      }
      if (action === "family") {
        setFocusedBranch(personId);
      }
    });
  });
}

function setStoryPanelOpen(isOpen) {
  if (!app) return;
  app.classList.toggle("story-open", isOpen);
  updateMiniToolbarVisibility();
}

function closeStoryPanel() {
  selectedPersonId = "";
  clearQuickFamilyFilter(false);
  clearSelectionHighlight();
  updateQuickFamilyFilterBar();
  if (panelEditForm) panelEditForm.hidden = true;
  if (storyPanel) storyPanel.hidden = true;
  setStoryPanelOpen(false);
}

function openModal(person) {
  const t = i18n[lang] || i18n.ms;
  if (!storyContent) return;
  addRecentPerson(person.id);
  if (storyPanel) storyPanel.hidden = false;
  setStoryPanelOpen(true);
  const birthDate = parseDateValue(person.birth);
  const age = !person.death ? calcAge(birthDate) : null;
  const ageText = age !== null ? ` (${t.ageLabel}: ${age})` : "";
  const displayName = formatDisplayName(person.name);
  const shortName = getShortDisplayName(displayName);
  const statusText = person.death
    ? (lang === "en" ? "Deceased" : "Meninggal")
    : (lang === "en" ? "Living" : "Masih hidup");
  storyTitle.textContent = formatDisplayName(person.name);
  storyContent.innerHTML = `
    <section class="profile-hero-card">
      <span class="profile-hero-avatar">${escapeHtml(initials(shortName || displayName))}</span>
      <div>
        <p>${escapeHtml(t.lineageTitle)}</p>
        <h3>${escapeHtml(shortName || displayName)}</h3>
        <span>${escapeHtml(person.relation || "-")}</span>
      </div>
    </section>
    <section class="profile-info-grid">
      <div class="profile-info-tile"><strong>${escapeHtml(t.genderLabel)}</strong><span>${escapeHtml(getGenderLabel(person))}</span></div>
      <div class="profile-info-tile"><strong>Status</strong><span>${escapeHtml(statusText)}</span></div>
      <div class="profile-info-tile"><strong>${escapeHtml(t.modalRelation)}</strong><span>${escapeHtml(person.relation || "-")}</span></div>
      <div class="profile-info-tile"><strong>${escapeHtml(t.modalBirth)}</strong><span>${escapeHtml(formatDateDisplay(person.birth) || "-")}${escapeHtml(ageText)}</span></div>
      <div class="profile-info-tile"><strong>${escapeHtml(t.modalDeath)}</strong><span>${escapeHtml(formatDateDisplay(person.death) || "-")}</span></div>
      <div class="profile-info-tile"><strong>${escapeHtml(t.modalNote)}</strong><span>${escapeHtml(person.note || "-")}</span></div>
    </section>
    ${person.story ? `<section class="profile-story-card"><strong>${escapeHtml(t.modalStory)}</strong><p>${escapeHtml(person.story)}</p></section>` : ""}
    ${renderFamilyCountSummary(person)}
    ${renderLineageBreadcrumb(person)}
    ${renderProfileActions(person)}
    ${renderIndividualLineage(person)}
  `;
  bindPersonLinkClicks(storyContent);
  bindProfileActionClicks(storyContent);
  refreshIcons(storyContent);

  if (panelEditForm) panelEditForm.hidden = true;
  if (panelEditBtn) panelEditBtn.hidden = false;

  if (panelEditName) panelEditName.value = person.name || "";
  if (panelEditFirst && panelEditLast) {
    const split = splitNameByBin(person.name || "");
    panelEditFirst.value = split.first || "";
    panelEditLast.value = split.last || "";
  }
  if (panelEditRelation) panelEditRelation.value = person.relation || "";
  if (panelEditBirth) panelEditBirth.value = person.birth || "";
  if (panelEditDeath) panelEditDeath.value = person.death || "";
  if (panelEditPhoto) panelEditPhoto.value = person.photo || "";
  if (panelEditNote) panelEditNote.value = person.note || "";
  if (panelEditStory) panelEditStory.value = person.story || "";
  const inferredGender = getPersonGender(person);
  panelGenderInputs.forEach((input) => {
    input.checked = inferredGender === input.value;
  });

  if (panelEditName) {
    panelEditName.oninput = () => {
      const split = splitNameByBin(panelEditName.value || "");
      if (panelEditFirst) panelEditFirst.value = split.first || "";
      if (panelEditLast) panelEditLast.value = split.last || "";
      const gender = detectGenderFromName(panelEditName.value);
      panelGenderInputs.forEach((input) => {
        input.checked = gender === input.value;
      });
    };
  }

  if (panelEditPhotoFile) {
    panelEditPhotoFile.onchange = async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        const dataUrl = await fileToDataUrl(file);
        panelEditPhoto.value = dataUrl;
      } finally {
        panelEditPhotoFile.value = "";
      }
    };
  }

  if (panelEditBtn) {
    panelEditBtn.onclick = () => {
      const pw = window.prompt("Masukkan kata laluan:");
      if (pw !== "1234") return;
      if (panelEditForm) panelEditForm.hidden = false;
    };
  }

  if (panelCloseBtn) {
    panelCloseBtn.onclick = closeStoryPanel;
    panelCloseBtn.addEventListener("touchstart", closeStoryPanel, { passive: true });
  }

  if (panelCancelBtn) {
    panelCancelBtn.onclick = () => {
      if (panelEditForm) panelEditForm.hidden = true;
    };
  }


  if (panelEditForm) {
    panelEditForm.onsubmit = (event) => {
      event.preventDefault();
      const fullName = panelEditName.value.trim();
      const split = splitNameByBin(fullName);
      person.firstName = split.first || "";
      person.lastName = split.last || "";
      person.name = fullName;
      person.relation = panelEditRelation.value.trim();
      person.birth = panelEditBirth.value.trim();
      person.death = panelEditDeath.value.trim();
      person.photo = panelEditPhoto.value.trim();
      person.note = panelEditNote.value.trim();
      person.story = panelEditStory.value.trim();
      person.gender = detectGenderFromName(person.name);
      storeData();
      rebuildFromData();
      if (panelEditForm) panelEditForm.hidden = true;
      openModal(person);
    };
  }
}

function updateStoryPanel(person) {
  if (storyTitle) storyTitle.textContent = formatDisplayName(person.name);
  if (storyBody) storyBody.textContent = person.story || person.note || i18n[lang].storyEmpty;
}

function openTimelineInlineDetail(person, itemEl) {
  if (!timelineList || !itemEl) return;
  const existing = timelineList.querySelector(".timeline-detail");
  if (existing) existing.remove();
  const t = i18n[lang] || i18n.ms;
  const birthDate = parseDateValue(person.birth);
  const age = !person.death ? calcAge(birthDate) : null;
  const ageText = age !== null ? `${t.ageLabel}: ${age}` : "";
  const detail = document.createElement("div");
  detail.className = "timeline-detail";
  detail.innerHTML = `
    <div class="timeline-detail-head">
      <div class="timeline-detail-title">${formatDisplayName(person.name)}</div>
      <button type="button" class="timeline-detail-close" aria-label="${t.modalClose}">×</button>
    </div>
    <div class="timeline-detail-grid">
      <div class="timeline-detail-row"><strong>${t.modalRelation}</strong><span>${person.relation || "-"}</span></div>
      <div class="timeline-detail-row">
        <strong>${t.modalBirth}</strong>
        <span>
          <div>${formatDateDisplay(person.birth) || "-"}</div>
          ${ageText ? `<div class="timeline-detail-age">${ageText}</div>` : ""}
        </span>
      </div>
      <div class="timeline-detail-row"><strong>${t.modalDeath}</strong><span>${formatDateDisplay(person.death) || "-"}</span></div>
      <div class="timeline-detail-row"><strong>${t.modalNote}</strong><span>${person.note || "-"}</span></div>
      <div class="timeline-detail-row"><strong>${t.modalStory}</strong><span>${person.story || "-"}</span></div>
      ${renderLineageBreadcrumb(person)}
      ${renderProfileActions(person)}
      ${renderIndividualLineage(person)}
    </div>
  `;
  const closeBtn = detail.querySelector(".timeline-detail-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      detail.remove();
    });
  }
  bindPersonLinkClicks(detail);
  bindProfileActionClicks(detail);
  itemEl.insertAdjacentElement("afterend", detail);
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

on(modal, "click", (event) => {
  if (!event.target.dataset.close) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

on(panelCloseBtn, "click", closeStoryPanel);
on(panelCloseBtn, "touchstart", closeStoryPanel, { passive: true });

function applyZoom() {
  if (!treeCanvas || !treeLines || !treeZoom) return;
  if (!Number.isFinite(scale) || scale <= 0) {
    scale = 1;
  }
  document.body.classList.toggle("overview-zoom", scale < 0.72);
  document.body.dataset.treeMode = treeDisplayMode;
  treeCanvas.style.transform = `scale(${scale})`;
  treeLines.style.transform = `scale(${scale})`;
  refreshTreeLineStrokeWidths();
  treeZoom.style.width = `${baseSize.width * scale}px`;
  treeZoom.style.height = `${baseSize.height * scale}px`;
  updateMinimap();
}

const actionEntries = [
  ["zoom-in", zoomInBtn],
  ["zoom-out", zoomOutBtn],
  ["zoom-reset", zoomResetBtn],
  ["reset-view", resetViewBtn],
  ["general-view", generalViewBtn],
  ["focus-self", focusSelfBtn],
  ["zoom-fit", zoomFitBtn],
  ["toggle-theme", toggleThemeBtn],
  ["lang-toggle", langToggleBtn],
  ["view-toggle", viewToggle],
  ["directory-toggle", directoryToggle],
  ["export-png", exportPngBtn],
  ["export-pdf", exportPdfBtn]
];
const actionMap = new Map(actionEntries.filter(([, el]) => el));

function runAction(actionId) {
  const btn = actionMap.get(actionId);
  if (btn) btn.click();
}

function openDirectoryView() {
  if (viewMode === "directory") return;
  navSurface = "directory";
  viewMode = "directory";
  applyViewMode();
  applyLanguage();
  updateViewSwitch();
  savePrefs();
  updateUrlState();
}

function openHomeSurface() {
  navSurface = "home";
  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    renderScene();
    applyZoom();
  }
  closeStoryPanel();
  updateViewSwitch();
  savePrefs();
  updateUrlState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTreeSurface() {
  navSurface = "tree";
  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    renderScene();
    applyZoom();
  }
  updateViewSwitch();
  savePrefs();
  updateUrlState();
  requestAnimationFrame(() => {
    document.querySelector(".tree-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

webNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.webNav;
    if (target !== "settings" && settingsModal?.classList.contains("is-open")) closeSettingsModal();
    if (target === "home") return openHomeSurface();
    if (target === "tree") return openTreeSurface();
    if (target === "directory") return openDirectoryView();
    if (target === "birthday") {
      navSurface = "birthday";
      viewMode = "birthday";
      applyViewMode();
      updateViewSwitch();
      savePrefs();
      updateUrlState();
      return;
    }
    if (target === "timeline") {
      navSurface = "timeline";
      viewMode = "timeline";
      applyViewMode();
      updateViewSwitch();
      savePrefs();
      updateUrlState();
      return;
    }
    if (target === "settings") openSettingsModal();
  });
});

// Swipe only the bottom navigation. Tree canvas gestures remain untouched.
if (webNavItems) {
  let navTouchStartX = null;
  webNavItems.addEventListener("touchstart", (event) => {
    if (window.matchMedia("(min-width: 721px)").matches) return;
    navTouchStartX = event.touches[0]?.clientX ?? null;
  }, { passive: true });
  webNavItems.addEventListener("touchend", (event) => {
    if (window.matchMedia("(min-width: 721px)").matches || navTouchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? navTouchStartX;
    const delta = endX - navTouchStartX;
    navTouchStartX = null;
    if (Math.abs(delta) < 48) return;
    const buttons = [...webNavButtons];
    const current = Math.max(0, buttons.findIndex((button) => button.classList.contains("is-active")));
    const next = buttons[Math.min(buttons.length - 1, Math.max(0, current + (delta < 0 ? 1 : -1)))];
    if (next && next !== buttons[current]) next.click();
  }, { passive: true });
}

on(homeOpenTreeBtn, "click", openTreeSurface);
on(homeGlobalSearchBtn, "click", openMobileSearch);
document.querySelectorAll("[data-page-home]").forEach((button) => button.addEventListener("click", openHomeSurface));

document.querySelectorAll(".mobile-actions [data-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    runAction(btn.dataset.action);
  });
});

if (relationshipFindBtn) {
  relationshipFindBtn.addEventListener("click", () => {
    const t = i18n[lang] || i18n.ms;
    const aId = relationshipPersonA?.value || "";
    const bId = relationshipPersonB?.value || "";
    if (!relationshipOutput) return;
    if (!aId || !bId) {
      relationshipOutput.textContent = t.relationshipPick;
      return;
    }
    if (aId === bId) {
      relationshipOutput.textContent = t.relationshipSame;
      applyRelationshipHighlight([aId]);
      focusPerson(aId, false, false);
      return;
    }
    const result = describeRelationshipResult(aId, bId);
    relationshipOutput.innerHTML = renderRelationshipResult(result);
    if (viewMode !== "tree") {
      viewMode = "tree";
      applyViewMode();
      updateViewSwitch();
    }
    renderScene();
    applyZoom();
    applyRelationshipHighlight([aId, bId], result.path);
    focusPerson(aId, false, false);
  });
}

if (birthdayCard) {
  birthdayCard.addEventListener("click", () => {
    navSurface = "birthday";
    viewMode = "birthday";
    applyViewMode();
    updateViewSwitch();
    savePrefs();
  });
  birthdayCard.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    navSurface = "birthday";
    viewMode = "birthday";
    applyViewMode();
    updateViewSwitch();
    savePrefs();
  });
}

if (homeFamilyPhotoToggle && homeHero) {
  homeFamilyPhotoToggle.addEventListener("click", () => {
    const visible = homeHero.classList.toggle("has-family-photo");
    homeTopbar?.classList.toggle("has-family-photo", visible);
    homeFamilyPhotoToggle.setAttribute("aria-pressed", String(visible));
    homeFamilyPhotoToggle.setAttribute("aria-label", visible ? "Sembunyikan gambar keluarga" : "Lihat gambar keluarga");
  });
}

function closeProfilePhoto() {
  if (!profilePhotoLightbox) return;
  profilePhotoLightbox.hidden = true;
  profilePhotoLightbox.setAttribute("aria-hidden", "true");
  if (profilePhotoLightboxImage) profilePhotoLightboxImage.removeAttribute("src");
  document.body.classList.remove("photo-lightbox-open");
}

function openProfilePhoto(image, alt) {
  if (!profilePhotoLightbox || !profilePhotoLightboxImage) return;
  profilePhotoLightboxImage.src = image;
  profilePhotoLightboxImage.alt = alt || "";
  profilePhotoLightbox.hidden = false;
  profilePhotoLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("photo-lightbox-open");
  refreshIcons(profilePhotoLightbox);
}

profilePhotoLightbox?.querySelectorAll("[data-close-profile-photo]").forEach((button) => {
  button.addEventListener("click", closeProfilePhoto);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && profilePhotoLightbox && !profilePhotoLightbox.hidden) closeProfilePhoto();
});

if (birthdayBackBtn) {
  birthdayBackBtn.addEventListener("click", () => {
    navSurface = "home";
    viewMode = "tree";
    applyViewMode();
    updateViewSwitch();
    savePrefs();
  });
}

if (birthdaySearchInput) {
  birthdaySearchInput.addEventListener("input", () => {
    birthdaySearchExpanded = false;
    renderBirthdaySearchResults();
  });
}

if (birthdayViewYearBtn) {
  birthdayViewYearBtn.addEventListener("click", () => {
    birthdayCalendarView = "year";
    renderBirthdayPage();
  });
}

if (birthdayViewPlannerBtn) {
  birthdayViewPlannerBtn.addEventListener("click", () => {
    birthdayCalendarView = "planner";
    birthdayPlannerMonth = new Date().getMonth();
    renderBirthdayPage();
    requestAnimationFrame(() => birthdayPlanner?.scrollIntoView({ behavior: "smooth", block: "start" }));
  });
}

if (birthdayOpenAllBtn) {
  birthdayOpenAllBtn.addEventListener("click", () => {
    openBirthdayDates = new Set(getBirthdayEntries().map((entry) => `${entry.month}-${entry.day}`));
    renderBirthdayPage();
  });
}

if (birthdayCloseAllBtn) {
  birthdayCloseAllBtn.addEventListener("click", () => {
    openBirthdayDates.clear();
    renderBirthdayPage();
  });
}

if (birthdayTodayBtn) {
  birthdayTodayBtn.addEventListener("click", () => {
    const today = new Date();
    const key = `${today.getMonth()}-${today.getDate()}`;
    birthdayPlannerMonth = today.getMonth();
    if (getBirthdayEntries().some((entry) => `${entry.month}-${entry.day}` === key)) {
      openBirthdayDates.add(key);
      renderBirthdayPage();
    } else if (birthdayCalendarView === "planner") {
      renderBirthdayPage();
    }
    scrollToBirthdayDate(key);
  });
}

if (zoomInBtn) {
  zoomInBtn.addEventListener("click", () => {
    scale = Math.min(2.2, scale + 0.1);
    applyZoom();
    savePrefs();
    scheduleRender();
  });
}

if (zoomOutBtn) {
  zoomOutBtn.addEventListener("click", () => {
    scale = Math.max(0.6, scale - 0.1);
    applyZoom();
    savePrefs();
    scheduleRender();
  });
}

if (zoomResetBtn) {
  zoomResetBtn.addEventListener("click", () => {
    scale = 1;
    applyZoom();
    savePrefs();
    scheduleRender();
  });
}

if (zoomFitBtn) {
  zoomFitBtn.addEventListener("click", () => {
    treeDisplayMode = "overview";
    updateTreeModeButtons();
    fitToScreen();
    savePrefs();
  });
}

function focusSelf(open = true, updateUrl = true) {
  const self = findSelfPerson();
  if (!self) {
    return chooseSelfPerson();
  }
  focusPerson(self.id, open, updateUrl);
  return true;
}

if (focusSelfBtn) {
  focusSelfBtn.addEventListener("click", () => {
    focusSelf(true);
  });
}

if (generalViewBtn) {
  generalViewBtn.addEventListener("click", () => {
    treeDisplayMode = "overview";
    updateTreeModeButtons();
    focusGeneralView();
  });
}

if (mobileSelfBtn) {
  mobileSelfBtn.addEventListener("click", () => {
    focusSelf(false);
  });
  mobileSelfBtn.addEventListener("touchstart", () => {
    focusSelf(false);
  }, { passive: true });
}

if (mobileDirectoryBtn) {
  mobileDirectoryBtn.addEventListener("click", openDirectoryView);
  mobileDirectoryBtn.addEventListener("touchstart", openDirectoryView, { passive: true });
}

if (mobileTimelineBtn) {
  const openTimelineView = () => {
    navSurface = "timeline";
    viewMode = "timeline";
    clearQuickFamilyFilter(false);
    applyViewMode();
    updateViewSwitch();
    savePrefs();
  };
  mobileTimelineBtn.addEventListener("click", openTimelineView);
  mobileTimelineBtn.addEventListener("touchstart", openTimelineView, { passive: true });
}

if (langToggleBtn) {
  langToggleBtn.addEventListener("change", () => {
    lang = langToggleBtn.checked ? "en" : "ms";
    applyLanguage();
    scheduleRender();
    savePrefs();
  });
}

if (themePresetSelect) {
  themePresetSelect.addEventListener("change", () => {
    themePreset = themePresetSelect.value || "default";
    applyThemePreset();
    savePrefs();
  });
}

if (controlsToggleBtn) {
  controlsToggleBtn.addEventListener("click", () => {
    toggleControlsCollapsed();
  });
}

if (mobilePanelBtn) {
  mobilePanelBtn.addEventListener("click", () => {
    toggleControlsCollapsed();
  });
}

if (bottomSheetHandle) {
  bottomSheetHandle.addEventListener("click", () => {
    toggleControlsCollapsed();
  });
}

const sheetControls = document.querySelector("#bottom-sheet .controls");
const sheetDragState = {
  active: false,
  startY: 0,
  startX: 0,
  deltaY: 0,
  deltaX: 0
};

const setSheetOffset = (offset) => {
  if (!bottomSheet) return;
  bottomSheet.style.transform = `translateY(${offset}px)`;
};

const resetSheetOffset = () => {
  if (!bottomSheet) return;
  bottomSheet.style.transform = "";
  bottomSheet.classList.remove("is-dragging");
  sheetDragState.active = false;
  sheetDragState.deltaY = 0;
  sheetDragState.deltaX = 0;
};

if (bottomSheet) {
  bottomSheet.addEventListener("touchstart", (event) => {
    if (!isMobileView()) return;
    if (event.target.closest("#mobile-panel-btn")) return;
    if (event.target.closest("#sheet-handle")) return;
    const targetInControls = sheetControls && sheetControls.contains(event.target);
    if (targetInControls && sheetControls.scrollTop > 0 && !controlsCollapsed) return;
    const touch = event.touches[0];
    sheetDragState.active = true;
    sheetDragState.startY = touch.clientY;
    sheetDragState.startX = touch.clientX;
    sheetDragState.deltaY = 0;
    sheetDragState.deltaX = 0;
    bottomSheet.classList.add("is-dragging");
  }, { passive: true });

  bottomSheet.addEventListener("touchmove", (event) => {
    if (!sheetDragState.active || !isMobileView()) return;
    const touch = event.touches[0];
    const dy = touch.clientY - sheetDragState.startY;
    const dx = touch.clientX - sheetDragState.startX;
    sheetDragState.deltaY = dy;
    sheetDragState.deltaX = dx;
    if (Math.abs(dx) > Math.abs(dy)) return;
    if (controlsCollapsed) {
      const offset = Math.min(0, dy);
      setSheetOffset(offset);
    } else {
      const offset = Math.max(0, dy);
      setSheetOffset(offset);
    }
    event.preventDefault();
  }, { passive: false });

  bottomSheet.addEventListener("touchend", () => {
    if (!sheetDragState.active) return;
    const dy = sheetDragState.deltaY;
    if (!controlsCollapsed && dy > 60) {
      toggleControlsCollapsed(true);
    } else if (controlsCollapsed && dy < -40) {
      toggleControlsCollapsed(false);
    }
    resetSheetOffset();
  });

  bottomSheet.addEventListener("touchcancel", resetSheetOffset);
}

if (mobileSettingsBtn) {
  mobileSettingsBtn.addEventListener("click", () => openSettingsModal());
  mobileSettingsBtn.addEventListener("touchstart", () => openSettingsModal(), { passive: true });
}

if (mobileSearchBtn) {
  mobileSearchBtn.addEventListener("click", () => {
    openMobileSearch();
  });
  mobileSearchBtn.addEventListener("touchstart", () => {
    openMobileSearch();
  }, { passive: true });
}

function openMobileSearch() {
  if (!mobileSearchOverlay) {
    if (controlsCollapsed) toggleControlsCollapsed(false);
    setTimeout(() => searchInput?.focus(), 50);
    return;
  }
  mobileSearchOverlay.hidden = false;
  document.body.classList.add("mobile-search-open");
  if (mobileSearchInput) {
    mobileSearchInput.value = searchInput?.value || "";
    renderMobileSearchResults();
    setTimeout(() => mobileSearchInput.focus(), 50);
  }
}

function closeMobileSearch() {
  if (!mobileSearchOverlay) return;
  mobileSearchOverlay.hidden = true;
  document.body.classList.remove("mobile-search-open");
}

function renderMobileSearchResults() {
  if (!mobileSearchResults || !mobileSearchInput) return;
  const t = i18n[lang] || i18n.ms;
  const query = mobileSearchInput.value.trim();
  mobileSearchResults.innerHTML = "";
  if (!query) {
    mobileSearchResults.innerHTML = `<div class="mobile-search-empty">${escapeHtml(t.searchNone)}</div>`;
    return;
  }
  const results = getSearchMatches(query);
  if (!results.length) {
    mobileSearchResults.innerHTML = `<div class="mobile-search-empty">${escapeHtml(t.searchNone)}</div>`;
    return;
  }
  mobileSearchResults.innerHTML = results.map((person) => `
    <button class="mobile-search-result" type="button" data-person-link="${escapeHtml(person.id)}">
      <strong>${escapeHtml(formatDisplayName(person.name))}</strong>
      ${formatDisplayName(person.name) !== getShortDisplayName(person.name) ? `<small>${escapeHtml(getShortDisplayName(person.name))}</small>` : ""}
      <span>${escapeHtml(person.relation || formatDates(person.birth, person.death))}</span>
    </button>
  `).join("");
  mobileSearchResults.querySelectorAll("[data-person-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const personId = btn.dataset.personLink;
      if (!personId) return;
      if (searchInput) searchInput.value = formatDisplayName(peopleById.get(personId)?.name || "");
      closeMobileSearch();
      focusPerson(personId, true);
    });
  });
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", renderMobileSearchResults);
}

if (mobileSearchClose) mobileSearchClose.addEventListener("click", closeMobileSearch);
if (mobileSearchBackdrop) mobileSearchBackdrop.addEventListener("click", closeMobileSearch);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileSearchOverlay && !mobileSearchOverlay.hidden) closeMobileSearch();
});

if (resetViewBtn) {
  resetViewBtn.addEventListener("click", () => {
    focusGeneralView();
    savePrefs();
  });
}

if (clearCacheBtn) {
  clearCacheBtn.addEventListener("click", () => {
    clearSiteCache();
  });
}

let isPanning = false;
let panStart = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0 };
let mousePanning = false;
let pinchZooming = false;
let pinchStartDistance = 0;
let pinchStartScale = 1;

const stopPointerPan = (event) => {
  if (!treeWrap) return;
  if (event && treeWrap.hasPointerCapture(event.pointerId)) {
    treeWrap.releasePointerCapture(event.pointerId);
  }
  isPanning = false;
  treeWrap.classList.remove("is-dragging");
  if (virtualizationEnabled) scheduleRender();
};

if (treeWrap) {
  treeWrap.addEventListener("touchstart", (event) => {
    if (!isMobileView()) return;
    if (event.touches.length !== 2) return;
    const [t1, t2] = event.touches;
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    pinchZooming = true;
    treeWrap.classList.add("pinch-zooming");
    pinchStartDistance = Math.hypot(dx, dy) || 1;
    pinchStartScale = scale;
    isPanning = false;
    treeWrap.classList.remove("is-dragging");
  }, { passive: true });

  treeWrap.addEventListener("touchmove", (event) => {
    if (!pinchZooming) return;
    if (event.touches.length !== 2) return;
    const [t1, t2] = event.touches;
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    const distance = Math.hypot(dx, dy) || 1;
    const ratio = distance / pinchStartDistance;
    const next = Math.max(0.6, Math.min(2.2, pinchStartScale * ratio));
    if (next !== scale) {
      scale = next;
      applyZoom();
      scheduleRender();
    }
    event.preventDefault();
  }, { passive: false });

  treeWrap.addEventListener("touchend", (event) => {
    if (!pinchZooming) return;
    if (event.touches.length < 2) {
      pinchZooming = false;
      treeWrap.classList.remove("pinch-zooming");
      savePrefs();
    }
  });

  treeWrap.addEventListener("touchcancel", () => {
    if (!pinchZooming) return;
    pinchZooming = false;
    treeWrap.classList.remove("pinch-zooming");
  });

  treeWrap.addEventListener("gesturestart", (event) => {
    if (!isMobileView()) return;
    pinchZooming = true;
    treeWrap.classList.add("pinch-zooming");
    pinchStartScale = scale;
    event.preventDefault();
  });

  treeWrap.addEventListener("gesturechange", (event) => {
    if (!pinchZooming) return;
    const next = Math.max(0.6, Math.min(2.2, pinchStartScale * event.scale));
    if (next !== scale) {
      scale = next;
      applyZoom();
      scheduleRender();
    }
    event.preventDefault();
  });

  treeWrap.addEventListener("gestureend", () => {
    if (!pinchZooming) return;
    pinchZooming = false;
    treeWrap.classList.remove("pinch-zooming");
    savePrefs();
  });

  treeWrap.addEventListener("pointerdown", (event) => {
    if (!dragToPan) return;
    if (event.target.closest(".person-card")) return;
    isPanning = true;
    treeWrap.setPointerCapture(event.pointerId);
    treeWrap.classList.add("is-dragging");
    panStart = {
      x: event.clientX,
      y: event.clientY,
      scrollLeft: treeWrap.scrollLeft,
      scrollTop: treeWrap.scrollTop
    };
    event.preventDefault();
  });

  treeWrap.addEventListener("pointermove", (event) => {
    if (!dragToPan) return;
    if (!isPanning) return;
    if (!treeWrap.hasPointerCapture(event.pointerId)) return;
    const dx = event.clientX - panStart.x;
    const dy = event.clientY - panStart.y;
    treeWrap.scrollLeft = panStart.scrollLeft - dx;
    treeWrap.scrollTop = panStart.scrollTop - dy;
    event.preventDefault();
  });

  treeWrap.addEventListener("pointerup", stopPointerPan);
  treeWrap.addEventListener("pointercancel", stopPointerPan);

  treeWrap.addEventListener("mousedown", (event) => {
    if (!dragToPan) return;
    if (event.button !== 0) return;
    if (event.target.closest(".person-card")) return;
    mousePanning = true;
    treeWrap.classList.add("is-dragging");
    panStart = {
      x: event.clientX,
      y: event.clientY,
      scrollLeft: treeWrap.scrollLeft,
      scrollTop: treeWrap.scrollTop
    };
    event.preventDefault();
  });

  treeWrap.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
}

window.addEventListener("mousemove", (event) => {
  if (!dragToPan) return;
  if (!mousePanning || !treeWrap) return;
  const dx = event.clientX - panStart.x;
  const dy = event.clientY - panStart.y;
  treeWrap.scrollLeft = panStart.scrollLeft - dx;
  treeWrap.scrollTop = panStart.scrollTop - dy;
});

window.addEventListener("mouseup", () => {
  if (!mousePanning || !treeWrap) return;
  mousePanning = false;
  treeWrap.classList.remove("is-dragging");
  if (virtualizationEnabled) scheduleRender();
});

let scrollStopTimer = null;
if (treeWrap) {
  treeWrap.addEventListener("scroll", () => {
    updateMinimap();
    updateMiniToolbarVisibility();
    if (scrollStopTimer) clearTimeout(scrollStopTimer);
    if (isPanning || mousePanning) return;
    if (!virtualizationEnabled) return;
    scrollStopTimer = setTimeout(() => {
      scheduleRender();
    }, 80);
  });
}

window.addEventListener("resize", () => {
  scheduleRender();
  updateMinimap();
});

function getSearchMatches(query) {
  const terms = expandSearchTerms(query);
  if (!terms.length || !treeData?.people) return [];
  return treeData.people.filter((person) => {
    const haystack = getPersonSearchText(person);
    return terms.some((term) => haystack.includes(term));
  });
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function expandSearchTerms(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  const aliases = {
    lelaki: ["male", "jantan", "putera"],
    male: ["lelaki"],
    perempuan: ["female", "wanita", "puteri"],
    female: ["perempuan"],
    hidup: ["living", "masih hidup"],
    living: ["hidup", "masih hidup"],
    meninggal: ["deceased", "wafat", "mati"],
    deceased: ["meninggal", "wafat"],
    mati: ["meninggal", "deceased"],
    suami: ["husband", "pasangan"],
    isteri: ["wife", "pasangan"],
    pasangan: ["suami", "isteri", "spouse"],
    anak: ["child"],
    cucu: ["grandchild"],
    cicit: ["great grandchild"],
    menantu: ["in law"],
    mak: ["ibu", "mother", "parent"],
    ibu: ["mak", "mother", "parent"],
    ayah: ["bapa", "father", "parent"],
    bapa: ["ayah", "father", "parent"],
    "adik beradik": ["siblings", "sibling"],
    sibling: ["adik beradik"],
    siblings: ["adik beradik"],
    cabang: ["branch"],
    branch: ["cabang"],
    root: ["generasi asal"],
    "data tak lengkap": ["incomplete"],
    incomplete: ["data tak lengkap"]
  };
  const terms = new Set([normalized]);
  Object.entries(aliases).forEach(([key, values]) => {
    if (normalized.includes(key)) values.forEach((value) => terms.add(normalizeSearchText(value)));
  });
  return [...terms].filter(Boolean);
}

function getPersonSearchText(person) {
  const gender = getPersonGender(person);
  const status = getPersonStatus(person);
  const values = [
    formatDisplayName(person.name),
    person.name,
    person.nickname,
    person.relation,
    person.note,
    person.story,
    gender,
    gender === "male" ? "lelaki male" : "",
    gender === "female" ? "perempuan female" : "",
    status,
    status === "living" ? "hidup living masih hidup" : "",
    status === "deceased" ? "meninggal deceased wafat mati" : "",
    getBranchName(person.branchId),
    person.branchId,
    isPersonDataIncomplete(person) ? "data tak lengkap incomplete" : ""
  ];
  return normalizeSearchText(values.filter(Boolean).join(" "));
}

if (searchInput && searchResults) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.classList.remove("active");
      searchResults.innerHTML = "";
      clearHighlights();
      lastSearchResults = [];
      return;
    }

    const results = getSearchMatches(query);
    searchResults.innerHTML = "";
    lastSearchResults = results;

    if (results.length === 0) {
      const item = document.createElement("div");
      item.className = "search-item";
      item.textContent = i18n[lang].searchNone;
      searchResults.appendChild(item);
    } else {
      results.forEach((person) => {
        const item = document.createElement("div");
        item.className = "search-item";
        item.textContent = formatDisplayName(person.name);
        item.addEventListener("click", () => {
          searchResults.classList.remove("active");
          searchInput.value = formatDisplayName(person.name);
          focusPerson(person.id, true);
        });
        searchResults.appendChild(item);
      });
    }

    searchResults.classList.toggle("active", true);
    highlightMatches(results.map((p) => p.id));
  });
}

if (searchGoBtn) {
  searchGoBtn.addEventListener("click", () => {
    if (lastSearchResults.length === 0) return;
    const person = lastSearchResults[0];
    focusPerson(person.id, true);
  });
}

function clearHighlights() {
  document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
}

function highlightMatches(ids) {
  clearHighlights();
  ids.forEach((id) => {
    const el = elementByPersonId.get(id);
    if (el) el.classList.add("highlight");
  });
}

function focusPerson(personId, open = false, updateUrl = true) {
  let el = elementByPersonId.get(personId);
  const person = peopleById.get(personId);
  if (!person) return;
  if (!treeWrap) return;
  navSurface = "tree";
  updateViewSwitch();
  if (selectedPersonId && selectedPersonId !== personId && quickFamilyPeople.size > 0) {
    clearQuickFamilyFilter(false);
  }
  if (focusedBranchPeople.size > 0 && !focusedBranchPeople.has(personId)) {
    clearFocusedBranch(false);
  }

  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    renderScene();
    applyZoom();
  }

  if (!el) {
    renderScene();
    applyZoom();
    el = elementByPersonId.get(personId);
  }

  if (!el && hiddenGenerations.size > 0) {
    hiddenGenerations.clear();
    buildGenerationControls();
    renderScene();
    applyZoom();
    el = elementByPersonId.get(personId);
  }

  if (!el) return;

  selectedPersonId = personId;
  addRecentPerson(personId);
  updateStoryPanel(person);
  applySelectionHighlight(personId);
  updateQuickFamilyFilterBar();

  if (open) openModal(person);

  const rect = el.getBoundingClientRect();
  const wrapRect = treeWrap.getBoundingClientRect();
  const scrollLeft = treeWrap.scrollLeft + rect.left - wrapRect.left - wrapRect.width / 2 + rect.width / 2;
  const scrollTop = treeWrap.scrollTop + rect.top - wrapRect.top - wrapRect.height / 2 + rect.height / 2;
  treeWrap.scrollTo({ left: scrollLeft, top: scrollTop, behavior: "smooth" });
  if (updateUrl) updateUrlState();
}

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("change", () => {
    const next = toggleThemeBtn.checked ? "dark" : "light";
    app.dataset.theme = next;
    document.body.dataset.theme = next;
    savePrefs();
  });
}

if (viewToggle) {
  viewToggle.addEventListener("click", () => {
    viewMode = viewMode === "tree" ? "timeline" : "tree";
    applyViewMode();
    applyLanguage();
    updateViewSwitch();
    savePrefs();
    updateUrlState();
    if (viewMode === "tree") {
      requestAnimationFrame(() => applyTreeDisplayMode(treeDisplayMode || "overview", { behavior: "smooth" }));
    }
  });
}

function openTreeView(behavior = "smooth") {
  navSurface = "tree";
  viewMode = "tree";
  applyViewMode();
  applyLanguage();
  updateViewSwitch();
  savePrefs();
  updateUrlState();
  requestAnimationFrame(() => applyTreeDisplayMode(treeDisplayMode || "overview", { behavior }));
}

if (viewTreeBtn) {
  viewTreeBtn.addEventListener("click", () => {
    openTreeView("smooth");
  });
  viewTreeBtn.addEventListener("touchstart", () => {
    openTreeView("smooth");
  }, { passive: true });
}

if (viewTimelineBtn) {
  viewTimelineBtn.addEventListener("click", () => {
    if (viewMode === "timeline") return;
    navSurface = "timeline";
    viewMode = "timeline";
    applyViewMode();
    applyLanguage();
    updateViewSwitch();
    savePrefs();
    updateUrlState();
  });
  viewTimelineBtn.addEventListener("touchstart", () => {
    if (viewMode === "timeline") return;
    navSurface = "timeline";
    viewMode = "timeline";
    applyViewMode();
    applyLanguage();
    updateViewSwitch();
    savePrefs();
    updateUrlState();
  }, { passive: true });
}

if (viewDirectoryBtn) {
  viewDirectoryBtn.addEventListener("click", () => {
    openDirectoryView();
  });
  viewDirectoryBtn.addEventListener("touchstart", () => {
    openDirectoryView();
  }, { passive: true });
}

if (directoryToggle) {
  directoryToggle.addEventListener("click", openDirectoryView);
  directoryToggle.addEventListener("touchstart", openDirectoryView, { passive: true });
}

if (directoryBackBtn) {
  directoryBackBtn.addEventListener("click", () => {
    navSurface = "home";
    viewMode = "tree";
    applyViewMode();
    applyLanguage();
    updateViewSwitch();
    savePrefs();
    focusGeneralView();
  });
}

if (directorySearchInput) {
  directorySearchInput.addEventListener("input", () => {
    directoryFilters.query = directorySearchInput.value || "";
    renderDirectoryPage();
  });
}

if (directoryMoreBtn) {
  directoryMoreBtn.addEventListener("click", () => {
    updateDirectoryMoreState(!directoryMoreOpen);
  });
}

if (directoryLayoutToggle) {
  directoryLayoutToggle.addEventListener("click", () => {
    directoryLayout = directoryLayout === "grid" ? "list" : "grid";
    renderDirectoryPage();
  });
}

if (directoryGenerationSelect) {
  directoryGenerationSelect.addEventListener("change", () => {
    directoryFilters.generation = directoryGenerationSelect.value || "all";
    renderDirectoryPage();
  });
}

if (directoryGenderSelect) {
  directoryGenderSelect.addEventListener("change", () => {
    directoryFilters.gender = directoryGenderSelect.value || "all";
    renderDirectoryPage();
  });
}

if (directoryBirthdayMonthSelect) {
  directoryBirthdayMonthSelect.addEventListener("change", () => {
    directoryFilters.birthdayMonth = directoryBirthdayMonthSelect.value || "all";
    renderDirectoryPage();
  });
}

if (directoryBranchSelect) {
  directoryBranchSelect.addEventListener("change", () => {
    directoryFilters.branch = directoryBranchSelect.value || "all";
    renderDirectoryPage();
  });
}

if (directoryStatusSelect) {
  directoryStatusSelect.addEventListener("change", () => {
    directoryFilters.status = directoryStatusSelect.value || "all";
    renderDirectoryPage();
  });
}

if (directorySortSelect) {
  directorySortSelect.addEventListener("change", () => {
    directoryFilters.sort = directorySortSelect.value || "generation";
    renderDirectoryPage();
  });
}

if (directoryClearBtn) {
  directoryClearBtn.addEventListener("click", () => {
    resetDirectoryFilters();
  });
}

if (focusedBranchClearBtn) {
  focusedBranchClearBtn.addEventListener("click", () => {
    clearFocusedBranch(true);
    focusGeneralView();
  });
}

document.querySelectorAll("[data-stat-action]").forEach((card) => {
  const openFromStat = () => {
    const action = card.dataset.statAction || "directory";
    if (action === "directory-gender") {
      directoryFilters = { ...directoryFilters, gender: "all", status: "all", generation: "all", query: "" };
    }
    if (action === "directory-descendants") {
      directoryFilters = { ...directoryFilters, query: lang === "en" ? "grandchild" : "cucu", generation: "all", gender: "all", status: "all" };
    }
    openDirectoryView();
  };
  card.addEventListener("click", openFromStat);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFromStat();
    }
  });
});

document.querySelectorAll("[data-tree-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.treeAction;
    if (action === "fit") {
      treeDisplayMode = "overview";
      updateTreeModeButtons();
      fitToScreen();
      savePrefs();
    }
    if (action === "reset") {
      treeDisplayMode = "overview";
      updateTreeModeButtons();
      focusGeneralView();
    }
    if (action === "minimap") {
      const minimapWrap = document.querySelector(".brand-minimap-wrap");
      if (minimapWrap) {
        minimapWrap.classList.add("is-open");
        minimapWrap.classList.remove("is-collapsed");
      }
    }
  });
});

treeViewModeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTreeDisplayMode(btn.dataset.treeViewMode || "overview", { behavior: "smooth" });
  });
});

if (quickFamilyFilter) {
  quickFamilyFilter.querySelectorAll("[data-quick-family]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setQuickFamilyFilter(btn.dataset.quickFamily || "clear");
    });
  });
}

if (timelineSearchInput) {
  timelineSearchInput.addEventListener("input", () => {
    timelineFilters.query = timelineSearchInput.value || "";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (timelineGenSelect) {
  timelineGenSelect.addEventListener("change", () => {
    timelineFilters.generation = timelineGenSelect.value || "all";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (timelineMonthSelect) {
  timelineMonthSelect.addEventListener("change", () => {
    timelineFilters.month = timelineMonthSelect.value || "all";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (timelineGenderSelect) {
  timelineGenderSelect.addEventListener("change", () => {
    timelineFilters.gender = timelineGenderSelect.value || "all";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (timelineSortSelect) {
  timelineSortSelect.addEventListener("change", () => {
    timelineFilters.sort = timelineSortSelect.value || "year";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (timelineMoreBtn) {
  timelineMoreBtn.addEventListener("click", () => {
    updateTimelineMoreState(!timelineMoreOpen);
  });
}

if (timelineClearBtn) {
  timelineClearBtn.addEventListener("click", () => {
    timelineFilters = { query: "", generation: "all", month: "all", gender: "all", sort: "year" };
    if (timelineSearchInput) timelineSearchInput.value = "";
    if (timelineGenSelect) timelineGenSelect.value = "all";
    if (timelineMonthSelect) timelineMonthSelect.value = "all";
    if (timelineGenderSelect) timelineGenderSelect.value = "all";
    if (timelineSortSelect) timelineSortSelect.value = "year";
    renderTimeline();
    updateTimelineActiveFilters();
  });
}

if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    openSettingsModal();
  });
}

if (settingsModal) {
  settingsModal.addEventListener("click", (event) => {
    if (!event.target.dataset.settingsClose) return;
    closeSettingsModal();
  });
  settingsModal.querySelectorAll("[data-settings-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.settingsTab;
      settingsModal.querySelectorAll("[data-settings-tab]").forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", isActive.toString());
      });
      settingsModal.querySelectorAll("[data-settings-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.settingsPanel !== target;
      });
    });
  });
  closeSettingsModal();
}

if (settingsCompact) {
  settingsCompact.addEventListener("change", () => {
    compactMode = settingsCompact.checked;
    document.body.classList.toggle("compact", compactMode);
    applyLanguage();
    savePrefs();
  });
}

if (settingsCardScale) {
  settingsCardScale.addEventListener("input", () => {
    cardScale = Number(settingsCardScale.value) || 1;
    applyCardScale();
    buildLayout();
    updateStats();
  populateTimelineFilters();
  populateRelationshipFinder();
  renderScene();
    savePrefs();
  });
}

if (settingsMinimap) {
  settingsMinimap.addEventListener("change", () => {
    minimapEnabled = settingsMinimap.checked;
    applyMinimapState();
    savePrefs();
  });
}

if (settingsDrag) {
  settingsDrag.addEventListener("change", () => {
    dragToPan = settingsDrag.checked;
    applyDragToPanState();
    savePrefs();
  });
}

if (settingsShowBirthdate) {
  settingsShowBirthdate.addEventListener("change", () => {
    showBirthdate = settingsShowBirthdate.checked;
    applyDetailsVisibility();
    savePrefs();
  });
}

if (settingsShowAge) {
  settingsShowAge.addEventListener("change", () => {
    showAge = settingsShowAge.checked;
    applyDetailsVisibility();
    savePrefs();
  });
}

if (settingsShowTags) {
  settingsShowTags.addEventListener("change", () => {
    showTags = settingsShowTags.checked;
    applyDetailsVisibility();
    savePrefs();
  });
}

if (settingsReset) {
  settingsReset.addEventListener("click", () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
    window.location.reload();
  });
}

if (settingsFontScale) {
  settingsFontScale.addEventListener("input", () => {
    fontScale = Number(settingsFontScale.value) || 1;
    applyFontScale();
    savePrefs();
  });
}

if (settingsResetSelf) {
  settingsResetSelf.addEventListener("click", () => {
    const t = i18n[lang] || i18n.ms;
    if (!confirm(t.resetSelfConfirm)) return;
    setStoredSelfId("");
    updateSelfButtons();
    focusGeneralView();
    alert(t.resetSelfDone);
  });
}

if (exportPngBtn) {
  exportPngBtn.addEventListener("click", async () => {
    if (!window.html2canvas) {
      alert(i18n[lang].exportPngFail);
      return;
    }
    if (!treeZoom) return;
    const exportScale = Math.min(3, (window.devicePixelRatio || 1) * 1.5);
    const canvas = await window.html2canvas(treeZoom, { backgroundColor: null, scale: exportScale });
    const link = document.createElement("a");
    link.download = "salasilah-keluarga.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.92);
    link.click();
  });
}

if (exportPdfBtn) {
  exportPdfBtn.addEventListener("click", async () => {
    if (!window.html2canvas || !window.jspdf) {
      alert(i18n[lang].exportPdfFail);
      return;
    }
    if (!treeZoom) return;

    const exportScale = Math.min(3, (window.devicePixelRatio || 1) * 1.5);
    const canvas = await window.html2canvas(treeZoom, { backgroundColor: null, scale: exportScale });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new window.jspdf.jsPDF({ orientation: "landscape", unit: "px", format: [canvas.width, canvas.height] });

    const title = treeData.familyName || i18n[lang].appKicker;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(28);
    pdf.text(title, 40, 60);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    const dateLabel = formatText(i18n[lang].exportDate, { date: formatDateDisplay(new Date()) });
    pdf.text(dateLabel, 40, 90);
    pdf.addPage([canvas.width, canvas.height], "landscape");
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("salasilah-keluarga.pdf");
  });
}

function closeExportMenu() {
  if (!exportMenu) return;
  exportMenu.hidden = true;
  if (exportMenuBtn) exportMenuBtn.setAttribute("aria-expanded", "false");
}

function positionExportMenu() {
  if (!exportMenu || !exportMenuBtn) return;
  exportMenu.style.left = "calc(100% + 8px)";
  exportMenu.style.right = "auto";
  exportMenu.style.top = "50%";
  exportMenu.style.transform = "translateY(-50%)";
  const rect = exportMenu.getBoundingClientRect();
  const vw = window.innerWidth;
  if (rect.right > vw - 8) {
    exportMenu.style.left = "auto";
    exportMenu.style.right = "calc(100% + 8px)";
    exportMenu.style.top = "50%";
    exportMenu.style.transform = "translateY(-50%)";
  }
  const updated = exportMenu.getBoundingClientRect();
  if (updated.left < 8 || updated.right > vw - 8) {
    exportMenu.style.left = "auto";
    exportMenu.style.right = "0";
    exportMenu.style.top = "calc(100% + 8px)";
    exportMenu.style.transform = "none";
  }
}

if (exportMenuBtn) {
  exportMenuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!exportMenu) return;
    const willOpen = exportMenu.hidden;
    exportMenu.hidden = !willOpen;
    exportMenuBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    if (willOpen) {
      requestAnimationFrame(positionExportMenu);
    }
  });
}

if (exportMenu) {
  document.addEventListener("click", (event) => {
    if (exportMenu.hidden) return;
    if (exportMenu.contains(event.target) || exportMenuBtn?.contains(event.target)) return;
    closeExportMenu();
  });
}

if (exportPngBtn) {
  exportPngBtn.addEventListener("click", () => {
    closeExportMenu();
  });
}

if (exportPdfBtn) {
  exportPdfBtn.addEventListener("click", () => {
    closeExportMenu();
  });
}

function updateMiniToolbarVisibility() {
  if (!miniToolbar) return;
  if (viewMode !== "tree" || app?.classList.contains("story-open")) {
    miniToolbar.classList.remove("is-visible");
    return;
  }
  const controlsPanel = document.querySelector(".controls");
  if (!controlsPanel || !treeWrap) return;
  const rect = controlsPanel.getBoundingClientRect();
  const treeRect = treeWrap.getBoundingClientRect();
  const treeVisible = treeRect.bottom > 160 && treeRect.top < window.innerHeight - 120;
  const shouldShow = isMobileView() ? controlsCollapsed && treeVisible : rect.bottom < 0 && treeVisible;
  miniToolbar.classList.toggle("is-visible", shouldShow);
}

if (miniSearchBtn) {
  miniSearchBtn.addEventListener("click", () => {
    if (searchInput) searchInput.focus();
  });
}

if (miniZoomInBtn) {
  miniZoomInBtn.addEventListener("click", () => {
    if (zoomInBtn) zoomInBtn.click();
  });
}

if (miniZoomOutBtn) {
  miniZoomOutBtn.addEventListener("click", () => {
    if (zoomOutBtn) zoomOutBtn.click();
  });
}

if (miniZoomFitBtn) {
  miniZoomFitBtn.addEventListener("click", () => {
    if (zoomFitBtn) zoomFitBtn.click();
  });
}

window.addEventListener("scroll", () => {
  updateMiniToolbarVisibility();
}, { passive: true });

window.addEventListener("resize", () => {
  updateMiniToolbarVisibility();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (settingsModal && settingsModal.classList.contains("is-open")) {
    settingsModal.classList.remove("is-open");
    settingsModal.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("load", () => {
  if (treeData) {
    renderScene();
    applyZoom();
  }
  updateMiniToolbarVisibility();
});

function updateMinimap() {
  if (!minimapEnabled) return;
  if (!minimapCanvas || !layoutRoot || !treeWrap) return;
  const rect = minimapCanvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  const dpr = window.devicePixelRatio || 1;
  minimapCanvas.width = width * dpr;
  minimapCanvas.height = height * dpr;
  const ctx = minimapCanvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const scaleX = width / baseSize.width;
  const scaleY = height / baseSize.height;
  const miniScale = Math.min(scaleX, scaleY);

  ctx.save();
  ctx.scale(miniScale, miniScale);
  nodesList.forEach((node) => {
    if (!nodeVisible(node)) return;
    const w = node.ownWidth || layoutConfig.cardWidth;
    const h = 80;
    ctx.fillStyle = branchPalette[node.branchId] + "55";
    ctx.fillRect(node.x, node.y, w, h);
  });

  const viewW = treeWrap.clientWidth / scale;
  const viewH = treeWrap.clientHeight / scale;
  const viewX = treeWrap.scrollLeft / scale;
  const viewY = treeWrap.scrollTop / scale;
  ctx.strokeStyle = "rgba(255,255,255,0.85)";
  ctx.lineWidth = 2 / miniScale;
  ctx.strokeRect(viewX, viewY, viewW, viewH);
  ctx.restore();
}

function fitToScreen() {
  if (!treeWrap || !treeCanvas) return;
  if (!treeCanvas.children.length || baseSize.width <= 0 || baseSize.height <= 0) return;
  const pad = isMobileView() ? 18 : 48;
  const targetScale = Math.min(
    (treeWrap.clientWidth - pad) / baseSize.width,
    (treeWrap.clientHeight - pad) / baseSize.height
  );
  if (!Number.isFinite(targetScale) || targetScale <= 0) return;
  scale = Math.max(0.6, Math.min(2.2, targetScale));
  applyZoom();
  centerVisibleTree("smooth");
  scheduleRender();
}

function getVisibleTreeBounds() {
  const visibleNodes = nodesList.filter((node) => nodeVisible(node));
  if (!visibleNodes.length) return null;
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = 0;
  let maxY = 0;
  visibleNodes.forEach((node) => {
    const width = node.ownWidth || layoutConfig.cardWidth;
    minX = Math.min(minX, node.x);
    minY = Math.min(minY, node.y);
    maxX = Math.max(maxX, node.x + width);
    maxY = Math.max(maxY, node.y + 120);
  });
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

function centerVisibleTree(behavior = "auto") {
  if (!treeWrap) return;
  const bounds = getVisibleTreeBounds();
  if (!bounds) return;
  const left = Math.max(0, (bounds.minX + bounds.width / 2) * scale - treeWrap.clientWidth / 2);
  const top = Math.max(0, (bounds.minY + bounds.height / 2) * scale - treeWrap.clientHeight / 2);
  treeWrap.scrollTo({ left, top, behavior });
  updateMinimap();
}

function scrollTreeIntoView(behavior = "auto") {
  if (!treeWrap) return;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  treeWrap.scrollIntoView({
    behavior: reducedMotion ? "auto" : behavior,
    block: "start"
  });
}

if (exportBranchCsvBtn) {
  exportBranchCsvBtn.addEventListener("click", () => {
    exportBranchCsv();
    closeExportMenu();
  });
}

if (directoryExportCsvBtn) {
  directoryExportCsvBtn.addEventListener("click", exportDirectoryCsv);
}

if (birthdayExportCsvBtn) {
  birthdayExportCsvBtn.addEventListener("click", exportBirthdayCsv);
}

if (dataHealthExportCsvBtn) {
  dataHealthExportCsvBtn.addEventListener("click", exportDataHealthCsv);
}

if (exportJsonDataBtn) {
  exportJsonDataBtn.addEventListener("click", exportJsonData);
}

if (importJsonDataBtn) {
  importJsonDataBtn.addEventListener("click", importJsonData);
}

if (resetJsonDataBtn) {
  resetJsonDataBtn.addEventListener("click", resetJsonData);
}

function fitOverview(behavior = "auto") {
  if (!treeWrap || !treeCanvas) return;
  if (!treeCanvas.children.length) return;
  const bounds = getVisibleTreeBounds();
  if (!bounds) return;
  const horizontalPad = isMobileView() ? 24 : 48;
  const verticalPad = isMobileView() ? 28 : 44;
  const usableWidth = Math.max(280, treeWrap.clientWidth - horizontalPad);
  const usableHeight = Math.max(260, treeWrap.clientHeight - verticalPad);
  const targetScale = Math.min(usableWidth / bounds.width, usableHeight / bounds.height);
  if (!Number.isFinite(targetScale) || targetScale <= 0) return;
  const minOverviewScale = isMobileView() ? 0.55 : 0.52;
  scale = Math.max(minOverviewScale, Math.min(1.25, targetScale));
  applyZoom();
  centerVisibleTree(behavior);
  scheduleRender();
}

function getDefaultTreeFocusPerson() {
  if (selectedPersonId && peopleById.has(selectedPersonId)) return peopleById.get(selectedPersonId);
  const self = findSelfPerson();
  if (self) return self;
  return findElderPerson();
}

function updateTreeModeButtons() {
  treeViewModeBtns.forEach((btn) => {
    const active = btn.dataset.treeViewMode === treeDisplayMode;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active.toString());
  });
  document.body.dataset.treeMode = treeDisplayMode;
}

function applyTreeDisplayMode(mode = treeDisplayMode, options = {}) {
  if (!["overview", "detail", "branch"].includes(mode)) mode = "overview";
  const behavior = options.behavior || "smooth";
  const shouldScroll = options.scroll !== false;
  treeDisplayMode = mode;
  updateTreeModeButtons();
  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    updateViewSwitch();
  }
  if (mode === "overview") {
    if (focusedBranchPersonId) clearFocusedBranch(false);
    clearQuickFamilyFilter(false);
    renderScene();
    applyZoom();
    fitOverview(behavior);
    if (shouldScroll) scrollTreeIntoView(behavior);
    savePrefs();
    return;
  }
  const focusPersonTarget = getDefaultTreeFocusPerson();
  if (mode === "branch") {
    if (focusPersonTarget) {
      setFocusedBranch(focusPersonTarget.id, false);
      requestAnimationFrame(() => {
        fitOverview(behavior);
        if (shouldScroll) scrollTreeIntoView(behavior);
      });
    } else {
      renderScene();
      applyZoom();
      fitOverview(behavior);
      if (shouldScroll) scrollTreeIntoView(behavior);
    }
    savePrefs();
    return;
  }
  if (focusedBranchPersonId) clearFocusedBranch(false);
  clearQuickFamilyFilter(false);
  scale = Math.max(0.92, Math.min(1.08, scale || 1));
  renderScene();
  applyZoom();
  requestAnimationFrame(() => {
    if (focusPersonTarget) {
      focusPerson(focusPersonTarget.id, false, true);
    } else {
      centerVisibleTree(behavior);
    }
    if (shouldScroll) scrollTreeIntoView(behavior);
  });
  savePrefs();
}

function findElderPerson() {
  const elderByRelation = treeData.people.find((p) => {
    const relation = (p.relation || "").toLowerCase();
    return relation.includes("tok") || relation.includes("wan");
  });
  if (elderByRelation) return elderByRelation;

  const firstRootUnion = treeData.unions.find((u) => u.partner1 || u.partner2);
  if (!firstRootUnion) return null;
  return peopleById.get(firstRootUnion.partner1) || peopleById.get(firstRootUnion.partner2) || null;
}

function findSelfPerson() {
  const storedSelfId = getStoredSelfId();
  if (storedSelfId && peopleById.has(storedSelfId)) {
    return peopleById.get(storedSelfId);
  }
  return null;
}

function getStoredSelfId() {
  try {
    return localStorage.getItem(SELF_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function setStoredSelfId(personId) {
  try {
    if (personId) {
      localStorage.setItem(SELF_STORAGE_KEY, personId);
    } else {
      localStorage.removeItem(SELF_STORAGE_KEY);
    }
  } catch {
    // ignore storage errors
  }
}

function updateSelfButtons() {
  const t = i18n[lang] || i18n.ms;
  const hasSelf = Boolean(findSelfPerson());
  const fullLabel = hasSelf ? t.focusSelf : t.chooseSelf;
  const shortLabel = hasSelf ? t.focusSelfShort : t.chooseSelfShort;
  if (focusSelfBtn) focusSelfBtn.textContent = fullLabel;
  if (mobileSelfBtn) mobileSelfBtn.textContent = shortLabel;
  if (mobileQuickFocusSelf) mobileQuickFocusSelf.textContent = shortLabel;
}

function chooseSelfPerson() {
  if (!treeData?.people?.length) return false;
  const t = i18n[lang] || i18n.ms;
  const query = window.prompt(t.chooseSelfPrompt);
  if (!query) return false;
  const normalized = query.trim().toLowerCase();
  if (!normalized) return false;
  const matches = treeData.people.filter((person) => {
    const name = formatDisplayName(person.name).toLowerCase();
    return name.includes(normalized) || String(person.name || "").toLowerCase().includes(normalized);
  });
  if (!matches.length) {
    alert(t.chooseSelfNotFound);
    return false;
  }
  const exact = matches.find((person) => formatDisplayName(person.name).toLowerCase() === normalized);
  const selected = exact || matches[0];
  setStoredSelfId(selected.id);
  updateSelfButtons();
  focusPerson(selected.id, false, true);
  alert(formatText(t.chooseSelfSaved, { name: formatDisplayName(selected.name) }));
  return true;
}

function hasUrlFocus() {
  const params = new URLSearchParams(window.location.search);
  return Boolean(params.get("focus"));
}

function focusInitialTree() {
  if (initialFocusDone || viewMode !== "tree") return;
  initialFocusDone = true;
  if (treeDisplayMode === "overview") {
    focusGeneralView(false);
  } else {
    applyTreeDisplayMode(treeDisplayMode, { behavior: "auto" });
  }
  scheduleMinimapPeek();
}

function focusGeneralView(animate = true) {
  if (!treeWrap) return;
  treeDisplayMode = "overview";
  updateTreeModeButtons();
  const hadFocusedBranch = Boolean(focusedBranchPersonId);
  if (hadFocusedBranch) clearFocusedBranch(false);
  if (viewMode !== "tree") {
    viewMode = "tree";
    applyViewMode();
    renderScene();
    applyZoom();
    updateViewSwitch();
  } else if (hadFocusedBranch) {
    renderScene();
    applyZoom();
  }
  selectedPersonId = "";
  clearQuickFamilyFilter(false);
  clearSelectionHighlight();
  clearRelationshipHighlight();
  updateQuickFamilyFilterBar();
  if (storyPanel) storyPanel.hidden = true;
  setStoryPanelOpen(false);
  fitOverview(animate ? "smooth" : "auto");
}

function scheduleMinimapPeek() {
  if (minimapAutoPeekDone || isMobileView()) return;
  minimapAutoPeekDone = true;
  updateMinimap();
}

function applyLineageHighlight() {
  document.querySelectorAll(".person-card.path-on").forEach((el) => el.classList.remove("path-on"));
  const self = findSelfPerson();
  if (!pathMode || !self) {
    applyLanguage();
    return;
  }
  const ids = getLineageIds(self.id);
  ids.forEach((id) => {
    const group = elementByPersonId.get(id);
    if (!group) return;
    group.querySelectorAll(".person-card").forEach((card) => card.classList.add("path-on"));
  });
  applyLanguage();
}

function getLineageIds(startId) {
  const result = new Set([startId]);
  let cursor = startId;
  let guard = 0;
  while (guard < 100) {
    guard += 1;
    const parentUnion = treeData.unions.find((u) => u.children.includes(cursor));
    if (!parentUnion) break;
    if (parentUnion.partner1) result.add(parentUnion.partner1);
    if (parentUnion.partner2) result.add(parentUnion.partner2);
    cursor = parentUnion.partner1 || parentUnion.partner2;
    if (!cursor) break;
  }
  return result;
}

function validateTreeData(data) {
  const errors = [];
  if (!data || !Array.isArray(data.people) || !Array.isArray(data.unions)) {
    return [i18n[lang].errStructure];
  }
  const ids = new Set();
  data.people.forEach((person) => {
    if (!person.id) errors.push(i18n[lang].errPersonNoId);
    if (ids.has(person.id)) errors.push(formatText(i18n[lang].errDuplicateId, { id: person.id }));
    ids.add(person.id);
  });

  const childMap = new Map();
  data.unions.forEach((union) => {
    if (!union.id) errors.push(i18n[lang].errUnionNoId);
    if (union.partner1 && !ids.has(union.partner1)) {
      errors.push(formatText(i18n[lang].errPartner1Missing, { id: union.partner1 }));
    }
    if (union.partner2 && !ids.has(union.partner2)) {
      errors.push(formatText(i18n[lang].errPartner2Missing, { id: union.partner2 }));
    }
    (union.children || []).forEach((childId) => {
      if (!ids.has(childId)) errors.push(formatText(i18n[lang].errChildMissing, { id: childId }));
      if (!childMap.has(childId)) childMap.set(childId, []);
      childMap.get(childId).push(union.id);
    });
  });

  childMap.forEach((unions, childId) => {
    if (unions.length > 1) {
      errors.push(formatText(i18n[lang].errChildMultiple, { id: childId, unions: unions.join(", ") }));
    }
  });
  return errors;
}

function syncMobileLabels() {
  if (mobileQuickZoomIn) mobileQuickZoomIn.textContent = zoomInBtn.textContent;
  if (mobileQuickZoomOut) mobileQuickZoomOut.textContent = zoomOutBtn.textContent;
  if (mobileQuickZoomFit) mobileQuickZoomFit.textContent = zoomFitBtn.textContent;
}

function applyLanguage() {
  const t = i18n[lang];
  document.title = t.appKicker;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key && t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && t[key] !== undefined) el.setAttribute("title", t[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key && t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  if (treeCanvas) treeCanvas.dataset.emptyText = "";
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;
  if (viewToggle) viewToggle.textContent = viewMode === "timeline" ? t.viewTree : t.viewTimeline;
  updateSelfButtons();
  if (zoomFitBtn) zoomFitBtn.textContent = t.fit;
  if (zoomInBtn) zoomInBtn.textContent = t.zoomIn;
  if (zoomOutBtn) zoomOutBtn.textContent = t.zoomOut;
  if (zoomResetBtn) zoomResetBtn.textContent = t.zoomReset;
  if (exportPngBtn) {
    const label = exportPngBtn.querySelector('[data-i18n="exportPng"]');
    if (label) label.textContent = t.exportPng;
  }
  if (exportPdfBtn) {
    const label = exportPdfBtn.querySelector('[data-i18n="exportPdf"]');
    if (label) label.textContent = t.exportPdf;
  }
  if (toggleThemeBtn) toggleThemeBtn.checked = app.dataset.theme === "dark";
  if (langToggleBtn) langToggleBtn.checked = lang === "en";
  if (controlsToggleBtn) {
    controlsToggleBtn.textContent = controlsCollapsed ? t.controlsToggleOpen : t.controlsToggleClose;
  }
  if (mobilePanelBtn) {
    mobilePanelBtn.textContent = controlsCollapsed ? t.controlsToggleOpen : t.controlsToggleClose;
  }
  if (settingsBtn) settingsBtn.textContent = t.settingsTitle;
  if (themePresetSelect) themePresetSelect.value = themePreset;
  if (settingsCardScale) settingsCardScale.value = String(cardScale);
  if (settingsFontScale) settingsFontScale.value = String(fontScale);
  if (settingsCompact) settingsCompact.checked = compactMode;
  if (settingsMinimap) settingsMinimap.checked = minimapEnabled;
  if (settingsDrag) settingsDrag.checked = dragToPan;
  if (settingsShowBirthdate) settingsShowBirthdate.checked = showBirthdate;
  if (settingsShowAge) settingsShowAge.checked = showAge;
  if (settingsShowTags) settingsShowTags.checked = showTags;
  if (timelineMonthSelect) timelineMonthSelect.value = timelineFilters.month;
  if (timelineSearchInput) timelineSearchInput.value = timelineFilters.query || "";
  if (timelineGenderSelect) timelineGenderSelect.value = timelineFilters.gender;
  if (timelineSortSelect) timelineSortSelect.value = timelineFilters.sort;
  if (directorySearchInput) directorySearchInput.value = directoryFilters.query || "";
  if (directoryGenderSelect) directoryGenderSelect.value = directoryFilters.gender || "all";
  if (directoryBirthdayMonthSelect) directoryBirthdayMonthSelect.value = directoryFilters.birthdayMonth || "all";
  if (directoryBranchSelect) directoryBranchSelect.value = directoryFilters.branch || "all";
  if (directoryStatusSelect) directoryStatusSelect.value = directoryFilters.status || "all";
  if (directorySortSelect) directorySortSelect.value = directoryFilters.sort || "generation";
  populateRelationshipFinder();
  populateTimelineFilters();
  populateDirectoryFilters();
  updateTimelineMoreState();
  updateTimelineActiveFilters();
  updateTreeModeButtons();
  if (viewMode === "birthday") renderBirthdayPage();
  if (viewMode === "directory") renderDirectoryPage();
  if (viewMode === "profile") renderProfilePage();
  updateFocusedBranchBar();
  updateQuickFamilyFilterBar();
  renderQuickPeople();
  renderDataHealthPanel();
  updateViewSwitch();

  const branchOptions = branchFilter?.options || [];
  if (branchOptions.length > 0) {
    branchOptions[0].textContent = t.branchAll;
    for (let i = 1; i < branchOptions.length; i += 1) {
      branchOptions[i].textContent = formatText(t.branchName, { n: i });
    }
  }

  generationControls?.querySelectorAll(".gen-chip").forEach((chip) => {
    if (chip.dataset.reset) chip.textContent = t.genAll;
  });

  if (!selectedPersonId) {
    if (storyTitle) storyTitle.textContent = t.storyTitle;
    if (storyBody) storyBody.textContent = t.storyEmpty;
  }

  if (modal?.classList.contains("active") && selectedPersonId) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  syncMobileLabels();
  if (minimapHandle) minimapHandle.textContent = t.minimapShow;
  refreshIcons();
}

function minimapScrollTo(clientX, clientY) {
  if (!minimapCanvas || !treeWrap) return;
  const rect = minimapCanvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const scaleX = rect.width / baseSize.width;
  const scaleY = rect.height / baseSize.height;
  const miniScale = Math.min(scaleX, scaleY);
  const targetX = x / miniScale - treeWrap.clientWidth / (2 * scale);
  const targetY = y / miniScale - treeWrap.clientHeight / (2 * scale);
  treeWrap.scrollTo({ left: Math.max(0, targetX * scale), top: Math.max(0, targetY * scale) });
}

if (minimapCanvas) {
  minimapCanvas.addEventListener("click", (event) => {
    minimapScrollTo(event.clientX, event.clientY);
  });
}

const minimap = document.getElementById("minimap");
const minimapWrap = document.querySelector(".brand-minimap-wrap");
const minimapHandle = document.getElementById("minimap-handle");
const minimapCloseBtn = document.getElementById("minimap-close-btn");
if (minimap) {
  const isMobileView = () => window.matchMedia("(max-width: 720px)").matches;
  const activate = () => {
    minimap.classList.add("is-active");
  };
  const deactivate = () => {
    minimap.classList.remove("is-active");
  };
  let dragging = false;
  let hovering = false;
  let hideTimer = null;

  const scheduleHide = () => {
    if (isMobileView()) return;
    if (!minimapWrap) return;
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!dragging && !hovering) {
        minimapWrap.classList.add("is-collapsed");
      }
    }, 2500);
  };

  const openMinimapMobile = () => {
    if (!minimapWrap) return;
    minimapWrap.classList.add("is-open");
    minimapWrap.classList.remove("is-collapsed");
  };

  const closeMinimapMobile = () => {
    if (!minimapWrap) return;
    minimapWrap.classList.remove("is-open");
    minimapWrap.classList.add("is-collapsed");
  };

  const toggleMinimapMobile = () => {
    if (!minimapWrap) return;
    if (minimapWrap.classList.contains("is-open")) {
      closeMinimapMobile();
    } else {
      openMinimapMobile();
    }
  };

  const showMinimap = () => {
    if (!minimapWrap) return;
    if (isMobileView()) {
      toggleMinimapMobile();
      return;
    }
    minimapWrap.classList.remove("is-collapsed");
    scheduleHide();
  };

  if (minimapWrap) {
    minimapWrap.classList.add("is-collapsed");
    minimapWrap.addEventListener("mouseenter", () => {
      hovering = true;
      showMinimap();
    });
    minimapWrap.addEventListener("mouseleave", () => {
      hovering = false;
      scheduleHide();
    });
    minimapWrap.addEventListener("focusin", () => {
      hovering = true;
      showMinimap();
    });
    minimapWrap.addEventListener("focusout", () => {
      hovering = false;
      scheduleHide();
    });
    minimapWrap.addEventListener("touchstart", showMinimap, { passive: true });
    if (isMobileView()) {
      minimapWrap.classList.remove("is-open");
    }
    setTimeout(() => minimapWrap.classList.add("is-collapsed"), 50);
  }

  if (minimapHandle) {
    minimapHandle.addEventListener("click", showMinimap);
    minimapHandle.addEventListener("touchstart", showMinimap, { passive: true });
  }

  if (minimapCloseBtn) {
    minimapCloseBtn.addEventListener("click", () => {
      if (isMobileView()) closeMinimapMobile();
    });
  }

  minimap.addEventListener("pointerdown", (event) => {
    if (!minimapCanvas) return;
    dragging = true;
    minimap.setPointerCapture(event.pointerId);
    activate();
    minimapScrollTo(event.clientX, event.clientY);
    showMinimap();
    event.preventDefault();
  });

  minimap.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    minimapScrollTo(event.clientX, event.clientY);
    showMinimap();
    event.preventDefault();
  });

  const endDrag = (event) => {
    dragging = false;
    deactivate();
    if (event && minimap.hasPointerCapture(event.pointerId)) {
      minimap.releasePointerCapture(event.pointerId);
    }
  };

  minimap.addEventListener("pointerup", endDrag);
  minimap.addEventListener("pointercancel", endDrag);
  minimap.addEventListener("mouseleave", () => {
    if (dragging) endDrag();
  });
  minimap.addEventListener("mouseup", deactivate);

  scheduleHide();
  window.addEventListener("scroll", scheduleHide, true);
  window.addEventListener("touchend", scheduleHide, { passive: true });
  window.addEventListener("resize", () => {
    if (isMobileView()) {
      closeMinimapMobile();
    } else if (minimapWrap) {
      minimapWrap.classList.remove("is-open");
      scheduleHide();
    }
  });
}

function restoreFromUrl() {
  if (!GENERATION_FILTER_ENABLED) return;
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get("view");
  if (["tree", "birthday", "directory", "timeline"].includes(viewParam)) {
    viewMode = viewParam;
  }
  const monthParam = Number(params.get("birthdayMonth"));
  if (Number.isInteger(monthParam) && monthParam >= 1 && monthParam <= 12) {
    birthdayPlannerMonth = monthParam - 1;
    birthdayCalendarView = "planner";
  }
  const directoryQuery = params.get("directoryQuery");
  if (directoryQuery) directoryFilters.query = directoryQuery;
  const timelineQuery = params.get("timelineQuery");
  if (timelineQuery) timelineFilters.query = timelineQuery;
  const focusId = params.get("focus");
  const genParam = params.get("gen");
  if (genParam) {
    params.delete("gen");
    history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  }

  if (focusId && peopleById.has(focusId)) {
    setTimeout(() => {
      focusPerson(focusId, false);
    }, 200);
  }
}

function updateUrlState() {
  const params = new URLSearchParams(window.location.search);
  params.set("view", viewMode || "tree");
  if (selectedPersonId) {
    params.set("focus", selectedPersonId);
  } else {
    params.delete("focus");
  }

  const visible = [];
  for (let depth = 1; depth <= maxDepth; depth += 1) {
    if (!hiddenGenerations.has(depth)) visible.push(depth);
  }
  if (visible.length !== maxDepth) {
    params.set("gen", visible.join(","));
  } else {
    params.delete("gen");
  }

  if (viewMode === "birthday") {
    params.set("birthdayMonth", String((birthdayPlannerMonth || 0) + 1));
  } else {
    params.delete("birthdayMonth");
  }
  if (viewMode === "directory" && directoryFilters.query) {
    params.set("directoryQuery", directoryFilters.query);
  } else {
    params.delete("directoryQuery");
  }
  if (viewMode === "timeline" && timelineFilters.query) {
    params.set("timelineQuery", timelineFilters.query);
  } else {
    params.delete("timelineQuery");
  }

  const query = params.toString();
  history.replaceState({}, "", query ? `${window.location.pathname}?${query}` : window.location.pathname);
}
