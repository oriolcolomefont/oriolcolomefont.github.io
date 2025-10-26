/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.{html,md}',
    './_posts/**/*.{html,md}',
    './_notebooks/**/*.{html,md}',
    './index.html',
    './404.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern, consistent primary palette (indigo-based)
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Semantic colors
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // Surface colors for dark mode
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Cal Sans',
          'Inter var',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.5715', letterSpacing: '0.00em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.011em' }],
        'lg': ['1.125rem', { lineHeight: '1.5556', letterSpacing: '-0.014em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4167', letterSpacing: '-0.019em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3333', letterSpacing: '-0.021em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2778', letterSpacing: '-0.022em' }],
        '5xl': ['3rem', { lineHeight: '1.1667', letterSpacing: '-0.023em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1333', letterSpacing: '-0.024em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1111', letterSpacing: '-0.025em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        // Enhanced existing shadows
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        
        // New elevation levels for spatial depth
        'elevation-1': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
        'elevation-2': '0 4px 8px 0 rgb(0 0 0 / 0.12), 0 2px 4px 0 rgb(0 0 0 / 0.08)',
        'elevation-3': '0 12px 24px 0 rgb(0 0 0 / 0.15), 0 4px 8px 0 rgb(0 0 0 / 0.1)',
        'elevation-4': '0 24px 48px 0 rgb(0 0 0 / 0.18), 0 8px 16px 0 rgb(0 0 0 / 0.12)',
        'elevation-5': '0 32px 64px 0 rgb(0 0 0 / 0.2), 0 12px 24px 0 rgb(0 0 0 / 0.15)',
        
        // Colored shadows for depth
        'primary-glow': '0 8px 32px -8px rgb(99 102 241 / 0.4)',
        'primary-glow-lg': '0 16px 48px -12px rgb(99 102 241 / 0.5)',
        'purple-glow': '0 8px 32px -8px rgb(168 85 247 / 0.4)',
        
        // Inner shadows for depth
        'inner-lg': 'inset 0 2px 8px 0 rgb(0 0 0 / 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            maxWidth: '68ch',
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.primary.700'),
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h1: {
              color: theme('colors.gray.900'),
              fontSize: '2.25rem',
              lineHeight: '1.25',
              marginTop: '0',
              marginBottom: '1rem',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontSize: '1.875rem',
              lineHeight: '1.3333',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontSize: '1.5rem',
              lineHeight: '1.4167',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            code: {
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.375rem',
              padding: '0.25rem 0.375rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.7',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.primary.400'),
              backgroundColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

