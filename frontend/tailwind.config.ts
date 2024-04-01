import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sourceSerifPro: ['Source Serif Pro', 'serif'],
      },
      colors:{
        primary: {
          titleColor : '#DD8EA4',
          textColor : '#31383F',
        },
        secondary : {
          bgColor: '#F2E9EB',
          btnColor: '#FEDD89',
        }
      }
    },
  },
  plugins: [
    require('@material-tailwind/react'),
  ],
};
export default config;
