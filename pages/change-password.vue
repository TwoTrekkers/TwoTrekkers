<template>
  <section class="w-4/5 mx-auto py-12">
    <h1 class="mb-6">Change Password</h1>
    <form class="max-w-md space-y-4">
      <div>
        <label class="block text-sm mb-1">Current Password</label>
        <input type="password" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">New Password</label>
        <input type="password" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">Confirm New Password</label>
        <input type="password" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <button type="submit" class="trekker-btn">Update</button>
    </form>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.change_password'),
  meta: [
    { name: 'description', content: t('auth.change.password.title') },
    { name: 'keywords', content: 'change password, account' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.change_password') },
    { property: 'og:description', content: t('auth.change.password.title') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.change_password') },
    { name: 'twitter:description', content: t('auth.change.password.title') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/change-password' }]
}))
</script>


