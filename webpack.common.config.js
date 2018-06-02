const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'react/src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, 'react/dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'react/src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            loader: 'url-loader?limit=1000000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'react/src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        splitChunks: {
            name: 'vendor'
        },
        runtimeChunk: {
            "name": "runtime"
        }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'react/src/pages'),
            components: path.join(__dirname, 'react/src/components'),
            router: path.join(__dirname, 'react/src/router'),
            actions: path.join(__dirname, 'react/src/redux/actions'),
            reducers: path.join(__dirname, 'react/src/redux/reducers')
        }
    }
};

module.exports = commonConfig;