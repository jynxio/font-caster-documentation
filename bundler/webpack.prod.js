const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: false,
    optimization: {
        minimizer: [
            "...",                    // 压缩bundle的js。
            new CssMinimizerPlugin(), // 压缩bundle的css。
        ],
    },
});
