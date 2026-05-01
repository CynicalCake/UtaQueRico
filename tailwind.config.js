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
        primary2: "#F97316",
        primary: "#FBBF24",
        secondary: "#f59e0b",
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

