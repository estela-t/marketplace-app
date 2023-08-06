/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primaryAccent: '#605DEC',
      primaryHover: '#344293',
      primaryText: '#1A1A1A',
      grey: '#595959',
      greyDark: '#191919',
      greyLight: '#F9F9FB',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem', // 12px (product desc)
        sm: '0.875rem', // 14px (buttons)
        base: '1rem', // 16px (body + h3)
        lg: '1.25rem', // 20px (h2)
        xl: '1.75rem', // 28px (h1 mobile)
        '2xl': '2rem', // 32px (h1 desktop)
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addBase, theme }) {
      addUtilities({
        '.wrapper': {
          width: '90%',
          maxWidth: '1400px',
          margin: '0 auto',
        },
        '.transitionMain': {
          transition: 'all 0.2s cubic-bezier(0.6,0.04,0.3,1)',
        },
      }),
        addBase({
          h1: {
            color: theme('colors.primaryAccent'),
            fontFamily: theme('fontFamily.nunito'),
            fontSize: theme('fontSize.xl'),
            fontWeight: '700',
            '@media (min-width: 768px)': {
              fontSize: theme('fontSize.2xl'),
            },
          },
          h2: {
            color: theme('colors.greyDark'),
            fontFamily: theme('fontFamily.inter'),
            fontSize: theme('fontSize.base'),
            fontWeight: '700',
          },
        })
    }),
  ],
}

// nunito 600
// nunito 700
// inter 400
// inter 500
// inter 700
