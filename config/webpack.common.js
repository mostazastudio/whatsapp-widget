const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration}*/
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "../dist"),
        filename:"[name].[contenthash].js",
        library:{
            name:"WhatsappWidget",
            type:"umd",
            export:"default",
            umdNamedDefine:true
        },
        publicPath: ""
    },
    module: {
        rules: [
          {
            use: "babel-loader",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
          }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
    
}