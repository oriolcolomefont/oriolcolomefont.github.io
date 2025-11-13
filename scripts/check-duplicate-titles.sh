#!/usr/bin/env bash
# Check for duplicate titles in front matter

set -e

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo_root"

echo "Checking for duplicate titles..."

# Find all title: entries, extract file and title
grep -rn '^title:' --include="*.md" --include="*.html" --include="*.yml" \
  --exclude-dir="_site" --exclude-dir="node_modules" --exclude-dir="vendor" \
  . 2>/dev/null | \
  sed 's/:title:/:/' | \
  awk -F: '{print $1 ":" $3}' | \
  sort -t: -k2,2 | \
  uniq -D -f1 > /tmp/duplicate-titles.txt || true

if [ -s /tmp/duplicate-titles.txt ]; then
  echo "❌ Duplicate titles found:"
  cat /tmp/duplicate-titles.txt
  exit 1
else
  echo "✅ No duplicate titles found"
  exit 0
fi

