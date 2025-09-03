<template>
  <footer class="pd-16 bg-background">
    <div class="container-wide py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div>
          <h3 class="font-semibold mb-3">{{ t('footer.follow_us') }}</h3>
          <div class="flex gap-3">
            <a 
              href="https://www.instagram.com/two.trekkers.travels" 
              aria-label="Instagram"
              class="footer-social-link"
            >
              <img 
                src="/images/Instagram_Glyph_Gradient.svg" 
                alt="Instagram" 
                width="24" 
                height="24"
                class="transition-transform duration-300 ease-in-out hover:scale-110" 
              />
            </a>
          </div>
        </div>
        <div>
          <p class="font-semibold mb-3">{{ t('footer.travel_guides') }}</p>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink 
                :to="localePath('/faq')" 
                class="footer-link"
              >
                {{ t('footer.frequently_asked') }}
              </NuxtLink>
            </li>
            <li>
              <a 
                href="mailto:info@twotrekkers.travel" 
                class="footer-link"
              >
                {{ t('footer.support_team') }}
              </a>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/travel-tricks')" 
                class="footer-link"
              >
                {{ t('footer.travel_tips') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-3">{{ t('footer.get_in_touch') }}</p>
          <ul class="space-y-2 text-sm">
            <li>
              <a 
                href="mailto:info@twotrekkers.travel" 
                class="footer-link"
              >
                info@twotrekkers.travel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p class="text-xs">© {{ new Date().getFullYear() }} TwoTrekkers. All rights reserved.</p>
        <ul class="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
          <li>
            <NuxtLink 
              :to="localePath('/privacy')" 
              class="footer-link"
            >
              {{ t('footer.privacy') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              :to="localePath('/terms')" 
              class="footer-link"
            >
              {{ t('footer.terms') }}
            </NuxtLink>
          </li>
          <li>
            <a 
              href="https://needletails.com" 
              target="_blank" 
              class="footer-link"
            >
              {{ t('footer.our_developers') }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Import and use i18n composable
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
/* Enhanced footer link hover effects */
.footer-link {
  @apply relative inline-block transition-all duration-300 ease-in-out;
  @apply text-text-muted hover:text-primary;
  @apply hover:translate-y-[-1px];
}

.footer-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary;
  @apply transition-all duration-300 ease-in-out;
  @apply transform origin-left;
}

.footer-link:hover::after {
  @apply w-full;
}

/* Social media link hover effects */
.footer-social-link {
  @apply relative inline-block p-2 rounded-lg;
  @apply transition-all duration-300 ease-in-out;
  @apply hover:bg-white/5 hover:shadow-lg;
  @apply hover:scale-105;
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background;
}

.footer-social-link::before {
  content: '';
  @apply absolute inset-0 rounded-lg;
  @apply bg-gradient-to-r from-primary/20 to-blue-400/20;
  @apply opacity-0 transition-opacity duration-300 ease-in-out;
  @apply hover:opacity-100;
}

.footer-social-link:hover::before {
  @apply opacity-100;
}

/* Enhanced list item hover effects */
.footer-link:hover {
  @apply text-primary;
  @apply transform translate-y-[-1px];
  @apply shadow-sm;
}

/* Smooth transitions for all interactive elements */
.footer-link,
.footer-social-link {
  @apply transition-all duration-300 ease-in-out;
}

/* Focus states for accessibility */
.footer-link:focus,
.footer-social-link:focus {
  @apply outline-none ring-2 ring-primary ring-offset-2 ring-offset-background;
}

/* Active states */
.footer-link:active,
.footer-social-link:active {
  @apply transform scale-95;
}

/* Hover effects for the entire footer section */
footer {
  @apply transition-all duration-300 ease-in-out;
}

/* Enhanced spacing and typography */
.footer-link {
  @apply font-medium;
  @apply tracking-wide;
}

/* Subtle glow effect on hover */
.footer-link:hover {
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
}

/* Social icon specific enhancements */
.footer-social-link img {
  @apply transition-all duration-300 ease-in-out;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.footer-social-link:hover img {
  filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.2));
}
</style>


