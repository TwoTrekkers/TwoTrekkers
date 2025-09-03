<template>
  <section class="w-4/5 mx-auto py-24 text-center">
    <h1 class="text-5xl font-semibold">{{ statusCode }}</h1>
    <p class="mt-4 text-text-muted">{{ message || 'Page not found' }}</p>
    <div class="mt-8">
      <NuxtLink :to="localePath('/')" class="trekker-btn">Go Home</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number, statusMessage?: string } }>()
const statusCode = computed(() => props.error?.statusCode || 404)
const message = computed(() => props.error?.statusMessage || 'Not Found')
const localePath = useLocalePath()
</script>


