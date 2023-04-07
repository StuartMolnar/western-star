module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'dsk': '1200px',
      },
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
      borderColor: {
        'light-blue': '#ADBBC2',
        'dark-blue': '#333A42',
        'black': '#222222',
      },
      backgroundColor: {
        'black': '#222222',
        'light-blue': '#ADBBC2',
        'dark-blue': '#333A42',
        'white': '#FFFFFF',
        'gold': '#D5A660',
      },
      fontSize: {
        'base': '14px',
        'page-header': '30px',
        'content-20': '16px',
        'section-header-md': '24px',
        'section-header-lg': '24px',
        'section-subheader': '18px',
        'container-header': '18px',
        'card-header': '18px',
        'card-subheader': '14px',
        'button': '16px',
        'footer': '14px',
        'copyright': '12px',

        'dsk': {
          'base': '18px',
          'page-header': '65px',
          'content-20': '20px',
          'section-header-md': '35px',
          'section-header-lg': '40px',
          'section-subheader': '20px',
          'container-header': '20px',
          'card-header': '30px',
          'card-subheader': '18px',
          'button': '18px',
          'footer': '16px',
          'copyright': '14px',
        }
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(255, 255, 255, 0.1)',
        
        'gold': '0 4px 6px rgba(213, 166, 96, 0.1), 0 1px 3px rgba(213, 166, 96, 0.2)',
      }, 
      animation: {
        'bounce': 'bounce 5s ease-in-out infinite',
        'rotation': 'rotation 60s linear infinite',
        'slide-up': 'slide-up 0.5s ease forwards',
        'slide-down': 'slide-down 0.5s ease forwards',
        'accordion-open': 'accordionOpen 300ms ease-out forwards',
        'accordion-close': 'accordionClose 300ms ease-in forwards',
      },
      keyframes: {
        'rotation': {
          '0%, 100%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(150%)'},
          '100%': { transform: 'translateY(0)'},
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(150%)'},
        },
        accordionOpen: {
          '0%': { height: '0', opacity: 0 },
          '100%': { height: 'auto', opacity: 1 },
        },
        accordionClose: {
          '0%': { height: 'auto', opacity: 1 },
          '100%': { height: '0', opacity: 0 },
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