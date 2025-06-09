// tailwind.config.js
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
        // match the extracted palette
        pageBg: "#0e1a2b",
        panelBg: "#14243d",
        textPrimary: "#e3eaf2",
        textSecondary: "#7a8fa6",
        accent: "#4f8ef7",
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
