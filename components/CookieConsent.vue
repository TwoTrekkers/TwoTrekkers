<template>
  <footer v-if="visible" class="fixed bottom-0 inset-x-0 z-50">
    <div class="mx-auto w-4/5 md:w-3/5">
      <div class="relative rounded-2xl border border-border bg-background/85 backdrop-blur shadow-2xl overflow-hidden">
        <div class="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-primary-hover"></div>
        <div class="p-4 md:p-5 pl-6 md:grid md:grid-cols-[1fr,auto] md:items-end md:gap-6">
          <p class="text-sm md:text-base text-text md:self-start">
            {{ t('cookies.message') }}
          </p>
          <div class="mt-3 md:mt-0 flex flex-col items-end gap-2 md:gap-3">
            <div class="flex flex-wrap justify-end gap-2 md:gap-3">
              <button @click="acceptAll" class="trekker-btn">{{ t('cookies.accept') }}</button>
              <button @click="openPreferences" class="trekker-btn-outline">{{ t('cookies.manage') || 'Manage preferences' }}</button>
              <button @click="declineAll" class="trekker-btn-outline">{{ t('cookies.decline') || 'Decline' }}</button>
            </div>
            <div class="flex flex-row justify-end gap-3">
              <NuxtLink :to="localePath('/privacy')" class="text-primary hover:text-secondary underline">{{ t('cookies.privacy') }}</NuxtLink>
              <NuxtLink :to="localePath('/terms')" class="text-primary hover:text-secondary underline">{{ t('cookies.terms') }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <div v-if="showPreferences" class="fixed inset-0 z-[60] bg-black/60 backdrop-blur flex items-center justify-center px-4">
    <div class="w-full max-w-lg rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-border flex items-center justify-between">
        <h3 class="text-medium">{{ t('cookies.manage') || 'Manage cookie preferences' }}</h3>
        <button @click="closePreferences" aria-label="Close" class="p-2 rounded-md hover:bg-white/5">✕</button>
      </div>
      <div class="p-5 space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ t('cookies.necessary') || 'Strictly necessary' }}</p>
            <p class="text-text-muted text-sm">{{ t('cookies.necessary.desc') || 'Required for basic site functionality and security.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2 opacity-60 cursor-not-allowed">
            <input type="checkbox" checked disabled class="accent-primary" />
            <span class="text-sm">{{ t('common.accept') || 'OK' }}</span>
          </label>
        </div>
<!-- 
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ t('cookies.analytics') || 'Analytics' }}</p>
            <p class="text-text-muted text-sm">{{ t('cookies.analytics.desc') || 'Helps us understand usage to improve the site.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" v-model="preferences.analytics" class="accent-primary" />
            <span class="text-sm">{{ preferences.analytics ? (t('common.accept') || 'OK') : (t('common.cancel') || 'Off') }}</span>
          </label>
        </div>

        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ t('cookies.preferences') || 'Preferences' }}</p>
            <p class="text-text-muted text-sm">{{ t('cookies.preferences.desc') || 'Stores your preferences and settings.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" v-model="preferences.preferences" class="accent-primary" />
            <span class="text-sm">{{ preferences.preferences ? (t('common.accept') || 'OK') : (t('common.cancel') || 'Off') }}</span>
          </label>
        </div>

        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ t('cookies.marketing') || 'Marketing' }}</p>
            <p class="text-text-muted text-sm">{{ t('cookies.marketing.desc') || 'Used to personalize content and measure ads.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" v-model="preferences.marketing" class="accent-primary" />
            <span class="text-sm">{{ preferences.marketing ? (t('common.accept') || 'OK') : (t('common.cancel') || 'Off') }}</span>
          </label>
        </div> -->
      </div>
      <div class="p-5 border-t border-border flex items-center justify-end gap-3">
        <button @click="savePreferences" class="trekker-btn">{{ t('common.save') || 'Save' }}</button>
        <button @click="closePreferences" class="trekker-btn-outline">{{ t('common.cancel') || 'Cancel' }}</button>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
import { ref, reactive, onMounted, watch } from 'vue'

// Use the new cookie consent composable
const { 
  hasConsent, 
  acceptAll: acceptAllCookies, 
  acceptNecessary: acceptNecessaryCookies, 
  rejectAll: rejectAllCookies,
  updatePreferences: updateCookiePreferences,
  getPreferences,
  clearConsent,
  getCookieConsent
} = useCookieConsent()

const visible = ref(false)
const showPreferences = ref(false)

// Initialize preferences from the composable
const preferences = reactive({
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false
})

// Load current preferences
const loadPreferences = () => {
  const currentPrefs = getPreferences()
  Object.assign(preferences, currentPrefs)
}

// Check if banner should be visible
const checkBannerVisibility = () => {
  // Check if user has already given consent
  const consent = getCookieConsent()
  const hasUserConsent = hasConsent()
  
  console.log('Cookie consent check:', { consent, hasUserConsent })
  
  if (consent && consent.accepted && hasUserConsent) {
    visible.value = false
    console.log('Banner hidden - user has consent')
  } else {
    visible.value = true
    console.log('Banner shown - no consent found')
  }
}

onMounted(() => {
  // Add a small delay to ensure secure storage is initialized
  setTimeout(() => {
    // Check banner visibility on mount
    checkBannerVisibility()
    
    // Load current preferences
    loadPreferences()
  }, 100)
})

// Watch for consent changes
watch(() => hasConsent(), (newValue) => {
  console.log('Consent changed:', newValue)
  if (newValue) {
    visible.value = false
  }
})

function acceptAll() {
  console.log('Accept all clicked')
  acceptAllCookies()
  visible.value = false
  notifyConsent()
}

function declineAll() {
  console.log('Decline all clicked')
  acceptNecessaryCookies()
  visible.value = false
  notifyConsent()
}

function openPreferences() { 
  showPreferences.value = true 
  loadPreferences() // Refresh preferences when opening
}

function closePreferences() { 
  showPreferences.value = false 
}

function savePreferences() {
  console.log('Save preferences clicked')
  updateCookiePreferences(preferences)
  showPreferences.value = false
  visible.value = false
  notifyConsent()
}

function notifyConsent() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookies:consent', { 
      detail: { 
        accepted: true,
        preferences: preferences
      } 
    }))
  }
}
</script>


