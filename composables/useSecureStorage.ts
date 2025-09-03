export const useSecureStorage = () => {
    let ls: any = null
  
    // Only initialize secure-ls on the client side
    if (import.meta.client && typeof window !== 'undefined') {
      try {
        // Dynamic import of secure-ls
        const initSecureLS = async () => {
          const SecureLS = await import('secure-ls')
          ls = new SecureLS.default({
            encodingType: 'aes',
            encryptionSecret: 'trekker-secure-storage-key-2024',
            isCompression: true
          })
        }
        
        // Initialize immediately
        initSecureLS().catch((error) => {
          console.warn('Failed to load secure-ls:', error)
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
  
          ls = {
            set: (key: string, value: any) => {
              const encrypted = simpleEncrypt(JSON.stringify(value), 'trekker-key-2024')
              localStorage.setItem(key, encrypted)
            },
            get: (key: string) => {
              try {
                const encrypted = localStorage.getItem(key)
                if (!encrypted) return null
                const decrypted = simpleDecrypt(encrypted, 'trekker-key-2024')
                return decrypted ? JSON.parse(decrypted) : null
              } catch {
                return null
              }
            },
            remove: (key: string) => {
              localStorage.removeItem(key)
            },
            clear: () => {
              localStorage.clear()
            },
            getAllKeys: () => {
              return Object.keys(localStorage)
            }
          }
        })
      } catch (error) {
        console.warn('Failed to initialize secure storage:', error)
      }
    }
  
    // Check if we're on the client side
    const isClient = () => {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
    }
  
    // Set an item
    const setItem = (key: string, value: any): void => {
      if (!isClient() || !ls) {
        return
      }
  
      try {
        ls.set(key, value)
      } catch (error) {
        console.warn('Failed to set secure storage item:', error instanceof Error ? error.message : error)
        // Fallback to regular localStorage
        try {
          localStorage.setItem(key, JSON.stringify(value))
        } catch (fallbackError) {
          console.warn('Fallback localStorage also failed:', fallbackError instanceof Error ? fallbackError.message : fallbackError)
        }
      }
    }
  
    // Get an item
    const getItem = <T = any>(key: string): T | null => {
      if (!isClient() || !ls) {
        return null
      }
  
      try {
        return ls.get(key)
      } catch (error) {
        // Handle UTF-8 corruption and other decryption errors
        if (error instanceof Error) {
          const errorMessage = error.message.toLowerCase()
          const isExpectedError = errorMessage.includes('could not parse json') || 
                                 errorMessage.includes('malformed utf-8') ||
                                 errorMessage.includes('invalid character') ||
                                 errorMessage.includes('unexpected token')
          
          if (!isExpectedError) {
            console.warn('Secure storage get error:', error.message)
          }
        }
        
        // Clear corrupted data and fallback to regular localStorage
        try {
          // Remove the corrupted key from secure storage
          ls.remove(key)
          
          // Try to get from regular localStorage as fallback
          const fallbackValue = localStorage.getItem(key)
          if (fallbackValue) {
            try {
              return JSON.parse(fallbackValue)
            } catch (parseError) {
              // If JSON parsing fails, remove the corrupted data
              localStorage.removeItem(key)
              return null
            }
          }
          return null
        } catch (fallbackError) {
          // If fallback also fails, clean up and return null
          try {
            ls.remove(key)
            localStorage.removeItem(key)
          } catch (cleanupError) {
            // Ignore cleanup errors
          }
          return null
        }
      }
    }
  
    // Remove an item
    const removeItem = (key: string): void => {
      if (!isClient() || !ls) {
        return
      }
  
      try {
        ls.remove(key)
      } catch (error) {
        console.warn('Failed to remove secure storage item:', error instanceof Error ? error.message : error)
        // Fallback to regular localStorage
        try {
          localStorage.removeItem(key)
        } catch (fallbackError) {
          console.warn('Fallback localStorage also failed:', fallbackError instanceof Error ? fallbackError.message : fallbackError)
        }
      }
    }
  
    // Clear all encrypted storage
    const clear = (): void => {
      if (!isClient() || !ls) {
        return
      }
  
      try {
        ls.clear()
      } catch (error) {
        console.warn('Failed to clear secure storage:', error instanceof Error ? error.message : error)
        // Fallback to regular localStorage
        try {
          localStorage.clear()
        } catch (fallbackError) {
          console.warn('Fallback localStorage also failed:', fallbackError instanceof Error ? fallbackError.message : fallbackError)
        }
      }
    }
  
    // Get all keys
    const getAllKeys = (): string[] => {
      if (!isClient() || !ls) {
        return []
      }
  
      try {
        return ls.getAllKeys()
      } catch (error) {
        console.warn('Failed to get secure storage keys:', error instanceof Error ? error.message : error)
        // Fallback to regular localStorage
        try {
          return Object.keys(localStorage)
        } catch (fallbackError) {
          console.warn('Fallback localStorage also failed:', fallbackError instanceof Error ? fallbackError.message : fallbackError)
          return []
        }
      }
    }
  
    // Check if a key exists
    const hasKey = (key: string): boolean => {
      if (!isClient() || !ls) {
        return false
      }
  
      try {
        return ls.get(key) !== null
      } catch (error) {
        // Handle UTF-8 corruption and other decryption errors
        if (error instanceof Error) {
          const errorMessage = error.message.toLowerCase()
          const isExpectedError = errorMessage.includes('could not parse json') || 
                                 errorMessage.includes('malformed utf-8') ||
                                 errorMessage.includes('invalid character') ||
                                 errorMessage.includes('unexpected token')
          
          if (!isExpectedError) {
            console.warn('Failed to check secure storage key:', error.message)
          }
        }
        
        // Clean up corrupted data and check fallback
        try {
          // Remove the corrupted key from secure storage
          ls.remove(key)
          
          // Check regular localStorage as fallback
          const fallbackValue = localStorage.getItem(key)
          if (fallbackValue) {
            try {
              JSON.parse(fallbackValue) // Test if it's valid JSON
              return true
            } catch (parseError) {
              // If JSON parsing fails, remove the corrupted data
              localStorage.removeItem(key)
              return false
            }
          }
          return false
        } catch (fallbackError) {
          // If fallback also fails, clean up and return false
          try {
            ls.remove(key)
            localStorage.removeItem(key)
          } catch (cleanupError) {
            // Ignore cleanup errors
          }
          return false
        }
      }
    }
  
    // Clean up corrupted data utility
    const cleanupCorruptedData = (): void => {
      if (!isClient() || !ls) {
        return
      }
  
      try {
        const keys = ls.getAllKeys()
        keys.forEach((key: string) => {
          try {
            ls.get(key) // Test if data can be retrieved
          } catch (error) {
            // If retrieval fails, remove the corrupted key
            try {
              ls.remove(key)
              console.log(`Cleaned up corrupted key: ${key}`)
            } catch (removeError) {
              console.warn(`Failed to remove corrupted key ${key}:`, removeError)
            }
          }
        })
      } catch (error) {
        console.warn('Failed to cleanup corrupted data:', error)
      }
    }
  
    return {
      setItem,
      getItem,
      removeItem,
      clear,
      getAllKeys,
      hasKey,
      isClient,
      cleanupCorruptedData
    }
  } 