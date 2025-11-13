#!/usr/bin/env bash
# Check for duplicate permallinks

set -e

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo_root"

echo "Checking for duplicate permallinks..."

# Find all permalink: entries, extract file and permalink value
grep -rn '^permalink:' --include="*.md" --include="*.html" --include="*.yml" \
  --exclude-dir="_site" --exclude-dir="node_modules" --exclude-dir="vendor" \
  . 2>/dev/null | \
  awk -F: '{
    file=$1
    # Reconstruct the permalink value (everything after "permalink:")
    permalink=""
    for(i=2; i<=NF; i++) {
      if(match($i, /permalink:/)) {
        # Found permalink:, get everything after it
        permalink=substr($i, index($i, "permalink:") + 10)
        for(j=i+1; j<=NF; j++) {
          permalink=permalink":"$j
        }
        break
      }
    }
    gsub(/^[[:space:]]+|[[:space:]]+$/, "", permalink)
    print file":"permalink
  }' | \
  sort -t: -k2,2 | \
  awk -F: '{
    if (prev_value == $2 && prev_value != "") {
      if (!printed[prev_file]) {
        print prev_file":"prev_value
        printed[prev_file]=1
      }
      if (!printed[$1]) {
        print $1":"$2
        printed[$1]=1
      }
    }
    prev_file=$1
    prev_value=$2
  }' > /tmp/duplicate-permallinks.txt || true

if [ -s /tmp/duplicate-permallinks.txt ]; then
  echo "❌ Duplicate permallinks found:"
  cat /tmp/duplicate-permallinks.txt
  exit 1
else
  echo "✅ No duplicate permallinks found"
  exit 0
fi

