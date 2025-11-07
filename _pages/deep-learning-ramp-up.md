---
layout: default
title: "Deep Learning Ramp-Up"
description: "My journey through Jacob Buckman's deep learning ramp-up curriculum - building neural networks from scratch to advanced architectures"
permalink: /deep-learning-ramp-up/
---

<section class="relative py-20 bg-gradient-to-br from-blue-950 via-primary-900 to-primary-950 dark:from-surface-900 dark:to-surface-950 overflow-hidden theme-transition">
    <div class="absolute inset-0 gradient-mesh opacity-20"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
            <span class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                Learning Series
            </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Deep Learning Ramp-Up
        </h1>
        
        <p class="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            Building neural networks from scratch to advanced architectures
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/oriolcolomefont/deep-learning-ramp-up" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm press-effect inline-flex gap-2 focus-visible:ring-white/50">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
            </a>
            <a href="https://d2l.ai/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn bg-orange-500 hover:bg-orange-600 text-white press-effect inline-flex gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                D2L.ai Reference
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
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">0 / 18 exercises</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
                <div class="bg-gradient-to-r from-primary-600 to-blue-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>
        
        <!-- Exercises Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for i in (1..18) %}
            <div class="card p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-gray-500 dark:text-gray-400 text-sm font-medium">Exercise {{ i }}</span>
                    <span class="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        Upcoming
                    </span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {% if i == 1 %}Linear Regression (NumPy){% endif %}
                    {% if i == 2 %}Linear Regression (PyTorch){% endif %}
                    {% if i == 3 %}Vector Input Regression{% endif %}
                    {% if i == 4 %}Classification with Softmax{% endif %}
                    {% if i == 5 %}Feedforward Networks{% endif %}
                    {% if i == 6 %}Deep Feedforward Networks{% endif %}
                    {% if i == 7 %}MNIST Classification{% endif %}
                    {% if i == 8 %}Adam Optimizer{% endif %}
                    {% if i == 9 %}Convolutional Networks{% endif %}
                    {% if i == 10 %}ResNet Architecture{% endif %}
                    {% if i == 11 %}Shakespeare Feedforward{% endif %}
                    {% if i == 12 %}Autoregressive Sampling{% endif %}
                    {% if i == 13 %}Causal Transformer{% endif %}
                    {% if i == 14 %}GPU Optimization{% endif %}
                    {% if i == 15 %}ImageNet ResNet{% endif %}
                    {% if i == 16 %}GPU Transformer{% endif %}
                    {% if i == 17 %}Multi-GPU Training{% endif %}
                    {% if i == 18 %}GPT-2 Scale Training{% endif %}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {% if i == 1 %}Single scalar input/output with manual backprop{% endif %}
                    {% if i == 2 %}PyTorch implementation with automatic differentiation{% endif %}
                    {% if i == 3 %}Vector inputs for regression tasks{% endif %}
                    {% if i == 4 %}Categorical classification with softmax loss{% endif %}
                    {% if i == 5 %}Single hidden layer neural networks{% endif %}
                    {% if i == 6 %}Multiple hidden layers for deep learning{% endif %}
                    {% if i == 7 %}MNIST digit classification{% endif %}
                    {% if i == 8 %}Advanced optimization with Adam{% endif %}
                    {% if i == 9 %}Convolutional neural networks{% endif %}
                    {% if i == 10 %}Residual networks for better training{% endif %}
                    {% if i == 11 %}Sequence modeling with feedforward networks{% endif %}
                    {% if i == 12 %}Text generation through autoregressive sampling{% endif %}
                    {% if i == 13 %}Transformer architecture for sequence modeling{% endif %}
                    {% if i == 14 %}GPU acceleration and optimization{% endif %}
                    {% if i == 15 %}Large-scale image classification{% endif %}
                    {% if i == 16 %}GPU-accelerated transformer training{% endif %}
                    {% if i == 17 %}Distributed training across multiple GPUs{% endif %}
                    {% if i == 18 %}GPT-2 scale language model training{% endif %}
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
        
        {% assign dl_notebooks = site.notebooks | where_exp: "item", "item.tags contains 'deep-learning-ramp-up'" %}
        {% assign dl_posts = site.posts | where_exp: "item", "item.tags contains 'deep-learning-ramp-up'" %}
        
        {% if dl_notebooks.size > 0 or dl_posts.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for notebook in dl_notebooks %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-blue-500 to-primary-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
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
            
            {% for post in dl_posts %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-primary-500 to-blue-600 p-12 flex items-center justify-center rounded-t-2xl">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Journey Starting Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                I'm just getting started with this deep learning journey. Check back soon for detailed notebooks and insights!
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- About This Series -->
<section class="py-16 bg-white dark:bg-surface-950 theme-transition">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card p-8 border-l-4 border-blue-600">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        About This Learning Journey
                    </h3>
                    <div class="prose prose-lg dark:prose-dark max-w-none">
                        <p class="text-gray-700 dark:text-gray-300">
                            I'm working through <strong>Jacob Buckman's Deep Learning Ramp-Up curriculum</strong>, 
                            documenting my learning process with a unique perspective from my background in music technology and MIR.
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">What makes this series different:</p>
                        <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                            <li>🎵 <strong>Music Tech Connections</strong> - Drawing parallels between neural networks and audio processing</li>
                            <li>🔬 <strong>Deep Experiments</strong> - Going beyond the exercises with additional explorations</li>
                            <li>📊 <strong>Visualizations</strong> - Interactive plots and diagrams to build intuition</li>
                            <li>💭 <strong>Honest Reflections</strong> - Documenting challenges and "aha" moments</li>
                            <li>⚡ <strong>Performance Focus</strong> - GPU optimization and scaling considerations</li>
                        </ul>
                        <p class="text-gray-700 dark:text-gray-300 mt-4">
                            All code, experiments, and detailed notes are available in my 
                            <a href="https://github.com/oriolcolomefont/deep-learning-ramp-up" class="text-blue-600 dark:text-blue-400 hover:underline font-medium" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                        </p>
                        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Reference Materials:</h4>
                            <ul class="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                                <li>• <a href="https://d2l.ai/" class="hover:underline">D2L.ai - Interactive Deep Learning</a></li>
                                <li>• <a href="https://fleuret.org/public/lbdl.pdf" class="hover:underline">Learning by Doing in Deep Learning</a></li>
                                <li>• <a href="https://karpathy.github.io/2015/05/21/rnn-effectiveness/" class="hover:underline">The Unreasonable Effectiveness of RNNs</a></li>
                                <li>• <a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" class="hover:underline">3Blue1Brown Neural Networks</a></li>
                                <li>• <a href="https://www.youtube.com/@statquest" class="hover:underline">StatQuest YouTube Channel</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
