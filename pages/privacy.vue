<template>
  <section class="section">
    <div class="container-wide prose prose-invert max-w-none">
      <h1>{{ $t('privacy.title') }}</h1>
      <div v-html="html"></div>
    </div>
  </section>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'

useHead({
  title: 'Privacy Policy – TwoTrekkers',
  meta: [
    { name: 'description', content: 'Our privacy practices and how we handle your data.' },
    { name: 'keywords', content: 'privacy, privacy policy' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Privacy Policy – TwoTrekkers' },
    { property: 'og:description', content: 'Our privacy practices and how we handle your data.' },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Privacy Policy – TwoTrekkers' },
    { name: 'twitter:description', content: 'Our privacy practices and how we handle your data.' },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/privacy' }]
})

const { t } = useI18n()
const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const html = computed(() => md.render(`# ${t('privacy.title')}` + '\n\n' + t('privacy.intro')))
</script>


