<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.banner" :alt="t('tips.title')" class="w-full h-[300px] md:h-[420px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('tips.title') }}</h1>
          <p class="mt-3 muted max-w-2xl">{{ t('tips.description') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section">
    <div class="container-wide">
      <article class="card p-6 md:p-10 prose prose-invert max-w-none">
        <div v-html="tipsHtml"></div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'
const { t, locale } = useI18n()

useHead(() => ({
  title: t('page.titles.travel_tricks'),
  meta: [
    { name: 'description', content: t('tips.description') },
    { name: 'keywords', content: 'travel tips, travel tricks, advice' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.travel_tricks') },
    { property: 'og:description', content: t('tips.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.travel_tricks') },
    { name: 'twitter:description', content: t('tips.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
    link: [{ rel: 'canonical', href: 'https://twotrekkers.github.io/travel-tricks' }]
}))

const images = {
  banner: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Tourism.svg'
}

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })

const mdSrc = ref('')
async function loadMarkdown() {
  const candidates = [`/md/tips.${locale.value}.md`, `/md/tips.en.md`]
  for (const url of candidates) {
    try {
      const txt = await $fetch<string>(url)
      if (txt) return txt
    } catch (_) { /* ignore */ }
  }
  return ''
}

watchEffect(async () => {
  mdSrc.value = await loadMarkdown()
})

const tipsHtml = computed(() => md.render(mdSrc.value || ''))
</script>


