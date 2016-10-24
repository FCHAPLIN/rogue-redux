module.exports = [
	{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'react'],
		  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
		}
	},
	{ test: /\.woff(2)?(\?[a-z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
	{ test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/, loader: "file-loader" },
	{
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
];
