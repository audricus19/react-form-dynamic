const path = require('path');

module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|bower_components|build)/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: true,
          failOnWarning: false
        }
      },
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|bower_components|build)/,
        loader: 'babel-loader',
      },
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
    'formik': 'commonjs formik',
    'react-text-mask': 'commonjs react-text-mask',
    'yup': 'commonjs yup',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
