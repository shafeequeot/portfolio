/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          dark: {
            50: '#a4b8e0',
            100: '#8096c2',
            200: '#7489b3',
            300: '#5670a3',
            400: '#516896',
            500: '#485c85',
            600: '#3f5175',
            700: '#364563',
            800: '#2d3a54',
            900: '#28344a',
          },
        },
        'animation': {
          'text':'text 5s ease infinite',
          moveup: 'moveup 40s linear infinite ',
          moveup2: 'moveup 90s linear infinite',
          moveup3: 'moveup 60s linear infinite'
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                 'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                 'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
  
      
          moveup: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(-100%)' },
          },
         
      }
      },
      
    },
    plugins: [
     
    ],
  }