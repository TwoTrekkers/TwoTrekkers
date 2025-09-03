<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.cityscape" :alt="t('faq.banner')" class="w-full h-[300px] md:h-[420px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('faq.title') }}</h1>
          <p class="mt-3 muted max-w-2xl">{{ t('faq.description') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section">
    <div class="container-wide">
      <article class="card p-6 md:p-10 prose prose-invert max-w-none">
        <div v-html="faqHtml"></div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t, locale } = useI18n()
import MarkdownIt from 'markdown-it'

useHead({
  title: t('page.titles.faq'),
  meta: [
    { name: 'description', content: t('faq.description') },
    { name: 'keywords', content: 'faq, travel questions, support' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('faq.title') },
    { property: 'og:description', content: t('faq.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('faq.title') },
    { name: 'twitter:description', content: t('faq.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/faq' }]
})

const images = {
  cityscape: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg'
}

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })

const mdSrc = ref('')
async function loadMarkdown() {
  const candidates = [`/md/faq.${locale.value}.md`, `/md/faq.en.md`]
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

const faqHtml = computed(() => md.render(mdSrc.value || ''))
</script>


