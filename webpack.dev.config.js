const path = require('path');

module.exports = {
    mode: "development",
    /*入口*/
    entry: path.join(__dirname, '/react/src/index.js'),

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '/react/dist'),
        filename: 'bundle.js'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'react/src')
        }]
    }
};