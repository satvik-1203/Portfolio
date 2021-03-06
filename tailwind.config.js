const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    sans: ["Poppins"],
    screens: {
      xs: "448px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        cMono: "'DM Mono', 'monospace'",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        blackBg: "#181818",
        card: "#0f0f0f",
      },
      textColor: {
        primary: "#B6B6B6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
