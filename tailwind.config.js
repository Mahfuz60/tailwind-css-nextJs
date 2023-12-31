/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '*'
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    // responsive customization
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
      

    },
    // colors:{
    //   'customGreen':'#16a085'
    // }
  },
  plugins: [require("daisyui")],
}
