const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
const port = process.env.PORT || 3000;

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
        headers: {
            "Content-Security-Policy":
                // eslint-disable-next-line max-len
                "default-src 'self' http://localhost:1337; connect-src 'self' http://localhost:1337;  font-src *; style-src *; img-src * data: content:; script-src-elem 'self' https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.min.js",
        },
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
