module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    ]
  }
};
