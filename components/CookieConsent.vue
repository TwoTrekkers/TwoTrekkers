<template>
  <footer v-if="visible" class="fixed bottom-0 inset-x-0 z-50">
    <div class="mx-auto w-4/5 md:w-3/5">
      <div class="relative rounded-2xl border border-border bg-background/85 backdrop-blur shadow-2xl overflow-hidden">
        <div class="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-primary-hover"></div>
        <div class="p-4 md:p-5 pl-6 md:grid md:grid-cols-[1fr,auto] md:items-end md:gap-6">
          <p class="text-sm md:text-base text-text md:self-start">
            {{ $t('cookies.message') }}
          </p>
          <div class="mt-3 md:mt-0 flex flex-col items-end gap-2 md:gap-3">
            <div class="flex flex-wrap justify-end gap-2 md:gap-3">
              <button @click="acceptAll" class="trekker-btn">{{ $t('cookies.accept') }}</button>
              <button @click="openPreferences" class="trekker-btn-outline">{{ $t('cookies.manage') || 'Manage preferences' }}</button>
              <button @click="declineAll" class="trekker-btn-outline">{{ $t('cookies.decline') || 'Decline' }}</button>
            </div>
            <div class="flex flex-row justify-end gap-3">
              <NuxtLink to="/privacy" class="text-primary hover:text-secondary underline">{{ $t('cookies.privacy') }}</NuxtLink>
              <NuxtLink to="/terms" class="text-primary hover:text-secondary underline">{{ $t('cookies.terms') }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <div v-if="showPreferences" class="fixed inset-0 z-[60] bg-black/60 backdrop-blur flex items-center justify-center px-4">
    <div class="w-full max-w-lg rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-border flex items-center justify-between">
        <h3 class="text-medium">{{ $t('cookies.manage') || 'Manage cookie preferences' }}</h3>
        <button @click="closePreferences" aria-label="Close" class="p-2 rounded-md hover:bg-white/5">✕</button>
      </div>
      <div class="p-5 space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ $t('cookies.necessary') || 'Strictly necessary' }}</p>
            <p class="text-text-muted text-sm">{{ $t('cookies.necessary.desc') || 'Required for basic site functionality and security.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2 opacity-60 cursor-not-allowed">
            <input type="checkbox" checked disabled class="accent-primary" />
            <span class="text-sm">{{ $t('common.accept') || 'OK' }}</span>
          </label>
        </div>

        <!-- <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ $t('cookies.analytics') || 'Analytics' }}</p>
            <p class="text-text-muted text-sm">{{ $t('cookies.analytics.desc') || 'Helps us understand usage to improve the site.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" v-model="consent.analytics" class="accent-primary" />
            <span class="text-sm">{{ consent.analytics ? ($t('common.accept') || 'OK') : ($t('common.cancel') || 'Off') }}</span>
          </label>
        </div>

        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ $t('cookies.marketing') || 'Marketing' }}</p>
            <p class="text-text-muted text-sm">{{ $t('cookies.marketing.desc') || 'Used to personalize content and measure ads.' }}</p>
          </div>
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" v-model="consent.marketing" class="accent-primary" />
            <span class="text-sm">{{ consent.marketing ? ($t('common.accept') || 'OK') : ($t('common.cancel') || 'Off') }}</span>
          </label>
        </div> -->
      </div>
      <div class="p-5 border-t border-border flex items-center justify-end gap-3">
        <button @click="savePreferences" class="trekker-btn">{{ $t('common.save') || 'Save' }}</button>
        <button @click="closePreferences" class="trekker-btn-outline">{{ $t('common.cancel') || 'Cancel' }}</button>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const LEGACY_KEY = 'cookies-accepted'
const COOKIE_KEY = 'cookies-consent'
const visible = ref(false)
const showPreferences = ref(false)
const consent = reactive({ necessary: true, analytics: false, marketing: false })

onMounted(() => {
  const cookies = document.cookie
  const entry = getCookie(COOKIE_KEY)
  if (entry) {
    try { Object.assign(consent, JSON.parse(entry)); visible.value = false } catch { visible.value = false }
  } else if (cookies.includes(`${LEGACY_KEY}=`)) {
    visible.value = false
  } else {
    visible.value = true
  }
})

function setCookie(name: string, value: string) {
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`
}

function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(?:^| )' + name + '=([^;]+)'))
  const v = m?.[1]
  return v ? decodeURIComponent(v) : null
}

function acceptAll() {
  consent.necessary = true
  consent.analytics = true
  consent.marketing = true
  setCookie(COOKIE_KEY, JSON.stringify(consent))
  visible.value = false
  notifyConsent()
}

function declineAll() {
  consent.necessary = true
  consent.analytics = false
  consent.marketing = false
  setCookie(COOKIE_KEY, JSON.stringify(consent))
  visible.value = false
  notifyConsent()
}

function openPreferences() { showPreferences.value = true }
function closePreferences() { showPreferences.value = false }

function savePreferences() {
  consent.necessary = true
  setCookie(COOKIE_KEY, JSON.stringify(consent))
  showPreferences.value = false
  visible.value = false
  notifyConsent()
}

function notifyConsent() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookies:consent', { detail: { ...consent } }))
  }
}
</script>


