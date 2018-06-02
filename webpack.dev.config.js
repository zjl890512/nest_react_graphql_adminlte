const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    mode: "development",
    devtool: 'inline-source-map',
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/babel',
            path.join(__dirname, '/react/src/index.js')
        ]
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, 'react/dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './react'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);