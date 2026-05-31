// ============================================================
// APP CONFIG — Runtime configuration
// Data personal & UI settings yang bisa diubah tanpa rebuild
// Diakses via useAppConfig() di mana saja
// ============================================================

export default defineAppConfig({
  // Data personal — ganti sesuai kebutuhanmu
  global: {
    name: 'Alifian Zulfaani',
    role: 'Full Stack Developer',
    picture: {
      dark: '/photo/alif2.webp',
      light: '/photo/alif2.webp',
      alt: 'Alifian Zulfaani'
    },
    meetingLink: 'https://wa.me/6285740636055',
    email: 'alifianzulfaani27@gmail.com',
    available: true
  },

  // Nuxt UI color config
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },

  // Footer config — dipakai oleh AppFooter component
  footer: {
    credits: `Crafted with Nuxt & ❤️ • © ${new Date().getFullYear()} Alifian Zulfaani`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Alifian-Zulfaani',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/alifian-zulfaani/',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/alifian.zulfaani/',
      'target': '_blank',
      'aria-label': 'Instagram'
    }]
  }
})
