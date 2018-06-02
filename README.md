# nest_react_graphql_adminlte
# 常见问题
> command not found: webpack
```
全局安装 webpack webpack-cli
```

> 安装babel及相关
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
```
> 加入less
````
npm install less less-loader --save-dev
````
> 字体load

````
npm install font-awesome-webpack file-loader --save
````

#TODO

> 尝试webpack热替换方案

> new webpack.optimize.CommonsChunkPlugin 已经不能使用

```
替换方案是
    optimization:{
        splitChunks:{
            name: 'vendor'
        }
    },
```

 
> css单独打包
```
npm install --save-dev extract-text-webpack-plugin
```

> 踩坑: webpack.common.config.js 的 module.rules 里面不能与 其他配置文件中出现重复,会报错