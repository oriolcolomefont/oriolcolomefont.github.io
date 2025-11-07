---
layout: default
title: "Music"
description: "Original compositions, soundtracks, arrangements, orchestrations, and performance projects"
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
            Original compositions, soundtracks, arrangements, orchestrations, and performance projects
        </p>
    </div>
</section>

<!-- Creative Works Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Music</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Original compositions, soundtracks, and musical scores
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

<!-- Angle Divider -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
{% include angle-divider.html type="white_to_gray" %}

<!-- Arrangements and Orchestrations Section -->
{% assign bg = site.data.theme.sections.backgrounds.gray %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Arrangements & Orchestrations</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Musical arrangements and orchestrations of existing works
            </p>
        </div>
        
        {% assign arrangements = site.data.music.arrangements_and_orchestrations %}
        {% if arrangements.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for work in arrangements %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                            {{ work.type }}
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">{{ work.year }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {{ work.title }}
                    </h3>
                    {% if work.original_composer %}
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Original by: <span class="font-medium">{{ work.original_composer }}</span>
                    </p>
                    {% endif %}
                    {% if work.instrumentation %}
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span class="font-medium">Instrumentation:</span> {{ work.instrumentation }}
                    </p>
                    {% endif %}
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ work.description }}</p>
                    
                    {% if work.highlights.size > 0 %}
                    <ul class="mb-4 space-y-1">
                        {% for highlight in work.highlights %}
                        <li class="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <svg class="w-4 h-4 mr-2 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-purple-500 hover:bg-purple-600 text-white">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Arrangements and orchestrations will be showcased here soon.
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- Angle Divider -->
{% include angle-divider-reverse.html type="gray_to_white" %}

<!-- Band Leader & Performer Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical_small }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Band Leader & Performer</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                Projects as a band leader and performer
            </p>
        </div>
        
        {% assign band_projects = site.data.music.band_leader_and_performer %}
        {% if band_projects.size > 0 %}
        <div class="grid md:grid-cols-2 gap-8">
            {% for project in band_projects %}
            <article class="card hover-lift h-full">
                <div class="bg-gradient-to-br from-teal-500 to-cyan-600 p-12 flex items-center justify-center rounded-t-2xl">
                    <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                            {{ project.role }}
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">{{ project.year }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {{ project.title }}
                    </h3>
                    {% if project.ensemble %}
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span class="font-medium">Ensemble:</span> {{ project.ensemble }}
                    </p>
                    {% endif %}
                    {% if project.instrument %}
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span class="font-medium">Instrument:</span> {{ project.instrument }}
                    </p>
                    {% endif %}
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                    
                    {% if project.highlights.size > 0 %}
                    <ul class="mb-4 space-y-1">
                        {% for highlight in project.highlights %}
                        <li class="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <svg class="w-4 h-4 mr-2 mt-0.5 text-teal-600 dark:text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            {{ highlight }}
                        </li>
                        {% endfor %}
                    </ul>
                    {% endif %}
                    
                    {% if project.links.size > 0 %}
                    <div class="flex flex-wrap gap-2">
                        {% for link in project.links %}
                        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Band leader and performer projects will be showcased here soon.
            </p>
        </div>
        {% endif %}
    </div>
</section>

<!-- Angle Divider -->
{% include angle-divider.html type="white_to_gray" %}

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
                        About My Music
                    </h3>
                    <div class="prose prose-lg dark:prose-dark max-w-none">
                        <p class="text-gray-700 dark:text-gray-300">
                            This section features my original musical compositions, soundtracks, arrangements, orchestrations, and performance projects. For my technical work 
                            in music information retrieval, computational musicology, and music technology, please visit the 
                            <a href="{{ '/' | relative_url }}#projects" class="text-amber-600 dark:text-amber-400 hover:underline">Projects</a> section.
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">What you'll find here:</p>
                        <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                            <li>🎵 <strong>Original Compositions</strong> - Musical works and pieces</li>
                            <li>🎬 <strong>Soundtracks</strong> - Music created for film and media</li>
                            <li>🎼 <strong>Arrangements</strong> - Adaptations of existing works for different instruments or ensembles</li>
                            <li>🎻 <strong>Orchestrations</strong> - Full orchestral arrangements of musical works</li>
                            <li>🎤 <strong>Band Leader & Performer</strong> - Projects as a band leader and performer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

