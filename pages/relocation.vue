<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.cityscape" :alt="t('alt.twotrekkers_logo')" class="w-full h-[360px] md:h-[520px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('relocation.page.title') }}</h1>
          <p class="mt-3 muted max-w-2xl">{{ t('relocation.page.subtitle') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section">
    <div class="container-wide grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p class="mt-2 muted">{{ t('relocation.page.subtitle2') }}</p>
        <p class="mt-6 muted">{{ t('relocation.page.heading') }}</p>
        <p class="mt-3 muted">{{ t('relocation.page.content1') }}</p>
        <p class="mt-3 muted">{{ t('relocation.page.content2') }}</p>
        <div class="mt-8">
          <NuxtLink :to="localePath('/contact')" class="trekker-btn">{{ t('relocation.page.learn_more') }}</NuxtLink>
        </div>
      </div>

      <div class="order-first md:order-none">
        <div class="rounded-2xl overflow-hidden bg-background shadow-card">
          <img :src="images.livingAbroad" :alt="t('alt.twotrekkers_logo')" class="w-full h-[260px] md:h-[360px] object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('page.titles.relocation'),
  meta: [
    { name: 'description', content: t('relocation.description') },
    { name: 'keywords', content: 'expat relocation, visa assistance, moving abroad, international relocation, visa applications, expat services, living abroad, immigration services, relocation consultant' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('relocation.page.title') },
    { property: 'og:description', content: t('relocation.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('relocation.page.title') },
    { name: 'twitter:description', content: t('relocation.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.github.io/relocation' }]
})

const images = {
  cityscape: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg',
  livingAbroad: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/LivingAbroad.svg'
}
</script>


