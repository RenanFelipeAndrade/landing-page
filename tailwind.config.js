/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xxsm: "384px",
        xsm: "512px",
      },
      backgroundImage: {
        "img-section-1": "url(/img-section-1.png)",
        "img-section-2": "url(/img-section-2.png)",
      },
      boxShadow: {
        "navbar-shadow": "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        primary: "#E6533C",
        dark: "#171717",
        "dark-gray": "#232532",
        "light-gray": "#323443",
        blue: "#0070C9",
        purple: "#7A29DC",
        "text-gray": "#A3A29F",
        "pale-black": "#303030",
      },
    },
  },
  plugins: [],
};
