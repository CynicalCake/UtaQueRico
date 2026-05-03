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
        primary: "#E85D04",   // naranja fuerte 
        primaryLigth: "#FB923C",   // naranja vivo — hover / secundario
        primaryTint: "#FEE8D6",   // fondos
        surface: "#FAFAF9",   // background general (blanco cálido)
        textDark: "#1C0A00",   // texto principal
        muted: "#9B8B7A",   // labels inactivos
      },

      fontFamily: {
        'poppins': ['Poppins_600SemiBold'],
        'regular': ['Inter_400Regular'],
        'medium': ['Inter_500Medium'],
      },
    },
  },
  plugins: [],
}

