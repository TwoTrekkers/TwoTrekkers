<template>
  <header class="bg-gradient-to-br from-[rgba(16,16,16,0.75)] to-[rgba(40,40,40,0.75)] border-b border-border/50 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
    <div class="container-wide">
      <!-- Mobile/Tablet -->
      <div class="md:hidden">
        <div class="flex items-center justify-between px-4 py-3">
          <NuxtLink to="/" class="inline-flex items-center">
            <img :src="appLogo" alt="TwoTrekkers" width="50" height="50" />
          </NuxtLink>
          <button @click="isOpen = !isOpen" aria-label="Toggle navigation" class="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <template v-if="!isOpen">
              <div class="space-y-1">
                <span class="block h-0.5 w-6 bg-white"></span>
                <span class="block h-0.5 w-6 bg-white"></span>
                <span class="block h-0.5 w-6 bg-white"></span>
              </div>
            </template>
            <template v-else>
              <span class="block text-xl leading-none">✕</span>
            </template>
          </button>
        </div>
        <nav v-if="isOpen" class="px-4 pb-4">
          <div class="mx-0 rounded-2xl border border-border bg-background/80 backdrop-blur shadow-xl p-4">
            <ul class="space-y-1">
              <li><NuxtLink to="/memoirs" class="block px-3 py-2 rounded-md hover:bg-white/5 transition">{{ $t('nav.memoirs') }}</NuxtLink></li>
              <li><NuxtLink :to="{ path: '/', hash: '#services' }" class="block px-3 py-2 rounded-md hover:bg-white/5 transition">{{ $t('nav.services') }}</NuxtLink></li>
              <li><NuxtLink to="/why" class="block px-3 py-2 rounded-md hover:bg-white/5 transition">{{ $t('nav.why') }}</NuxtLink></li>
              <li><a href="mailto:info@twotrekkers.com" class="block px-3 py-2 rounded-md hover:bg-white/5 transition">{{ $t('nav.contact') }}</a></li>
            </ul>
            <div class="pt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <NuxtLink v-if="showLogin" to="/login" class="trekker-btn">{{ $t('nav.login') }}</NuxtLink>
            </div>
          </div>
        </nav>
      </div>

      <!-- Desktop -->
      <div class="hidden md:flex items-center justify-between px-6 py-3">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" aria-label="Home" class="inline-flex items-center">
            <img :src="appLogo" alt="TwoTrekkers" width="60" height="60" />
          </NuxtLink>
          <nav aria-label="Primary" class="hidden lg:block">
            <ul class="flex items-center gap-2">
              <li><NuxtLink to="/memoirs" :class="navLinkClass('/memoirs')">{{ $t('nav.memoirs') }}</NuxtLink></li>
              <li><NuxtLink :to="{ path: '/', hash: '#services' }" :class="navLinkClass('/#services')">{{ $t('nav.services') }}</NuxtLink></li>
              <li><NuxtLink to="/why" :class="navLinkClass('/why')">{{ $t('nav.why') }}</NuxtLink></li>
              <li><a href="mailto:info@twotrekkers.com" class="px-3 py-2 rounded-md border-b-2 border-transparent hover:border-primary hover:bg-white/5 transition">{{ $t('nav.contact') }}</a></li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <LanguageSwitcher />
          <NuxtLink v-if="showLogin" to="/login" class="trekker-btn">{{ $t('nav.login') }}</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const appLogo = 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg'
const route = useRoute()
const showLogin = false

const navLinkClass = (path: string) => {
  const base = 'px-3 py-2 rounded-md border-b-2 transition-colors'
  // Treat services as active only when hash matches; don't highlight on plain home
  const isActive = path === '/#services'
    ? (route.path === '/' && route.hash === '#services')
    : (path === '/' ? route.path === '/' : route.path.startsWith(path))
  return isActive
    ? `${base} text-primary border-primary bg-white/5`
    : `${base} border-transparent hover:border-primary hover:bg-white/5`
}
</script>


