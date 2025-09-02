<template>
  <section class="section">
    <div class="container-wide">
      <h1 class="text-large">{{ $t('nomad.page.title') }}</h1>
      <p class="text-small muted mt-4">{{ $t('nomad.page.subtitle') }}</p>
      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <img :src="images.nomadLife" :alt="$t('alt.twotrekkers_logo')" />
        <img :src="images.outwest" :alt="$t('alt.twotrekkers_logo')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()

useHead({
  title: t('page.titles.nomad'),
  meta: [
    { name: 'description', content: t('nomad.description') },
    { name: 'keywords', content: 'digital nomad, remote work, nomad lifestyle, remote work destinations, nomad visas, work from anywhere, digital nomad guide, remote work lifestyle, nomad community' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('nomad.page.title') },
    { property: 'og:description', content: t('nomad.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('nomad.page.title') },
    { name: 'twitter:description', content: t('nomad.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/nomad' }]
})

const images = {
  nomadLife: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/NomadLife.svg',
  outwest: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/OutWest.svg'
}
</script>


