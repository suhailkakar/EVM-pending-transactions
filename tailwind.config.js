module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/utils/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#F2ECFC",
          200: "#e0d2f9",
          300: "#d1bcf5",
          400: "#c2a6f2",
          500: "#b28fef",
          600: "#a379ec",
          700: "#9463e9",
          800: "#8247E5",
          900: "#7536e2",
        },
        yellow: {
          100: "#fef9e6",
          200: "#fdf2ce",
          300: "#fcecb5",
          400: "#fbe59d",
          500: "#fad86b",
          600: "#f9d253",
          700: "#f8cc3a",
          800: "#f6bf09",
          900: "#F0B909",
        },
        gray: {
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#999999",
          600: "#7f7f7f",
          700: "#666666",
          800: "#4d4d4d",
          900: "#333333",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
