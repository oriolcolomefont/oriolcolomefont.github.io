#!/usr/bin/env bash
# Find orphaned images in assets/images that are not referenced in the codebase

set -e

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo_root"

# Find all image files
find assets/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.webp" \) > /tmp/all-images.txt || true

# Find all referenced images (excluding _site and node_modules)
# Match both relative paths (assets/images/...) and absolute paths (/assets/images/...)
grep -roh --include="*.md" --include="*.html" --include="*.yml" --include="*.yaml" --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" \
  --exclude-dir="_site" --exclude-dir="node_modules" --exclude-dir="vendor" --exclude-dir=".git" \
  -E '(assets/images|/assets/images)/[^)"'"'"' ]*\.(png|jpg|jpeg|gif|webp)' . 2>/dev/null | \
  sed -E 's|.*(assets/images/.*)|\1|' | \
  sed -E 's|.*(/assets/images/.*)|\1|' | \
  sed 's|^/||' | \
  sed 's/[)"'"'"' ].*//' | \
  sort -u > /tmp/referenced-images.txt || true

# Normalize image paths (remove leading ./ if present)
sed 's|^\./||' /tmp/all-images.txt | sort > /tmp/all-images-normalized.txt

# Find orphans
echo "Checking for orphaned images..."
echo ""

orphans_found=false
while IFS= read -r image_path; do
  # Normalize path
  normalized_path=$(echo "$image_path" | sed 's|^\./||')
  if ! grep -q "^${normalized_path}$" /tmp/referenced-images.txt; then
    echo "ORPHAN: $image_path"
    orphans_found=true
  fi
done < /tmp/all-images-normalized.txt

if [ "$orphans_found" = false ]; then
  echo "✅ No orphaned images found"
  exit 0
else
  echo ""
  echo "⚠️  Orphaned images found. Review before removing."
  exit 1
fi

