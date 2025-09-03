<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.banner" :alt="t('alt.twotrekkers_logo')" class="w-full h-[300px] md:h-[420px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('terms.title') }}</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section">
    <div class="container-wide">
      <article class="card p-6 md:p-10 prose prose-invert max-w-none">
        <div v-html="html"></div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'
const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.terms'),
  meta: [
    { name: 'description', content: t('terms.description') },
    { name: 'keywords', content: 'terms of use, terms of service, user agreement, TwoTrekkers terms, travel consultancy terms' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.terms') },
    { property: 'og:description', content: t('terms.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: t('meta.og.site_name') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.terms') },
    { name: 'twitter:description', content: t('terms.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:site', content: t('meta.twitter.site') },
    { name: 'twitter:creator', content: t('meta.twitter.creator') }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.github.io/terms' }]
}))

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const html = computed(() => md.render([
  `# ${t('terms.title')}`,
  `## ${t('terms.acceptance.title')}`,
  t('terms.acceptance.content'),
  `## ${t('terms.services.title')}`,
  t('terms.services.content'),
  `## ${t('terms.responsibilities.title')}`,
  t('terms.responsibilities.intro'),
  `- ${t('terms.responsibilities.law')}`,
  `- ${t('terms.responsibilities.restrict')}`,
  `- ${t('terms.responsibilities.advertising')}`,
  `## ${t('terms.intellectual.title')}`,
  t('terms.intellectual.content'),
  `## ${t('terms.liability.title')}`,
  t('terms.liability.content'),
  `## ${t('terms.changes.title')}`,
  t('terms.changes.content')
].join('\n\n')))

const images = {
  banner: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg'
}
</script>


