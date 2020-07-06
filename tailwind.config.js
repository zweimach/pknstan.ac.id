module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Noto Sans", "Noto Color Emoji", "sans-serif"],
        serif: ["Arial", "Liberation Sans", "sans-serif"],
      },
      colors: {
        "primus-blue": "#191970",
        "secundus-yellow": "#ffc92b",
      },
    },
  },
  variants: {},
  plugins: [],
};
