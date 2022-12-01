const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      new HtmlWebpackPlugin({
        template:'/index.html',
        title:'JATE'
      }),

      new InjectManifest({
        swSrc:'/src-sw.js',
        swDest:'src-sw.js'
      }),

      new WebpackPwaManifest({
        fingerprints:false,
        inject:true,
        name:'Just Another Text Editor',
        short_name:'JATE',
        description:'Progressive Web Applications (PWA) Challenge: Text Editor',
        background_color:'#36B1E4',
        theme_color:'36B1E4',
        start_url:'/',
        publicPath:'/',
        icons:[{
          src:path.resolve('/src/images/logo.png'),
          sizes:[72,96,128,144,152,192,384,512],
          destination:path.join('assets','icons')
        }]
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
