# Theme Constants Documentation

## Overview

The theme constants system provides a centralized configuration for consistent styling across the entire site. All design tokens are defined in `_data/theme.yml`.

## Benefits

- **Single Source of Truth**: All design decisions in one place
- **Easy Maintenance**: Change once, apply everywhere
- **Consistency**: Ensures uniform styling across pages
- **Type Safety**: Reduces errors from hardcoded values
- **Developer Velocity**: Faster development with pre-defined patterns

## Usage

### Accessing Theme Constants

Theme constants are available via `site.data.theme` in any Liquid template:

```liquid
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ bg.light }} {{ bg.dark }}">
  ...
</section>
```

### Common Patterns

#### 1. Section Backgrounds (Alternating White/Gray)

```liquid
<!-- White Background Section -->
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
  ...
</section>

<!-- Gray Background Section -->
{% assign bg = site.data.theme.sections.backgrounds.gray %}
<section class="{{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
  ...
</section>
```

#### 2. Section Structure

```liquid
<section class="{{ site.data.theme.spacing.section_vertical }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
  <div class="{{ site.data.theme.classes.section_container }}">
    <div class="{{ site.data.theme.classes.section_header }}">
      <h2 class="{{ site.data.theme.classes.section_title }}">Title</h2>
      <p class="{{ site.data.theme.classes.section_subtitle }}">Subtitle</p>
    </div>
    <!-- Content -->
  </div>
</section>
```

#### 3. Angle Dividers

```liquid
<!-- Downward angle: White → Gray -->
{% include angle-divider.html type="white_to_gray" %}

<!-- Upward angle: Gray → White -->
{% include angle-divider-reverse.html type="gray_to_white" %}
```

#### 4. Section-Specific Colors

```liquid
<!-- In a component include (e.g., experience-item.html) -->
{% assign colors = site.data.theme.section_colors.experience %}

<div class="{{ colors.icon_bg }}">
  <svg class="{{ colors.icon_text }}">...</svg>
</div>

<h3 class="{{ colors.title_text }}">Title</h3>
```

Available color schemes:
- `experience` - Primary blue theme
- `education` - Primary blue with border
- `internship` - Info cyan theme with border
- `reference` - Success green theme with border
- `course` - Purple theme with border

#### 5. Cards

```liquid
<article class="{{ site.data.theme.classes.card }} {{ site.data.theme.classes.card_padding }}">
  <!-- Card content -->
</article>

<!-- Card with hover effect -->
<article class="{{ site.data.theme.classes.card }} hover-lift {{ site.data.theme.classes.card_padding_large }}">
  <!-- Card content -->
</article>
```

## Theme Configuration Reference

### Sections

#### Backgrounds
```yaml
sections:
  backgrounds:
    white:
      light: "bg-white"
      dark: "dark:bg-surface-950"
    gray:
      light: "bg-gray-50"
      dark: "dark:bg-surface-900"
```

### Classes

#### Containers
- `section_container` - Standard max-width container (max-w-6xl)
- `section_container_narrow` - Narrow container (max-w-4xl)

#### Headers
- `section_header` - Header wrapper with center alignment and bottom margin
- `section_title` - Large section title styling
- `section_subtitle` - Subtitle styling

#### Cards
- `card` - Base card styling
- `card_padding` - Standard padding (p-6)
- `card_padding_large` - Large padding (p-8)

#### Utilities
- `theme_transition` - Smooth theme transitions for dark mode

### Section Colors

Each section type has a consistent color scheme:
- `icon_bg` - Background color for icon containers
- `icon_text` - Icon color
- `title_text` - Title/heading color
- `border` - Left border color (where applicable)

### Spacing

- `section_vertical` - Standard section padding (py-20)
- `section_vertical_small` - Smaller section padding (py-16)
- `header_bottom` - Standard header margin (mb-16)
- `header_bottom_small` - Smaller header margin (mb-12)

### Grids

- `two_column` - Two column grid layout
- `three_column` - Three column grid layout
- `auto_fit` - Responsive auto-fit grid

### Angle Dividers

Pre-configured divider transitions:
- `white_to_gray` - Diagonal cut from white to gray
- `gray_to_white` - Diagonal cut from gray to white

## Examples

### Creating a New Section

```liquid
{% assign bg = site.data.theme.sections.backgrounds.gray %}
<section class="{{ site.data.theme.spacing.section_vertical }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
  <div class="{{ site.data.theme.classes.section_container }}">
    <div class="{{ site.data.theme.classes.section_header }}">
      <h2 class="{{ site.data.theme.classes.section_title }}">My Section</h2>
      <p class="{{ site.data.theme.classes.section_subtitle }}">Section description</p>
    </div>
    
    <div class="{{ site.data.theme.grids.three_column }}">
      <!-- Grid content -->
    </div>
  </div>
</section>
```

### Creating a Component

```liquid
{% assign colors = site.data.theme.section_colors.experience %}
<article class="{{ site.data.theme.classes.card }} {{ site.data.theme.classes.card_padding_large }}">
  <div class="flex items-start gap-4">
    <div class="w-12 h-12 {{ colors.icon_bg }} rounded-xl flex items-center justify-center">
      <svg class="w-6 h-6 {{ colors.icon_text }}">...</svg>
    </div>
    <div class="flex-1">
      <h3 class="text-2xl font-bold">{{ include.title }}</h3>
      <p class="{{ colors.title_text }}">{{ include.subtitle }}</p>
    </div>
  </div>
</article>
```

## Best Practices

1. **Always use theme constants** instead of hardcoded classes when applicable
2. **Maintain consistency** by using the pre-defined patterns
3. **Extend, don't override** - add new constants to `theme.yml` rather than inline classes
4. **Document new constants** - add comments in `theme.yml` for clarity
5. **Test dark mode** - ensure all color schemes work in both light and dark modes

## Extending the Theme

To add new constants:

1. Edit `_data/theme.yml`
2. Add your constants under the appropriate section
3. Use semantic naming (e.g., `section_colors.portfolio` not `colors.blue`)
4. Include both light and dark mode variants
5. Document the usage in this file
6. Test across all pages

## Migration Guide

To convert existing hardcoded styles to theme constants:

### Before
```liquid
<section class="py-20 bg-white dark:bg-surface-950 theme-transition">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Title</h2>
  </div>
</section>
```

### After
```liquid
{% assign bg = site.data.theme.sections.backgrounds.white %}
<section class="{{ site.data.theme.spacing.section_vertical }} {{ bg.light }} {{ bg.dark }} {{ site.data.theme.classes.theme_transition }}">
  <div class="{{ site.data.theme.classes.section_container }}">
    <h2 class="{{ site.data.theme.classes.section_title }}">Title</h2>
  </div>
</section>
```

## Performance

Theme constants have **zero performance impact**:
- Processed at build time by Jekyll
- No runtime overhead
- Same output HTML as hardcoded classes
- Reduced CSS file size due to better purging

## Support

For questions or issues with theme constants:
1. Check this documentation
2. Review examples in existing components
3. Inspect `_data/theme.yml` for available constants
4. Refer to component includes for usage patterns

