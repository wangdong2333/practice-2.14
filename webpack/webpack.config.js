const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
       index: './src/index.js'

    },
    output : {
       path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },         
                template:'./src/index.html'            
        }),
        new ExtractTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        open:true
    },
    module:{
        rules:[
            {
                test :/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    }
}