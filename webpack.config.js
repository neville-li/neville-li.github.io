const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "development",
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader'
                  },
                ],
              }
        ]
    }
}