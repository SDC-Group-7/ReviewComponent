const path = require('path');

const ROOT_DIR = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: {
    main: [
      path.resolve(ROOT_DIR, 'client/src', 'index.js')
    ]
  },
  output: {
    path: path.join(ROOT_DIR, '/public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
};
