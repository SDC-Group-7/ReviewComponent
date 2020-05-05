const path = require('path');

const ROOT_DIR = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: path.resolve(ROOT_DIR, 'client', 'src/'),
  output: {
    path: path.join(ROOT_DIR, '/public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve(ROOT_DIR, 'client/src/'),
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
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
