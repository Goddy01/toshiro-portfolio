/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#777778",
        "light-grey": "#bebebe",
        "dark-bg": "#151515",
        "box-bg": "#1b1b1d",
        cfcfcf: "#cfcfcf",
        e2e2e2: "#e2e2e2",
      },
      animation: {
        flash: "flash 5s ease-in-out 0s 1",
        flashTwo: "flashTwo 5s ease-in-out 0s 1",
        slide: "slide 0.3s linear",
      },
      keyframes: {
        flash: {
          "0%": {
            color: "#777778",
          },
          "20%": {
            color: "#cecece",
          },
          "30%": {
            color: "#fff",
          },
          "40%": {
            color: "#b4b4b4",
          },
          "45%": {
            color: "#777778",
          },
          "100%": {
            color: "#fff",
          },
        },
        flashTwo: {
          "0%": {
            color: " #cecece",
          },

          "20%": {
            color: " #fff",
          },
          "30%": {
            color: " #777778",
          },
          "40%": {
            color: " #cecece",
          },
          "45%": {
            color: " #777778",
          },
          "100%": {
            color: "#fff",
          },
        },
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
