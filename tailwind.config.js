/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        btn: {
          "background-hover": "hsl(var(--btn-background-hover))",
          "login-background": "var(--btn-login-background)",
          "login-form-background": "var(--login-form-background)",
          "nav-clicked": "var(--btn-nav-clicked)",
        },
        layout: { "login-background": "var(--layout-background)" },
        background: {
          "login-form": "var(--login-form-background)",
          "main-containers": "var(--main-containers-background)",
          "main-layout": "var(--main-layout-background)",
        },
        text: {
          "field-background": "#eeeeee",
        },
      },
    },
  },
  plugins: [],
};
