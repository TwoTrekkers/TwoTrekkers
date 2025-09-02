<template>
  <section class="section">
    <div class="container-wide">
      <h1 class="text-large">{{ $t('relocation.page.title') }}</h1>
      <p class="text-small muted mt-4">{{ $t('relocation.page.subtitle') }}</p>
      <div class="mt-8">
        <NuxtLink to="/contact" class="trekker-btn">{{ $t('relocation.page.learn_more') }}</NuxtLink>
      </div>
      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <img :src="images.cityscape" :alt="$t('alt.twotrekkers_logo')" />
        <img :src="images.livingAbroad" :alt="$t('alt.twotrekkers_logo')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()

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
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/relocation' }]
})

const images = {
  cityscape: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg',
  livingAbroad: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/LivingAbroad.svg'
}
</script>


