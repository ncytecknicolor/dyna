import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: { DEFAULT: '#1B4F9C', oscuro: '#123874' },
        naranja: { DEFAULT: '#F26B21', claro: '#FBA23A' },
        grafito: '#2B2F36',
        niebla: '#F4F5F7',
      },
      fontFamily: { display: ['var(--font-poppins)'], sans: ['var(--font-roboto)'] },
    },
  },
  plugins: [],
};
export default config;
