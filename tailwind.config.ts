import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 20%)",
        "Dark-grey": "hsl(0, 0%, 12%)",
        "Off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
export default config;
