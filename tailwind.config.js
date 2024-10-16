/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode is mode that have to enable
  // isme 2 properties hoti hai media and class
  // media mtlb system ke hisab se chlti hai
  // but want it should run on basis of class
  // that have to enable mtlb hi darkMode have to enable for class
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

