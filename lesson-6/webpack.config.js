const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const webpack=require('webpack')

module.exports = {
    entry: {
        output: './src/index.js'
    }, //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' //name->home or about or other
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