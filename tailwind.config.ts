import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        green: '#68855C',
        'green-dark': '#46643A',
        'green-light': '#8BA67E',
        lavande: '#E6E6FA',
        'lavande-dark': '#B2B2D8',
        'lavande-light': '#F0F0FF',
        cta: '#EA0B0B',
        'cta-light': '#F83A3A',
        'cta-dark': '#C41212',
      },
    },
  },
  plugins: [],
}
export default config
