<template>
  <div v-if="memoir" class="pb-16">
    <!-- Hero image with overlay title -->
    <section class="relative w-full h-[280px] sm:h-[320px] md:h-[440px] overflow-hidden">
      <img :src="heroImage" :alt="t('alt.twotrekkers_logo')" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl px-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{{ localTitle }}</h1>
      </div>
    </section>

    <!-- Main two-column content: markdown + author card -->
    <section class="w-11/12 max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
      <article class="lg:col-span-8">
        <!-- Summary section -->
        <div v-if="localSummary" class="mb-6 p-4 bg-white/5 rounded-lg">
          <p class="text-sm text-white/80 leading-relaxed">{{ localSummary }}</p>
        </div>
        <!-- Main content -->
        <div class="prose prose-invert max-w-none prose-sm" v-html="html"></div>
      </article>

      <aside class="lg:col-span-4 lg:sticky lg:top-24 h-fit">
        <div class="card shadow-card rounded-xl p-5 bg-white/5">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-primary/70 to-primary/30 flex items-center justify-center text-white font-semibold">
              {{ authorInitials }}
            </div>
            <div>
              <p class="text-sm opacity-80">{{ t('memoirs.author') }}</p>
              <p class="text-lg font-medium">{{ authorName }}</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-sm opacity-80">{{ t('memoirs.posted_on') }}</p>
            <p class="text-base">{{ postedOn }}</p>
          </div>
                      <div class="mt-4">
              <p class="text-sm opacity-80">{{ t('memoirs.tags') }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tag in (memoir.metadata?.tags || [])" :key="tag" class="category-tag">{{ tag }}</span>
              </div>
            </div>
          <div class="mt-5 flex gap-2">
            <button class="trekker-btn" @click="copyLink">Copy Link</button>
          </div>
        </div>
      </aside>
    </section>

    <!-- Divider between markdown content and gallery -->
    <section class="w-11/12 max-w-6xl mx-auto mt-6">
      <div class="h-px bg-white/15"></div>
    </section>

    <!-- Image gallery below content -->
    <section v-if="images.length" class="w-11/12 max-w-6xl mx-auto mt-10">
      <h2 class="text-xl font-semibold mb-4">{{ t('memoirs.images.label') }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4" id="imageGallery">
        <button
          v-for="img in paginatedImages"
          :key="img.imageUrl"
          class="group relative rounded-lg overflow-hidden bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/60"
          @click="openModalByUrl(img.imageUrl)"
        >
          <img :src="img.imageUrl" :alt="img.altText || memoir.metadata?.title" class="w-full h-32 sm:h-36 md:h-40 object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
        </button>
      </div>

      <!-- Pagination controls -->
      <div v-if="totalPages > 1" class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" id="imagePagination">
        <button class="trekker-btn" :disabled="currentPage === 1" @click="prevPage">{{ t('memoirs.previous') }}</button>
        <div class="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
          <button
            v-for="n in totalPages"
            :key="n"
            class="px-2 sm:px-3 py-1 rounded border border-white/15 text-sm sm:text-base"
            :class="n === currentPage ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'"
            @click="goToPage(n)"
          >
            {{ n }}
          </button>
        </div>
        <button class="trekker-btn" :disabled="currentPage === totalPages" @click="nextPage">{{ t('memoirs.next') }}</button>
      </div>
    </section>

    <!-- Modal viewer -->
    <div v-if="showModal" class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4" @click.self="closeModal" role="dialog" aria-modal="true">
      <button class="absolute top-2 right-3 sm:top-5 sm:right-6 text-white text-2xl sm:text-3xl leading-none z-10" @click="closeModal" aria-label="Close viewer">&times;</button>
      <button v-if="images.length" class="absolute left-2 sm:left-4 md:left-8 text-white/80 hover:text-white text-2xl sm:text-3xl z-10" @click="modalPrev" aria-label="Previous image">&#8249;</button>
      <div class="relative max-w-5xl w-full h-full flex items-center justify-center">
        <img :src="currentImage?.imageUrl" :alt="currentImage?.altText || memoir.metadata?.title" class="w-full h-auto max-h-[90vh] rounded-lg object-contain" />
        <p v-if="currentImage?.altText" class="mt-2 text-center text-xs sm:text-sm opacity-80 px-4">{{ currentImage?.altText }}</p>
      </div>
      <button v-if="images.length" class="absolute right-2 sm:right-4 md:right-8 text-white/80 hover:text-white text-2xl sm:text-3xl z-10" @click="modalNext" aria-label="Next image">&#8250;</button>
    </div>
  </div>

  <article v-else class="w-4/5 mx-auto py-12">
    <p>{{ t('memoirs.no_content') }}</p>
  </article>
</template>

<script setup lang="ts">

import MarkdownIt from 'markdown-it'
const { t, locale } = useI18n()
const site = 'https://twotrekkers.travel'
const fallback = 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg'

interface MemoirImage { a?: string; b?: string }
interface MemoirImage { altText?: string; imageUrl?: string }
interface Memoir {
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
  images?: MemoirImage[]
  publishedAt?: string
  summary?: string
  i18n?: {
    title?: Record<string, string>
    summary?: Record<string, string>
  }
}

const route = useRoute()
const requestURL = useRequestURL()
const memoirsJsonUrl = `${requestURL.origin}/data/memoirs.json`
const { data } = await useFetch<Memoir[]>(memoirsJsonUrl, { key: 'memoirs-all' })
const memoir = computed<Memoir | undefined>(() => (data.value || []).find((m) => String(m.id) === String(route.params.id)))

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const render = (src: string) => md.render(src || '')

// Load markdown content from locale-specific files with fallback
const mdSource = ref('')
const loadMarkdown = async () => {
  const m = memoir.value
  if (!m?.id) { mdSource.value = ''; return }
  const uuidFolder = encodeURIComponent(String(m.id))
  const nameFolder = encodeURIComponent(String((m as any)._id || m.metadata?.title || m.id))
  const paths = [
    `/md/memoirs/${nameFolder}/${locale.value}.md`,
    `/md/memoirs/${nameFolder}/en.md`,
    // Fallbacks: legacy by uuid folder and old flat files
    `/md/memoirs/${uuidFolder}/${locale.value}.md`,
    `/md/memoirs/${uuidFolder}/en.md`,
    `/md/memoirs/${uuidFolder}.${locale.value}.md`,
    `/md/memoirs/${uuidFolder}.en.md`
  ]
  for (const p of paths) {
    try {
      const res = await fetch(p, { cache: 'no-store' })
      if (res.ok) {
        mdSource.value = await res.text()
        return
      }
    } catch {
      // continue to next fallback
    }
  }
  // Fallback to JSON markdown if no file found
  mdSource.value = m?.metadata?.description || ''
}

watch([memoir, () => locale.value], () => { loadMarkdown() }, { immediate: true })

const html = computed(() => render(mdSource.value || memoir.value?.metadata?.description || ''))

// Localized title/summary helpers
const localTitle = computed(() => {
  const m:any = memoir.value
  if (!m) return ''
  const tmap = (m as any).i18n?.title
  return tmap?.[locale.value] || tmap?.en || m.metadata?.title || ''
})
const localSummary = computed(() => {
  const m:any = memoir.value
  if (!m) return ''
  const smap = (m as any).i18n?.summary
  return smap?.[locale.value] || smap?.en || m.summary || ''
})

// Author/posted info
const postedOn = computed(() => {
  const iso = memoir.value?.publishedAt
  if (!iso) return ''
  try {
    const d = new Date(iso)
    // Use UTC to ensure SSR/CSR consistency
    const year = d.getUTCFullYear()
    const month = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
    const day = String(d.getUTCDate()).padStart(2, '0')
    const hours = String(d.getUTCHours()).padStart(2, '0')
    const minutes = String(d.getUTCMinutes()).padStart(2, '0')
    return `${month} ${day}, ${year} ${hours}:${minutes} UTC`
  } catch {
    return iso
  }
})

const authorName = computed(() => memoir.value?.metadata?.author || '')
const authorInitials = computed(() => {
  const n = (authorName.value || '').trim()
  if (!n) return 'TT'
  const parts = n.split(/\s+/)
  const first = parts[0]?.[0] || ''
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : ''
  return (first + last).toUpperCase()
})

// Gallery pagination
const pageSize = 8
const images = computed<MemoirImage[]>(() => (memoir.value?.images || []))
// Track if we're on client side
const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})

