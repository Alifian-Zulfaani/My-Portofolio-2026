# 🚀 Alifian Zulfaani's Web Portfolio 2026

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Nuxt UI v4](https://img.shields.io/badge/Nuxt_UI-v4.x-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white)](https://ui.nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)

Website portofolio pribadi modern, interaktif, dan berkinerja tinggi yang dibangun menggunakan **Nuxt 4** dan **Nuxt Content v3**. Portofolio ini dirancang untuk menampilkan profil profesional, pengalaman kerja, proyek yang telah dikerjakan, serta tulisan artikel (blog) dalam satu platform terintegrasi dengan performa optimal.

---

## ✨ Fitur Utama

- **⚡ Nuxt 4 Engine**: Menggunakan versi terbaru Nuxt dengan struktur direktori modern (`app/`) untuk performa rendering dan developer experience terbaik.
- **🎨 Tailwind CSS v4 & Nuxt UI v4**: Menggunakan utilitas styling terbaru Tailwind v4 yang dikombinasikan dengan komponen elegan dari Nuxt UI v4 (warna primer `indigo` dan netral `slate`).
- **📝 Headless CMS (Nuxt Content v3)**: Manajemen konten yang sangat mudah melalui file YAML dan Markdown. Seluruh data divalidasi menggunakan Zod schema di `content.config.ts`.
- **🌓 Mode Gelap/Terang (Dark & Light Mode)**: Dukungan penuh tema gelap dan terang dengan deteksi preferensi sistem otomatis.
- **🎬 Animasi Halus**: Animasi transisi dan interaksi mikro yang ditenagai oleh **Motion One** (`motion-v`).
- **🔍 SEO & OG Image**: Dukungan optimalisasi mesin pencari (SEO) bawaan serta pembuatan gambar pratayang sosial secara dinamis menggunakan `nuxt-og-image`.
- **📱 Desain Responsif**: Tampilan yang dioptimalkan secara penuh untuk perangkat mobile, tablet, hingga desktop.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi / Library | Deskripsi |
| :--- | :--- | :--- |
| **Core Framework** | [Nuxt 4](https://nuxt.com/) & [Vue 3](https://vuejs.org/) | Framework SSR/SSG progresif untuk membangun aplikasi web modern. |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) & [Nuxt UI v4](https://ui.nuxt.com/) | Kerangka CSS utilitas modern dan komponen UI berbasis Tailwind CSS. |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) | Superset JavaScript untuk penulisan kode yang lebih aman (*type-safe*). |
| **Konten (CMS)** | [@nuxt/content v3](https://content.nuxt.com/) & Zod | Mengelola data berbasis berkas lokal (.yml & .md) dengan validasi skema. |
| **Animasi** | [Motion-V (Motion One)](https://motion.dev/) | Library animasi berperforma tinggi untuk transisi komponen yang interaktif. |
| **Utility & State** | [@vueuse/nuxt](https://vueuse.org/) | Koleksi *composition utilities* penting untuk Vue. |
| **Iconography** | [@iconify/json](https://iconify.design/) (Lucide & Simple Icons) | Penyedia ikon modern terintegrasi dengan Nuxt UI. |
| **Database/Storage** | `better-sqlite3` | Digunakan secara internal untuk caching dan manajemen data cepat pada Nuxt Content. |

---

## 📁 Struktur Folder & Fungsi

Project ini mengikuti struktur direktori **Nuxt 4** di mana semua logika aplikasi berada di dalam folder `app/`, dan seluruh data statis/konten berada di folder `content/`.

```text
my-portofolio-2026/
├── .nuxt/                  # Folder build otomatis Nuxt (jangan diedit langsung)
├── app/                    # Sumber utama aplikasi web (Nuxt 4 Application)
│   ├── assets/             # Berkas CSS global (`assets/css/main.css`)
│   ├── components/         # Komponen Vue yang reusable
│   │   ├── landing/        # Komponen khusus halaman utama (Hero, About, Experience, dll.)
│   │   ├── AppFooter.vue   # Komponen Footer global
│   │   ├── AppNavbar.vue   # Komponen Header/Navbar global dan responsif
│   │   ├── ColorModeButton.vue # Tombol toggle mode gelap/terang
│   │   └── SkillBadge.vue  # Lencana untuk menampilkan keahlian (skills)
│   ├── layouts/            # Layout struktur halaman
│   │   └── default.vue     # Layout utama yang membungkus Navbar, konten, dan Footer
│   ├── pages/              # Halaman-halaman rute situs web (Page Routes)
│   │   ├── blog/           # Folder rute Blog
│   │   │   ├── [...slug].vue # Halaman detail artikel blog dinamis
│   │   │   └── index.vue   # Halaman daftar seluruh artikel blog
│   │   ├── about.vue       # Halaman profil lengkap ("About Me")
│   │   ├── index.vue       # Halaman utama (Home Page)
│   │   └── projects.vue    # Halaman showcase proyek-proyek
│   ├── utils/              # Fungsi helper utilitas aplikasi
│   ├── app.config.ts       # Konfigurasi data personal, tema warna, dan tautan sosial
│   ├── app.vue             # Komponen root aplikasi
│   └── error.vue           # Halaman penanganan error kustom (404, 500, dll.)
├── content/                # Database file konten (Markdown & YAML)
│   ├── blog/               # Berkas tulisan/artikel blog (.md dengan frontmatter)
│   │   └── vibe-coding-era.md # Artikel contoh mengenai era Vibe Coding
│   ├── projects/           # Berkas detail proyek (.yml)
│   │   └── ikasda-madiun.yml # Detail data proyek IKASDA Madiun
│   ├── about.yml           # Konten biografi dan daftar keahlian (skills)
│   ├── blog.yml            # Konfigurasi header dan tautan halaman blog
│   ├── index.yml           # Data lengkap halaman utama (Hero, Testimoni, FAQ)
│   └── projects.yml        # Konfigurasi header dan tautan halaman proyek
├── public/                 # Aset statis publik (gambar profil, logo perusahaan, dll.)
├── content.config.ts       # Definisi Zod schema untuk memvalidasi berkas di folder `content/`
├── eslint.config.mjs       # Konfigurasi ESLint untuk standarisasi penulisan kode
├── nuxt.config.ts          # Berkas konfigurasi utama Nuxt (modules, routing, css)
├── package.json            # Dependensi proyek dan skrip build/dev
└── tsconfig.json           # Konfigurasi TypeScript compiler
```

### Penjelasan Detail Komponen Utama:

1. **`app/app.config.ts`**: Ini adalah pusat data runtime aplikasi. Kamu dapat mengubah nama, peran, foto profil, tautan WhatsApp (`meetingLink`), email, serta akun media sosial di footer tanpa perlu mengubah kode komponen.
2. **`content.config.ts`**: Tempat mendefinisikan skema data untuk memastikan setiap file di folder `content/` memiliki format yang sesuai. Membantu menghindari error runtime akibat salah ketik pada properti konten.
3. **`app/pages/`**:
   - `index.vue` merakit komponen dari `app/components/landing/` secara modular.
   - `projects.vue` memuat seluruh data dari `content/projects/*.yml` secara dinamis.
   - `blog/index.vue` memuat daftar berkas Markdown di `content/blog/` dan mengurutkannya berdasarkan tanggal.
   - `blog/[...slug].vue` merender isi berkas Markdown artikel secara lengkap beserta elemen HTML/Markdown di dalamnya.

---

## 🚀 Cara Menjalankan Project Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi rekomendasi: v18 ke atas) dan **NPM** atau Package Manager lainnya (seperti PNPM / Yarn / Bun).

### 2. Instal Dependensi
Jalankan perintah berikut di terminal untuk memasang seluruh library yang dibutuhkan:
```bash
npm install
```

### 3. Jalankan Mode Development
Mulai server lokal untuk mulai melakukan pengembangan:
```bash
npm run dev
```
Setelah berjalan, buka tautan `http://localhost:3000` di peramban (browser) Anda.

### 4. Build untuk Produksi
Untuk melakukan kompilasi proyek sebelum di-deploy to hosting (seperti Vercel, Netlify, atau VPS):
```bash
npm run build
```

Setelah selesai di-build, Anda bisa mencobanya secara lokal dengan menjalankan:
```bash
npm run preview
```

### 5. Linter Check
Untuk memeriksa kualitas dan standarisasi kode:
```bash
# Cek kesalahan sintaks/linter
npm run lint

# Memperbaiki otomatis kesalahan linter yang terdeteksi
npm run lint:fix
```

---

## ✏️ Cara Melakukan Kustomisasi Konten

Situs ini dibangun agar sangat mudah diperbarui kontennya tanpa harus menyentuh kode program Vue:

- **Mengubah Informasi Profil**:
  Edit file `app/app.config.ts` pada objek `global` dan `footer.links`.
- **Mengubah Halaman Utama (Hero, Pengalaman, Testimoni, FAQ)**:
  Buka file `content/index.yml` dan sesuaikan teks, urutan pengalaman kerja, testimoni, atau pertanyaan FAQ yang ingin ditampilkan.
- **Menambah Proyek Baru**:
  Buat file YAML baru di dalam folder `content/projects/` (misalnya `proyek-saya.yml`) mengikuti format skema proyek yang didefinisikan di `content.config.ts`.
- **Menulis Artikel Blog**:
  Buat file Markdown `.md` baru di dalam folder `content/blog/` (misalnya `artikel-baru.md`). Di bagian paling atas file, sertakan konfigurasi frontmatter seperti berikut:
  ```markdown
  ---
  title: "Judul Artikel Menarik Anda"
  description: "Deskripsi singkat artikel untuk preview halaman."
  date: 2026-05-22
  minRead: 5
  image: "/path/ke/gambar-sampul.jpg"
  author:
    name: "Alifian Zulfaani"
    username: "alifianzulfaani"
    avatar:
      src: "/photo/alif2.png"
      alt: "Alifian Zulfaani"
  ---
  
  Tulis konten artikel Anda di sini menggunakan format Markdown biasa...
  ```

---

Crafted with Nuxt & ❤️ by [Alifian Zulfaani](https://github.com/Alifian-Zulfaani)
