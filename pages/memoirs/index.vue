<template>
  <section class="container-wide section max-w-[1200px]">
    <header class="mb-6">
      <h2 class="text-medium">{{ t('memoirs.categories') }}</h2>
    </header>

    <div class="flex flex-wrap gap-3 mb-6">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="toggleTag(tag)"
        class="category-tag transition-opacity"
        :class="{ 'opacity-60 ring-2 ring-primary': isSelected(tag) }"
      >{{ tag }}</button>
    </div>

    <div class="flex flex-col gap-4 mb-8">
      <input
        v-model="query"
        :placeholder="t('memoirs.search.placeholder')"
        class="w-full h-12 rounded-full bg-background text-white placeholder:text-text-muted border border-border-light px-5 focus:outline-none focus:ring-2 focus:ring-primary"
        @keyup.enter="applyFilters"
      />
      <div class="flex justify-end">
        <button class="w-full md:w-64 h-12 rounded-full trekker-btn" @click="applyFilters">{{ t('memoirs.search.button') }}</button>
      </div>
    </div>

    <div class="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="m in filtered"
        :key="m.id"
        class="card card-hover overflow-hidden flex flex-col min-h-[400px] md:min-h-[480px]"
      >
        <div class="w-full bg-background-dark">
          <img
            :src="getRandomImage(m)"
            :alt="t('alt.twotrekkers_logo')"
            class="w-full h-56 object-cover rounded-t-2xl"
          />
        </div>

        <div class="p-5 flex-1 flex flex-col">
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tag in (m.metadata?.tags || [])"
              :key="tag"
              class="category-tag"
            >{{ tag }}</span>
          </div>

          <h3 class="text-[22px] leading-7 font-semibold line-clamp-2">{{ getLocalTitle(m) }}</h3>

          <div
            class="mt-2 text-sm text-white/70 leading-tight line-clamp-3 [&_p]:text-sm [&_p]:text-white/70 [&_p]:leading-tight [&_*]:text-sm [&_*]:text-white/70 [&_*]:leading-tight"
            v-html="render(getLocalSummary(m) || '')"
          ></div>

          <div class="mt-auto pt-4">
            <NuxtLink :to="localePath(`/memoirs/${m.id}`)" class="read-more text-secondary">{{ t('memoirs.read.more') }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const { t, locale } = useI18n()
const localePath = useLocalePath()

interface MemoirPreview {
  id: string
  metadata?: { 
    author?: string; 
    title?: string; 
    description?: string; 
    tags?: string[] 
  }
  featured?: { 
    title?: string; 
    imageUrl?: string 
  }
  images?: Array<{ 
    altText?: string; 
    imageUrl?: string 
  }>
  summary?: string
  i18n?: {
    title?: Record<string, string>
    summary?: Record<string, string>
  }
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

const requestURL = useRequestURL()
const memoirsJsonUrl = `${requestURL.origin}/data/memoirs.json`
const { data } = await useFetch<MemoirPreview[]>(memoirsJsonUrl, { key: 'memoirs-all' })

// Track if we're on client side
const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})

// Random image selection that works on both server and client
const getRandomImage = (item: any) => {
  if (!isClient.value) {
    // Server-side: use deterministic selection
    return item.images && item.images.length > 0 
      ? item.images[Math.floor((item.id?.charCodeAt(0) || 0) % item.images.length)]?.imageUrl || '/images/Icon-camera-retro.svg' 
      : '/images/Icon-camera-retro.svg'
  }
  
  // Client-side: use random selection
  return item.images && item.images.length > 0 
    ? item.images[Math.floor(Math.random() * item.images.length)]?.imageUrl || '/images/Icon-camera-retro.svg' 
    : '/images/Icon-camera-retro.svg'
}

const memoirs = computed<MemoirPreview[]>(() => data.value || [])

// Localized title/summary helpers
const getLocalTitle = (m: any) => {
  const tmap = m?.i18n?.title
  return tmap?.[locale.value] || tmap?.en || m.metadata?.title || ''
}

const getLocalSummary = (m: any) => {
  const smap = m?.i18n?.summary
  return smap?.[locale.value] || smap?.en || m.summary || ''
}

// UI state
const query = ref('')
const selected = ref<string[]>([])

// Derived data
const tags = computed<string[]>(() => {
  const set = new Set<string>()
  for (const m of memoirs.value) {
    for (const tag of m.metadata?.tags || []) set.add(tag)
  }
  return Array.from(set)
})

const normalize = (s: string) => s.trim().toLowerCase()
const queryTags = computed<string[]>(() => query.value
  .split(/[\s,]+/)
  .map(normalize)
  .filter(Boolean)
)
const activeTokens = computed<string[]>(() => {
  const tokens: string[] = []
  for (const t of selected.value) tokens.push(normalize(t))
  for (const t of queryTags.value) tokens.push(t)
  // de-duplicate while preserving order
  return Array.from(new Set(tokens))
})

const filtered = computed<MemoirPreview[]>(() => {
  const tokens = activeTokens.value
  if (tokens.length === 0) return memoirs.value
  return memoirs.value.filter(m => {
    const mTags = (m.metadata?.tags || []).map(normalize)
    // OR semantics with partial match: show if ANY typed token appears in ANY tag
    return tokens.some(tok => mTags.some(tag => tag.includes(tok)))
  })
})

function toggleTag(tag: string) {
  const i = selected.value.indexOf(tag)
  if (i === -1) selected.value.push(tag)
  else selected.value.splice(i, 1)
}
const isSelected = (tag: string) => selected.value.includes(tag)
const applyFilters = () => { /* reactive computed does filtering */ }

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const render = (src: string) => md.render(src || '')
</script>


