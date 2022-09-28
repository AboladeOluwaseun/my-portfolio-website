const plugin = require("tailwindcss/plugin");
module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0",
          },
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "form-background": "linear-gradient(180deg, #19191b 0%, #2d3036 100%)",
        "form-background-inverse":
          "linear-gradient(180deg, #2d3036 0%, #19191b 100%)",
      },
      screens: {
        xxsm: "360px",
        xsm: "446px",
        sm: "640px",
        md: "768px",
        lmd: "924px",
        lg: "1024px",
        xl: "	1280px",
        xxl: "1536px",
      },
      colors: {
        yellow: "#f9af20",
        dark: {
          100: "#202022",
          200: "#2d2e32",
          300: "#25262a",
          400: "#0c0c0c8c",
        },
        green: {
          100: "#64f4ac",
          200: "#64f4acea",
          300: "rgb(100, 244, 172, .7)",
          400: "#05ff82",
          500: "#15eb80",
          600: "rgb(3, 252, 128, .4)",
        },
        red: {
          100: "#rgb(255, 0, 0, .4)",
          200: "#ff0000",
        },
        white: {
          100: "#fff",
          200: "#ccc",
          300: "#777",
        },
        blue: {
          200: "#4898f0",
          400: "#503cef",
          600: "#513cef",
          800: "#140e32",
        },
      },
    },
  },
};
