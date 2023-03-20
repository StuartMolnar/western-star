module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      textColor: {
        'black': '#222222',
        'dark-blue': '#333A42',
        'light-blue': '#ADBBC2',
        'white': '#FFFFFF',
        'gold': '#D5A660',
      },
      backgroundColor: {
        'black': '#222222',
        'light-blue': '#ADBBC2',
        'dark-blue': '#333A42',
        'white': '#FFFFFF',
        'gold': '#D5A660',
      },
      fontSize: {
        'base': '18px',
        'page-header': '65px',
        'content-20': '20px',
        'section-header-md': '35px',
        'section-header-lg': '40px',
        'section-subheader': '20px',
        'container-header': '20px',
        'card-header': '30px',
        'card-subheader': '16px',
        'button': '18px',
        'footer': '16px',
        'copyright': '14px',
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(255, 255, 255, 0.1)',
        
        'gold': '0 4px 6px rgba(213, 166, 96, 0.1), 0 1px 3px rgba(213, 166, 96, 0.2)',
      }, 
      animation: {
        bounce: 'bounce 5s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(45)' },
          '50%': { transform: 'translateY(-45px)' },
          // '0%, 20%, 50%, 80%, 100%': {
          //   transform: 'translateY(0)',
          // },
          // '40%': {
          //   transform: 'translateY(-30px)',
          // },
          // '60%': {
          //   transform: 'translateY(-15px)',
          // },
        },
      },
      
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}