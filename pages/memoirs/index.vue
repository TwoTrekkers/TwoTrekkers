<template>
  <section class="w-4/5 mx-auto py-12">
    <h1>{{ $t('memoirs.title') }}</h1>
    <p class="mt-2 text-text-muted">{{ $t('memoirs.description') }}</p>
    <div class="mt-8 grid md:grid-cols-3 gap-8">
      <article v-for="m in memoirs" :key="m.a" class="bg-background rounded-xl overflow-hidden shadow-md">
        <img :src="m.e?.b || '/images/Icon-camera-retro.svg'" :alt="$t('alt.twotrekkers_logo')" class="w-full h-40 object-contain bg-background-dark" />
        <div class="p-4">
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="t in (m.b?.d || [])" :key="t" class="px-2 py-0.5 text-xs rounded bg-white/10">{{ t }}</span>
          </div>
          <h3 class="font-semibold">{{ m.b?.b }}</h3>
          <div class="mt-1 text-sm text-text-muted prose prose-invert max-w-none" v-html="render(m.h || '')"></div>
          <NuxtLink :to="`/memoirs/${m.a}`" class="mt-3 inline-block text-primary">{{ $t('memoirs.read.more') }}</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const { t } = useI18n()

interface MemoirPreview {
  a: string
  b?: { a?: string; b?: string; c?: string; d?: string[] }
  e?: { a?: string; b?: string }
  h?: string
}

useHead(() => ({
  title: t('page.titles.memoirs'),
  meta: [
    { name: 'description', content: t('memoirs.description') },
    { name: 'keywords', content: 'travel memoirs, travel stories, travel experiences, travel blog, adventure stories, travel tips, travel community, real travel stories, travel inspiration' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.memoirs') },
    { property: 'og:description', content: t('memoirs.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.memoirs') },
    { name: 'twitter:description', content: t('memoirs.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.travel/memoirs' }]
}))

const { data } = await useFetch<MemoirPreview[]>('/data/memoirs.json')
const memoirs = computed<MemoirPreview[]>(() => data.value || [])
const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const render = (src: string) => md.render(src || '')
</script>


