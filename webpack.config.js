const path = require("path");
const openBrowser=require("open-browser-webpack-plugin");
const htmlPlugin= require("html-webpack-plugin");
const TsconfigPathsPlugin=require('tsconfig-paths-webpack-plugin')



module.exports = {
    // 指定构建环境
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx|tsx|ts)$/,
            use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(tsx|ts)$/,
                use: ["babel-loader","ts-loader"]
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            template: "./public/index.html"
        }),
        new TsconfigPathsPlugin({
            configFile: "./tsconfig.json"
        })
    ],
    devServer: {
        //基础路径
        contentBase:"./dist",
        host: '0.0.0.0',
        port:8081,
        progress:true,
    }
}