/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff385c',
        'primary-hover': '#e03150',
        secondary: '#007bff',
        'secondary-hover': '#0056b3',
        background: '#323232',
        'background-dark': '#161616',
        'background-darker': '#1a1a1a',
        text: '#ffffff',
        'text-muted': '#94a3b8',
        'text-secondary': '#b0b0b0',
        border: 'rgba(255, 255, 255, 0.1)',
        'border-light': 'rgba(255, 255, 255, 0.2)'
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif'
        ]
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 12px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

