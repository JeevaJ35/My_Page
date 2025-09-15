/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0b0f17",
        foreground: "#e6edf3",
        muted: "#93a4b3",
        card: "#111827",
        accent: "#22d3ee"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
}
