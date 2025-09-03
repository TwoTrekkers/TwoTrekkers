export const useLanguagePersistence = () => {
    const { locale, locales } = useI18n()
    const switchLocalePath = useSwitchLocalePath()
    const route = useRoute()
    const { getLanguagePreference, setLanguagePreference } = useStorage()
  
    // Get stored language preference
    const getStoredLanguage = (): string | null => {
      if (import.meta.client) {
        try {
          return getLanguagePreference()
        } catch (error) {
          console.warn('Failed to get language from secure storage:', error)
          return null
        }
      }
      return null
    }
  
    // Store language preference
    const storeLanguage = (languageCode: string): void => {
      if (import.meta.client) {
        try {
          setLanguagePreference(languageCode)
        } catch (error) {
          console.warn('Failed to store language in secure storage:', error)
        }
      }
    }
  
    // Switch to a specific language
    const switchToLanguage = (languageCode: string): void => {
      // Store the preference first
      storeLanguage(languageCode)
      
      // Get the path for the new locale
      const path = switchLocalePath(languageCode as any)
      
      if (path) {
        // Navigate to the new locale path
        navigateTo(path)
      }
    }
  
    // Get current language code
    const getCurrentLanguage = (): string => {
      return locale.value || 'en'
    }
  
    // Get current language name
    const getCurrentLanguageName = (): string => {
      const current = locales.value.find((l: any) => l.code === locale.value)
      return current?.name || 'English'
    }
  
    // Get all available languages
    const getAvailableLanguages = () => {
      return locales.value
    }
  
    return {
      getStoredLanguage,
      storeLanguage,
      switchToLanguage,
      getCurrentLanguage,
      getCurrentLanguageName,
      getAvailableLanguages
    }
  } 