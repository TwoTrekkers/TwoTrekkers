<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.riceTerrace" :alt="t('alt.twotrekkers_logo')" class="w-full h-[360px] md:h-[520px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('travel.page.title') }}</h1>
          <p class="mt-3 muted max-w-2xl">{{ t('travel.page.subtitle') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section">
    <div class="container-wide grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p class="mt-2 muted">{{ t('travel.page.subtitle2') }}</p>
        <p class="mt-6 muted">{{ t('travel.page.heading') }}</p>
        <p class="mt-3 muted">{{ t('travel.page.content') }}</p>
        <div class="mt-8">
          <NuxtLink :to="localePath('/contact')" class="trekker-btn">{{ t('travel.page.learn_more') }}</NuxtLink>
        </div>
      </div>

      <div class="order-first md:order-none">
        <div class="rounded-2xl overflow-hidden bg-background shadow-card">
          <img :src="images.tourism" :alt="t('alt.twotrekkers_logo')" class="w-full h-[260px] md:h-[360px] object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()
const localePath = useLocalePath()

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
  link: [{ rel: 'canonical', href: 'https://twotrekkers.github.io/travel' }]
}))

const images = {
  riceTerrace: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/rice-terrace.svg',
  tourism: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Tourism.svg'
}
</script>


