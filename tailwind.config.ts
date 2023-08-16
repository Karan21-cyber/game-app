import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "light-orange":"#FF99800",
        "dark-orange":"#E35E26",
        "black":"#161618",
        "dark-gray":"#454549",
        "light-gray":"#F4F4F4",
        "background-color":"rgba(0, 0, 0, 0.60)",
        "dark-yellow":"#FF9800",
        "loading-color":"#cbd5e1"
      },
      screens:{
        sm:"400px",
        md:"800px",
        lg:"1000px",
        xl:"1400px"
      }
    },
  },
  plugins: [],
}
export default config
