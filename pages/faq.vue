<template>
  <section class="section">
    <div class="container-wide">
      <h1 class="text-large">{{ $t('faq.title') }}</h1>
      <p class="text-small muted mt-4">{{ $t('faq.description') }}</p>
      <div class="mt-12">
        <img :src="images.cityscape" :alt="$t('faq.banner')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()

useHead({
  title: t('page.titles.faq'),
  meta: [
    { name: 'description', content: t('faq.description') },
    { name: 'keywords', content: 'faq, travel questions, support' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('faq.title') },
    { property: 'og:description', content: t('faq.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('faq.title') },
    { name: 'twitter:description', content: t('faq.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/faq' }]
})

const images = {
  cityscape: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Cityscape.svg'
}
</script>


