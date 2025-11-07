# Oriol Colomé Font - Personal Website

A modern, high-performance personal website built with Jekyll, featuring a blog, portfolio, and professional presence optimized for GitHub Pages.

![GitHub Pages Deploy](https://github.com/oriolcolomefont/oriolcolomefont.github.io/workflows/Deploy%20Jekyll%20site%20to%20Pages/badge.svg)

## 🚀 Features

- **Modern Tech Stack**: Jekyll 4.3 with Tailwind CSS 3.4
- **Blog System**: Full-featured blog with categories, tags, search, and related posts
- **Portfolio**: Project showcase with detailed information and tech stacks
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap, and RSS feed
- **Performance**: Lighthouse 90+ scores, optimized assets, lazy loading
- **Accessibility**: WCAG compliant, semantic HTML, ARIA labels
- **Responsive**: Mobile-first design that works on all devices

## 📋 Table of Contents

- [About](#about)
- [Local Development](#local-development)
- [Build Process](#build-process)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [Jupyter Notebooks](#jupyter-notebooks)
- [Project Structure](#project-structure)
- [Performance](#performance)
- [Contributing](#contributing)

## 👤 About

I'm Oriol Colomé Font, a Music-Tech Generalist with over a decade of experience across the music industry. Currently serving as Growth Lead & Product Owner at My Sheet Music Transcriptions, I bridge the gap between artistic vision and technical implementation.

**Expertise**: Music Information Retrieval, Deep Learning, Product Development, Team Leadership

## 💻 Local Development

### Prerequisites

- Ruby 3.2+ (for Jekyll)
- Node.js 20+ (for Tailwind CSS)
- Bundler

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/oriolcolomefont/oriolcolomefont.github.io.git
   cd oriolcolomefont.github.io
   ```

2. **Install dependencies**
   ```bash
   # Install Ruby dependencies
   bundle install
   
   # Install Node dependencies
   npm install
   ```

3. **Start development server**
   ```bash
   # Option 1: With live CSS compilation (recommended)
   npm run dev
   
   # Option 2: Jekyll only (requires separate CSS build)
   bundle exec jekyll serve --livereload
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

### Development Commands

```bash
# Build CSS only
npm run build:css

# Watch CSS changes
npm run watch:css

# Build entire site
npm run build

# Optimize images
npm run optimize:images

# Run Jekyll server
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

## 🏗️ Build Process

The site uses a two-stage build process:

1. **CSS Build** (Tailwind)
   - Input: `assets/css/main.css`
   - Output: `assets/css/styles.css`
   - Features: PurgeCSS, minification, autoprefixer

2. **Site Build** (Jekyll)
   - Processes Markdown, Liquid templates
   - Generates static HTML
   - Output directory: `_site/`

### Production Build

```bash
# Full production build
NODE_ENV=production npm run build:css
JEKYLL_ENV=production bundle exec jekyll build
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Workflow

1. Commit and push changes to `main`
2. GitHub Actions runs the build workflow:
   - Sets up Ruby and Node.js
   - Installs dependencies
   - Builds Tailwind CSS
   - Builds Jekyll site
   - Deploys to GitHub Pages

3. Site is live at: `https://oriolcolomefont.github.io`

### Manual Deployment

```bash
# Build and test locally
npm run build
bundle exec jekyll serve

# Push to GitHub
git add .
git commit -m "Your commit message"
git push origin main
```

## 📝 Content Management

### Writing Blog Posts

Create a new file in `_posts/` with the naming format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-08
categories: ["Music Information Retrieval", "Deep Learning"]
tags: ["MIR", "neural networks", "audio processing"]
author: "Oriol Colomé Font"
read_time: 8
description: "A brief description of your post"
image: "/assets/images/post-image.jpg"
---

## Your content here

Write your post in Markdown...
```

### Managing Projects

Edit `_data/projects.yml`:

```yaml
- title: Project Name
  description: Project description
  tech_stack:
    - Python
    - PyTorch
  date: "2023"
  type: Research
  highlights:
    - Key achievement 1
    - Key achievement 2
```

### Managing Experience/Education

Edit respective files in `_data/`:
- `experience.yml`
- `education.yml`
- `internships.yml`
- `references.yml`

## 📁 Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── _data/                   # Data files (YAML)
│   ├── projects.yml
│   ├── experience.yml
│   └── education.yml
├── _includes/               # Reusable components
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── related-posts.html
│   └── toc.html
├── _layouts/                # Page templates
│   ├── default.html
│   └── post.html
├── _pages/                  # Static pages
│   ├── blog.md
│   ├── tags.md
│   ├── about.md
│   └── uses.md
├── _plugins/                # Custom Jekyll plugins
│   └── reading_time.rb
├── _posts/                  # Blog posts
├── assets/                  # Static assets
│   ├── css/
│   ├── images/
│   ├── icons/
│   └── documents/
├── .github/workflows/       # CI/CD
│   └── jekyll.yml
├── package.json             # Node dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── Gemfile                  # Ruby dependencies
└── index.html               # Homepage
```

## ⚡ Performance

### Lighthouse Scores

Target scores (all categories):
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

### Optimizations Applied

- ✅ Tailwind CSS purging (removes unused styles)
- ✅ Image lazy loading
- ✅ Resource preloading
- ✅ Minified CSS and HTML
- ✅ Optimized fonts (system font stack)
- ✅ Reduced motion for accessibility
- ✅ Semantic HTML structure
- ✅ Proper meta tags and structured data

### Bundle Sizes

- **CSS**: ~15-20KB (minified + gzipped)
- **HTML pages**: 5-30KB each
- **Total site**: <500KB

## 🔍 SEO Features

- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ RSS Feed (`/feed.xml`)
- ✅ robots.txt
- ✅ Open Graph meta tags
- ✅ Twitter Card support
- ✅ JSON-LD structured data (Person schema)
- ✅ Canonical URLs
- ✅ Descriptive alt text on images
- ✅ Semantic HTML5 structure

## 🛠️ Tech Stack

### Core
- **Jekyll 4.3** - Static site generator
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Liquid** - Template language
- **Markdown/Kramdown** - Content format

### Plugins
- jekyll-feed - RSS feed generation
- jekyll-seo-tag - SEO meta tags
- jekyll-sitemap - XML sitemap
- @tailwindcss/typography - Prose styling

### Tools
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixes
- Imagemin - Image optimization
- GitHub Actions - CI/CD

## 📦 Dependencies

### Ruby Gems
```ruby
gem "jekyll", "~> 4.3.0"
gem "jekyll-feed", "~> 0.17"
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"
```

### NPM Packages
```json
{
  "tailwindcss": "^3.4.0",
  "@tailwindcss/typography": "^0.5.10",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16"
}
```

## 🤝 Contributing

This is a personal website, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Website**: [oriolcolomefont.github.io](https://oriolcolomefont.github.io)
- **Email**: oriolcolomefont@gmail.com
- **GitHub**: [@oriolcolomefont](https://github.com/oriolcolomefont)
- **LinkedIn**: [in/ocf](https://linkedin.com/in/ocf)

---

**Built with ❤️ by Oriol Colomé Font** | Music Tech Generalist
