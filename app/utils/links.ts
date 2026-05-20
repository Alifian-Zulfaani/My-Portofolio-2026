// ============================================================
// NAV LINKS — Definisi navigasi utama
// Auto-imported oleh Nuxt di seluruh app (utils/ = auto-import)
// Dipakai di: AppNavbar, ContentSearch, error page
// Tanpa Speaking — sesuai request
// ============================================================

import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}, {
  label: 'Project',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Blog',
  icon: 'i-lucide-file-text',
  to: '/blog'
}]
