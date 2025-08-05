import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-forge-orange)',
          core: 'var(--color-core-orange)',
          dark: 'var(--color-obsidian)',
        },
        orange: {
          50: 'var(--orange-50)',
          100: 'var(--orange-100)',
          200: 'var(--orange-200)',
          300: 'var(--orange-300)',
          400: 'var(--orange-400)',
          500: 'var(--orange-500)',
          600: 'var(--orange-600)',
          700: 'var(--orange-700)',
          800: 'var(--orange-800)',
          900: 'var(--orange-900)',
          950: 'var(--orange-950)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          950: 'var(--gray-950)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--gray-300)',
            h1: {
              color: 'white',
              fontWeight: '700',
            },
            h2: {
              color: 'white',
              fontWeight: '600',
            },
            h3: {
              color: 'white',
              fontWeight: '600',
            },
            h4: {
              color: 'white',
              fontWeight: '600',
            },
            strong: {
              color: 'white',
              fontWeight: '600',
            },
            a: {
              color: 'var(--orange-400)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--orange-300)',
              },
            },
            blockquote: {
              borderLeftColor: 'var(--orange-500)',
              color: 'var(--gray-400)',
            },
            code: {
              color: 'var(--orange-400)',
              backgroundColor: 'var(--gray-900)',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--gray-950)',
              border: '1px solid var(--gray-800)',
            },
            'ul > li::marker': {
              color: 'var(--gray-600)',
            },
            'ol > li::marker': {
              color: 'var(--gray-600)',
            },
          },
        },
      },
      backgroundImage: {
        'molten-gradient': 'var(--gradient-orange)',
        'gradient-glow': 'var(--gradient-glow)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'pulse': '2s ease-in-out infinite pulse',
        'glow': '3s ease-in-out infinite glow',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config