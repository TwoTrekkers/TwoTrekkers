declare module '#app' {
    interface NuxtApp {
      $secureStorage: {
        set: (key: string, value: any) => void
        get: <T = any>(key: string) => T | null
        remove: (key: string) => void
        clear: () => void
        getAllKeys: () => string[]
      }
    }
  }
  
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $secureStorage: {
        set: (key: string, value: any) => void
        get: <T = any>(key: string) => T | null
        remove: (key: string) => void
        clear: () => void
        getAllKeys: () => string[]
      }
    }
  }
  
  export {} 