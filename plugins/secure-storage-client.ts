export default defineNuxtPlugin(() => {
    // Only run on client side
    if (import.meta.server) return
  
    let secureLS: any = null
  
    // Initialize secure-ls asynchronously
    const initSecureLS = async () => {
      try {
        // Dynamic import of secure-ls
        const SecureLS = await import('secure-ls')
        const config = useRuntimeConfig()
        secureLS = new SecureLS.default({
          encodingType: 'aes',
          encryptionSecret: config.secureStorageKey,
          isCompression: true
        })
      } catch (error) {
        console.warn('Failed to load secure-ls, using fallback:', error)
        
        // Fallback to simple encryption
        const simpleEncrypt = (text: string, key: string): string => {
          return btoa(encodeURIComponent(text + key))
        }
        
        const simpleDecrypt = (encryptedText: string, key: string): string | null => {
          try {
            const decoded = decodeURIComponent(atob(encryptedText))
            return decoded.replace(key, '')
          } catch {
            return null
          }
        }
  
        secureLS = {
          set: (key: string, value: any) => {
            try {
              const encrypted = simpleEncrypt(JSON.stringify(value), 'trekker-key-2024')
              localStorage.setItem(key, encrypted)
            } catch (error) {
              console.error('Secure storage set failed:', error)
              // Fallback to regular localStorage
              try {
                localStorage.setItem(key, JSON.stringify(value))
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
              }
            }
          },
          get: (key: string) => {
            try {
              const encrypted = localStorage.getItem(key)
              if (!encrypted) return null
              const decrypted = simpleDecrypt(encrypted, 'trekker-key-2024')
              return decrypted ? JSON.parse(decrypted) : null
            } catch (error) {
              console.error('Secure storage get failed:', error)
              // Fallback to regular localStorage
              try {
                const fallbackValue = localStorage.getItem(key)
                return fallbackValue ? JSON.parse(fallbackValue) : null
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
                return null
              }
            }
          },
          remove: (key: string) => {
            try {
              localStorage.removeItem(key)
            } catch (error) {
              console.error('Secure storage remove failed:', error)
            }
          },
          clear: () => {
            try {
              localStorage.clear()
            } catch (error) {
              console.error('Secure storage clear failed:', error)
            }
          },
          getAllKeys: () => {
            try {
              return Object.keys(localStorage)
            } catch (error) {
              console.error('Secure storage getAllKeys failed:', error)
              return []
            }
          }
        }
      }
    }
  
    // Initialize immediately
    initSecureLS()
  
    // Provide secure storage globally
    return {
      provide: {
        secureStorage: {
          set: (key: string, value: any) => {
            if (!secureLS) {
              // Fallback to regular localStorage if secure-ls is not available
              try {
                localStorage.setItem(key, JSON.stringify(value))
              } catch (error) {
                console.error('localStorage set failed:', error)
              }
              return
            }
            
            try {
              secureLS.set(key, value)
            } catch (error) {
              console.error('Secure storage set failed:', error)
              // Fallback to regular localStorage
              try {
                localStorage.setItem(key, JSON.stringify(value))
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
              }
            }
          },
          get: (key: string) => {
            if (!secureLS) {
              // Fallback to regular localStorage if secure-ls is not available
              try {
                const fallbackValue = localStorage.getItem(key)
                return fallbackValue ? JSON.parse(fallbackValue) : null
              } catch (error) {
                console.error('localStorage get failed:', error)
                return null
              }
            }
            
            try {
              return secureLS.get(key)
            } catch (error) {
              console.error('Secure storage get failed:', error)
              // Fallback to regular localStorage
              try {
                const fallbackValue = localStorage.getItem(key)
                return fallbackValue ? JSON.parse(fallbackValue) : null
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
                return null
              }
            }
          },
          remove: (key: string) => {
            if (!secureLS) {
              // Fallback to regular localStorage if secure-ls is not available
              try {
                localStorage.removeItem(key)
              } catch (error) {
                console.error('localStorage remove failed:', error)
              }
              return
            }
            
            try {
              secureLS.remove(key)
            } catch (error) {
              console.error('Secure storage remove failed:', error)
              // Fallback to regular localStorage
              try {
                localStorage.removeItem(key)
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
              }
            }
          },
          clear: () => {
            if (!secureLS) {
              // Fallback to regular localStorage if secure-ls is not available
              try {
                localStorage.clear()
              } catch (error) {
                console.error('localStorage clear failed:', error)
              }
              return
            }
            
            try {
              secureLS.clear()
            } catch (error) {
              console.error('Secure storage clear failed:', error)
              // Fallback to regular localStorage
              try {
                localStorage.clear()
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
              }
            }
          },
          getAllKeys: () => {
            if (!secureLS) {
              // Fallback to regular localStorage if secure-ls is not available
              try {
                return Object.keys(localStorage)
              } catch (error) {
                console.error('localStorage getAllKeys failed:', error)
                return []
              }
            }
            
            try {
              return secureLS.getAllKeys()
            } catch (error) {
              console.error('Secure storage getAllKeys failed:', error)
              // Fallback to regular localStorage
              try {
                return Object.keys(localStorage)
              } catch (fallbackError) {
                console.error('Fallback localStorage also failed:', fallbackError)
                return []
              }
            }
          }
        }
      }
    }
  }) 