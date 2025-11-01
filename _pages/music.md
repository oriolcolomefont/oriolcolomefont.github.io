---
layout: default
title: "Music"
description: "Creative compositions, research, and technical work at the intersection of music and technology"
permalink: /music/
---

<section class="relative py-20 bg-gradient-to-br from-amber-950 via-orange-900 to-amber-950 dark:from-surface-900 dark:to-surface-950 overflow-hidden theme-transition">
    <div class="absolute inset-0 gradient-mesh opacity-20"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
            <span class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
                Music Portfolio
            </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Music
        </h1>
        
        <p class="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            Creative compositions, research, and technical work at the intersection of music and technology
        </p>
    </div>
</section>

<!-- Creative Works Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Creative Works</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Original compositions, soundtracks, and musical explorations
            </p>
        </div>
        
        {% assign creative_works = site.data.music.creative_works %}
        {% if creative_works.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for work in creative_works %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-amber-500 to-orange-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium">
                            {{ work.type }}
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">{{ work.year }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {{ work.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ work.description }}</p>
                    
                    {% if work.highlights.size > 0 %}
                    <ul class="mb-4 space-y-1">
                        {% for highlight in work.highlights %}
                        <li class="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <svg class="w-4 h-4 mr-2 mt-0.5 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            {{ highlight }}
                        </li>
                        {% endfor %}
                    </ul>
                    {% endif %}
                    
                    {% if work.links.size > 0 %}
                    <div class="flex flex-wrap gap-2">
                        {% for link in work.links %}
                        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white">
                            {{ link.label }}
                        </a>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <div class="text-center py-20">
            <svg class="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Creative music projects will be showcased here soon.
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- Technical Work Section -->
{% assign bg = site.data.theme.sections.backgrounds.gray %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Work</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Research, development, and innovation in music technology and MIR
            </p>
        </div>
        
        {% assign technical_work = site.data.music.technical_work %}
        {% if technical_work.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for work in technical_work %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-orange-500 to-amber-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium">
                            {{ work.type }}
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">{{ work.year }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {{ work.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ work.description }}</p>
                    
                    {% if work.highlights.size > 0 %}
                    <ul class="mb-4 space-y-1">
                        {% for highlight in work.highlights %}
                        <li class="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <svg class="w-4 h-4 mr-2 mt-0.5 text-orange-600 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            {{ highlight }}
                        </li>
                        {% endfor %}
                    </ul>
                    {% endif %}
                    
                    {% if work.links.size > 0 %}
                    <div class="flex flex-wrap gap-2">
                        {% for link in work.links %}
                        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white">
                            {{ link.label }}
                        </a>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <div class="text-center py-20">
            <svg class="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Technical music projects will be showcased here soon.
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- About Music Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="py-16 {{ bg.light }} {{ bg.dark }} theme-transition">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card p-8 border-l-4 border-amber-600">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        About My Music Work
                    </h3>
                    <div class="prose prose-lg dark:prose-dark max-w-none">
                        <p class="text-gray-700 dark:text-gray-300">
                            My work spans the creative and technical dimensions of music. From composing original soundtracks 
                            and exploring computational musicology to developing cutting-edge music information retrieval systems, 
                            I find inspiration at the intersection of art and technology.
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">Areas of focus:</p>
                        <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                            <li>🎵 <strong>Creative Composition</strong> - Original soundtracks and musical works</li>
                            <li>🔬 <strong>Music Information Retrieval</strong> - Deep learning for audio analysis</li>
                            <li>📊 <strong>Computational Musicology</strong> - Pattern analysis and cultural preservation</li>
                            <li>💻 <strong>Music Technology</strong> - Building tools and platforms for musicians</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

