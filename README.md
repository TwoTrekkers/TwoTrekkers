<div align="center">
  <img src="https://twotrekkers.nyc3.cdn.digitaloceanspaces.com/media/app-images/TwoTrekkersLogo.svg" alt="TwoTrekkers Logo" width="300" height="80">
  
  # TwoTrekkers Travel & Relocation
  
  ### 🌍 Your Global Travel & Relocation Partner
  
  [![Nuxt.js](https://img.shields.io/badge/Nuxt.js-4.0.3-00DC82?style=for-the-badge&logo=nuxt.js)](https://nuxt.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github)](https://twotrekkers.travel)
  [![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)
</div>

---

## 🚀 About TwoTrekkers

TwoTrekkers is a modern, multilingual travel and relocation consultancy website that helps adventurers and digital nomads navigate the world. Our platform provides comprehensive travel guides, relocation services, and expert advice for seamless global experiences.

### ✨ Key Features

- 🌍 **12 Languages Supported**: English, Spanish, French, German, Japanese, Korean, Chinese (Simplified/Traditional), Portuguese, Turkish, Hebrew
- 📱 **Mobile-First Design**: Responsive across all devices
- ⚡ **Lightning Fast**: Static generation for optimal performance
- 🔍 **SEO Optimized**: Built for search engine visibility
- 🎨 **Modern UI/UX**: Beautiful design with Tailwind CSS
- 🔒 **Secure**: HTTPS, security headers, encrypted storage
- 📊 **Analytics Ready**: Google Analytics integration
- 🌐 **Global CDN**: Fast content delivery worldwide

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Tools | Deployment |
|----------|---------|-------|------------|
| ![Nuxt.js](https://img.shields.io/badge/Nuxt.js-4.0.3-00DC82?style=flat&logo=nuxt.js) | ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js) | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript) | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions) |
| ![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?style=flat&logo=vue.js) | ![Nitro](https://img.shields.io/badge/Nitro-2.12-00DC82?style=flat) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css) | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github) |
| ![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat&logo=vite) | ![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown) | ![PostCSS](https://img.shields.io/badge/PostCSS-8.5-CC26DA?style=flat&logo=postcss) | ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean) |

</div>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**


### Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Type checking
npm run type-check

# Run tests
npm run test
```

---

## 🌐 Deployment

### Automatic Deployment (Recommended)

This project uses **GitHub Actions** for seamless CI/CD:

1. **Push to main branch** - Automatic deployment triggers
2. **GitHub Actions workflow** runs:
   - ✅ Type checking and validation
   - ✅ Static site generation
   - ✅ Deployment to GitHub Pages
   - ✅ Status notifications

```bash
git add .
git commit -m "Update website"
git push origin main
```

### Manual Deployment

- Navigate to **Actions** tab in your repository
- Select **"Deploy to GitHub Pages"** workflow
- Click **"Run workflow"**

### Live Sites

- **Production**: https://twotrekkers.travel
- **Development**: http://localhost:3000

---

## 📁 Project Structure

```
TwoTrekkers/
├── 📁 .github/workflows/     # GitHub Actions CI/CD
├── 📁 components/            # Vue.js components
│   ├── CookieConsent.vue     # Cookie consent banner
│   ├── LanguageSwitcher.vue  # Language selection
│   ├── PageTransition.vue   # Page transitions
│   ├── SiteFooter.vue       # Site footer
│   └── SiteHeader.vue       # Site header
├── 📁 composables/          # Vue composables
├── 📁 i18n/                 # Internationalization
│   └── locales/             # Language files
├── 📁 pages/                # Page components
│   ├── account.vue         # User account
│   ├── contact.vue         # Contact page
│   ├── memoirs/            # Travel memoirs
│   └── ...                 # Other pages
├── 📁 plugins/              # Nuxt plugins
├── 📁 public/              # Static assets
│   ├── images/             # Images and icons
│   ├── md/                 # Markdown content
│   └── data/               # JSON data
├── 📁 server/               # Server-side API
└── 📄 nuxt.config.ts       # Nuxt configuration
```

---

## 🌍 Internationalization

TwoTrekkers supports **12 languages** with automatic language detection:

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Spanish | `es` | ✅ Complete |
| French | `fr` | ✅ Complete |
| German | `de` | ✅ Complete |
| Japanese | `ja` | ✅ Complete |
| Korean | `ko` | ✅ Complete |
| Chinese (Simplified) | `zh-CN` | ✅ Complete |
| Chinese (Traditional) | `zh-TW` | ✅ Complete |
| Chinese (Hong Kong) | `zh-HK` | ✅ Complete |
| Portuguese | `pt` | ✅ Complete |
| Turkish | `tr` | ✅ Complete |
| Hebrew | `he` | ✅ Complete |

---

## 🎨 Design System

### Color Palette
- **Primary**: Modern blue gradients
- **Secondary**: Warm accent colors
- **Background**: Clean whites and grays
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Modern sans-serif
- **Body**: Readable font stack
- **Icons**: Consistent iconography

### Components
- **Responsive Grid**: Mobile-first layout
- **Interactive Elements**: Smooth transitions
- **Accessibility**: WCAG 2.1 compliant

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Site Configuration
NUXT_PUBLIC_SITE_URL=https://twotrekkers.travel
NUXT_PUBLIC_CDN_URL=https://twotrekkers.nyc3.cdn.digitaloceanspaces.com

# Security
NUXT_SECURE_STORAGE_KEY=your-secure-storage-key-here

# Analytics (optional)
NUXT_PUBLIC_ANALYTICS_ID=your-google-analytics-id

# Node Environment
NODE_ENV=production
```

### Nuxt Configuration

Key configuration in `nuxt.config.ts`:
- Static site generation
- Internationalization setup
- SEO optimization
- Security headers
- Performance tuning

---

## 📊 Performance

### Optimization Features
- **Static Generation**: Pre-rendered pages
- **Code Splitting**: Automatic chunk optimization
- **Image Optimization**: Compressed assets
- **CDN Integration**: Global content delivery
- **Caching**: Browser and CDN caching

### Performance Metrics
- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🔒 Security

### Security Features
- **HTTPS Only**: Secure connections
- **Security Headers**: XSS protection, CSRF prevention
- **Content Security Policy**: Resource validation
- **Secure Storage**: Encrypted local storage
- **Input Validation**: Sanitized user inputs

### Compliance
- **GDPR Ready**: Cookie consent management
- **Privacy Policy**: Comprehensive privacy information
- **Terms of Service**: Clear usage guidelines

---

## 🤝 Contributing

**This is a proprietary project.** Contributions are welcome from authorized team members and approved collaborators. Here's how to get started:

### Development Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** your changes:
   ```bash
   npm run type-check
   npm run test
   npm run build
   ```
6. **Commit** with descriptive messages
7. **Push** to your fork
8. **Submit** a pull request

### Code Standards

- **TypeScript**: Strict type checking
- **ESLint**: Code quality (if enabled)
- **Prettier**: Code formatting (if enabled)
- **Conventional Commits**: Standard commit messages

### Pull Request Guidelines

- Clear description of changes
- Include screenshots for UI changes
- Update documentation if needed
- Ensure all tests pass

### ⚠️ Important Note

This is a **proprietary project** owned by TwoTrekkers. All contributions must be approved by the project maintainers. Unauthorized distribution or use of this codebase is prohibited.

---

## 📚 Documentation

### Additional Resources

- **[DEPLOYMENT.md](./DEPLOYMENT.md)**: Detailed deployment guide
- **[API Documentation](./server/api/)**: Server-side API reference
- **[Component Library](./components/)**: Vue component documentation

### Getting Help

- **Internal Support**: Contact the development team
- **Documentation**: [Project Wiki](https://github.com/TwoTrekkers/TwoTrekkers/wiki)
- **Issues**: [GitHub Issues](https://github.com/TwoTrekkers/TwoTrekkers/issues) (Team members only)

---

## 📄 License

This project is **proprietary software** owned by TwoTrekkers. All rights reserved.

**Copyright © 2024 TwoTrekkers. All rights reserved.**

This software and associated documentation files are confidential and proprietary to TwoTrekkers. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

## 🙏 Acknowledgments

- **Nuxt.js Team**: For the amazing framework
- **Vue.js Community**: For the reactive ecosystem
- **Tailwind CSS**: For the utility-first CSS framework
- **GitHub**: For hosting and CI/CD services
- **DigitalOcean**: For CDN and infrastructure

---

<div align="center">

**Made with ❤️ by the [NeedleTails Team](https://needletails.com)**

[![Website](https://img.shields.io/badge/Website-Visit%20Us-blue?style=for-the-badge)](https://twotrekkers.travel)
[![Instagram](https://img.shields.io/badge/Instagram-Follow%20Us-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/two.trekkers.travels)
[![Email](https://img.shields.io/badge/Email-Contact%20Us-red?style=for-the-badge&logo=gmail)](mailto:info@twotrekkers.travel)

</div>
