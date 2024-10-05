import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs':'400px',
        'xs': '480px', 
        'sm': '640px', 
        'md': '900px', 
        'mmd': '1000px',
        'lg': '1200px', 
        'xl': '1440px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur:{
        'glass':'20px'
      },
      boxShadow:{
        'card': 'inset 0px 0px 60px 2px black',
        'car': '0px 0px 59px 13px #6d070775',
        'cardPic': 'inset 0px 0px 10px 2px white',
        'foot': '0px -4px 59px 13px #6d070775',
      },
      dropShadow:{
        'txt':'0px 0px 2px red',
        'txt2':'0px 0px 1px red',
        'logo':'0px 0px 2px black',
      }
    },
  },
  plugins: [],
};
export default config;
