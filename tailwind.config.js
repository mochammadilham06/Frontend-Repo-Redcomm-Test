/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primary: {
          DEFAULT: "#4361ee",
          light: "#eaf1ff",
          "dark-light": "rgb(46, 55, 72)",
        },
        secondary: {
          default: "#EEF2FB",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        "3xl":
          "0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)",
        "shadow-cs1": "0px 4px 45px rgba(0, 0, 0, 0.05);",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-invert-headings": theme("colors.white.dark"),
            "--tw-prose-invert-links": theme("colors.white.dark"),
            h1: { fontSize: "40px", marginBottom: "0.5rem", marginTop: 0 },
            h2: { fontSize: "32px", marginBottom: "0.5rem", marginTop: 0 },
            h3: { fontSize: "28px", marginBottom: "0.5rem", marginTop: 0 },
            h4: { fontSize: "24px", marginBottom: "0.5rem", marginTop: 0 },
            h5: { fontSize: "20px", marginBottom: "0.5rem", marginTop: 0 },
            h6: { fontSize: "16px", marginBottom: "0.5rem", marginTop: 0 },
            p: { marginBottom: "0.5rem" },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),
    },
  },
};
