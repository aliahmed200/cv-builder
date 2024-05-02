// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     divideWidth: {
//       DEFAULT: "1px",
//       0: "0",
//       2: "2px",
//       3: "3px",
//       4: "4px",
//       6: "6px",
//       8: "8px",
//     },
//     extend: {
//       keyframes: {
//         float: {
//           "0%,100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10)" },
//         },
//       },
//       animation: {
//         float: "float 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    divideWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        transFromLeft: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        faidIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        transFromLeft: "transFromLeft 1s ease-in-out",
        faidIn: "faidIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
