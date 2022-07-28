/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/**/*.{js,jsx,ts,tsx,html}"],
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
    }
    },
  },
  plugins: [],
}
