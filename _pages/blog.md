---
layout: default
title: "Blog - Music Tech Insights"
description: "Thoughts on music technology, MIR, and industry trends from Oriol Colomé Font"
permalink: /blog/
---

<section class="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10"></div>
    <div class="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-48 translate-y-48"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Music Tech Insights
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Exploring the intersection of music, technology, and artificial intelligence. 
            From MIR research to industry insights, discover the latest trends in music technology.
        </p>
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Search and Category filters -->
        <div class="mb-12">
            <!-- Search Bar -->
            <div class="mb-8 text-center">
                <div class="max-w-md mx-auto">
                    <div class="relative">
                        <input type="text" id="search-input" placeholder="Search posts..." 
                               class="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <button id="clear-search" class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 hidden">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Category filters -->
            <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#all" class="category-filter bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors" data-category="all">
                    All Posts
                </a>
                <a href="#mir" class="category-filter bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-colors" data-category="Music Information Retrieval">
                    MIR
                </a>
                <a href="#deep-learning" class="category-filter bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-colors" data-category="Deep Learning">
                    Deep Learning
                </a>
                <a href="#audio-processing" class="category-filter bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-colors" data-category="Audio Processing">
                    Audio Processing
                </a>
                <a href="#industry" class="category-filter bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-colors" data-category="Industry Insights">
                    Industry
                </a>
            </div>
        </div>

        <!-- Blog posts grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts">
            {% for post in site.posts %}
            <article class="blog-post bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-categories="{{ post.categories | join: ' ' }}">
                <!-- Featured image -->
                {% if post.image %}
                <div class="h-48 overflow-hidden">
                    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                </div>
                {% else %}
                <div class="h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                </div>
                {% endif %}
                
                <!-- Content -->
                <div class="p-6">
                    <!-- Categories -->
                    <div class="mb-4">
                        {% for category in post.categories %}
                        <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium mr-2">
                            {{ category }}
                        </span>
                        {% endfor %}
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h3>
                    
                    <!-- Description -->
                    <p class="text-gray-600 mb-4 line-clamp-3">
                        {{ post.description | default: post.excerpt | strip_html | truncate: 120 }}
                    </p>
                    
                    <!-- Meta information -->
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <div class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            {{ post.date | date: "%b %d, %Y" }}
                        </div>
                        {% if post.read_time %}
                        <div class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {{ post.read_time }} min read
                        </div>
                        {% endif %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>

        <!-- No posts message -->
        <div id="no-posts" class="text-center py-12 hidden">
            <div class="bg-white rounded-2xl p-8 shadow-xl">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                <p class="text-gray-600">Try selecting a different category or check back later for new content.</p>
            </div>
        </div>
    </div>
</section>

<script>
// Enhanced blog functionality with search and filtering
document.addEventListener('DOMContentLoaded', function() {
  const categoryFilters = document.querySelectorAll('.category-filter');
  const blogPosts = document.querySelectorAll('.blog-post');
  const noPostsMessage = document.getElementById('no-posts');
  const searchInput = document.getElementById('search-input');
  const clearSearch = document.getElementById('clear-search');
  
  let currentCategory = 'all';
  let currentSearchTerm = '';

  // Search functionality
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    currentSearchTerm = searchTerm;
    
    // Show/hide clear button
    clearSearch.classList.toggle('hidden', searchTerm === '');
    
    filterPosts();
  }

  // Filter posts based on category and search
  function filterPosts() {
    let visiblePosts = 0;
    
    blogPosts.forEach(post => {
      const cats = post.getAttribute('data-categories') || '';
      const title = post.querySelector('h3').textContent.toLowerCase();
      const description = post.querySelector('p').textContent.toLowerCase();
      
      const matchesCategory = currentCategory === 'all' || cats.includes(currentCategory);
      const matchesSearch = currentSearchTerm === '' || 
                           title.includes(currentSearchTerm) || 
                           description.includes(currentSearchTerm) ||
                           cats.toLowerCase().includes(currentSearchTerm);
      
      const show = matchesCategory && matchesSearch;
      post.style.display = show ? 'block' : 'none';
      if (show) visiblePosts++;
    });
    
    noPostsMessage.classList.toggle('hidden', visiblePosts > 0);
  }

  // Search input events
  searchInput.addEventListener('input', debounce(performSearch, 300));
  clearSearch.addEventListener('click', function() {
    searchInput.value = '';
    currentSearchTerm = '';
    clearSearch.classList.add('hidden');
    filterPosts();
  });

  // Category filtering with event delegation
  document.addEventListener('click', function(e) {
    if (!e.target.matches('.category-filter')) return;
    
    e.preventDefault();
    
    // Reset all filters
    categoryFilters.forEach(f => {
      f.className = f.className.replace(/bg-primary-\d+|text-white/g, '').trim() + ' bg-gray-200 text-gray-700';
    });
    
    // Activate clicked filter
    e.target.className = e.target.className.replace(/bg-gray-\d+|text-gray-\d+/g, '').trim() + ' bg-primary-600 text-white';

    currentCategory = e.target.getAttribute('data-category');
    filterPosts();
  });

  // Debounce function for search performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
});
</script>

<style>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
