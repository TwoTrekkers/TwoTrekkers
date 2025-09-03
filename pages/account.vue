<template>
  <section class="w-4/5 mx-auto py-12">
    <h1>{{ t('nav.account') }}</h1>
    <p class="mt-2 text-text-muted">{{ t('page.titles.account') }}</p>
    <div class="mt-8">
      <img :src="images.accountAvatar" :alt="t('alt.twotrekkers_logo')" width="120" height="120" />
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()

useHead({
  title: t('page.titles.account'),
  meta: [
    { name: 'description', content: t('why.description') },
    { name: 'keywords', content: 'account, profile' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.account') },
    { property: 'og:description', content: t('why.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.account') },
    { name: 'twitter:description', content: t('why.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/account' }]
})

const images = {
  accountAvatar: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/AccountAvatar.svg'
}
</script>


