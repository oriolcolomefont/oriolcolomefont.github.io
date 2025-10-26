---
layout: default
title: "Building LLMs from Scratch"
description: "My journey through Sebastian Raschka's 'Build a Large Language Model from Scratch' - documenting insights, experiments, and connecting concepts to music technology"
permalink: /llm-series/
---

<section class="relative py-20 bg-gradient-to-br from-purple-950 via-primary-900 to-primary-950 dark:from-surface-900 dark:to-surface-950 overflow-hidden theme-transition">
    <div class="absolute inset-0 gradient-mesh opacity-20"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
            <span class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Learning Series
            </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Building LLMs from Scratch
        </h1>
        
        <p class="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            Following Sebastian Raschka's comprehensive guide with insights from music technology and MIR
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/oriolcolomefont/LLMs-from-scratch" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm press-effect inline-flex gap-2 focus-visible:ring-white/50">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
            </a>
            <a href="https://www.manning.com/books/build-a-large-language-model-from-scratch" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn bg-orange-500 hover:bg-orange-600 text-white press-effect inline-flex gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Get the Book
            </a>
        </div>
    </div>
</section>

<!-- Progress Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Learning Progress</h2>
        
        <!-- Progress Bar -->
        <div class="max-w-3xl mx-auto mb-12">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Completion</span>
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">0 / 7 chapters</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
                <div class="bg-gradient-to-r from-primary-600 to-purple-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>
        
        <!-- Chapters Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for i in (1..7) %}
            <div class="card p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-gray-500 dark:text-gray-400 text-sm font-medium">Chapter {{ i }}</span>
                    <span class="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        Upcoming
                    </span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {% if i == 1 %}Understanding LLMs{% endif %}
                    {% if i == 2 %}Working with Text Data{% endif %}
                    {% if i == 3 %}Attention Mechanisms{% endif %}
                    {% if i == 4 %}Implementing GPT{% endif %}
                    {% if i == 5 %}Pretraining{% endif %}
                    {% if i == 6 %}Classification Finetuning{% endif %}
                    {% if i == 7 %}Instruction Following{% endif %}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {% if i == 1 %}Introduction to large language models and transformer architecture{% endif %}
                    {% if i == 2 %}Tokenization, embeddings, and data preprocessing{% endif %}
                    {% if i == 3 %}Self-attention, multi-head attention, and causal masking{% endif %}
                    {% if i == 4 %}Building a GPT model from scratch in PyTorch{% endif %}
                    {% if i == 5 %}Pretraining on unlabeled data at scale{% endif %}
                    {% if i == 6 %}Finetuning for downstream classification tasks{% endif %}
                    {% if i == 7 %}Finetuning models to follow instructions{% endif %}
                </p>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Published Content -->
<section class="py-16 bg-gray-50 dark:bg-surface-900 theme-transition">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Published Content</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Deep dives, experiments, and connections to music technology
            </p>
        </div>
        
        {% assign llm_notebooks = site.notebooks | where_exp: "item", "item.tags contains 'llm-series'" %}
        {% assign llm_posts = site.posts | where_exp: "item", "item.tags contains 'llm-series'" %}
        
        {% if llm_notebooks.size > 0 or llm_posts.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for notebook in llm_notebooks %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-purple-500 to-primary-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                        Notebook
                    </span>
                    <h3 class="text-xl font-bold mt-3 mb-3 text-gray-900 dark:text-white">
                        <a href="{{ notebook.url | relative_url }}" class="hover:text-primary-600 dark:hover:text-primary-400">{{ notebook.title }}</a>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ notebook.description }}</p>
                    <time class="text-sm text-gray-500 dark:text-gray-400">{{ notebook.date | date: "%B %d, %Y" }}</time>
                </div>
            </article>
            {% endfor %}
            
            {% for post in llm_posts %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-primary-500 to-purple-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium">
                        Blog Post
                    </span>
                    <h3 class="text-xl font-bold mt-3 mb-3 text-gray-900 dark:text-white">
                        <a href="{{ post.url | relative_url }}" class="hover:text-primary-600 dark:hover:text-primary-400">{{ post.title }}</a>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.description | truncate: 120 }}</p>
                    <time class="text-sm text-gray-500 dark:text-gray-400">{{ post.date | date: "%B %d, %Y" }}</time>
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <!-- Empty State -->
        <div class="text-center py-20">
            <svg class="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Journey Starting Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                I'm just getting started with this learning journey. Check back soon for detailed notebooks and insights!
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- About This Series -->
<section class="py-16 bg-white dark:bg-surface-950 theme-transition">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card p-8 border-l-4 border-purple-600">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        About This Learning Journey
                    </h3>
                    <div class="prose prose-lg dark:prose-dark max-w-none">
                        <p class="text-gray-700 dark:text-gray-300">
                            I'm working through <strong>"Build a Large Language Model (From Scratch)"</strong> by Sebastian Raschka, 
                            documenting my learning process with a unique perspective from my background in music technology and MIR.
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">What makes this series different:</p>
                        <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                            <li>🎵 <strong>Music Tech Connections</strong> - Drawing parallels between LLMs and audio processing</li>
                            <li>🔬 <strong>Deep Experiments</strong> - Going beyond the book with additional explorations</li>
                            <li>📊 <strong>Visualizations</strong> - Interactive plots and diagrams to build intuition</li>
                            <li>💭 <strong>Honest Reflections</strong> - Documenting challenges and "aha" moments</li>
                        </ul>
                        <p class="text-gray-700 dark:text-gray-300 mt-4">
                            All code, experiments, and detailed notes are available in my 
                            <a href="https://github.com/oriolcolomefont/LLMs-from-scratch" class="text-purple-600 dark:text-purple-400 hover:underline font-medium" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
