module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      textColor: {
        'black': '#222222',
        'dark-blue': '#333A42',
        'white': '#FFFFFF',
        'gold': '#D5A660',
      },
      backgroundColor: {
        'black': '#222222',
        'light-blue': '#ADBBC2',
        'white': '#FFFFFF',
        'gold': '#D5A660',
      },
      fontSize: {
        'base': '18px',
        'index-header': '65px',
        'index-content': '20px',
        'section-header-sm': '35px',
        'section-header-lg': '40px',
        'section-subheader': '20px',
        'container-header': '20px',
        'card-header': '30px',
        'card-subheader': '16px',
        'button': '18px',
        'footer': '16px',
        'copyright': '14px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}