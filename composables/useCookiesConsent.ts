export interface CookiePreferences {
    necessary: boolean
    analytics: boolean
    preferences: boolean
    marketing: boolean
    timestamp: number
  }
  
  export interface CookieConsent {
    accepted: boolean
    preferences: CookiePreferences
    lastUpdated: number
  }
  
  export const useCookieConsent = () => {
    const { setItem, getItem } = useSecureStorage()
    
    const COOKIE_CONSENT_KEY = 'trekker_cookie_consent'
    
    // Default cookie preferences (necessary cookies are always enabled)
    const defaultPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      preferences: false,
      marketing: false,
      timestamp: Date.now()
    }
    
    // Get current cookie consent status
    const getCookieConsent = (): CookieConsent | null => {
      try {
        // Use secure storage as primary storage
        const consent = getItem<CookieConsent>(COOKIE_CONSENT_KEY)
        if (consent && consent.accepted && consent.preferences) {
          return consent
        }
        
        return null
      } catch (error) {
        console.warn('Error getting cookie consent:', error)
        return null
      }
    }
    
    // Check if user has given consent
    const hasConsent = (): boolean => {
      try {
        const consent = getCookieConsent()
        
        // Check if consent is valid and recent (within last year)
        if (consent?.accepted && consent?.preferences && consent?.lastUpdated) {
          const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000)
          if (consent.lastUpdated > oneYearAgo) {
            return true
          }
        }
        
        return false
      } catch (error) {
        console.warn('Error checking cookie consent:', error)
        return false // Default to showing banner if there's an error
      }
    }
    
    // Check if specific cookie type is allowed
    const isCookieAllowed = (type: keyof CookiePreferences): boolean => {
      const consent = getCookieConsent()
      if (!consent?.accepted) return false
      
      // Necessary cookies are always allowed if consent is given
      if (type === 'necessary') return true
      
      const preference = consent.preferences[type]
      return typeof preference === 'boolean' ? preference : false
    }
    
    // Accept all cookies
    const acceptAll = (): void => {
      try {
        const preferences: CookiePreferences = {
          necessary: true,
          analytics: true,
          preferences: true,
          marketing: true,
          timestamp: Date.now()
        }
        
        const consent: CookieConsent = {
          accepted: true,
          preferences,
          lastUpdated: Date.now()
        }
        
        // Save to secure storage
        setItem(COOKIE_CONSENT_KEY, consent)
        
      } catch (error) {
        console.error('Error accepting all cookies:', error)
      }
    }
    
    // Accept only necessary cookies
    const acceptNecessary = (): void => {
      try {
        const consent: CookieConsent = {
          accepted: true,
          preferences: defaultPreferences,
          lastUpdated: Date.now()
        }
        
        // Save to secure storage
        setItem(COOKIE_CONSENT_KEY, consent)
        
      } catch (error) {
        console.error('Error accepting necessary cookies:', error)
      }
    }
    
    // Reject all cookies (except necessary)
    const rejectAll = (): void => {
      try {
        const consent: CookieConsent = {
          accepted: true,
          preferences: defaultPreferences,
          lastUpdated: Date.now()
        }
        
        // Save to secure storage
        setItem(COOKIE_CONSENT_KEY, consent)
        
      } catch (error) {
        console.error('Error rejecting cookies:', error)
      }
    }
    
    // Update specific cookie preferences
    const updatePreferences = (preferences: Partial<CookiePreferences>): void => {
      const currentConsent = getCookieConsent()
      if (!currentConsent) return
      
      const updatedPreferences: CookiePreferences = {
        ...currentConsent.preferences,
        ...preferences,
        timestamp: Date.now()
      }
      
      const updatedConsent: CookieConsent = {
        ...currentConsent,
        preferences: updatedPreferences,
        lastUpdated: Date.now()
      }
      
      // Save to secure storage
      setItem(COOKIE_CONSENT_KEY, updatedConsent)
    }
    
    // Clear cookie consent
    const clearConsent = (): void => {
      const { removeItem } = useSecureStorage()
      removeItem(COOKIE_CONSENT_KEY)
    }
  
    // Force refresh consent status (useful for debugging)
    const refreshConsentStatus = (): boolean => {
      // Clear any cached data and re-check
      const currentConsent = getCookieConsent()
      return hasConsent()
    }
    
    // Get cookie preferences for display
    const getPreferences = (): CookiePreferences => {
      const consent = getCookieConsent()
      return consent?.preferences || defaultPreferences
    }
  
    // Cookie management functions
    const setCookie = (name: string, value: string, days: number = 365, type: keyof CookiePreferences = 'necessary'): void => {
      // Only run on client side
      if (import.meta.server) return
      
      if (!isCookieAllowed(type)) {
        return
      }
      
      const expires = new Date()
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
    }
  
    const getCookie = (name: string): string | null => {
      // Only run on client side
      if (import.meta.server) return null
      
      const nameEQ = name + "="
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        if (!c) continue
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    }
  
    const deleteCookie = (name: string): void => {
      // Only run on client side
      if (import.meta.server) return
      
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
    }
  
    const deleteAllCookies = (): void => {
      // Only run on client side
      if (import.meta.server) return
      
      const cookies = document.cookie.split(";")
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        if (!cookie) continue
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()
        deleteCookie(name)
      }
    }
  
    const deleteCookiesByType = (type: keyof CookiePreferences): void => {
      // Only run on client side
      if (import.meta.server) return
      
      // Define cookie names by type (based on actual app usage)
      const cookieTypes: Record<keyof CookiePreferences, string[]> = {
        necessary: ['i18n_redirected'], // Only language detection cookie
        analytics: [], // No analytics cookies currently used
        preferences: [], // Preferences stored in localStorage, not cookies
        marketing: [], // No marketing cookies currently used
        timestamp: [] // No cookies for timestamp
      }
      
      const cookiesToDelete = cookieTypes[type] || []
      cookiesToDelete.forEach(cookieName => {
        deleteCookie(cookieName)
      })
    }
  
    // Apply cookie preferences (delete cookies that are not allowed)
    const applyCookiePreferences = (): void => {
      // Only run on client side
      if (import.meta.server) return
      
      const consent = getCookieConsent()
      if (!consent?.accepted) {
        // If no consent, delete all non-necessary cookies
        deleteCookiesByType('analytics')
        deleteCookiesByType('preferences')
        deleteCookiesByType('marketing')
        return
      }
  
      const preferences = consent.preferences
      
      // Delete cookies for types that are not allowed
      if (!preferences.analytics) deleteCookiesByType('analytics')
      if (!preferences.preferences) deleteCookiesByType('preferences')
      if (!preferences.marketing) deleteCookiesByType('marketing')
    }
  
    // Manage localStorage based on consent (since app uses localStorage for preferences)
    const applyLocalStoragePreferences = (): void => {
      // Only run on client side
      if (import.meta.server) return
      
      const consent = getCookieConsent()
      if (!consent?.accepted) {
        // If no consent, clear all localStorage except language preference
        const { clear } = useSecureStorage()
        clear()
        return
      }
  
      const preferences = consent.preferences
      
      // Clear localStorage for types that are not allowed
      if (!preferences.preferences) {
        const { removeItem } = useSecureStorage()
        // Remove preference-related localStorage items
        removeItem('user_preferences')
        removeItem('theme_setting')
        // Keep language preference as it's necessary
      }
    }
    
  
  
    return {
      // State
      hasConsent,
      isCookieAllowed,
      getPreferences,
      getCookieConsent,
      
      // Actions
      acceptAll,
      acceptNecessary,
      rejectAll,
      updatePreferences,
      clearConsent,
      refreshConsentStatus,
      
      // Cookie Management
      setCookie,
      getCookie,
      deleteCookie,
      deleteAllCookies,
      deleteCookiesByType,
      applyCookiePreferences,
      applyLocalStoragePreferences,
      
  
      
      // Constants
      COOKIE_CONSENT_KEY,
      defaultPreferences
    }
  } 