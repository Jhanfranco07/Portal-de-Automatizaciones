import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
         DEFAULT: "#7c0e0e", // rojo Pachambear
         dark: "#5c0a0a",
        light: "#a01a1a",
  },
      },
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
}
export default config
