require('dotenv').load();

const webpack = require('webpack');

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

    newConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env.facebookUser': JSON.stringify(process.env.FACEBOOK_USER),
        'process.env.twitterUser': JSON.stringify(process.env.TWITTER_USER),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.APPLICATIONS': JSON.stringify(process.env.APPLICATIONS),
        'process.env.API_URL': JSON.stringify(process.env.API_URL),
        'process.env.BASEMAP_TILE_URL': JSON.stringify(process.env.BASEMAP_TILE_URL),
        'process.env.CALLBACK_URL': JSON.stringify(process.env.CALLBACK_URL),
        'process.env.CONTROL_TOWER_URL': JSON.stringify(process.env.CONTROL_TOWER_URL),
        'process.env.WRI_API_URL': JSON.stringify(process.env.WRI_API_URL),
        'process.env.STATIC_SERVER_URL': JSON.stringify(process.env.STATIC_SERVER_URL),
        'process.env.ADD_SEARCH_KEY': JSON.stringify(process.env.ADD_SEARCH_KEY),
        'process.env.TRANSIFEX_LIVE_API': JSON.stringify(process.env.TRANSIFEX_LIVE_API)
      })
    );

    return newConfig;
  }
};
