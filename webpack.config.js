const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonConfig = require('./webpack.common.config.js');
const publicConfig = {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['react/dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash:8].css',
            allChunks: true
        })
    ]
};
module.exports = merge(commonConfig, publicConfig);