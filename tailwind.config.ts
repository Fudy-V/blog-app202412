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
        primary: "#212121", // 黒（テキストなど）
        subText: "#37474F", // グレーよりの青（テキストなど）
        secondary: "#EFEFEF", // くすんだ白（背景に使用）
        accent: "#ffe184", // くすんだ黄色（ボタンやリンクの強調部分に使用）
        muted: "#e3f2fd", // くすんだ水色
      },
    },
  },
  plugins: [],
} satisfies Config;
