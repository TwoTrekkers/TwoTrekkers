export default defineNuxtPlugin((nuxtApp) => {
    const vScrollAnimation = {
      mounted(el: HTMLElement, binding: any) {
        // Only run on client side
        if (import.meta.client) {
          // Defer any DOM mutations until after app mounted to avoid hydration race
          nuxtApp.hook('app:mounted', () => {
            const options = {
              threshold: binding.value?.threshold || 0.1,
              rootMargin: binding.value?.rootMargin || '0px'
            }

            // Double rAF to ensure hydration finished
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                // Set initial styles
                el.style.opacity = '0'
                el.style.transform = 'translateY(20px)'
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      el.style.opacity = '1'
                      el.style.transform = 'translateY(0)'
                      observer.unobserve(el)
                    }
                  })
                }, options)

                observer.observe(el)
              })
            })
          })
        }
      },
      unmounted(el: HTMLElement) {
        // Cleanup if needed
      },
      // No SSR props to avoid mismatches
    }
  
    // Register the directive globally
    nuxtApp.vueApp.directive('scrollanimation', vScrollAnimation)
  }) 