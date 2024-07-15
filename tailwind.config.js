const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
        mono: ["VT323", ...defaultTheme.fontFamily.mono],
        pixel: ["'Pixelated MS Sans Serif'", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
}
