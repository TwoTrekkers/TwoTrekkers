#!/usr/bin/env sh

# Exit on errors
set -e

echo "🚀 Starting deployment process..."

# Generate static site
echo "📦 Generating static site..."
npm run generate

# Check if generation was successful
if [ ! -d ".output/public" ]; then
    echo "❌ Static generation failed: .output/public directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Navigate to the build output directory
cd .output/public

# Check if the current directory is a git repository
if [ ! -d .git ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git remote add origin git@github.com:TwoTrekkers/TwoTrekkers.git
else
    echo "📁 Git repository already exists"
    # Check if the remote already exists
    if ! git remote get-url origin > /dev/null 2>&1; then
        echo "🔗 Adding origin remote..."
        git remote add origin git@github.com:TwoTrekkers/TwoTrekkers.git
    fi
fi

# Add all changes to the repository
echo "📝 Adding files to Git..."
git add .

# Commit the changes
echo "💾 Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "ℹ️  No changes to commit."

# Force push to the gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
if ! git push -f origin HEAD:gh-pages; then
    echo "❌ Failed to push to remote repository. Check your permissions and repository URL."
    echo "🔍 Current remote URLs:"
    git remote -v
    exit 1
fi

# Navigate back to the original directory
cd ../..

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://twotrekkers.github.io"
echo "⏰ It may take a few minutes for changes to appear."
