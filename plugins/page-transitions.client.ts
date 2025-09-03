

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client side
  if (import.meta.server) return

  let isLoading = false
  let loadingBar: HTMLElement | null = null

  // Create loading bar element
  const createLoadingBar = () => {
    if (loadingBar) return loadingBar
    
    loadingBar = document.createElement('div')
    loadingBar.className = 'page-loading-bar'
    loadingBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      z-index: 9999;
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
    `
    document.body.appendChild(loadingBar)
    return loadingBar
  }

  // Show loading bar
  const showLoading = () => {
    if (isLoading) return
    isLoading = true
    
    const bar = createLoadingBar()
    bar.style.transform = 'translateX(0)'
  }

  // Hide loading bar
  const hideLoading = () => {
    if (!isLoading) return
    isLoading = false
    
    if (loadingBar) {
      loadingBar.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (loadingBar && loadingBar.parentNode) {
          loadingBar.parentNode.removeChild(loadingBar)
          loadingBar = null
        }
      }, 300)
    }
  }

  // Enhanced page transition
  const enhancePageTransition = () => {
    // Add transition classes to body
    document.body.classList.add('page-transitioning')
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('page-transitioning')
    }, 400)
  }

  // Hook into Nuxt's page transitions
  nuxtApp.hook('page:start', () => {
    showLoading()
    enhancePageTransition()
  })

  nuxtApp.hook('page:finish', () => {
    hideLoading()
  })

  // Add CSS for enhanced transitions
  const style = document.createElement('style')
  style.textContent = `
    /* Enhanced page transitions */
    .page-transitioning {
      overflow: hidden;
    }
    
    .page-transitioning #main-content {
      opacity: 0.8;
      transition: opacity 0.3s ease-in-out;
    }
    
    /* Simple fade in/out animations */
    .page-enter-active,
    .page-leave-active {
      transition: opacity 0.3s ease-in-out;
    }
    
    .page-enter-from {
      opacity: 0;
    }
    
    .page-leave-to {
      opacity: 0;
    }
    
    /* Loading bar animation */
    .page-loading-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      z-index: 9999;
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
    }
    
    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }
    
    /* Enhanced hover effects */
    .trekker-btn,
    .trekker-btn-outline {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .trekker-btn:hover,
    .trekker-btn-outline:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    }
    
    /* Simple fade in for page content */
    .page-content {
      animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    /* Loading spinner */
    .loading-spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `
  document.head.appendChild(style)

  // Provide transition utilities globally
  return {
    provide: {
      pageTransition: {
        showLoading,
        hideLoading,
        enhancePageTransition
      }
    }
  }
})
