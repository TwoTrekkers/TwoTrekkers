# 🚀 TwoTrekkers Deployment Guide

## 📋 Overview

TwoTrekkers uses **GitHub Actions** for automated deployment to GitHub Pages. This ensures consistent, reliable deployments with proper CI/CD practices.

## 🔧 Repository Setup

### GitHub Pages Configuration

1. **Go to your repository settings**: `https://github.com/TwoTrekkers/TwoTrekkers/settings/pages`
2. **Under "Source", change from "Deploy from a branch" to "GitHub Actions"**
3. **Save the changes**

**Important**: This setting change is required to allow GitHub Actions to deploy without environment protection rules.

### Branch Strategy

- **Main branch**: `main` (source code)
- **Deployment branch**: `gh-pages` (automatically managed by GitHub Actions)
- **No manual `gh-pages` branch management needed**

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

Simply push to the `main` branch:

```bash
# Add your changes
git add .

# Commit your changes
git commit -m "Your commit message"

# Push to main branch
git push origin main
```

**GitHub Actions will automatically:**
1. ✅ Build the static site
2. ✅ Run tests and type checking
3. ✅ Deploy to GitHub Pages
4. ✅ Update the `gh-pages` branch

### Manual Deployment (Alternative)

If you need manual deployment, use the deploy script:

```bash
# Make the script executable
chmod +x scripts/deploy.sh

# Run the deployment
./scripts/deploy.sh
```

## 📊 Deployment Status

- **Check Actions**: `https://github.com/TwoTrekkers/TwoTrekkers/actions`
- **Live Site**: `https://twotrekkers.github.io`
- **Deployment Logs**: Available in GitHub Actions tab

## 🔍 Troubleshooting

### Common Issues

1. **"Pull request to gh-pages" error**
   - **Cause**: Repository set to manual branch deployment
   - **Fix**: Change Pages source to "GitHub Actions"

2. **Build failures**
   - **Check**: GitHub Actions logs for error details
   - **Common fixes**: Update dependencies, fix TypeScript errors

3. **Site not updating**
   - **Wait**: 2-5 minutes for changes to propagate
   - **Check**: GitHub Actions deployment status

### Environment Variables

The following environment variables are used in production:

```bash
NODE_ENV=production
NUXT_PUBLIC_SITE_URL=https://twotrekkers.github.io
NUXT_PUBLIC_CDN_URL=https://twotrekkers.nyc3.cdn.digitaloceanspaces.com
```

### System Requirements

- **Node.js**: >= 20.19.0
- **npm**: >= 10.0.0
- **GitHub Actions**: Uses Ubuntu latest with Node.js 20

## 📈 Performance

- **Build Time**: ~2-3 minutes
- **Deployment Time**: ~1-2 minutes
- **Total Time**: ~3-5 minutes from push to live site

## 🔒 Security

- **HTTPS**: Automatically enforced
- **Security Headers**: Configured in Nuxt.js
- **Dependencies**: Scanned for vulnerabilities

## 📞 Support

If you encounter deployment issues:

1. **Check GitHub Actions logs**
2. **Verify repository settings**
3. **Ensure all tests pass locally**
4. **Contact the development team**

---

**Last Updated**: September 2024
**Version**: 2.0 (GitHub Actions)
