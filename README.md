# Two Trekkers Website

A modern, multilingual travel and relocation consultancy website built with Nuxt.js.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

### Deployment

This project uses **GitHub Actions** for automated deployment to GitHub Pages.

#### Automatic Deployment
Simply push to the `main` branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

The GitHub Actions workflow will:
- ✅ Run type checking and tests
- ✅ Build the static site
- ✅ Deploy to GitHub Pages
- ✅ Provide deployment status

#### Manual Deployment
- Go to your repository → Actions tab
- Click "Deploy to GitHub Pages" workflow
- Click "Run workflow"

## 📋 Features

- 🌍 **Multilingual Support**: 12 languages (EN, ES, FR, DE, JA, KO, ZH-CN, ZH-HK, ZH-TW, PT, TR, HE)
- 📱 **Responsive Design**: Mobile-first approach
- ⚡ **Static Generation**: Fast loading with Nuxt.js static generation
- 🔍 **SEO Optimized**: Meta tags, sitemap, robots.txt
- 🎨 **Modern UI**: Tailwind CSS with beautiful design
- 🔒 **Security**: HTTPS, security headers, secure storage
- 📊 **Analytics Ready**: Google Analytics integration ready

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 4
- **Styling**: Tailwind CSS
- **Internationalization**: @nuxtjs/i18n
- **Deployment**: GitHub Actions + GitHub Pages
- **Build Tool**: Vite
- **Language**: TypeScript

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── components/           # Vue components
├── i18n/                # Internationalization files
├── pages/               # Page components
├── public/              # Static assets
├── server/              # Server-side API routes
└── nuxt.config.ts       # Nuxt configuration
```

## 🌐 Live Site

**Production**: https://twotrekkers.github.io/TwoTrekkers

## 📚 Documentation

For detailed deployment and maintenance information, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type check: `npm run type-check`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
