/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          input: "var(--bg-input)",
        },
        accent: {
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          active: "var(--accent-active)",
          rare: "var(--accent-rare)",
          secondary: "var(--accent-secondary)",
        },
        text: {
          heading: "var(--text-heading)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
        },
        border: {
          default: "var(--border-default)",
          light: "var(--border-light)",
          card: "var(--border-card)",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
