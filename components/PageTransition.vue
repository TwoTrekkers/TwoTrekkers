<template>
  <div>
    <!-- Page content wrapper with simple fade transition -->
    <Transition name="page" mode="out-in">
      <div :key="route.path" class="page-content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Get access to the page transition plugin and route
const { $pageTransition } = useNuxtApp()
const route = useRoute()

// Initialize page transition on mount
onMounted(() => {
  // Add smooth scroll behavior
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
</script>

<style scoped>
/* Simple fade transition animations */
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

/* Ensure proper stacking context */
.page-content {
  position: relative;
  z-index: 1;
}
</style>
