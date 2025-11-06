# 📓 Jupyter Notebooks Guide

This site supports two ways to publish Jupyter notebooks:

1. **Blog Posts** - Convert to Markdown for text-focused articles
2. **Portfolio/Research** - Preserve as HTML with full outputs and visualizations

---

## 🎯 Quick Start

### Prerequisites

```bash
# Install Jupyter and nbconvert
pip install jupyter nbconvert
```

---

## 📝 Method 1: Notebooks as Blog Posts

**Best for:** Text-focused content, tutorials, explanations

### Convert to Blog Post

```bash
./scripts/notebook-to-blog.sh path/to/your_notebook.ipynb 2025-01-23-blog-title
```

This will:
1. Convert notebook to Markdown
2. Place it in `_posts/`
3. Add Jekyll frontmatter template

### Edit the Post

Open `_posts/2025-01-23-blog-title.md` and update the frontmatter:

```yaml
---
layout: post
title: "Your Compelling Title"
date: 2025-01-23
categories: ["Music Information Retrieval", "Deep Learning"]
tags: ["mir", "python", "audio-processing"]
author: "Oriol Colomé Font"
description: "Brief description for SEO and preview"
read_time: 8  # Approximate reading time in minutes
---
```

### Features

✅ Full Jekyll blog integration  
✅ Search and tag support  
✅ Related posts  
✅ Table of contents  
✅ Fast loading  

---

## 🔬 Method 2: Notebooks as Portfolio Items

**Best for:** Research demonstrations, interactive visualizations, code showcases

### Convert to Portfolio Notebook

```bash
./scripts/notebook-to-portfolio.sh path/to/your_notebook.ipynb "Notebook Title"
```

This will create two files in `_notebooks/`:
1. `your_notebook.html` - Full notebook with outputs
2. `your_notebook.md` - Jekyll wrapper with metadata

### Edit the Metadata

Open `_notebooks/your_notebook.md` and update:

```yaml
---
layout: notebook
title: "Audio Feature Extraction with librosa"
date: 2025-01-23
category: "Research"  # or "Tutorial", "Analysis", etc.
tags: ["jupyter", "python", "librosa", "mir"]
description: "Comprehensive guide to extracting audio features"
read_time: 15
github_url: "https://github.com/oriolcolomefont/repo/blob/main/notebook.ipynb"
colab_url: "https://colab.research.google.com/..."
---
```

### Features

✅ Preserves all outputs (plots, tables, widgets)  
✅ Syntax-highlighted code cells  
✅ Links to GitHub/Colab  
✅ Beautiful portfolio display  
✅ Full notebook styling  

---

## 📁 Directory Structure

```
.
├── _posts/                    # Blog posts (markdown)
│   └── 2025-01-23-title.md   # Converted notebook post
│
├── _notebooks/                # Portfolio notebooks
│   ├── notebook_name.md      # Metadata wrapper
│   └── notebook_name.html    # Embedded notebook
│
├── scripts/
│   ├── notebook-to-blog.sh      # Blog conversion
│   └── notebook-to-portfolio.sh # Portfolio conversion
│
└── _pages/
    └── notebooks.md           # Notebooks landing page
```

---

## 🎨 Styling

### Blog Posts
- Use default Jekyll post styling
- Markdown code blocks with syntax highlighting
- Images automatically responsive

### Portfolio Notebooks
- Custom `.notebook-content` CSS class
- Preserved Jupyter cell structure
- Embedded images and plots
- Styled tables and outputs

---

## 💡 Best Practices

### For Blog Posts

1. **Clean up code** - Remove debug cells, unused imports
2. **Add markdown cells** - Explain your thinking
3. **Limit output** - Long outputs can slow rendering
4. **Check images** - Ensure paths work after conversion
5. **Review formatting** - Some LaTeX may need adjusting

### For Portfolio Notebooks

1. **Run all cells** - Ensure outputs are current
2. **Clear unnecessary outputs** - Large dataframes, etc.
3. **Add cell comments** - Make code self-documenting
4. **Test GitHub/Colab links** - Verify they work
5. **Optimize images** - Compress large plots

---

## 🔄 Workflow Examples

### Publishing a Blog Post

```bash
# 1. Create/update your notebook
jupyter notebook my_analysis.ipynb

# 2. Convert to blog post
./scripts/notebook-to-blog.sh my_analysis.ipynb 2025-01-23-mir-analysis

# 3. Edit frontmatter
vim _posts/2025-01-23-mir-analysis.md

# 4. Test locally
bundle exec jekyll serve

# 5. Commit and push
git add _posts/2025-01-23-mir-analysis.md
git commit -m "Add new blog post: MIR Analysis"
git push origin main
```

### Publishing a Portfolio Notebook

```bash
# 1. Create/update your notebook
jupyter notebook audio_features.ipynb

# 2. Run all cells and save
# File > Run All Cells

# 3. Convert to portfolio item
./scripts/notebook-to-portfolio.sh audio_features.ipynb "Audio Feature Extraction"

# 4. Edit metadata
vim _notebooks/audio_features.md

# 5. Test locally
bundle exec jekyll serve

# 6. Commit both files
git add _notebooks/audio_features.*
git commit -m "Add audio features notebook"
git push origin main
```

---

## 🐛 Troubleshooting

### Conversion Failed

```bash
# Check jupyter is installed
jupyter --version

# Install nbconvert if missing
pip install nbconvert

# Try manual conversion
jupyter nbconvert --to markdown notebook.ipynb
```

### Images Not Showing

- Ensure image paths are relative
- Check images were copied during conversion
- For blog posts, images should be in `_posts/` directory
- For portfolio, images are embedded in HTML

### Styling Issues

- Blog posts use prose classes from Tailwind Typography
- Portfolio notebooks use custom `.notebook-content` styles
- Check `_layouts/notebook.html` for style customization

### Large Notebooks

- Consider splitting into multiple posts
- Clear large outputs before conversion
- Compress images: `./scripts/optimize-images.js`

---

## 🚀 Advanced Tips

### Custom Templates

Modify conversion templates in:
- `scripts/notebook-to-blog.sh` - Blog frontmatter
- `scripts/notebook-to-portfolio.sh` - Portfolio frontmatter

### Batch Conversion

```bash
# Convert all notebooks in a directory
for nb in notebooks/*.ipynb; do
    ./scripts/notebook-to-portfolio.sh "$nb"
done
```

### Add Binder Links

In portfolio frontmatter:
```yaml
colab_url: "https://colab.research.google.com/github/user/repo/blob/main/notebook.ipynb"
```

### Automation

Create a pre-commit hook to validate notebooks:
```bash
#!/bin/bash
# .git/hooks/pre-commit
jupyter nbconvert --to notebook --execute --inplace _notebooks/*.ipynb
```

---

## 📚 Resources

- [Jupyter nbconvert Documentation](https://nbconvert.readthedocs.io/)
- [Jekyll Collections](https://jekyllrb.com/docs/collections/)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

---

## 🤝 Contributing

If you improve the conversion scripts or styling:

1. Test thoroughly with various notebook types
2. Update this guide
3. Share your improvements!

---

**Happy notebook publishing! 🎉**

