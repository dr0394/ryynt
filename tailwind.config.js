/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0E1A',
          surface: '#0F1419',
          card: '#13171F',
        },
        accent: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
      },
      borderRadius: {
        card: '14px',
        btn: '10px',
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        'card': '0 18px 60px rgba(0,0,0,.35)',
        'card-soft': '0 10px 30px rgba(0,0,0,.22)',
        'accent': '0 16px 50px rgba(34,197,94,.20)',
      },
    },
  },
  plugins: [],
};
