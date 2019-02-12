const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 4000
    }
})