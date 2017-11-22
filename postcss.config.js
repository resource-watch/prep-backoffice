const postcssEasyImport = require('postcss-easy-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssEasyImport({ prefix: '_' }), // keep this first
    autoprefixer({})
  ]
};
