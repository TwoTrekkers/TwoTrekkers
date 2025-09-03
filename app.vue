<template>
  <div>
    <SiteHeader />
    <main id="main-content">
      <PageTransition>
        <NuxtPage />
      </PageTransition>
    </main>
    <SiteFooter />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
// This component will persist across route changes
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import CookieConsent from '~/components/CookieConsent.vue'
import PageTransition from '~/components/PageTransition.vue'

// Auto-scroll to top on route changes
const router = useRouter()

// Watch for route changes and scroll to top
watch(() => router.currentRoute.value.path, () => {
  // Use nextTick to ensure the DOM has updated
  nextTick(() => {
    // Only run on client side to avoid SSR issues
    if (process.client) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  })
})
</script>

<style>
/* Ensure smooth scrolling for the entire app */
html {
  scroll-behavior: smooth;
}

/* Smooth transitions for interactive elements */
a, button, .card {
  transition: all 0.2s ease-in-out;
}

/* Hover effects for better interactivity */
.trekker-btn:hover,
.trekker-btn-outline:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

/* Smooth header transitions */
header {
  transition: all 0.3s ease-in-out;
}

/* Loading spinner for async operations */
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Simple fade page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}

/* Ensure main content area has proper transitions */
#main-content {
  min-height: 100vh;
  position: relative;
}

/* Simple fade in for page content */
.page-content {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 