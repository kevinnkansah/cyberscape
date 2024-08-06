/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "../../content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        'minecraft': ['MinecraftRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};