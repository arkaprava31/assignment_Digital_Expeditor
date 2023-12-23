/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '396px',
    },
    extend: {
      colors: {
        white: "#fff",
        "violet": "#8b5cf6",
        "slate-500": "#64748b",
        "darkslategray": "#263238",
        dark: "#090314",
        "mediumslateblue": "#8B5CF6",
        "orange": "#FB923C",
        "trans-grey": "#FFFFFF38"
      },
      spacing: {},
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
});
