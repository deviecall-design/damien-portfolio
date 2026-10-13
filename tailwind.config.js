/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1ea',
        ink: {
          DEFAULT: '#171614',
          soft: '#3c3934',
          muted: '#5c574f',
        },
        line: '#e3dcd0',
        pine: {
          DEFAULT: '#1a403a',
          deep: '#102824',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        card: '0 1px 0 rgba(23, 22, 20, 0.04)',
      },
    },
  },
  plugins: [],
}
