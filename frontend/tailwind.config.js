/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your file types
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
      colors: {
        primary: '#D5451B',
        secondary: '#521C0D',
        accent: '#FF9B45',
        background: '#F4E7E1',
      }
    },
  },
  plugins: [],
};
