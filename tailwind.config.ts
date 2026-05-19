import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#061229",
          900: "#0b1730",
          800: "#13223c",
          700: "#263956",
          500: "#60708a"
        },
        signal: {
          600: "#0c70ff",
          500: "#1878ff",
          400: "#4d9bff"
        },
        line: "#d9e1ec",
        panel: "#f8fafc"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(6, 18, 41, 0.08)",
        diagram: "0 18px 45px rgba(6, 18, 41, 0.1)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
