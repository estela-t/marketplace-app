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
      error: '#CC0000',
      success: '#C1FFC1',
      warning: '#FFDAB9',
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem', // 12px (product desc)
        sm: '0.875rem', // 14px (buttons)
        base: '1rem', // 16px (body + h2)
        lg: '1.25rem', // 20px (h2 in dialog)
        xl: '1.75rem', // 28px (h1 mobile)
        '2xl': '2.5rem', // 340px (h1 desktop)
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
        '.transition-main': {
          transition: 'all 0.2s cubic-bezier(0.6,0.04,0.3,1)',
        },
        '.shadow-main': {
          boxShadow: '0px 10px 14px -4px #0000001F, 0px 16px 40px 0px #00000014, 0px 18px 56px 20px #0000000D',
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
            fontFamily: theme('fontFamily.nunito'),
            fontSize: theme('fontSize.base'),
            fontWeight: '700',
            lineHeight: '20px',
          },
        })
    }),
  ],
}
