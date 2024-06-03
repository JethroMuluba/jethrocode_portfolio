/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'android': '360px',
       
      },

      backgroundImage: {
        'about-motif': "url('https://res.cloudinary.com/dr8ofciki/image/upload/v1709840663/Mon-Portfolio-Data/design-about.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

