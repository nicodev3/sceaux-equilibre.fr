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
        juniper: {
          '50': '#f5f8f7',
          '100': '#dee9e9',
          '200': '#bcd3d1',
          '300': '#93b5b5',
          '400': '#638889',
          '500': '#52787a',
          '600': '#405f61',
          '700': '#364d4f',
          '800': '#2e3f41',
          '900': '#293738',
          '950': '#141d1f',
        },
        norway: {
          '50': '#f6f8f5',
          '100': '#e9f0e8',
          '200': '#d3e1d1',
          '300': '#9dbc98',
          '400': '#86a880',
          '500': '#638a5d',
          '600': '#4f7049',
          '700': '#40593c',
          '800': '#364833',
          '900': '#2d3c2b',
          '950': '#151f14',
        },
        raffia: {
          '50': '#fbf8f1',
          '100': '#f6efde',
          '200': '#ebd9b4',
          '300': '#e1c490',
          '400': '#d4a563',
          '500': '#cb8d44',
          '600': '#bd7839',
          '700': '#9d5f31',
          '800': '#7e4d2e',
          '900': '#664028',
          '950': '#372013',
        },
        sazerac: {
          '50': '#fcf8f0',
          '100': '#f9efdb',
          '200': '#f2dcb6',
          '300': '#e9c388',
          '400': '#e0a257',
          '500': '#d98936',
          '600': '#ca712c',
          '700': '#a85826',
          '800': '#874725',
          '900': '#6d3b21',
          '950': '#3a1d10',
        },
      },
    },
  },
  plugins: [],
}
export default config
