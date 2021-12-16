const lightGray = ['#CED9E0', '#D8E1E8', '#E1E8ED', '#EBF1F5', '#F5F8FA'];
const gray = ['#5C7080', '#738694', '#8A9BA8', '#A7B6C2', '#BFCCD6'];
const darkGray = ['#182026', '#202B33', '#293742', '#30404D', '#394B59'];
const blue = ['#0E5A8A', '#106BA3', '#137CBD', '#2B95D6', '#48AFF0'];
const green = ['#0A6640', '#0D8050', '#0F9960', '#15B371', '#3DCC91'];
const orange = ['#A66321', '#BF7326', '#D9822B', '#F29D49', '#FFB366'];
const red = ['#A82A2A', '#C23030', '#DB3737', '#F55656', '#FF7373'];

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#10161A',
        'bp-lightGray': {
          1: lightGray[0],
          2: lightGray[1],
          3: lightGray[2],
          4: lightGray[3],
          5: lightGray[4],
        },
        'bp-gray': {
          1: gray[0],
          2: gray[1],
          3: gray[2],
          4: gray[3],
          5: gray[4],
        },
        'bp-darkGray': {
          1: darkGray[0],
          2: darkGray[1],
          3: darkGray[2],
          4: darkGray[3],
          5: darkGray[4],
        },
        'bp-blue': {
          1: blue[0],
          2: blue[1],
          3: blue[2],
          4: blue[3],
          5: blue[4],
        },
        'bp-green': {
          1: green[0],
          2: green[1],
          3: green[2],
          4: green[3],
          5: green[4],
        },
        'bp-orange': {
          1: orange[0],
          2: orange[1],
          3: orange[2],
          4: orange[3],
          5: orange[4],
        },
        'bp-red': {
          1: red[0],
          2: red[1],
          3: red[2],
          4: red[3],
          5: red[4],
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
