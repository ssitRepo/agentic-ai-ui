// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme variables
        'bg': 'var(--bg)',
        'text': 'var(--text)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'red': 'var(--red)',
        // Reference colors
        'dark-bg': '#1A1A1A',
        'text-light': '#FFFFFF',
        'light-bg': '#F5F5F5',
        'text-dark': '#333333',
        'sigmasoft-bg': '#2A1A5A',
        'text-sigmasoft': '#E0E0E0',
        'sigmasoft-purple': '#6B48FF',
        'sigmasoft-orange': '#FF8C38',
        'sigmasoft-pink': '#FF5CA8',
        'atomic-red': '#F33F32',
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-5px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};