#!/usr/bin/env sh

echo "🔧 Setting up TwoTrekkers deployment..."

echo ""
echo "📋 Current deployment status:"
echo "✅ GitHub Actions workflow: .github/workflows/deploy.yml"
echo "✅ Manual deployment script: scripts/deploy.sh"
echo ""

echo "🚀 To deploy your changes:"
echo ""
echo "Option 1: GitHub Actions (Recommended)"
echo "  1. git add ."
echo "  2. git commit -m 'Your message'"
echo "  3. git push origin main"
echo "  4. Check: https://github.com/TwoTrekkers/TwoTrekkers/actions"
echo ""

echo "Option 2: Manual Deployment"
echo "  1. chmod +x scripts/deploy.sh"
echo "  2. ./scripts/deploy.sh"
echo ""

echo "🔧 Repository Settings Check:"
echo "  1. Go to: https://github.com/TwoTrekkers/TwoTrekkers/settings/pages"
echo "  2. Set Source to 'GitHub Actions' (not 'Deploy from a branch')"
echo "  3. Save changes"
echo ""

echo "📊 Live Site: https://twotrekkers.github.io"
echo "📈 Actions: https://github.com/TwoTrekkers/TwoTrekkers/actions"
echo ""

echo "✅ Setup complete! Choose your deployment method above."
