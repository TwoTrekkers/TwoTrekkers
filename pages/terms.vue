<template>
  <section class="section">
    <div class="container-wide prose prose-invert max-w-none">
      <h1>{{ $t('terms.title') }}</h1>
      <div v-html="html"></div>
    </div>
  </section>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'
const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.terms'),
  meta: [
    { name: 'description', content: t('terms.acceptance.content') },
    { name: 'keywords', content: 'terms, terms of use' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.terms') },
    { property: 'og:description', content: t('terms.acceptance.content') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.terms') },
    { name: 'twitter:description', content: t('terms.acceptance.content') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/terms' }]
}))

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const html = computed(() => md.render(`# ${t('terms.title')}` + '\n\n' + t('terms.acceptance.title') + '\n\n' + t('terms.acceptance.content')))
</script>


