#!/usr/bin/env sh

echo "🔧 GitHub Pages Environment Configuration Guide"
echo ""

echo "📋 The deployment is failing because of environment protection rules."
echo "Here's how to fix it:"
echo ""

echo "1️⃣ FIRST: Configure GitHub Pages Source"
echo "   Go to: https://github.com/TwoTrekkers/TwoTrekkers/settings/pages"
echo "   Change Source from 'Deploy from a branch' to 'GitHub Actions'"
echo "   Save the changes"
echo ""

echo "2️⃣ SECOND: Configure Environment Protection Rules"
echo "   Go to: https://github.com/TwoTrekkers/TwoTrekkers/settings/environments"
echo "   Click on 'github-pages' environment"
echo "   Under 'Deployment branches':"
echo "   - Add 'main' to the allowed branches"
echo "   - Or remove all branch restrictions"
echo "   Save the changes"
echo ""

echo "3️⃣ ALTERNATIVE: Use Manual Deployment"
echo "   If environment rules persist, you can use:"
echo "   ./scripts/deploy.sh"
echo ""

echo "📊 Current Status:"
echo "✅ Test workflow: Working"
echo "❌ Deploy workflow: Blocked by environment rules"
echo ""

echo "🔧 After completing steps 1 & 2, the deployment should work!"
