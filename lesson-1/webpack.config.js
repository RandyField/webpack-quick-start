const path=require('path')

module.exports={
    entry:{
        home:'./src/index.js'        
    }, //入口文件
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js' //name->home or about or other
    },
    mode:"development"
}