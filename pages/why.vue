<template>
  <!-- Hero -->
  <section class="section px-0">
    <div class="container-wide">
      <div class="relative rounded-2xl overflow-hidden shadow-card">
        <img :src="images.whyLanding" :alt="t('alt.twotrekkers_logo')" class="w-full h-[360px] md:h-[520px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10">
          <h1 class="text-large">{{ t('why.page.title') }}</h1>
          <p class="mt-3 muted max-w-2xl">{{ t('why.page.subtitle') }}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink :to="localePath('/travel')" class="trekker-btn">{{ t('home.journey.cta') }}</NuxtLink>
            <NuxtLink :to="localePath('/nomad')" class="trekker-btn-outline">{{ t('nomad.page.learn_more') }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section">
    <div class="container-wide">
      <div class="mb-8 md:mb-10 flex items-start gap-4">
        <div>
          <p class="eyebrow">{{ t('why.page.choose.title') }}</p>
          <h2 class="mt-1">{{ t('why.page.title') }}</h2>
          <p class="muted mt-2 max-w-3xl">{{ t('why.page.join.description') }}</p>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Expertise -->
        <article class="card p-6 card-hover group">
          <div class="relative rounded-xl overflow-hidden -mx-6 -mt-6 mb-4 h-40 bg-background-dark">
            <img :src="images.plan" :alt="t('why.page.alt.plan')" class="absolute inset-0 w-full h-full object-contain md:object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <span class="absolute bottom-3 left-3 category-tag text-xs">{{ t('why.page.expertise.title') }}</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-card">
              <!-- Sparkles icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white"><path d="M12 3l1.546 3.648L17 8.273l-3.454 1.625L12 13.545l-1.546-3.647L7 8.273l3.454-1.625L12 3zM6 14l.773 1.823L9 16.727l-1.227.904L8 19.455l-2-1.182-2 1.182.227-1.824L3 16.727l2.227-.904L6 14zm12 0l.773 1.823L21 16.727l-1.227.904L20 19.455l-2-1.182-2 1.182.227-1.824L15 16.727l2.227-.904L18 14z"/></svg>
            </div>
            <h3 class="text-[20px] font-semibold">{{ t('why.page.expertise.title') }}</h3>
          </div>
          <p class="mt-3 muted">{{ t('why.page.expertise.description') }}</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.expertise.point1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.expertise.point2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.expertise.point3') }}</span>
            </li>
          </ul>
        </article>

        <!-- Experience (highlight) -->
        <article class="card p-6 card-hover ring-1 ring-[var(--color-primary)]/50 bg-background-darker group">
          <div class="relative rounded-xl overflow-hidden -mx-6 -mt-6 mb-4 h-40 bg-background-dark">
            <img :src="images.trekker" :alt="t('why.page.alt.trekker')" class="absolute inset-0 w-full h-full object-contain md:object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <span class="absolute bottom-3 left-3 category-tag text-xs">{{ t('why.page.experience.title') }}</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-card">
              <!-- UserGroup icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <h3 class="text-[20px] font-semibold">{{ t('why.page.experience.title') }}</h3>
          </div>
          <p class="mt-3 muted">{{ t('why.page.experience.description') }}</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.experience.point1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.experience.point2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.experience.point3') }}</span>
            </li>
          </ul>
        </article>

        <!-- Insights -->
        <article class="card p-6 card-hover group">
          <div class="relative rounded-xl overflow-hidden -mx-6 -mt-6 mb-4 h-40 bg-background-dark">
            <img :src="images.chooseUs" :alt="t('alt.twotrekkers_logo')" class="absolute inset-0 w-full h-full object-contain md:object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <span class="absolute bottom-3 left-3 category-tag text-xs">{{ t('why.page.insights.title') }}</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-card">
              <!-- GlobeAlt icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7 10c0 1.15-.25 2.24-.69 3.22l-2.2-.88c-.31-.13-.54-.39-.62-.71l-.49-2a1 1 0 00-.97-.76H10l-.72-1.45c-.17-.35-.52-.57-.9-.57H6a6.99 6.99 0 0113 3.15zM4.07 13.1A7.01 7.01 0 0112 5c.9 0 1.76.16 2.56.46L13 7h-2c-.38 0-.73.22-.9.57L9 9h-1a1 1 0 00-.97.76l-.49 2c-.08.32-.31.58-.62.71l-1.85.74z"/></svg>
            </div>
            <h3 class="text-[20px] font-semibold">{{ t('why.page.insights.title') }}</h3>
          </div>
          <p class="mt-3 muted">{{ t('why.page.insights.description') }}</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.insights.point1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.insights.point2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1 text-primary"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span class="muted">{{ t('why.page.insights.point3') }}</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- Stats Row -->
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <div class="card p-5 text-center min-w-[200px]">
          <p class="text-[28px] leading-8 font-semibold">30+</p>
          <p class="muted text-sm">{{ t('why.stats.countries') }}</p>
        </div>
        <div class="card p-5 text-center min-w-[200px]">
          <p class="text-[28px] leading-8 font-semibold">5★</p>
          <p class="muted text-sm">{{ t('why.stats.satisfaction') }}</p>
        </div>
        <div class="card p-5 text-center min-w-[200px]">
          <p class="text-[28px] leading-8 font-semibold">24/7</p>
          <p class="muted text-sm">{{ t('why.stats.response') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Planning CTA -->
  <section class="section-muted">
    <div class="container-wide grid gap-10 md:grid-cols-2 items-center">
      <div>
        <p class="eyebrow">{{ t('why.page.planning.title') }}</p>
        <h2 class="mt-2">{{ t('home.services.heading') }}</h2>
        <p class="mt-4 muted">{{ t('travel.page.heading') }}</p>
        <div class="mt-6 flex gap-3">
          <NuxtLink :to="localePath('/travel')" class="trekker-btn">{{ t('travel.page.learn_more') }}</NuxtLink>
          <NuxtLink :to="localePath('/relocation')" class="trekker-btn-outline">{{ t('relocation.page.learn_more') }}</NuxtLink>
        </div>
      </div>
      <div class="order-first md:order-none">
        <div class="rounded-2xl overflow-hidden shadow-card">
          <img :src="images.planTrip" :alt="t('alt.twotrekkers_logo')" class="w-full h-[260px] md:h-[360px] object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- Closing -->
  <section class="section">
    <div class="container-wide text-center">
      <h2 class="mb-3">{{ t('why.page.join.title') }}</h2>
      <p class="muted max-w-3xl mx-auto">{{ t('why.page.join.description') }}</p>
      <div class="mt-6">
        <NuxtLink :to="localePath('/nomad')" class="trekker-btn">{{ t('home.nomad.cta') }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('page.titles.why'),
  meta: [
    { name: 'description', content: t('why.description') },
    { name: 'keywords', content: 'Two Trekkers, travel consultancy, why us' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('why.page.title') },
    { property: 'og:description', content: t('why.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('why.page.title') },
    { name: 'twitter:description', content: t('why.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' }
  ],
  link: [{ rel: 'canonical', href: 'https://twotrekkers.github.io/why' }]
})

const images = {
  whyLanding: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/WhyLanding.svg',
  trekker: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Trekker.svg',
  truck: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Truck.svg',
  plan: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/Plan.svg',
  chooseUs: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/ChooseUs.svg',
  planTrip: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/PlanTrip.svg'
}

// (No JSX components; icons are inlined in the template to avoid build issues)
</script>


