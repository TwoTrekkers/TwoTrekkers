<template>
  <header class="bg-gradient-to-br from-[rgba(16,16,16,0.75)] to-[rgba(40,40,40,0.75)] border-b border-border/50 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 transition-all duration-300">
    <div class="container-wide">
      <!-- Mobile/Tablet -->
      <div class="md:hidden">
        <div class="flex items-center justify-between px-4 py-3">
          <div 
            class="inline-flex items-center transition-transform hover:scale-105 cursor-pointer" 
            @click="routeHome()"
          >
            <img :src="appLogo" alt="TwoTrekkers" width="50" height="50" />
          </div>
          <button @click="isOpen = !isOpen" aria-label="Toggle navigation" class="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200">
            <template v-if="!isOpen">
              <div class="space-y-1">
                <span class="block h-0.5 w-6 bg-white transition-all duration-200"></span>
                <span class="block h-0.5 w-6 bg-white transition-all duration-200"></span>
                <span class="block h-0.5 w-6 bg-white transition-all duration-200"></span>
              </div>
            </template>
            <template v-else>
              <span class="block text-xl leading-none transition-all duration-200">✕</span>
            </template>
          </button>
        </div>
        <Transition name="slide" appear>
          <nav v-if="isOpen" class="px-4 pb-4">
            <div class="mx-0 rounded-2xl border border-border bg-background/80 backdrop-blur shadow-xl p-4">
              <ul class="space-y-1">
                <li v-for="(item, index) in mobileNavItems" :key="item.label">
                  <button 
                    @click="item.action()" 
                    class="block w-full text-left px-3 py-2 rounded-md hover:bg-white/5 transition-all duration-200 hover:translate-x-1"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
              <div class="pt-4 flex items-center justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </Transition>
      </div>

      <!-- Desktop -->
      <div class="hidden md:flex items-center justify-between px-6 py-3">
        <div class="flex items-center gap-6">
          <div 
            class="inline-flex items-center transition-transform hover:scale-105 cursor-pointer" 
            @click="routeHome()"
            aria-label="Home"
          >
            <img :src="appLogo" alt="TwoTrekkers" width="60" height="60" />
          </div>
          <nav aria-label="Primary" class="hidden lg:block">
            <ul class="flex items-center gap-2">
              <li v-for="item in desktopNavItems" :key="item.path">
                <button 
                  @click="item.action()" 
                  :class="navLinkClass(item.path)"
                  class="transition-all duration-200 hover:translate-y-[-1px]"
                >
                  {{ item.label }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const isOpen = ref(false)
const appLogo = 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg'
const route = useRoute()

const routeHome = (): void => {
  router.push(localePath('/'))
  isOpen.value = false
}

const routeMemoirs = (): void => {
  router.push(localePath('/memoirs'))
  isOpen.value = false
}

const routeServices = (): void => {
  router.push(localePath('/#services'))
  isOpen.value = false
}

const routeWhy = (): void => {
  router.push(localePath('/why'))
  isOpen.value = false
}

const contactClicked = (): void => {
  const mailto_link = 'mailto:info@twotrekkers.travel?subject=Travel Inquiry&body='
  window.location.href = mailto_link
  isOpen.value = false
}

// Navigation items for better organization
const mobileNavItems = computed(() => [
  { label: t('nav.memoirs'), action: routeMemoirs },
  { label: t('nav.services'), action: routeServices },
  { label: t('nav.why'), action: routeWhy },
  { label: t('nav.contact'), action: contactClicked }
])

const desktopNavItems = computed(() => [
  { path: '/memoirs', label: t('nav.memoirs'), action: routeMemoirs },
  { path: '/#services', label: t('nav.services'), action: routeServices },
  { path: '/why', label: t('nav.why'), action: routeWhy },
  { path: '/contact', label: t('nav.contact'), action: contactClicked }
])

const navLinkClass = (path: string) => {
  const base = 'px-3 py-2 rounded-md border-b-2 transition-all duration-200'
  // Treat services as active only when hash matches; don't highlight on plain home
  const isActive = path === '/#services'
    ? (route.path === '/' && route.hash === '#services')
    : (path === '/contact' ? false : (path === '/' ? route.path === '/' : route.path.startsWith(path)))
  return isActive
    ? `${base} text-primary border-primary bg-white/5`
    : `${base} border-transparent hover:border-primary hover:bg-white/5`
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Enhanced hover effects */
.trekker-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Smooth transitions for all interactive elements */
a, button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Logo hover effect */
img {
  transition: transform 0.2s ease-in-out;
}

/* Mobile menu item animations */
nav ul li {
  animation: slideInLeft 0.3s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
}

nav ul li:nth-child(1) { animation-delay: 0.1s; }
nav ul li:nth-child(2) { animation-delay: 0.2s; }
nav ul li:nth-child(3) { animation-delay: 0.3s; }
nav ul li:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


