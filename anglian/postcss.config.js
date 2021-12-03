module.exports = {
  plugins: {
    'autoprefixer': { browsers: ['last 2 versions'] },
    'postcss-sorting': {
      'order': [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules'
      ],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom'
    },
  },
};