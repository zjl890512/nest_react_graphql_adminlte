const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            pages: path.join(__dirname, 'react/src/pages'),
            component: path.join(__dirname, 'react/src/component'),
            router: path.join(__dirname, 'react/src/router'),
            actions: path.join(__dirname, 'react/src/redux/actions'),
            reducers: path.join(__dirname, 'react/src/redux/reducers')
            // redux: path.join(__dirname, 'react/src/redux')
        }
    },
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/babel',
            path.join(__dirname, '/react/src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '/react/dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'react/src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
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
        })
    ],
    optimization:{
        splitChunks:{
            name: 'vendor'
        }
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './react'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};