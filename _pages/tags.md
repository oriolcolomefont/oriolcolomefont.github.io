---
layout: default
title: "Tags - Browse by Topic"
description: "Browse all posts by tags - Music Information Retrieval, Deep Learning, Audio Processing, and more"
permalink: /tags/
---

<section class="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10"></div>
    <div class="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-48 translate-y-48"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Browse by Tags
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore posts organized by topics and themes
        </p>
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Collect all tags -->
        {% assign all_tags = "" | split: "" %}
        {% for post in site.posts %}
            {% for tag in post.tags %}
                {% unless all_tags contains tag %}
                    {% assign all_tags = all_tags | push: tag %}
                {% endunless %}
            {% endfor %}
        {% endfor %}
        {% assign sorted_tags = all_tags | sort %}

        <!-- Tags cloud -->
        <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">All Tags</h2>
            <div class="flex flex-wrap justify-center gap-4">
                {% for tag in sorted_tags %}
                    {% assign tag_posts = site.posts | where_exp: "post", "post.tags contains tag" %}
                    <a href="#{{ tag | slugify }}" 
                       class="group bg-white hover:bg-primary-600 text-gray-700 hover:text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <span class="font-medium">#{{ tag }}</span>
                        <span class="ml-2 bg-gray-200 group-hover:bg-primary-700 text-gray-700 group-hover:text-white px-2 py-1 rounded-full text-sm transition-colors">
                            {{ tag_posts | size }}
                        </span>
                    </a>
                {% endfor %}
            </div>
        </div>

        <!-- Posts by tag -->
        {% for tag in sorted_tags %}
            {% assign tag_posts = site.posts | where_exp: "post", "post.tags contains tag" %}
            
            <div id="{{ tag | slugify }}" class="mb-16 scroll-mt-24">
                <div class="flex items-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">
                        #{{ tag }}
                    </h2>
                    <span class="ml-4 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {{ tag_posts | size }} post{% if tag_posts.size != 1 %}s{% endif %}
                    </span>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8">
                    {% for post in tag_posts %}
                    <article class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <!-- Featured image or gradient -->
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
            </div>
        {% endfor %}
    </div>
</section>

