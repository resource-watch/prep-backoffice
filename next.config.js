module.exports = {
  webpack: (config, { dev }) => {
    const newConfig = Object.assign({}, config);

    newConfig.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    );

    newConfig.resolve.alias = {
      app: './app',
      utils: './app/utils',
      components: './app/components'
    };

    return newConfig;
  }
};
