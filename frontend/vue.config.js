const webpack = require('webpack')


module.exports = {
    lintOnSave: false,
    devServer: {
        disableHostCheck: true
    },
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          mapboxgl: 'mapbox-gl',
        }),
      ],
    },
};
