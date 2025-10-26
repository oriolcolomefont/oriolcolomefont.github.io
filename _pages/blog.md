---
layout: default
title: "Blog - Music Tech Insights"
description: "Thoughts on music technology, MIR, and industry trends from Oriol Colomé Font"
permalink: /blog/
---

<section class="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-purple-950 dark:from-surface-950 dark:to-surface-900 theme-transition overflow-hidden">
    <!-- Subtle gradient mesh -->
    <div class="absolute inset-0 gradient-mesh opacity-20"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Music Tech Insights
        </h1>
        <p class="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Exploring the intersection of music, technology, and artificial intelligence
        </p>
    </div>
</section>

<section class="py-16 bg-white dark:bg-surface-950 theme-transition">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Search and Filters -->
        <div class="mb-12 space-y-8">
            <!-- Search Bar -->
            <div class="max-w-xl mx-auto">
                <div class="relative">
                    <input type="text" 
                           id="search-input" 
                           placeholder="Search posts..." 
                           class="input pl-12"
                           aria-label="Search blog posts">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <button id="clear-search" 
                            class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hidden transition-colors"
                            aria-label="Clear search">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Category Filters -->
            <div class="text-center">
                <div class="flex flex-wrap justify-center gap-3">
                    <button class="category-filter btn btn-primary" data-category="all">All Posts</button>
                    <button class="category-filter btn btn-secondary" data-category="Music Information Retrieval">MIR</button>
                    <button class="category-filter btn btn-secondary" data-category="Deep Learning">Deep Learning</button>
                    <button class="category-filter btn btn-secondary" data-category="Audio Processing">Audio</button>
                    <button class="category-filter btn btn-secondary" data-category="Industry Insights">Industry</button>
                </div>
            </div>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts">
            {% for post in site.posts %}
            <article class="blog-post card hover-lift h-full flex flex-col" data-categories="{{ post.categories | join: ' ' }}">
                <!-- Featured Image -->
                {% if post.image %}
                <div class="h-48 overflow-hidden rounded-t-2xl">
                    <img src="{{ post.image | relative_url }}" 
                         alt="{{ post.title }}" 
                         loading="lazy"
                         class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                </div>
                {% else %}
                <div class="h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                {% endif %}
                
                <!-- Content -->
                <div class="p-6 flex flex-col flex-1">
                    <!-- Categories -->
                    <div class="mb-3">
                        {% for category in post.categories limit:2 %}
                        <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium mr-2">
                            {{ category }}
                        </span>
                        {% endfor %}
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h3>
                    
                    <!-- Excerpt -->
                    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                        {{ post.description | default: post.excerpt | strip_html | truncate: 140 }}
                    </p>
                    
                    <!-- Meta -->
                    <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <time datetime="{{ post.date | date_to_xmlschema }}">
                            {{ post.date | date: "%b %d, %Y" }}
                        </time>
                        {% if post.read_time %}
                        <span>{{ post.read_time }} min read</span>
                        {% endif %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>

        <!-- Empty State -->
        <div id="no-posts" class="hidden text-center py-20">
            <svg class="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No posts found</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">Try selecting a different category or adjusting your search.</p>
            <button onclick="document.getElementById('search-input').value = ''; document.getElementById('clear-search').click();" 
                    class="btn btn-primary">
                Clear Filters
            </button>
        </div>
    </div>
</section>

<script>
// Blog search and filtering
(function() {
  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('clear-search');
  const categoryFilters = document.querySelectorAll('.category-filter');
  const blogPosts = document.querySelectorAll('.blog-post');
  const noPostsMessage = document.getElementById('no-posts');
  
  let currentCategory = 'all';
  let currentSearch = '';

  // Debounce helper
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Filter posts based on current criteria
  function filterPosts() {
    let visibleCount = 0;
    
    blogPosts.forEach(post => {
      const categories = post.dataset.categories || '';
      const title = post.querySelector('h3').textContent.toLowerCase();
      const excerpt = post.querySelector('p').textContent.toLowerCase();
      
      const matchesCategory = currentCategory === 'all' || categories.includes(currentCategory);
      const matchesSearch = !currentSearch || 
                           title.includes(currentSearch) || 
                           excerpt.includes(currentSearch) ||
                           categories.toLowerCase().includes(currentSearch);
      
      if (matchesCategory && matchesSearch) {
        post.style.display = 'flex';
        visibleCount++;
      } else {
        post.style.display = 'none';
      }
    });
    
    noPostsMessage.classList.toggle('hidden', visibleCount > 0);
  }

  // Search functionality
  searchInput?.addEventListener('input', debounce((e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    clearButton.classList.toggle('hidden', !currentSearch);
    filterPosts();
  }, 300));

  clearButton?.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearButton.classList.add('hidden');
    filterPosts();
  });

  // Category filtering
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      categoryFilters.forEach(f => {
        f.classList.remove('btn-primary');
        f.classList.add('btn-secondary');
      });
      filter.classList.remove('btn-secondary');
      filter.classList.add('btn-primary');
      
      currentCategory = filter.dataset.category;
      filterPosts();
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && e.target.tagName !== 'INPUT') {
      e.preventDefault();
      searchInput?.focus();
    }
  });
})();
</script>
