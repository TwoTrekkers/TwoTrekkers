export const useStorage = () => {
    const { setItem, getItem, removeItem, clear, getAllKeys, hasKey } = useSecureStorage()
  
    // Common storage keys
    const STORAGE_KEYS = {
      LANGUAGE_PREFERENCE: 'trekker_language_preference',
      POLICIES_ACCEPTED: 'policiesAccepted',
      USER_PREFERENCES: 'user_preferences',
      THEME_SETTING: 'theme_setting',
      SESSION_DATA: 'session_data'
    } as const
  
    // Language preference storage
    const getLanguagePreference = (): string | null => {
      return getItem<string>(STORAGE_KEYS.LANGUAGE_PREFERENCE)
    }
  
    const setLanguagePreference = (language: string): void => {
      setItem(STORAGE_KEYS.LANGUAGE_PREFERENCE, language)
    }
  
    // Privacy policies storage
    const getPoliciesAccepted = (): boolean => {
      return getItem<boolean>(STORAGE_KEYS.POLICIES_ACCEPTED) || false
    }
  
    const setPoliciesAccepted = (accepted: boolean): void => {
      setItem(STORAGE_KEYS.POLICIES_ACCEPTED, accepted)
    }
  
    // User preferences storage
    const getUserPreferences = (): Record<string, any> => {
      return getItem<Record<string, any>>(STORAGE_KEYS.USER_PREFERENCES) || {}
    }
  
    const setUserPreferences = (preferences: Record<string, any>): void => {
      setItem(STORAGE_KEYS.USER_PREFERENCES, preferences)
    }
  
    const updateUserPreference = (key: string, value: any): void => {
      const preferences = getUserPreferences()
      preferences[key] = value
      setUserPreferences(preferences)
    }
  
    // Theme storage
    const getThemeSetting = (): string => {
      return getItem<string>(STORAGE_KEYS.THEME_SETTING) || 'dark'
    }
  
    const setThemeSetting = (theme: string): void => {
      setItem(STORAGE_KEYS.THEME_SETTING, theme)
    }
  
    // Session data storage
    const getSessionData = (): Record<string, any> => {
      return getItem<Record<string, any>>(STORAGE_KEYS.SESSION_DATA) || {}
    }
  
    const setSessionData = (data: Record<string, any>): void => {
      setItem(STORAGE_KEYS.SESSION_DATA, data)
    }
  
    const updateSessionData = (key: string, value: any): void => {
      const sessionData = getSessionData()
      sessionData[key] = value
      setSessionData(sessionData)
    }
  
    // Clear all storage
    const clearAllStorage = (): void => {
      clear()
    }
  
    // Clear specific storage
    const clearLanguagePreference = (): void => {
      removeItem(STORAGE_KEYS.LANGUAGE_PREFERENCE)
    }
  
    const clearUserPreferences = (): void => {
      removeItem(STORAGE_KEYS.USER_PREFERENCES)
    }
  
    const clearSessionData = (): void => {
      removeItem(STORAGE_KEYS.SESSION_DATA)
    }
  
    return {
      // Storage keys
      STORAGE_KEYS,
      
      // Language preference
      getLanguagePreference,
      setLanguagePreference,
      clearLanguagePreference,
      
      // Privacy policies
      getPoliciesAccepted,
      setPoliciesAccepted,
      
      // User preferences
      getUserPreferences,
      setUserPreferences,
      updateUserPreference,
      clearUserPreferences,
      
      // Theme
      getThemeSetting,
      setThemeSetting,
      
      // Session data
      getSessionData,
      setSessionData,
      updateSessionData,
      clearSessionData,
      
      // General storage operations
      setItem,
      getItem,
      removeItem,
      clear: clearAllStorage,
      getAllKeys,
      hasKey
    }
  } 