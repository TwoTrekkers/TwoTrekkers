// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from 'node:fs'

let memoirRoutes: string[] = []
try {
  if (existsSync('public/data/memoirs.json')) {
    const raw = readFileSync('public/data/memoirs.json', 'utf8')
    const arr = JSON.parse(raw)
    if (Array.isArray(arr)) memoirRoutes = arr.map((m: any) => `/memoirs/${m.a}`)
  }
} catch (error) {
  console.warn('Failed to load memoirs data:', error)
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // GitHub Pages static site generation
  nitro: {
    compressPublicAssets: true,
    minify: true,
    // Static site generation for GitHub Pages
    prerender: {
      routes: ['/sitemap.xml'],
      ignore: ['/contact'],
      failOnError: false
    }
  },
  
  // Ensure proper static generation
  ssr: true,
  
  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  },
  
  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    secureStorageKey: process.env.NUXT_SECURE_STORAGE_KEY || 'trekker-secure-storage-key-2024',
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://twotrekkers.github.io/TwoTrekkers',
      analyticsId: process.env.NUXT_PUBLIC_ANALYTICS_ID || '',
      cdnUrl: process.env.NUXT_PUBLIC_CDN_URL || 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'zh-CN', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'zh-TW', iso: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
      { code: 'zh-HK', iso: 'zh-HK', name: '繁體中文(香港)', file: 'zh-HK.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'pt', iso: 'pt-PT', name: 'Português', file: 'pt.json' },
      { code: 'ja', iso: 'ja-JP', name: '日本語', file: 'ja.json' },
      { code: 'ko', iso: 'ko-KR', name: '한국어', file: 'ko.json' },
      { code: 'he', iso: 'he-IL', name: 'עברית', file: 'he.json' },
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.json' }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en',
      cookieSecure: process.env.NODE_ENV === 'production'
    }
  },
  
  // GitHub Pages configuration
  app: {
    baseURL: '/TwoTrekkers/',
    buildAssetsDir: '/TwoTrekkers/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Two Trekkers - Travel & Relocation Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional travel and relocation services. Expert guidance for nomads, travelers, and those seeking new adventures worldwide.' },
        { name: 'keywords', content: 'travel services, relocation, nomad lifestyle, travel consultancy, destination guides, travel planning' },
        { name: 'author', content: 'Two Trekkers' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'Two Trekkers' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        // Security
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        // Open Graph
        { property: 'og:title', content: 'Two Trekkers - Travel & Relocation Services' },
        { property: 'og:description', content: 'Professional travel and relocation services. Expert guidance for nomads, travelers, and those seeking new adventures worldwide.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://twotrekkers.github.io/TwoTrekkers' },
        { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
        { property: 'og:site_name', content: 'Two Trekkers' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Two Trekkers - Travel & Relocation Services' },
        { name: 'twitter:description', content: 'Professional travel and relocation services. Expert guidance for nomads, travelers, and those seeking new adventures worldwide.' },
        { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#3b82f6' }
      ],
      link: [
        // Favicon - SVG version (modern browsers)
        { rel: 'icon', type: 'image/svg+xml', href: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
        // Apple touch icon
        { rel: 'apple-touch-icon', href: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
        // Canonical and other links
        { rel: 'canonical', href: 'https://twotrekkers.github.io/TwoTrekkers' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com' }
      ],
      script: [
        // Add structured data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Two Trekkers',
            description: 'Professional travel and relocation services',
            url: 'https://twotrekkers.github.io/TwoTrekkers',
            logo: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg',
            sameAs: [
              'https://instagram.com/twotrekkers'
            ]
          })
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  
  // Optimize CSS loading for static generation
  vite: {
    css: {
      devSourcemap: false // Disable sourcemaps in production
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            utils: ['@vueuse/core']
          }
        }
      },
      // Optimize chunk size
      chunkSizeWarningLimit: 1000
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core']
    },
    // Add compression
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }
  },
  
  // Ensure CSS is properly processed
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' && {
        cssnano: {
          preset: ['default', {
            discardComments: {
              removeAll: true
            }
          }]
        }
      })
    }
  }
})
