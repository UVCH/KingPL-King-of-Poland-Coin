import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        nearblack: '#0B0F14',
        royal: {
          gold: '#D4AF37',
          goldBright: '#FFD700',
          goldDeep: '#B8860B',
          blue: '#0B1E6D',
          crimson: '#B10F2E',
          purple: '#5B2DAE',
        },
        cloud: '#E5E7EB',
        graphite: '#1F2937',
      },
      borderRadius: { royal: '20px' },
      boxShadow: { goldsoft: '0 8px 24px rgba(212,175,55,0.15)' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