const heroImage = computed(() => {
  const list = images.value
  if (list.length > 0) {
    if (!isClient.value) {
      // Server-side: use deterministic selection
      const idx = Math.floor((memoir.value?.id?.charCodeAt(0) || 0) % list.length)
      return list[idx]?.imageUrl || fallback
    }
    // Client-side: use random selection
    const idx = Math.floor(Math.random() * list.length)
    return list[idx]?.imageUrl || fallback
  }
  return fallback
})
const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(images.value.length / pageSize)))
const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return images.value.slice(start, start + pageSize)
})
const goToPage = (n: number) => {
  if (n < 1 || n > totalPages.value) return
  currentPage.value = n
}
const prevPage = () => goToPage(currentPage.value - 1)
const nextPage = () => goToPage(currentPage.value + 1)

// Modal
const showModal = ref(false)
const currentIndex = ref(0)
const currentImage = computed(() => images.value[currentIndex.value])
const openModalByUrl = (url?: string) => {
  if (!url) return
  const idx = images.value.findIndex(i => i.b === url)
  currentIndex.value = idx >= 0 ? idx : 0
  showModal.value = true
}
const closeModal = () => { showModal.value = false }
const modalPrev = () => { if (images.value.length) currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length }
const modalNext = () => { if (images.value.length) currentIndex.value = (currentIndex.value + 1) % images.value.length }

// Copy link
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
  } catch {
    // no-op
  }
}

// Keyboard navigation for modal
onMounted(() => {
  const handler = (e: KeyboardEvent) => {
    if (!showModal.value) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') modalPrev()
    if (e.key === 'ArrowRight') modalNext()
  }
  window.addEventListener('keydown', handler)
  onBeforeUnmount(() => window.removeEventListener('keydown', handler))
})

watchEffect(() => {
  const m:any = memoir.value
  if (!m) return
  const title = localTitle.value || 'Memoir'
  const desc = localSummary.value || `Travel memoir: ${title}`
  const tags = (m?.metadata?.tags || []).join(', ')
  const img = heroImage.value
  const url = `${site}/memoirs/${m.id}`
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


