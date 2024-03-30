// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"], // Define the custom font family named "Outfit"
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
