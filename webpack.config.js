"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

// global css
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});

module.exports = {
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

    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [
            path.resolve('./src')
        ]
    },

    module: {
    	loaders
    },

    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

		plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
				new HtmlWebpackPlugin({
						template: './src/template.html'
				}),
		]
};
