// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  // ============================================================
  // IMAGE OPTIMIZATION — @nuxt/image config
  // ============================================================
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },

  // ============================================================
  // BUILD OPTIMIZATION
  // ============================================================
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    },
    compressPublicAssets: true
  },

  // Disable sourcemaps in production to save memory during build
  // Fixes "Missing source maps for large first-party JavaScript" warning
  sourcemap: {
    server: false,
    client: false
  },

  experimental: {
    payloadExtraction: true
  },

  // ============================================================
  // ROUTE RULES — Caching for static assets
  // ============================================================
  routeRules: {
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
