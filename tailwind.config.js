/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/blocks/**/*.scss",
    "./src/styles/global/*.scss",
    "./src/styles/plugins/plugins-rewrite.scss",
    "./src/styles/*.scss",
    "./src/blocks/**/*.js",
    "./src/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['\'Space Grotesk\'', 'sans-serif'],
      'golos': ['\'Golos Text\'', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '19px': ['19px', 'normal'],
      },
      minWidth: {
        '24px': '24px',
      },
      width: {
        '154px': '154px',
      },
      minHeight: {
        '24px': '24px',
      },
      height: {
        '170px': '170px',
      },
      opacity: {
        '56': '.56',
      },
      spacing: {
        '90px': '90px',
      },
      colors: {
        primary: '#003261',
        blue: {
          DEFAULT: '#4D84E1',
          300: '#39AACF',
        },
        secondary: '#01AB8A',
        line: '#BFE5F1',
        callout_background: '#F2FCFF',
        white: '#fff',
        green: {
          DEFAULT: '#1ECA59',
          300: '#30B6A6',
        },
        gray400: '#797E8B',
        gray500: '#394755',
        gray700: '#26313F',
        gray800: '#252A37',
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'smMax': {'max': '575.98px'},
      // => @media (max-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdMax': {'max': '767.98px'},
      // => @media (max-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'lgMax': {'max': '991.98px'},
      // => @media (max-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xlMax': {'max': '1023.98px'},
      // => @media (max-width: 1024px) { ... }

      '2xl': '1170px',
      // => @media (min-width: 1280px) { ... }
      '2xlMax': {'max': '1169.98px'},
      // => @media (max-width: 1280px) { ... }

      '3xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xlMax': {'max': '1279.98px'},
      // => @media (max-width: 1280px) { ... }

      '4xl': '1440px',
      '4xlMax': {'max': '1439.98px'},
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '100%', md: '100%', lg: '100%', xl: '1181px', '2xl': '1181px', '3xl': '1181px', '4xl': '1181px' },
      gridGutterWidth: '24px',
      gridColumns: 9
    }),
  ],
  safelist: [
    'mb-3',
  ]
  /*safelist: [
    {
      pattern: /.*!/
    }
  ]*/
}
