import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colores referenciados desde CSS variables (definidas en globals.css)
      colors: {
        bg:        'var(--color-bg)',
        surface:   'var(--color-surface)',
        accent:    'var(--color-accent)',
        'accent-lt':'var(--color-accent-lt)',
        ink:       'var(--color-text)',
        muted:     'var(--color-text-muted)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:  ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '56rem', // equivalente a max-w-4xl
      },
    },
  },
  plugins: [],
}

export default config
