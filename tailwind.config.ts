import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hireMe: "#3498DB",
        navText: "#0B2347",
        spanText: "#2ECC71",
        qoute: "#F39C12",
      },
      backgroundColor: {
        advertBg: "#ECF0F1",
      },
      width: {
        header: "1440px",
        "hire-btn": "150px",
        logo: "54px",
        "custom-p": "54px",
      },
      height: {
        header: "87px",
        "hire-btn": "40px",
        logo: "56px",
        "custom-p": "6px",
      },
      padding: {
        header: "12px 30px 10px 30px",
        "hire-btn": "14px 60px",
      },
      gap: {
        "10": "10px",
      },
      opacity: {
        "0": "0",
        "100": "1",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
      },
      fontSize: {
        custom: "8px",
        textCustom: "10px",
      },
      lineHeight: {
        custom: "8px",
      },
      top: {
        "16": "16px",
      },
      left: {
        "100": "80px",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
