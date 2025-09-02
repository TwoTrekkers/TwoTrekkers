// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from 'node:fs'

let memoirRoutes: string[] = []
try {
  if (existsSync('public/data/memoirs.json')) {
    const raw = readFileSync('public/data/memoirs.json', 'utf8')
    const arr = JSON.parse(raw)
    if (Array.isArray(arr)) memoirRoutes = arr.map((m: any) => `/memoirs/${m.a}`)
  }
} catch {}

export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    // Ensure nuxt-i18n resolves locales from project root rather than `i18n/`
    restructureDir: '.',
    langDir: 'locales',
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
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  tailwindcss: {
    cssPath: '~~/assets/css/tailwind.css'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: memoirRoutes
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        
      ]
    }
  }
})
