import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray: "#3d3d3d",
        green:"#1B5D35",
        lightGray:"#787878",
        lightBg:"#F1F5F5"
      },
    },
  },
  plugins: [],
} satisfies Config;
