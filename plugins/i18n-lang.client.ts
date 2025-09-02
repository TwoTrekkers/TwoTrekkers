export default defineNuxtPlugin((nuxtApp) => {
  const { setLocale } = useI18n()
  nuxtApp.hook('page:finish', () => {
    const url = new URL(window.location.href)
    const lang = url.searchParams.get('lang')
    if (lang) {
      setLocale(lang)
      document.cookie = `i18n_redirected=${lang}; path=/; SameSite=Strict`
    }
  })
})


