const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: './main.js',
    },
    devServer: {
        static: './dist'
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['vue-style-loader','css-loader'] },
            { test: /\.html$/i, loader: "html-loader" },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts','.vue', '.js', '.json', '.html'],
        alias: {
            '@template': path.join(__dirname, 'template'),
        },
    }
    // watch: true
}