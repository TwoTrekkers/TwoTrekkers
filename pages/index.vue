<template>
  <div>
    <!-- Hero -->
    <section class="section bg-background min-h-[90vh]">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div>
          <h1 class="text-large">{{ $t('home.hero.title') }}</h1>
          <p class="text-small muted mt-4">{{ $t('home.hero.subtitle') }}</p>
          <div class="mt-8 flex gap-3">
            <a href="mailto:info@twotrekkers.com" class="trekker-btn">{{ $t('home.hero.cta') }}</a>
            <NuxtLink to="/why" class="trekker-btn-outline">{{ $t('nav.why') }}</NuxtLink>
          </div>
        </div>
        <div class="relative">
          <div class="card p-6 shadow-card">
            <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/HomeLandingImage.svg" :alt="$t('alt.twotrekkers_logo')" width="420" height="420" class="mx-auto w-[320px] md:w-[460px] h-auto" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-1 gap-12 items-center min-h-[70vh]">
        <div class="text-center mx-auto max-w-2xl">
          <p class="eyebrow">{{ $t('home.services.title') }}</p>
          <h2 class="text-medium font-semibold mt-2">{{ $t('home.services.heading') }}</h2>
          <p class="text-small muted mt-4">{{ $t('home.services.description') }}</p>
        </div>
        <div class="relative">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/HomeTailorTravel.svg" :alt="$t('alt.twotrekkers_logo')" width="512" height="512" class="mx-auto w-[320px] md:w-[520px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Journey CTA -->
    <section class="section min-h-[90vh] flex items-center">
      <div class="container-wide text-center">
        <h2 class="text-large">{{ $t('home.journey.title') }}</h2>
        <p class="text-small muted mt-4">{{ $t('home.journey.description') }}</p>
        <div class="mt-8 flex justify-center">
          <NuxtLink to="/why" class="trekker-btn">{{ $t('home.journey.cta') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Relocation (full-height staggered) -->
    <section class="py-20 md:py-28 min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div>
          <p class="eyebrow">{{ $t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ $t('home.relocation.title') }}</h2>
          <p class="text-small muted mt-4">{{ $t('home.relocation.description') }}</p>
          <div class="mt-8">
            <NuxtLink to="/relocation" class="trekker-btn">{{ $t('home.relocation.cta') }}</NuxtLink>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/RelocatedImage.svg" alt="Relocation" width="360" height="360" class="w-[300px] md:w-[420px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Nomad (full-height staggered, image first on desktop) -->
    <section class="py-20 md:py-28 min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div class="order-2 md:order-1 flex justify-center">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/NomadImage.svg" alt="Nomad" width="360" height="360" class="w-[300px] md:w-[420px] h-auto" loading="lazy" />
        </div>
        <div class="order-1 md:order-2">
          <p class="eyebrow">{{ $t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ $t('home.nomad.title') }}</h2>
          <p class="text-small muted mt-4">{{ $t('home.nomad.description') }}</p>
          <div class="mt-8">
            <NuxtLink to="/nomad" class="trekker-btn">{{ $t('home.nomad.cta') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Everyone / travel map CTA -->
    <section class="section-muted min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div>
          <p class="eyebrow">{{ $t('home.services.title') }}</p>
          <h2 class="text-medium mt-2">{{ $t('home.everyone.title') }}</h2>
          <p class="text-small muted mt-4">{{ $t('home.everyone.description') }}</p>
          <div class="mt-8">
            <NuxtLink to="/travel" class="trekker-btn">{{ $t('home.everyone.cta') }}</NuxtLink>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TravelMap.svg" alt="TwoTrekkers" width="300" height="300" class="w-[260px] md:w-[380px] h-auto" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Memoirs preview heading -->
    <section class="section min-h-[90vh] flex items-center">
      <div class="container-wide">
        <h2 class="text-medium">Memoirs</h2>
        <p class="text-small muted mt-2">{{ $t('home.stories.title') }}</p>
        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="item in memoirs" :key="item.a" class="card card-hover overflow-hidden">
            <div class="aspect-[4/3] bg-background relative">
              <img :src="item.e?.b || item.d?.[0]?.b" :alt="item.b?.b || item._id" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span v-for="tag in (Array.isArray(item.b?.d) ? item.b.d.slice(0,2) : [])" :key="tag" class="category-tag">{{ tag }}</span>
              </div>
              <h3 class="text-[20px] md:text-[22px] font-semibold">{{ item.b?.b || item._id }}</h3>
              <p class="text-small muted mt-2 line-clamp-3">{{ item.h }}</p>
              <div class="mt-4">
                <NuxtLink :to="`/memoirs/${encodeURIComponent(item._id)}`" class="read-more">{{ $t('memoirs.read.more') }}</NuxtLink>
              </div>
            </div>
          </article>
        </div>
        <div class="mt-10">
          <NuxtLink to="/memoirs" class="trekker-btn-outline">{{ $t('nav.memoirs') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Affiliates / Partners CTA -->
    <section class="section bg-background min-h-[90vh] flex items-center">
      <div class="container-wide grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div>
          <h2 class="text-medium">{{ $t('home.affiliates.title') }}</h2>
          <p class="text-small muted mt-4">{{ $t('home.affiliates.description') }}</p>
          <div class="mt-8">
            <a href="mailto:info@twotrekkers.com" class="trekker-btn">Connect Now</a>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="card p-6 shadow-card">
            <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Associate.svg" alt="TwoTrekkers" width="350" height="350" class="mx-auto w-[260px] md:w-[380px] h-auto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

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

const { data: memoirsData } = await useFetch('/data/memoirs.json')
const memoirs = computed(() => (memoirsData.value as any[] | undefined)?.slice(0, 3) || [])
</script>


