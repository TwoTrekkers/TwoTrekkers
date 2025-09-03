import { watch } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return

  const setHtmlLang = (lang?: string) => {
    if (lang) document.documentElement.lang = lang
  }

  // Set initial lang after app mounts to avoid hydration mismatch
  nuxtApp.hook('app:mounted', () => {
    const i18n: any = (nuxtApp as any).$i18n
    const current = typeof i18n?.locale === 'string' ? i18n.locale : i18n?.locale?.value
    setHtmlLang(current || document.documentElement.lang)

    // If locale is reactive, watch it for changes
    const maybeRef = i18n?.locale
    if (maybeRef && typeof maybeRef === 'object' && 'value' in maybeRef) {
      watch(() => (maybeRef as any).value, (newLocale: string) => setHtmlLang(newLocale))
    }
  })
})
