const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prodConfig = {
    mode: "production",
    module :{
        rules: [
            {
                use:"babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            }

        ]
    },
    optimization : {
        splitChunks : {
            chunks: "all",
            name: "mostDep.js"
        }
    },
    plugins : [ new MiniCssExtractPlugin()]
}

module.exports = merge(common, prodConfig);