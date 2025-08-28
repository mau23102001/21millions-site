// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      // limita el ancho máx. del container
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E0AA29", // color principal (amarillo 21M)
          hover: "#D29922",    // hover del CTA
          50:  "#FFF8E6",
          100: "#FDEFC3",
          200: "#F8DA7A",
          300: "#F0C54A",
          400: "#EAB538",
          500: "#E0AA29",
          600: "#D29922",
          700: "#B37C12",
          800: "#8F600E",
          900: "#734D0B",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
