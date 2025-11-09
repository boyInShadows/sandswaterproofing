/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        michorma: ['Michroma', 'sans-serif']
      },
      colors: {
        Fog: '#E4E4F2',
        Sand: '#BFB0A3',
        Forest: '#35401E',
        Olive: '#8C8354',
        Rust: '#733E20',
      },
      backgroundPosition:{
        top: 'top',
        'top-10': 'center top -10rem',      
        'top-3': 'center top -3rem',      }
    },
  },
  plugins: [],
}

