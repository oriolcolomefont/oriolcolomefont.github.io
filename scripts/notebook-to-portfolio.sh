#!/bin/bash
# Convert Jupyter notebook to HTML for portfolio/notebooks section

if [ $# -eq 0 ]; then
    echo "Usage: ./scripts/notebook-to-portfolio.sh notebook.ipynb [title]"
    echo "Example: ./scripts/notebook-to-portfolio.sh audio_analysis.ipynb 'Audio Feature Extraction'"
    exit 1
fi

INPUT_FILE="$1"
TITLE="${2:-$(basename "$INPUT_FILE" .ipynb | sed 's/_/ /g' | sed 's/\b\(.\)/\u\1/g')}"
BASENAME=$(basename "$INPUT_FILE" .ipynb)
OUTPUT_HTML="_notebooks/${BASENAME}.html"
OUTPUT_MD="_notebooks/${BASENAME}.md"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: File '$INPUT_FILE' not found"
    exit 1
fi

# Check if jupyter nbconvert is available
if ! command -v jupyter &> /dev/null; then
    echo "Error: jupyter not found. Install with: pip install jupyter nbconvert"
    exit 1
fi

echo "Converting $INPUT_FILE to portfolio notebook..."

# Convert to HTML (with embedded outputs)
jupyter nbconvert --to html "$INPUT_FILE" --output-dir _notebooks --output "${BASENAME}" --template classic

if [ ! -f "$OUTPUT_HTML" ]; then
    echo "❌ Error: HTML conversion failed"
    exit 1
fi

# Extract only body content (remove DOCTYPE, html, head, body tags)
echo "Extracting body content..."
python3 << 'PYTHON_SCRIPT'
import re
import sys

html_file = sys.argv[1]
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body content
body_match = re.search(r'<body[^>]*>(.*)</body>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
    # Write just the body content back
    with open(html_file, 'w', encoding='utf-8') as out:
        out.write(body_content)
    print(f"✅ Extracted body content from {html_file}")
else:
    print(f"⚠️  Warning: Could not find body tag in {html_file}, using full content")
PYTHON_SCRIPT
"$OUTPUT_HTML"

# Create markdown wrapper with frontmatter
cat > "$OUTPUT_MD" << EOF
---
layout: notebook
title: "$TITLE"
date: $(date +%Y-%m-%d)
category: "Research"
tags: ["jupyter", "python", "analysis"]
description: "Add a description for this notebook"
read_time: 10
github_url: ""
colab_url: ""
---

{% include_relative ${BASENAME}.html %}
EOF

echo "✅ Created:"
echo "   - $OUTPUT_HTML (embedded notebook)"
echo "   - $OUTPUT_MD (Jekyll wrapper)"
echo ""
echo "Next steps:"
echo "1. Edit the frontmatter in $OUTPUT_MD"
echo "   - Update title, description, tags"
echo "   - Add GitHub/Colab URLs if available"
echo "2. Review the notebook output"
echo "3. Commit both files and push to publish"

