<template>
  <section class="w-4/5 mx-auto py-12">
    <h1>{{ $t('why.page.title') }}</h1>
    <p class="mt-2 text-text-muted">{{ $t('why.page.subtitle') }}</p>
    <div class="mt-8 grid md:grid-cols-3 gap-6">
      <img :src="images.whyLanding" :alt="$t('alt.twotrekkers_logo')" />
      <img :src="images.trekker" :alt="$t('why.page.alt.trekker')" />
      <img :src="images.plan" :alt="$t('why.page.alt.plan')" />
      <img :src="images.truck" :alt="$t('why.page.alt.truck')" />
      <img :src="images.chooseUs" :alt="$t('alt.twotrekkers_logo')" />
      <img :src="images.planTrip" :alt="$t('alt.twotrekkers_logo')" />
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()

useHead({
  title: t('page.titles.why'),
  meta: [
    { name: 'description', content: t('why.description') },
    { name: 'keywords', content: 'Two Trekkers, travel consultancy, why us' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('why.page.title') },
    { property: 'og:description', content: t('why.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('why.page.title') },
    { name: 'twitter:description', content: t('why.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/why' }]
})

const images = {
  whyLanding: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/WhyLanding.svg',
  trekker: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Trekker.svg',
  truck: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Truck.svg',
  plan: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Plan.svg',
  chooseUs: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/ChooseUs.svg',
  planTrip: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/PlanTrip.svg'
}
</script>


