/**
 * Configuration file for development
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dotenv = require("dotenv-webpack");
const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new dotenv(),
    ],
    output: {
        filename: "dist/bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        port: port,
        open: true,
        host: "localhost",
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        hot: true,
        compress: false,
    },
};
