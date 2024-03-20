const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"], // Define the custom font family named "alice"
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
});
