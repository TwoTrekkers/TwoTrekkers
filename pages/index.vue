<template>
  <div>
    <!-- Hero -->
    <section class="section bg-background min-h-[90vh]">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div v-scrollanimation="{ threshold: 0.2 }">
          <h1 class="text-large">{{ t('home.hero.title') }}</h1>
          <p class="text-small muted mt-4">{{ t('home.hero.subtitle') }}</p>
                  <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@twotrekkers.travel" class="trekker-btn">{{ t('home.hero.cta') }}</a>
          <NuxtLink :to="localePath('/why')" class="trekker-btn-outline">{{ t('nav.why') }}</NuxtLink>
        </div>
        </div>
        <div class="relative" v-scrollanimation="{ threshold: 0.3, rootMargin: '50px' }">
          <div class="card p-6 shadow-card">
            <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/HomeLandingImage.svg" :alt="t('alt.twotrekkers_logo')" width="420" height="420" class="mx-auto w-[320px] md:w-[460px] h-auto" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-1 gap-12 items-center min-h-[70vh]">
        <div class="text-center mx-auto max-w-2xl" v-scrollanimation>
          <p class="eyebrow">{{ t('home.services.title') }}</p>
          <h2 class="text-medium font-semibold mt-2">{{ t('home.services.heading') }}</h2>
          <p class="text-small muted mt-4">{{ t('home.services.description') }}</p>
        </div>
        <div class="relative" v-scrollanimation="{ threshold: 0.2 }">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/HomeTailorTravel.svg" :alt="t('alt.twotrekkers_logo')" width="512" height="512" class="mx-auto w-[320px] md:w-[520px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Journey CTA -->
    <section class="section min-h-[90vh] flex items-center">
      <div class="container-wide text-center" v-scrollanimation>
        <h2 class="text-large">{{ t('home.journey.title') }}</h2>
        <p class="text-small muted mt-4">{{ t('home.journey.description') }}</p>
        <div class="mt-8 flex justify-center">
          <NuxtLink :to="localePath('/why')" class="trekker-btn w-full sm:w-auto">{{ t('home.journey.cta') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Relocation (full-height staggered) -->
    <section class="py-20 md:py-28 min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div v-scrollanimation="{ threshold: 0.2 }">
          <p class="eyebrow">{{ t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ t('home.relocation.title') }}</h2>
          <p class="text-small muted mt-4">{{ t('home.relocation.description') }}</p>
          <div class="mt-8">
            <NuxtLink :to="localePath('/relocation')" class="trekker-btn">{{ t('home.relocation.cta') }}</NuxtLink>
          </div>
        </div>
        <div class="flex justify-center" v-scrollanimation="{ threshold: 0.3 }">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/RelocatedImage.svg" alt="Relocation" width="360" height="360" class="w-[300px] md:w-[420px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Nomad (full-height staggered, image first on desktop) -->
    <section class="py-20 md:py-28 min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div class="order-2 md:order-1 flex justify-center" v-scrollanimation="{ threshold: 0.3 }">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/NomadImage.svg" alt="Nomad" width="360" height="360" class="w-[300px] md:w-[420px] h-auto" loading="lazy" />
        </div>
        <div class="order-1 md:order-2" v-scrollanimation="{ threshold: 0.2 }">
          <p class="eyebrow">{{ t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ t('home.nomad.title') }}</h2>
          <p class="text-small muted mt-4">{{ t('home.nomad.description') }}</p>
          <div class="mt-8">
            <NuxtLink :to="localePath('/nomad')" class="trekker-btn">{{ t('home.nomad.cta') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Everyone / travel map CTA -->
    <section class="section-muted min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div v-scrollanimation="{ threshold: 0.2 }">
          <p class="eyebrow">{{ t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ t('home.everyone.title') }}</h2>
          <p class="text-small muted mt-4">{{ t('home.everyone.description') }}</p>
          <div class="mt-8">
            <NuxtLink :to="localePath('/travel')" class="trekker-btn">{{ t('home.everyone.cta') }}</NuxtLink>
          </div>
        </div>
        <div class="flex justify-center" v-scrollanimation="{ threshold: 0.3 }">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TravelMap.svg" alt="TwoTrekkers" width="300" height="300" class="w-[260px] md:w-[380px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Memoirs preview heading -->
    <section class="section min-h-[90vh] flex items-center">
      <div class="container-wide" v-scrollanimation>
        <h2 class="text-medium">Memoirs</h2>
        <p class="text-small muted mt-2">{{ t('home.stories.title') }}</p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <article v-for="(item, index) in memoirs" :key="item.id" 
                   class="card card-hover overflow-hidden flex flex-col min-h-[400px] md:min-h-[480px]"
                   v-scrollanimation="{ threshold: 0.1, rootMargin: '20px' }"
                   :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="w-full bg-background-dark">
                          <img
              :src="getRandomImage(item)"
              :alt="item.metadata?.title || item._id"
              class="w-full h-56 object-cover rounded-t-2xl"
            />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="tag in (item.metadata?.tags || []).slice(0, 2)"
                  :key="tag"
                  class="category-tag"
                >{{ tag }}</span>
              </div>

              <h3 class="text-[22px] leading-7 font-semibold line-clamp-2">{{ getLocalTitle(item) }}</h3>

              <div
                class="mt-2 text-sm text-white/70 leading-tight line-clamp-3 [&_p]:text-sm [&_p]:text-white/70 [&_p]:leading-tight [&_*]:text-sm [&_*]:text-white/70 [&_*]:leading-tight"
                v-html="render(getLocalSummary(item) || '')"
              ></div>

              <div class="mt-auto pt-4">
                <NuxtLink :to="localePath(`/memoirs/${item.id}`)" class="read-more text-secondary">{{ t('memoirs.read.more') }}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
        <div class="mt-10" v-scrollanimation="{ threshold: 0.2 }">
          <NuxtLink :to="localePath('/memoirs')" class="trekker-btn-outline">{{ t('nav.memoirs') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Affiliates / Partners CTA -->
    <section class="section bg-background min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div v-scrollanimation="{ threshold: 0.2 }">
          <h2 class="text-medium">{{ t('home.affiliates.title') }}</h2>
          <p class="text-small muted mt-4">{{ t('home.affiliates.description') }}</p>
          <div class="mt-8">
            <a href="mailto:info@twotrekkers.travel" class="trekker-btn">Connect Now</a>
          </div>
        </div>
        <div class="flex justify-center" v-scrollanimation="{ threshold: 0.3 }">
          <div class="card p-6 shadow-card">
            <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Associate.svg" alt="TwoTrekkers" width="350" height="350" class="mx-auto w-[260px] md:w-[380px] h-auto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const { t, locale } = useI18n()
const localePath = useLocalePath()

const md = new MarkdownIt({ html: false, linkify: true, breaks: true })
const render = (src: string) => md.render(src || '')

useHead(() => ({
  title: t('home.title'),
  meta: [
    { name: 'description', content: t('home.description') },
    { name: 'keywords', content: 'travel consultancy, digital nomad services, expat relocation, visa assistance, travel planning, adventure travel, remote work destinations, living abroad tips, destination guides' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('home.title') },
    { property: 'og:description', content: t('home.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: t('meta.og.site_name') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('home.title') },
    { name: 'twitter:description', content: t('home.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://twotrekkers.travel/' }
  ]
}))

const requestURL = useRequestURL()
const memoirsJsonUrl = `${requestURL.origin}/data/memoirs.json`
const { data: memoirsData, pending, error } = await useFetch(memoirsJsonUrl, { key: 'memoirs-all' })

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

// Localized title/summary helpers
const getLocalTitle = (item: any) => {
  const tmap = item?.i18n?.title
  return tmap?.[locale.value] || tmap?.en || item.metadata?.title || ''
}

const getLocalSummary = (item: any) => {
  const smap = item?.i18n?.summary
  return smap?.[locale.value] || smap?.en || item.summary || ''
}

const memoirs = computed(() => {
  // Wait for data to be loaded
  if (pending.value || !memoirsData.value) return []
  
  const allMemoirs = memoirsData.value as any[]
  if (!allMemoirs || allMemoirs.length === 0) return []
  
  // Sort by publishedAt date (newest first) and take the first 3
  // Use fallback date for memoirs without publishedAt
  return allMemoirs
    .map(memoir => ({
      ...memoir,
      sortDate: memoir.publishedAt ? new Date(memoir.publishedAt).getTime() : new Date('2020-01-01').getTime()
    }))
    .sort((a, b) => b.sortDate - a.sortDate)
    .slice(0, 3)
    .map(({ sortDate, ...memoir }) => memoir) // Remove the temporary sortDate field
})
</script>


