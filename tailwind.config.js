// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        navy: "#1f232b",           // page background
        navyDark: "#1c2128",       // panel background
        navyLight: "#20242d",      // lighter overlay
        textPrimary: "#e3eaf2",    // main text
        textSecondary: "#7a8fa6",  // muted text
        primary: "#1f90ff",        // accent links/buttons
      },
      boxShadow: {
        panel: "0 2px 6px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        lg: "0.5rem",
      },
    },
  },
  plugins: [],
};
