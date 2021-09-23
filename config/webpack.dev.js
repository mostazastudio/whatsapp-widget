const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer : {
        port:3000
    },
    module:{
        rules: [
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/,
              }
        ]
    }
}

module.exports = merge(common, devConfig);