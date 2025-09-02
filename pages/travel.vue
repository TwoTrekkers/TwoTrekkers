<template>
  <section class="section">
    <div class="container-wide">
      <h1 class="text-large">{{ $t('travel.page.title') }}</h1>
      <p class="text-small muted mt-4">{{ $t('travel.page.subtitle') }}</p>

      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <img :src="images.riceTerrace" :alt="$t('alt.twotrekkers_logo')" />
        <img :src="images.tourism" :alt="$t('alt.twotrekkers_logo')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.travel'),
  meta: [
    { name: 'description', content: t('travel.description') },
    { name: 'keywords', content: 'travel planning, tourism services, vacation planning, destination guides, travel tips, travel consultant, travel advice, tourism consultancy' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.travel') },
    { property: 'og:description', content: t('travel.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.travel') },
    { name: 'twitter:description', content: t('travel.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/travel' }]
}))

const images = {
  riceTerrace: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/rice-terrace.svg',
  tourism: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Tourism.svg'
}
</script>


