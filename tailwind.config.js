/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        // Homepage theme tokens; the page defines --fl-* as RGB channels so opacity modifiers work.
        fl: Object.fromEntries(
          ['bg', 'panel', 'line', 'ink', 'mute', 'accent', 'accent2', 'bad', 'good', 'warn'].map((t) => [
            t,
            `rgb(var(--fl-${t}) / <alpha-value>)`,
          ]),
        ),
      },
      animation: {
        blob: "blob 25s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(60px, -100px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-60px, 60px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
} 