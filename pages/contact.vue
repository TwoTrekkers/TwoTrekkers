<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('contact.title') }}</h1>
        <p class="text-xl text-gray-600">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="bg-white rounded-lg shadow-xl p-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">{{ t('contact.info.title') }}</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ t('contact.info.email') }}</p>
                  <p class="text-sm text-gray-600">hello@twotrekkers.travel</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ t('contact.info.location') }}</p>
                  <p class="text-sm text-gray-600">{{ t('contact.info.locationText') }}</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ t('contact.info.response') }}</p>
                  <p class="text-sm text-gray-600">{{ t('contact.info.responseText') }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('contact.social.title') }}</h3>
              <div class="flex space-x-4">
                <a href="https://instagram.com/twotrekkers" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">{{ t('contact.form.title') }}</h2>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">{{ t('contact.form.name') }}</label>
                <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">{{ t('contact.form.email') }}</label>
                <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700">{{ t('contact.form.subject') }}</label>
                <select id="subject" name="subject" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">{{ t('contact.form.selectSubject') }}</option>
                  <option value="travel">{{ t('contact.form.travel') }}</option>
                  <option value="relocation">{{ t('contact.form.relocation') }}</option>
                  <option value="nomad">{{ t('contact.form.nomad') }}</option>
                  <option value="other">{{ t('contact.form.other') }}</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">{{ t('contact.form.message') }}</label>
                <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>

              <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                {{ t('contact.form.send') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('page.titles.contact'),
  meta: [
    { name: 'description', content: t('contact.description') },
    { name: 'keywords', content: 'contact Two Trekkers, travel consultation, relocation help, visa assistance, travel planning, expat services, digital nomad support' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('page.titles.contact') },
    { property: 'og:description', content: t('contact.description') },
    { property: 'og:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: t('meta.og.site_name') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page.titles.contact') },
    { name: 'twitter:description', content: t('contact.description') },
    { name: 'twitter:image', content: 'https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg' },
    { name: 'twitter:site', content: t('meta.twitter.site') },
    { name: 'twitter:creator', content: t('meta.twitter.creator') }
  ],
  link: [
    { rel: 'canonical', href: 'https://twotrekkers.travel/contact' }
  ]
})
</script>
