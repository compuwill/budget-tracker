const path = require('path');
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new WebpackPwaManifest({
            name: "Budget Tracker",
            short_name: "Budget",
            description: "An app that allows you to track your budget.",
            start_url: "../index.html",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("icons/icon-512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("icons")
            }]
          })
      ],
    mode: 'development'
};