<template>
  <section class="section">
    <div class="container-wide">
      <h1 class="text-large">Travel Tricks</h1>
      <p class="text-small muted mt-4">Tips to travel smarter.</p>
      <div class="mt-12">
        <img :src="images.cityscape" alt="Cityscape" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()

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
    link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/travel-tricks' }]
}))

const images = {
  cityscape: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg'
}
</script>


