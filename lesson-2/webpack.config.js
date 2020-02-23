const path = require('path')

module.exports = {
    entry: {
        output: './src/index.js'
    }, //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' //name->home or about or other
    },
    mode: "production",
    // mode:"development",
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
}