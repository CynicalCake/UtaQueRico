/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins_600SemiBold','sans-serif'],
        'inter':['Inter_400Regular', 'sans-serif'],
        'medium':['Inter_500Medium', 'sans-serif'],
      },



    },
  },
  plugins: [],
}

