<template>
  <footer class="pd-16 bg-background">
    <div class="container-wide py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-semibold mb-3">{{ $t('footer.follow_us') }}</h3>
          <div class="flex gap-3">
            <a href="https://www.instagram.com/two.trekkers.travels" aria-label="Instagram">
              <img src="/images/Instagram_Glyph_Gradient.svg" alt="Instagram" width="24" height="24" />
            </a>
          </div>
        </div>
        <div>
          <p class="font-semibold mb-3">{{ $t('footer.travel_guides') }}</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/faq">{{ $t('footer.frequently_asked') }}</NuxtLink></li>
            <li><a href="mailto:info@twotrekkers.com">{{ $t('footer.support_team') }}</a></li>
            <li><NuxtLink to="/travel-tricks">{{ $t('footer.travel_tips') }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-3">{{ $t('footer.get_in_touch') }}</p>
          <ul class="space-y-2 text-sm">
            <li><a href="mailto:info@twotrekkers.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>© {{ new Date().getFullYear() }} TwoTrekkers. All rights reserved.</p>
        <ul class="flex items-center gap-6">
          <li><NuxtLink to="/privacy">{{ $t('footer.privacy') }}</NuxtLink></li>
          <li><NuxtLink to="/terms">{{ $t('footer.terms') }}</NuxtLink></li>
          <li><a href="https://needletails.com" target="_blank">{{ $t('footer.our_developers') }}</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>


