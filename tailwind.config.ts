import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        king: {
          black: '#0B0B0C',
          gold: '#D4AF37',
          ivory: '#F8F7F4',
          navy: '#0E1A3A',
        },
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.1)' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
