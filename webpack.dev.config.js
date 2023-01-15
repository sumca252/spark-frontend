const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");

const rules = [
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
];

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new dotenv(),
    ],
    output: {
        filename: "dist/bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
    },
    module: {
        rules: rules,
    },
};
