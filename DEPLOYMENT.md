# Two Trekkers - GitHub Actions Deployment Guide

This guide covers the automated GitHub Actions deployment process for the Two Trekkers website.

## Prerequisites

- GitHub repository: `TwoTrekkers/TwoTrekkers`
- GitHub Pages enabled on the repository
- GitHub Actions enabled (default)

## Environment Setup

1. **Copy environment file:**
   ```bash
   cp env.example .env
   ```

2. **Configure environment variables:**
   ```bash
   # Edit .env file with your production values
   nano .env
   ```

       Required variables:
    - `NUXT_PUBLIC_SITE_URL`: Your GitHub Pages URL (e.g., https://twotrekkers.github.io/TwoTrekkers)
    - `NUXT_SECURE_STORAGE_KEY`: A secure random string for encryption
    - `NUXT_PUBLIC_CDN_URL`: Your CDN URL for assets
    - `NODE_ENV`: Set to "production"

## Deployment Methods

### Method 1: GitHub Actions (Recommended)

The project includes automated GitHub Actions workflows that will:
- Build and test on every push to main branch
- Deploy to GitHub Pages automatically
- Provide preview deployments for pull requests
- Run type checking and build validation

**Automatic Deployment:**
1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Monitor deployment:**
   - Go to your repository → Actions tab
   - Watch the deployment progress
   - Site will be live at: https://twotrekkers.github.io/TwoTrekkers

**Manual Deployment:**
- Go to your repository → Actions tab
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" → "Run workflow"

### Method 2: Local Deployment (Legacy)

If you need to deploy locally:

1. **Build the project:**
   ```bash
   npm run generate
   ```

2. **Deploy using the script:**
   ```bash
   ./scripts/deploy.sh
   ```

   This script will:
   - Generate static site using `npm run generate`
   - Initialize Git repository in `.output/public`
   - Add all files to Git
   - Commit changes with timestamp
   - Force push to `gh-pages` branch
   - Deploy to GitHub Pages

3. **Access your site:**
   - URL: `https://twotrekkers.github.io/TwoTrekkers`
   - Changes may take a few minutes to appear

## SSL Certificate Setup

GitHub Pages automatically provides SSL certificates for all sites. No additional configuration is required.

## Performance Optimization

### GitHub Pages Optimization

- **Automatic CDN**: GitHub Pages uses a global CDN for fast delivery
- **Compression**: Assets are automatically compressed (gzip, brotli)
- **Caching**: Static assets are cached aggressively
- **Edge Locations**: Content is served from locations closest to users

### Caching Strategy

- Static assets: 1 year cache (handled by GitHub Pages)
- HTML pages: Browser cache (configurable)
- Images: 1 year cache
- API responses: No cache (if using external APIs)

## Monitoring & Logging

### GitHub Pages Monitoring

- **Built-in Analytics**: GitHub provides basic analytics for Pages sites
- **External Monitoring**: Use services like UptimeRobot or Pingdom
- **Performance Monitoring**: Use Google PageSpeed Insights or Lighthouse

### Health Checks

- **Site Availability**: Monitor `https://twotrekkers.github.io/TwoTrekkers`
- **Build Status**: Check GitHub Actions for deployment status
- **Workflow Status**: Monitor Actions tab for build/test/deploy status
- **Performance**: Regular Lighthouse audits

## Security Considerations

### GitHub Pages Security

- **Automatic HTTPS**: All GitHub Pages sites use HTTPS by default
- **DDoS Protection**: GitHub provides DDoS protection
- **Security Headers**: GitHub Pages includes security headers

### Application Security

The application includes:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy
- X-XSS-Protection

### Rate Limiting

- GitHub Pages has built-in rate limiting
- No additional configuration required

## Backup Strategy

### GitHub Repository Backup

- **Version Control**: All code is backed up in Git repository
- **Branch History**: Previous deployments are preserved in Git history
- **Rollback**: Easy to revert to previous versions using Git

### Disaster Recovery

1. **Rollback to previous deployment:**
   ```bash
   # Check previous commits
   git log --oneline
   
   # Revert to previous commit
   git revert <commit-hash>
   ./scripts/deploy.sh
   ```

2. **Restore from specific version:**
   ```bash
   # Checkout specific commit
   git checkout <commit-hash>
   ./scripts/deploy.sh
   ```

## Troubleshooting

### Common Issues

1. **GitHub Actions build fails:**
   - Check Actions tab in your repository
   - Review build logs for specific errors
   - Verify all dependencies are in package.json
   - Check for TypeScript errors

2. **Deployment fails:**
   - Check GitHub Pages settings (Settings → Pages)
   - Verify GitHub Actions permissions
   - Check if gh-pages branch is being created
   - Review deployment logs in Actions tab

3. **Local build fails:**
   ```bash
   # Check for errors in build output
   npm run generate
   
   # Check for missing dependencies
   npm install
   
   # Run type checking to find issues
   npm run type-check
   ```

4. **Site not updating:**
   - Check GitHub Pages settings
   - Verify gh-pages branch exists
   - Wait 5-10 minutes for changes to propagate
   - Check Actions tab for deployment status

### Performance Issues

1. **Check build size:**
   ```bash
   npm run analyze
   ```

2. **Optimize images and assets:**
   - Compress images before adding to public/
   - Use WebP format where possible
   - Optimize CSS and JS bundles

## Maintenance

### Regular Tasks

1. **Update dependencies:**
   ```bash
   npm audit fix
   npm update
   ```

2. **Check for security updates:**
   ```bash
   npm audit
   ```

3. **Monitor site performance:**
   - Run Lighthouse audits monthly
   - Check Google PageSpeed Insights
   - Monitor Core Web Vitals

### Updates

1. **Pull latest code:**
   ```bash
   git pull origin main
   ```

2. **Deploy updates (automatic):**
   - Push to main branch triggers automatic deployment
   - Monitor Actions tab for deployment status
   - Site updates automatically after successful build

3. **Manual deployment:**
   ```bash
   ./scripts/deploy.sh
   ```

4. **Verify deployment:**
   - Check site availability
   - Test key functionality
   - Monitor for any issues
   - Review Actions tab for any warnings

## Support

For issues or questions:
- Check GitHub repository: `https://github.com/TwoTrekkers/TwoTrekkers`
- GitHub Pages status: `https://www.githubstatus.com/`
- Site URL: `https://twotrekkers.github.io/TwoTrekkers`

## Performance Benchmarks

Expected performance metrics:
- Page load time: < 2 seconds
- Time to First Byte: < 500ms
- Lighthouse score: > 90
- Uptime: > 99.9%
