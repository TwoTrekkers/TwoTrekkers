<template>
  <section class="w-4/5 mx-auto py-12">
    <h1 class="mb-6">Login</h1>
    <form class="max-w-md space-y-4">
      <div>
        <label class="block text-sm mb-1">Email</label>
        <input type="email" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">Password</label>
        <input type="password" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <button type="submit" class="trekker-btn">Sign in</button>
    </form>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.login'),
  meta: [
    { name: 'description', content: t('auth.login.title') },
    { name: 'keywords', content: 'login, account' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.login') },
    { property: 'og:description', content: t('auth.login.title') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.login') },
    { name: 'twitter:description', content: t('auth.login.title') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/login' }]
}))
</script>


