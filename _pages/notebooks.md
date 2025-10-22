---
layout: default
title: "Research Notebooks"
description: "Jupyter notebooks showcasing my research in Music Information Retrieval, Deep Learning, and Audio Processing"
permalink: /notebooks/
---

<section class="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10"></div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Research Notebooks</h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Interactive Jupyter notebooks exploring music technology, MIR, and deep learning
        </p>
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for notebook in site.notebooks %}
            <article class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <!-- Icon/Badge -->
                <div class="bg-gradient-to-br from-primary-500 to-purple-600 p-8 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                    <!-- Category/Type -->
                    {% if notebook.category %}
                    <div class="mb-3">
                        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
                            {{ notebook.category }}
                        </span>
                    </div>
                    {% endif %}
                    
                    <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                        {{ notebook.title }}
                    </h3>
                    
                    <p class="text-gray-600 mb-4 line-clamp-3">
                        {{ notebook.description }}
                    </p>
                    
                    <!-- Metadata -->
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                        {% for tag in notebook.tags limit:3 %}
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {{ tag }}
                        </span>
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
            {% else %}
            <!-- Empty state -->
            <div class="col-span-full text-center py-20">
                <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">No Notebooks Yet</h3>
                <p class="text-gray-600 max-w-md mx-auto">
                    Research notebooks will be published here. Check back soon for interactive explorations of music technology and MIR!
                </p>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Info Section -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg class="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                About These Notebooks
            </h3>
            <p class="text-gray-700 mb-3">
                These Jupyter notebooks showcase my research and experiments in music technology, providing detailed walkthroughs of algorithms, analyses, and implementations.
            </p>
            <p class="text-gray-700">
                All code is executable and reproducible. For interactive versions or to run the code yourself, visit the 
                <a href="https://github.com/oriolcolomefont" class="text-primary-600 hover:text-primary-700 font-medium underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
            </p>
        </div>
    </div>
</section>

