<template>
  <section class="w-4/5 mx-auto py-12">
    <h1 class="mb-6">Create Memoir</h1>
    <form class="max-w-2xl space-y-4">
      <div>
        <label class="block text-sm mb-1">Title</label>
        <input type="text" class="w-full rounded-md bg-background border border-border px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">Summary</label>
        <textarea class="w-full rounded-md bg-background border border-border px-3 py-2" rows="4" />
      </div>
      <div>
        <label class="block text-sm mb-1">Tags</label>
        <input type="text" class="w-full rounded-md bg-background border border-border px-3 py-2" placeholder="tag1, tag2" />
      </div>
      <button type="submit" class="trekker-btn">Create</button>
    </form>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()

useHead(() => ({
  title: t('page.titles.create_memoir'),
  meta: [
    { name: 'description', content: t('memoirs.description') },
    { name: 'keywords', content: 'create memoir, travel story' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.create_memoir') },
    { property: 'og:description', content: t('memoirs.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.create_memoir') },
    { name: 'twitter:description', content: t('memoirs.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/create-memoir' }]
}))
</script>


