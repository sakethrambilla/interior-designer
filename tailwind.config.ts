import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        footer: "url(/Images/footer.svg)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sansation: ["Sansation", "Poppins"],
      },
      colors: {
        cblack: "#1C1C1C",
        corange: "#FF792E",
        cyellow: "#FFD12F",
        cwhite: "#EDEDED",
      },
      cursor: {
        bcursor: "url(/Images/cursor.svg), default",
        ocursor: "url(/Images/cursor2.svg), default",
      },
    },
  },
  plugins: [],
};
export default config;
