module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "4/5": "80vh",
      },
      cursor: {
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
