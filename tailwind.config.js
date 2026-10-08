/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4FAF6',
          100: '#E1F2E7',
          200: '#C2E5D0',
          300: '#94D2AD',
          400: '#5FB683',
          500: '#34965D',
          600: '#257B4A',
          700: '#1C623A',
          800: '#144C2D',
          900: '#0E3921',
          950: '#072413',
        },
        emerald: {
          50: '#F4FAF6',
          100: '#E1F2E7',
          200: '#C2E5D0',
          300: '#94D2AD',
          400: '#5FB683',
          500: '#34965D',
          600: '#257B4A',
          700: '#1C623A',
          800: '#144C2D',
          900: '#0E3921',
          950: '#072413',
        },
        gold: {
          50: '#FDFBF5',
          100: '#F9F2DE',
          200: '#F1E4BB',
          300: '#E6CF8E',
          400: '#DBB960',
          500: '#D4AF37', // Pure luxury metallic gold
          600: '#B89228',
          700: '#94721C',
          800: '#755818',
          900: '#5C4415',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8DFC9',
          300: '#DACBA7',
        },
        slate: {
          subtle: '#F4FAF6',
          border: '#E1F2E7',
          muted: '#526D5C',
          heading: '#0F2718',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(14, 57, 33, 0.12)',
        'glass': '0 8px 32px 0 rgba(14, 57, 33, 0.08)',
        'card': '0 4px 20px -2px rgba(15, 39, 24, 0.05), 0 2px 6px -1px rgba(15, 39, 24, 0.03)',
        'hover': '0 20px 45px -12px rgba(14, 57, 33, 0.22)',
        'gold': '0 10px 25px -5px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
