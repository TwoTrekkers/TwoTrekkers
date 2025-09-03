export default defineNuxtPlugin(() => {
  const { hasConsent, isCookieAllowed } = useCookieConsent()
  
  // Provide cookie consent utilities globally
  return {
    provide: {
      cookieConsent: {
        hasConsent: () => hasConsent(),
        isCookieAllowed: (type: string) => isCookieAllowed(type as any),
        // Add any additional cookie-related utilities here
      }
    }
  }
}) 