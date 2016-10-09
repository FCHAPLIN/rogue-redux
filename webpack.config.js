const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

var config = {
    entry: './src/main.js',
    output: {
        path: "./bin",
        publicPath: "/assets/",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./bin",
        inline: true,
        historyApiFallback: true,
        hot: true,
        port: 8080
    },

    module: {
        loaders: [
            { test: /\.woff(2)?(\?[a-z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/, loader: "file-loader" }, {
                test: /\.css$/,
                loader: "style-loader!css-loader!resolve-url-loader!postcss-loader"
            },

            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
            },
            { test: /\.png$/, loader: "url-loader?limit=1000000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.png'],
        root: [
            path.resolve('./src')
        ]
    }
}

  module.exports = config;
