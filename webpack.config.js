const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'scripts/bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.(scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/styles/main.[hash].css"
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            hash: true,
            cache: false
        }),
        new CleanWebpackPlugin(),   
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src/")
        ],
    },
    devtool: devMode ? "cheap-module-source-map" : "nosources-source-map"
}