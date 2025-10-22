#!/bin/bash
# Convert Jupyter notebook to Jekyll blog post (Markdown)

if [ $# -eq 0 ]; then
    echo "Usage: ./scripts/notebook-to-blog.sh notebook.ipynb [output-name]"
    echo "Example: ./scripts/notebook-to-blog.sh my_analysis.ipynb 2025-01-23-my-analysis"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_NAME="${2:-$(basename "$INPUT_FILE" .ipynb)}"
OUTPUT_FILE="_posts/${OUTPUT_NAME}.md"

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

echo "Converting $INPUT_FILE to blog post..."

# Convert to markdown
jupyter nbconvert --to markdown "$INPUT_FILE" --output-dir _posts --output "${OUTPUT_NAME}"

# Add Jekyll frontmatter
if [ -f "$OUTPUT_FILE" ]; then
    # Create temp file with frontmatter
    cat > "${OUTPUT_FILE}.tmp" << 'EOF'
---
layout: post
title: "Your Notebook Title"
date: $(date +%Y-%m-%d)
categories: ["Data Science", "Tutorial"]
tags: ["jupyter", "python", "analysis"]
author: "Oriol Colomé Font"
description: "Add a description here"
---

EOF
    
    # Append original content
    cat "$OUTPUT_FILE" >> "${OUTPUT_FILE}.tmp"
    
    # Replace original
    mv "${OUTPUT_FILE}.tmp" "$OUTPUT_FILE"
    
    echo "✅ Created: $OUTPUT_FILE"
    echo ""
    echo "Next steps:"
    echo "1. Edit the frontmatter in $OUTPUT_FILE"
    echo "2. Review and adjust the converted content"
    echo "3. Commit and push to publish"
else
    echo "❌ Error: Conversion failed"
    exit 1
fi

