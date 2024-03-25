/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--theme-primary)'
      },
      borderColor: {
        DEFAULT: 'var(--theme-border)'
      }
    },
  },
  plugins: [],
}

