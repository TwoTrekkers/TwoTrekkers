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


