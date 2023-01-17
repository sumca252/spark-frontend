const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
const port = process.env.PORT || 3000;

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    plugins: [new dotenv()],
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
        historyApiFallback: {
            index: "index.html",
        },
        static: {
            directory: path.join(__dirname, "public"),
        },
        hot: true,
        compress: false,
    },

    watchOptions: {
        poll: 1000,
    },
};
