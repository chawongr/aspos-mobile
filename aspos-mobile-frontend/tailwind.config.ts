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
        lightBg:"#F1F5F5",
        borderGray:"#C6C6C6",
        orange:"#F6A047"
      },
      width: {
        'full-p-5': 'calc(100vw - 2.5rem)', // For p-5 (2.5rem = 5 * 16px)
        'full-p-10': 'calc(100vw - 5rem)',  // For p-10 (5rem = 10 * 16px)
      },
    },
  },
  plugins: [],
} satisfies Config;
