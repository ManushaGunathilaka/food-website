/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8418",
        red: "#FF3636",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },
      // fontFamily: {
      //   primary: ["Inter", "sans-serif"],
      // },
    },
  },
  daisyui: {
    darkTheme: "light",
  },

  plugins: [require("daisyui")],
};
