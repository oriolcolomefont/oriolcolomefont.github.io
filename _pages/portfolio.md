---
layout: default
title: "Portfolio"
description: "A collection of research notebooks, projects, and technical work showcasing my journey in music technology and deep learning"
permalink: /portfolio/
---

<section class="relative py-20 bg-gradient-to-br from-indigo-950 via-primary-900 to-purple-950 dark:from-surface-900 dark:to-surface-950 overflow-hidden theme-transition">
    <div class="absolute inset-0 gradient-mesh opacity-20"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
            <span class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Portfolio
            </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Portfolio
        </h1>
        
        <p class="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            Research notebooks, projects, and technical work exploring music technology, MIR, and deep learning
        </p>
    </div>
</section>

<!-- Research Notebooks Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Research Notebooks</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Interactive Jupyter notebooks exploring music technology, MIR, and deep learning
            </p>
        </div>
        
        {% if site.notebooks.size > 0 %}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for notebook in site.notebooks %}
            <article class="card hover-lift h-full">
                <!-- Icon/Badge -->
                <div class="bg-gradient-to-br from-primary-500 to-purple-600 p-8 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                    <!-- Category/Type -->
                    {% if notebook.category %}
                    <div class="mb-3">
                        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                            {{ notebook.category }}
                        </span>
                    </div>
                    {% endif %}
                    
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        <a href="{{ notebook.url | relative_url }}" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            {{ notebook.title }}
                        </a>
                    </h3>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {{ notebook.description }}
                    </p>
                    
                    <!-- Metadata -->
                    <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {% if notebook.date %}
                        <div class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            {{ notebook.date | date: "%b %Y" }}
                        </div>
                        {% endif %}
                        {% if notebook.read_time %}
                        <div class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {{ notebook.read_time }} min
                        </div>
                        {% endif %}
                    </div>
                    
                    <!-- Tags -->
                    {% if notebook.tags %}
                    <div class="flex flex-wrap gap-2 mb-4">
                        {% assign tag_count = 0 %}
                        {% for tag in notebook.tags %}
                            {% if tag_count < 3 %}
                            <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                                {{ tag }}
                            </span>
                            {% assign tag_count = tag_count | plus: 1 %}
                            {% endif %}
                        {% endfor %}
                    </div>
                    {% endif %}
                    
                    <!-- View Button -->
                    <a href="{{ notebook.url | relative_url }}" 
                       class="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Notebook
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <!-- Empty state -->
        <div class="text-center py-20">
            <svg class="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Notebooks Yet</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Research notebooks will be published here. Check back soon for interactive explorations of music technology and MIR!
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- Featured Projects Section -->
{% assign bg = site.data.theme.sections.backgrounds.gray %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Technical projects and research work
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            {% assign project_count = 0 %}
            {% for item in site.data.projects %}
                {% if project_count < 4 %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                            {{ item.type }}
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">{{ item.date }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ item.description }}</p>
                    
                    {% if item.links.size > 0 %}
                    <div class="flex flex-wrap gap-2">
                        {% for link in item.links %}
                        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                            {{ link.label }}
                        </a>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
            </article>
                {% assign project_count = project_count | plus: 1 %}
                {% endif %}
            {% endfor %}
        </div>
        
        <div class="text-center mt-12">
            <a href="{{ '/' | relative_url }}#projects" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                View All Projects
            </a>
        </div>
    </div>
</section>

<!-- About Portfolio Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="py-16 {{ bg.light }} {{ bg.dark }} theme-transition">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card p-8 border-l-4 border-indigo-600">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        About This Portfolio
                    </h3>
                    <div class="prose prose-lg dark:prose-dark max-w-none">
                        <p class="text-gray-700 dark:text-gray-300">
                            This portfolio showcases my research notebooks, technical projects, and experiments in music technology, 
                            MIR, and deep learning. All code is executable and reproducible.
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">What you'll find:</p>
                        <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                            <li>📓 <strong>Research Notebooks</strong> - Interactive Jupyter notebooks with full outputs and visualizations</li>
                            <li>🔬 <strong>Technical Projects</strong> - Code repositories and implementations</li>
                            <li>📊 <strong>Experiments</strong> - Explorations in music technology and MIR</li>
                            <li>💻 <strong>Open Source</strong> - All code available on GitHub</li>
                        </ul>
                        <p class="text-gray-700 dark:text-gray-300 mt-4">
                            For interactive versions or to run the code yourself, visit my 
                            <a href="https://github.com/oriolcolomefont" class="text-indigo-600 dark:text-indigo-400 hover:underline font-medium" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

