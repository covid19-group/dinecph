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
    fontFamily: {
      inter:
        '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'inter-var':
        '"Inter var", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      optician:
        '"Optician Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 2px #f582ae',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
    customForms: theme => ({
      default: {
        'checkbox, input, multiselect, radio, select, textarea': {
          backgroundColor: theme('color.sand-light'),
          borderColor: theme('colors.navy'),
          borderRadius: theme('borderRadius.none'),
          borderWidth: theme('borderWidth.2'),
          '&:focus': {
            borderColor: theme('colors.navy'),
            boxShadow: theme('boxShadow.outline'),
          },
        },
        'checkbox, radio': {
          '&:checked': {
            backgroundColor: theme('colors.navy'),
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
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
