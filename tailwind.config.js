/** @type {import('tailwindcss').Config} */
export default {
  // purge: [
  //   ".html",
  // ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'cyber-easth': {
        'palatinate_Purple': '#63345e',
        'deap_Lilac': '#ac61b9',
        'light_steel_blue': '#b7c1de',
        'dark_cerulian': '#0B468C',
        'midnight_express': '#092047',
      }

    },
    extend: {},
  },
  plugins: [],
}

