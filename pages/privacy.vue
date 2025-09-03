<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.banner" :alt="t('alt.twotrekkers_logo')" class="w-full h-[300px] md:h-[420px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('privacy.title') }}</h1>
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

useHead({
  title: t('page.titles.privacy'),
  meta: [
    { name: 'description', content: t('privacy.description') },
    { name: 'keywords', content: 'privacy policy, data protection, GDPR, cookie policy, TwoTrekkers privacy, travel consultancy privacy' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.privacy') },
    { property: 'og:description', content: t('privacy.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: t('meta.og.site_name') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.privacy') },
    { name: 'twitter:description', content: t('privacy.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:site', content: t('meta.twitter.site') },
    { name: 'twitter:creator', content: t('meta.twitter.creator') }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/privacy' }]
})

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const html = computed(() => md.render([
  `# ${t('privacy.title')}`,
  `_${t('privacy.last_updated')}_`,
  t('privacy.intro'),
  `## ${t('privacy.info_collect.title')}`,
  t('privacy.info_collect.intro'),
  t('privacy.info_collect.personal'),
  t('privacy.info_collect.usage'),
  `## ${t('privacy.cookies.title')}`,
  t('privacy.cookies.content'),
  `## ${t('privacy.use_info.title')}`,
  t('privacy.use_info.intro'),
  `- ${t('privacy.use_info.services')}`,
  `- ${t('privacy.use_info.communicate')}`,
  `- ${t('privacy.use_info.improve')}`,
  t('privacy.use_info.note'),
  `## ${t('privacy.security.title')}`,
  t('privacy.security.content'),
  `## ${t('privacy.sharing.title')}`,
  t('privacy.sharing.content'),
  `## ${t('privacy.rights.title')}`,
  t('privacy.rights.intro'),
  `- ${t('privacy.rights.access')}`,
  `- ${t('privacy.rights.correction')}`,
  `- ${t('privacy.rights.deletion')}`,
  `## ${t('privacy.changes.title')}`,
  t('privacy.changes.content'),
  `## ${t('privacy.contact.title')}`,
  t('privacy.contact.content'),
  t('privacy.footer')
].join('\n\n')))

const images = {
  banner: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/PlanTrip.svg'
}
</script>


