/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c4: "#faf6f4",
        dimgray: "#5d5d5d",
        c3: "#f47d31",
        white: "#fff",
        gray: "#fbfbfb",
      },
      spacing: {},
      fontFamily: {
        h4: "Raleway",
      },
      screens:{
        'sm': '300px',
        'md': '640px',
        'lg': '1078px',
      }
    },
    fontSize: {
      "sm-2": "13.2px",
      "5xl": "24px",
      "mid-6": "17.6px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
