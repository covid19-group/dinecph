module.exports = {
  theme: {
    extend: {},
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
