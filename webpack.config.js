const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title:'Restaurant-Nicco',
        },
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ],
    },
};