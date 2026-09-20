/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brutal-yellow': '#FFE600',
        'brutal-cyan': '#00F0FF',
        'brutal-magenta': '#FF5757',
        'brutal-green': '#76FBD9',
        'brutal-purple': '#C8ACD6',
        'brutal-blue': '#4D96FF',
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #000000',
        'brutal': '5px 5px 0px #000000',
        'brutal-lg': '8px 8px 0px #000000',
        'brutal-dark-sm': '3px 3px 0px #FFFFFF',
        'brutal-dark': '5px 5px 0px #FFFFFF',
        'brutal-dark-lg': '8px 8px 0px #FFFFFF',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'glass-md': '0 12px 36px rgba(0, 0, 0, 0.45)',
        'glass-lg': '0 24px 50px rgba(0, 0, 0, 0.6)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
