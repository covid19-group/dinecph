module.exports = {
  theme: {
    colors: {
      // https://www.happyhues.co/palettes/17
      sand: '#f3d2c1',
      'sand-light': '#fef6e4',
      pink: '#f582ae',
      navy: '#001858',
      'navy-light': '#172c66',
      teal: '#8bd3dd',
      white: '#fff',
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 2px #f582ae',
      },
      spacing: {
        '96': '24rem',
        // '128': '32rem',
      },
    },
    customForms: theme => ({
      default: {
        'checkbox, input, multiselect, radio, select, textarea': {
          '&:focus': {
            borderColor: theme('colors.blue.500'),
            boxShadow: theme('boxShadow.outline'),
          },
        },
        'checkbox, radio': {
          '&:checked': {
            backgroundColor: theme('colors.blue.500'),
          },
        },
        'input, multiselect, select, textarea': {
          width: theme('width.full'),
        },
      },
    }),
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
