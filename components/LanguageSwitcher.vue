<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :aria-expanded="isOpen"
      aria-label="Select language"
    >
      <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <span class="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{{ currentLocaleName }}</span>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 sm:w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700/50 z-50 max-h-80 overflow-y-auto"
    >
      <div class="py-2">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 flex items-center space-x-3"
          :class="{ 'bg-blue-600/20 text-blue-400': locale.code === currentLocale }"
        >
          <span class="text-sm">{{ locale.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const currentLocale = computed(() => locale.value)
const currentLocaleName = computed(() => {
  const current = locales.value.find((l: any) => l.code === locale.value)
  return current?.name || 'English'
})
const availableLocales = computed(() => locales.value)

const switchLanguage = (code: string) => {
  // Get the path for the new locale
  const path = switchLocalePath(code as any)
  
  if (path) {
    // Navigate to the new locale path
    router.push(path)
  }
  
  isOpen.value = false
}

const getLanguageCode = (code: string) => {
  const languageCodes: Record<string, string> = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    de: 'DE',
    'zh-CN': 'ZH-CN',
    'zh-TW': 'ZH-TW',
    'zh-HK': 'ZH-HK',
    ja: 'JA',
    pt: 'PT',
    ko: 'KO',
    tr: 'TR',
    he: 'HE'
  }
  return languageCodes[code] || code.toUpperCase()
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  // Only add event listener on client side
  if (process.client) {
    document.addEventListener('click', handleClickOutside)
  }
})

onBeforeUnmount(() => {
  // Only remove event listener on client side
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script> 