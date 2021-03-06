var path = require('path');
var webpack = require('webpack');

configuration = {
    entry: {
        dashboard: './saleor/static/js_src/dashboard.jsx',
        storefront: './saleor/static/js_src/storefront.jsx',
    },
    output: {
        filename: './saleor/static/js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.json$/, loader: 'json'},
            //{test: require.resolve("jquery"), loader: "expose?jQueryDebug"}
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            '_': 'underscore',
            Backbone: 'backbone',
            'window.Backbone': 'backbone'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = configuration
