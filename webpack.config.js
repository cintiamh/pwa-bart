const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const {
    NODE_ENV = 'production'
} = process.env;

module.exports = {
    mode: NODE_ENV,
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs')
    },
	output: {
		filename: 'main.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new InjectManifest({
            swSrc: path.join(process.cwd(), '/src/sw.js'),
            swDest: 'service-worker.js',
            maximumFileSizeToCacheInBytes: 4000000,
            additionalManifestEntries: [
                { url: 'index.html', revision: '2' }
            ],
            mode: NODE_ENV,
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
	module: {
		rules: [
			{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'url-loader',
                }
            },
		]
	}
};