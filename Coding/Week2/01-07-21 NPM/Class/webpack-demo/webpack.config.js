const path = require('path');

module.exports = {
//  entry: './src/index.js',
 mode: 'development',
 entry: {
   index: './src/index.js',
   electronics: './src/electronics.js',
 },
  output: {
//    filename: 'main.js',
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};