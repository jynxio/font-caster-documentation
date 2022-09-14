const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

module.exports = {
    entry: "./source/index.js",
    plugins: [
        new MiniCssExtractPlugin( {
            filename: "css/[name].css"
        } ),
        new HtmlWebpackPlugin( {
            title: "practice-react",
            filename: "index.html",
            template: "./template/index.html",
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.md$/i,
                type: "asset/source",
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build"),
        clean: true,                               // 清除生成目录。
        pathinfo: false,                           // 提升构建性能：通过禁止为bundle生成模块的路径信息，以提高垃圾回收的性能，从而提高构建性能。
    },
};