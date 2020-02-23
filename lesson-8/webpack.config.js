const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        output: './src/index.js'
    }, //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' //name->home or about or other
    },
    devServer: {
        open:true,
        contentBase: path.join(__dirname, "dist"),//output 路径
        compress: true,//
        port: 3000
        // ,hot:false
        //hot配置是否启用模块的热替换功能，
        //devServer的默认行为是在发现源代码被变更后，
        //通过自动刷新整个页面来做到事实预览，
        
        //而开启hot后，
        //将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    },
    // mode: "production",
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",//name->home
            chunkFilename: "[id].[hash].css"
        }),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('https://dev.example.com')
        }),
        // new HtmlWebpackPlugin()//base
        new HtmlWebpackPlugin({
            title: "Randy App",
            filename: "index.html",
            template: 'template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
            ,
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            ,
            {
                test: /\.scss$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}