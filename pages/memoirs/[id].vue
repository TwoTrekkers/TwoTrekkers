<template>
  <article v-if="memoir" class="w-4/5 mx-auto py-12">
    <img :src="memoir.e?.b || fallback" :alt="$t('alt.twotrekkers_logo')" class="w-full h-64 object-contain bg-background rounded-xl" />
    <h1 class="mt-6">{{ memoir.b?.b }}</h1>
    <p class="mt-2 text-text-muted"><strong>{{ $t('memoirs.author') }}</strong> {{ memoir.b?.a }}</p>
    <div class="mt-6 prose prose-invert max-w-none" v-html="html"></div>
    <div class="mt-8 flex flex-wrap gap-2">
      <span v-for="t in (memoir.b?.d || [])" :key="t" class="px-2 py-0.5 text-xs rounded bg-white/10">{{ t }}</span>
    </div>
  </article>
  <article v-else class="w-4/5 mx-auto py-12">
    <p>{{ $t('memoirs.no_content') }}</p>
  </article>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'
const site = 'https://twotrekkers.travel'
const fallback = 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg'

interface Memoir {
  a: string
  b?: { a?: string; b?: string; c?: string; d?: string[] }
  e?: { a?: string; b?: string }
  h?: string
}

const route = useRoute()
const { data } = await useFetch<Memoir[]>('/data/memoirs.json')
const memoir = computed<Memoir | undefined>(() => (data.value || []).find((m) => String(m.a) === String(route.params.id)))

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const render = (src: string) => md.render(src || '')
const html = computed(() => render(memoir.value?.b?.c || ''))

watchEffect(() => {
  const m:any = memoir.value
  if (!m) return
  const title = m?.b?.b || 'Memoir'
  const desc = m?.h || `Travel memoir: ${title}`
  const tags = (m?.b?.d || []).join(', ')
  const img = m?.e?.b || fallback
  const url = `${site}/memoirs/${m.a}`
  useHead({
    title,
    meta: [
      { name: 'description', content: desc },
      { name: 'keywords', content: `${title}, travel memoir, ${tags}` },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: img },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: img }
    ],
    link: [{ rel: 'canonical', href: url }]
  })
})
</script>


