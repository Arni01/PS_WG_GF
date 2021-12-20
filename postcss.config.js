module.exports = {
  // plugins: {
  //   'postcss-preset-env': {
  //     browsers: ['last 2 version', '> 1%', 'not dead', 'not op_mini all'],
  //   },
  // },
  plugins: [require('autoprefixer'), require('postcss-nested')],
}
