/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#733E00",
        tertiary: "#FF8C00",
        background: "#FDE3C6",
      },

      fontFamily:{
        'poppins':['Poppins_600SemiBold'],
        'inter':['Inter_400Regular'],
        'medium':['Inter_500Medium'],
      },



    },
  },
  plugins: [],
}

